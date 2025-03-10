import fs from "fs";
import path from "path";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  createdAt: string;
}

const dataFilePath = path.join(process.cwd(), "app/data/gallery.json");

// Ensure the data file exists
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify({ images: [] }, null, 2));
}

export function getAllImages(): GalleryImage[] {
  const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  return data.images;
}

export function addImage(
  image: Omit<GalleryImage, "id" | "createdAt">
): GalleryImage {
  const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

  const newImage: GalleryImage = {
    ...image,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  data.images.push(newImage);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

  return newImage;
}
