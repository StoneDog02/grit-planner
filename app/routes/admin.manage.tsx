import React from "react";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { requireAdminUser } from "../utils/session.server";
import {
  getAllImages,
  updateImage,
  deleteImage,
  type GalleryImage,
} from "../models/gallery.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

interface ActionData {
  error?: string;
  success?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUser(request);
  const images = getAllImages();
  return json({ images });
};

export const action: ActionFunction = async ({ request }) => {
  await requireAdminUser(request);

  const formData = await request.formData();
  const action = formData.get("_action");

  if (action === "delete") {
    const imageId = formData.get("imageId") as string;
    if (!imageId) {
      return json({ error: "Image ID is required" }, { status: 400 });
    }

    const success = deleteImage(imageId);
    if (!success) {
      return json({ error: "Failed to delete image" }, { status: 400 });
    }

    return json({ success: "Image deleted successfully" });
  }

  if (action === "update") {
    const imageId = formData.get("imageId") as string;
    const category = formData.get("category") as string;
    const alt = formData.get("alt") as string;

    if (!imageId || !category || !alt) {
      return json(
        { error: "Image ID, category, and description are required" },
        { status: 400 }
      );
    }

    const updated = updateImage(imageId, { category, alt });
    if (!updated) {
      return json({ error: "Failed to update image" }, { status: 400 });
    }

    return json({ success: "Image updated successfully" });
  }

  return json({ error: "Invalid action" }, { status: 400 });
};

export default function ManageGallery() {
  const { images } = useLoaderData<{ images: GalleryImage[] }>();
  const actionData = useActionData<ActionData>();
  const [editingId, setEditingId] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Manage Gallery</h2>
          <p className="mt-2 text-sm text-gray-400">
            Edit or delete images from the gallery
          </p>
        </div>

        {actionData?.error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {actionData.error}
          </div>
        )}

        {actionData?.success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {actionData.success}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {editingId === image.id ? (
                <Form method="post" className="p-4">
                  <input type="hidden" name="imageId" value={image.id} />
                  <input type="hidden" name="_action" value="update" />

                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-300">
                      Category
                    </label>
                    <select
                      name="category"
                      defaultValue={image.category}
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white"
                      required
                    >
                      <option value="Framing">Framing</option>
                      <option value="Decking">Decking</option>
                      <option value="New Construction">New Construction</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-300">
                      Description
                    </label>
                    <input
                      type="text"
                      name="alt"
                      defaultValue={image.alt}
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white"
                      required
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              ) : (
                <div className="p-4">
                  <p className="text-white text-sm mb-1">{image.alt}</p>
                  <p className="text-red-500 text-xs mb-3">{image.category}</p>

                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setEditingId(image.id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                      Edit
                    </button>
                    <Form method="post" className="inline">
                      <input type="hidden" name="imageId" value={image.id} />
                      <input type="hidden" name="_action" value="delete" />
                      <button
                        type="submit"
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
                        onClick={(e) => {
                          if (
                            !confirm(
                              "Are you sure you want to delete this image?"
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                      >
                        Delete
                      </button>
                    </Form>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
