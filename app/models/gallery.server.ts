import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, AWS_BUCKET_NAME } from "../utils/s3.server";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  service: string;
  createdAt: string;
}

// In-memory cache
let galleryImages: GalleryImage[] = [];

const GALLERY_METADATA_KEY = "gallery-metadata.json";

// Helper function to load gallery data from S3
async function loadGalleryFromS3(): Promise<void> {
  try {
    const command = new GetObjectCommand({
      Bucket: AWS_BUCKET_NAME,
      Key: GALLERY_METADATA_KEY,
    });

    const response = await s3Client.send(command);
    const data = await response.Body?.transformToString();
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData && Array.isArray(parsedData.images)) {
        galleryImages = parsedData.images;
      }
    }
  } catch (error) {
    if ((error as any).name === "NoSuchKey") {
      // Initialize with empty array if file doesn't exist
      galleryImages = [];
      await saveGalleryToS3();
    } else {
      console.error("Error loading gallery data from S3:", error);
      throw error;
    }
  }
}

// Helper function to save gallery data to S3
async function saveGalleryToS3(): Promise<void> {
  try {
    const command = new PutObjectCommand({
      Bucket: AWS_BUCKET_NAME,
      Key: GALLERY_METADATA_KEY,
      Body: JSON.stringify({ images: galleryImages }, null, 2),
      ContentType: "application/json",
    });

    await s3Client.send(command);
  } catch (error) {
    console.error("Error saving gallery data to S3:", error);
    throw error;
  }
}

// Initialize data
loadGalleryFromS3().catch(console.error);

export async function getAllImages(): Promise<GalleryImage[]> {
  // Refresh data from S3 before returning
  await loadGalleryFromS3();
  return galleryImages;
}

export function getImageById(id: string): GalleryImage | undefined {
  return galleryImages.find((img) => img.id === id);
}

export async function addImage(
  image: Omit<GalleryImage, "id" | "createdAt">
): Promise<GalleryImage> {
  const newImage: GalleryImage = {
    ...image,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  galleryImages.push(newImage);
  await saveGalleryToS3();
  return newImage;
}

export async function updateImage(
  id: string,
  updates: Partial<Pick<GalleryImage, "alt" | "category" | "service">>
): Promise<GalleryImage | null> {
  const index = galleryImages.findIndex((img) => img.id === id);
  if (index === -1) return null;

  galleryImages[index] = {
    ...galleryImages[index],
    ...updates,
  };

  await saveGalleryToS3();
  return galleryImages[index];
}

export async function deleteImage(id: string): Promise<boolean> {
  const initialLength = galleryImages.length;
  galleryImages = galleryImages.filter((img) => img.id !== id);
  const wasDeleted = galleryImages.length !== initialLength;

  if (wasDeleted) {
    await saveGalleryToS3();
  }

  return wasDeleted;
}
