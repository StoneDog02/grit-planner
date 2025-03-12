import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllImages, type GalleryImage } from "../models/gallery.server";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const images = await getAllImages();
  return json({ images });
};

export default function Gallery() {
  const { images } = useLoaderData<{ images: GalleryImage[] }>();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = ["all", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse through our portfolio of completed projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500">
              No images found in this category
            </div>
          ) : (
            filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm">{image.alt}</p>
                    <span className="text-red-400 text-xs mt-1 block">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
