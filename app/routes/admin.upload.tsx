import React from "react";
import { json } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import { requireAdminUser } from "../utils/session.server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, AWS_BUCKET_NAME, AWS_REGION } from "../utils/s3.server";
import { addImage } from "../models/gallery.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import sharp from "sharp";

interface ActionData {
  error?: string;
  success?: boolean;
  imageUrl?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  // This will redirect to login if not authenticated
  await requireAdminUser(request);
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  await requireAdminUser(request);

  const formData = await request.formData();
  const image = formData.get("image") as File;
  const category = formData.get("category") as string;
  const alt = formData.get("alt") as string;

  console.log("Upload attempt:", {
    hasImage: !!image,
    imageType: image?.type,
    imageName: image?.name,
    imageSize: image?.size,
    category,
    alt,
  });

  if (!image || !category || !alt) {
    return json(
      { error: "Image, category, and description are required" },
      { status: 400 }
    );
  }

  try {
    // Process the image on the server side
    console.log("Processing image...");
    const buffer = Buffer.from(await image.arrayBuffer());
    let processedImage = buffer;

    if (sharp) {
      console.log("Resizing image with sharp...");
      processedImage = await sharp(buffer)
        .resize(1200, 800, { fit: "inside" })
        .jpeg({ quality: 80 })
        .toBuffer();
    }

    // Upload to S3
    const filename = `${Date.now()}-${image.name}`;
    console.log("Attempting S3 upload:", {
      bucket: AWS_BUCKET_NAME,
      region: AWS_REGION,
      filename,
      imageSize: processedImage.length,
    });

    await s3Client.send(
      new PutObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: filename,
        Body: processedImage,
        ContentType: "image/jpeg",
      })
    );

    const imageUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${filename}`;
    console.log("Upload successful:", { imageUrl });

    // Save image metadata to our gallery data
    const savedImage = await addImage({
      src: imageUrl,
      alt,
      category,
    });

    console.log("Image metadata saved:", savedImage);

    return json({ success: true, imageUrl });
  } catch (error) {
    console.error("Upload error details:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    });

    return json(
      { error: "Failed to upload image. Please try again." },
      { status: 500 }
    );
  }
};

export default function AdminUpload() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Upload Image</h2>
          <p className="mt-2 text-sm text-gray-400">
            Add new images to the gallery
          </p>
          <Link
            to="/admin/manage"
            className="inline-block mt-2 text-red-500 hover:text-red-400"
          >
            Manage existing images →
          </Link>
        </div>

        <Form
          method="post"
          className="mt-8 space-y-6"
          encType="multipart/form-data"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-white"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
                className="mt-1 block w-full text-sm text-gray-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-red-600 file:text-white
                hover:file:bg-red-700"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-white"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              >
                <option value="">Select a category</option>
                <option value="Framing">Framing</option>
                <option value="Decking">Decking</option>
                <option value="New Construction">New Construction</option>
                <option value="Renovation">Renovation</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="alt"
                className="block text-sm font-medium text-white"
              >
                Description
              </label>
              <input
                type="text"
                id="alt"
                name="alt"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Brief description of the image"
              />
            </div>
          </div>

          {actionData?.error && (
            <div className="text-red-500 text-sm">{actionData.error}</div>
          )}

          {actionData?.success && (
            <div className="text-green-500 text-sm">
              Image uploaded successfully!
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Upload
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
