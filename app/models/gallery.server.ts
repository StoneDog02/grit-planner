export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  createdAt: string;
}

// In-memory storage for development
let galleryImages: GalleryImage[] = [];

export function getAllImages(): GalleryImage[] {
  return galleryImages;
}

export function getImageById(id: string): GalleryImage | undefined {
  return galleryImages.find((img) => img.id === id);
}

export function addImage(
  image: Omit<GalleryImage, "id" | "createdAt">
): GalleryImage {
  const newImage: GalleryImage = {
    ...image,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  galleryImages.push(newImage);
  return newImage;
}

export function updateImage(
  id: string,
  updates: Partial<Pick<GalleryImage, "alt" | "category">>
): GalleryImage | null {
  const index = galleryImages.findIndex((img) => img.id === id);
  if (index === -1) return null;

  galleryImages[index] = {
    ...galleryImages[index],
    ...updates,
  };

  return galleryImages[index];
}

export function deleteImage(id: string): boolean {
  const initialLength = galleryImages.length;
  galleryImages = galleryImages.filter((img) => img.id !== id);
  return galleryImages.length !== initialLength;
}

// Initialize with any existing data
try {
  const existingData = require("../data/gallery.json");
  if (existingData && Array.isArray(existingData.images)) {
    galleryImages = existingData.images;
  }
} catch (error) {
  console.log("No existing gallery data found");
}
