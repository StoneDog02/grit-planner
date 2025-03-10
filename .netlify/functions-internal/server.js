var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/data/gallery.json
var require_gallery = __commonJS({
  "app/data/gallery.json"(exports, module) {
    module.exports = {
      images: [
        {
          src: "https://grit-construction-gallery.s3.us-east-2.amazonaws.com/1741399400248-Air_Compressors_and_Tools.webp",
          alt: "Air Compressor Tool",
          category: "Framing",
          id: "1741399401252",
          createdAt: "2025-03-08T02:03:21.252Z"
        }
      ]
    };
  }
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles.css
var styles_default = "/build/_assets/styles-TNDSOALS.css";

// app/components/Layout.tsx
import { Link, useLocation } from "@remix-run/react";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function Layout({ children }) {
  let location = useLocation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsx2("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx2("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx2("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsx2(Link, { to: "/", className: "text-2xl font-bold text-gray-900", children: "GRIT" }) }),
      /* @__PURE__ */ jsx2("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Request Bid", href: "/request-bid" },
        { name: "Contact", href: "/contact" }
      ].map((item) => {
        let isActive = item.href === "/" && location.pathname === "/" || item.href !== "/" && location.pathname.startsWith(item.href);
        return /* @__PURE__ */ jsx2(
          Link,
          {
            to: item.href,
            className: `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive ? "border-red-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`,
            children: item.name
          },
          item.name
        );
      }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsx2("main", { children })
  ] });
}

// app/root.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var links = () => [{ rel: "stylesheet", href: styles_default }], loader = () => (console.log("Root loader called"), null);
function App() {
  return console.log("Root component rendered"), /* @__PURE__ */ jsxs2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs2("head", { children: [
      /* @__PURE__ */ jsx3("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx3(Meta, {}),
      /* @__PURE__ */ jsx3(Links, {})
    ] }),
    /* @__PURE__ */ jsxs2("body", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsx3(Layout, { children: /* @__PURE__ */ jsx3(Outlet, {}) }),
      /* @__PURE__ */ jsx3("footer", { className: "bg-white", children: /* @__PURE__ */ jsx3("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs2("p", { className: "text-center text-black", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Grit Construction. All rights reserved."
      ] }) }) }),
      /* @__PURE__ */ jsx3(ScrollRestoration, {}),
      /* @__PURE__ */ jsx3(Scripts, {}),
      /* @__PURE__ */ jsx3(LiveReload, {})
    ] })
  ] });
}

// app/routes/admin.manage.tsx
var admin_manage_exports = {};
__export(admin_manage_exports, {
  action: () => action,
  default: () => ManageGallery,
  loader: () => loader2
});
import React from "react";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";

// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = createCookieSessionStorage({
  cookie: {
    name: "GRIT_admin_session",
    secure: !0,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    // 30 days
    httpOnly: !0
  }
});
async function createUserSession({
  username,
  redirectTo
}) {
  let session = await storage.getSession();
  return session.set("username", username), redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function requireAdminUser(request) {
  let username = (await getUserSession(request)).get("username");
  if (!username || username !== process.env.ADMIN_USERNAME)
    throw redirect("/admin/login");
  return username;
}
async function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}

// app/models/gallery.server.ts
var galleryImages = [];
function getAllImages() {
  return galleryImages;
}
function addImage(image) {
  let newImage = {
    ...image,
    id: Date.now().toString(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  return galleryImages.push(newImage), newImage;
}
function updateImage(id, updates) {
  let index = galleryImages.findIndex((img) => img.id === id);
  return index === -1 ? null : (galleryImages[index] = {
    ...galleryImages[index],
    ...updates
  }, galleryImages[index]);
}
function deleteImage(id) {
  let initialLength = galleryImages.length;
  return galleryImages = galleryImages.filter((img) => img.id !== id), galleryImages.length !== initialLength;
}
try {
  let existingData = require_gallery();
  existingData && Array.isArray(existingData.images) && (galleryImages = existingData.images);
} catch {
  console.log("No existing gallery data found");
}

// app/routes/admin.manage.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var loader2 = async ({ request }) => {
  await requireAdminUser(request);
  let images = getAllImages();
  return json({ images });
}, action = async ({ request }) => {
  await requireAdminUser(request);
  let formData = await request.formData(), action6 = formData.get("_action");
  if (action6 === "delete") {
    let imageId = formData.get("imageId");
    return imageId ? deleteImage(imageId) ? json({ success: "Image deleted successfully" }) : json({ error: "Failed to delete image" }, { status: 400 }) : json({ error: "Image ID is required" }, { status: 400 });
  }
  if (action6 === "update") {
    let imageId = formData.get("imageId"), category = formData.get("category"), alt = formData.get("alt");
    return !imageId || !category || !alt ? json(
      { error: "Image ID, category, and description are required" },
      { status: 400 }
    ) : updateImage(imageId, { category, alt }) ? json({ success: "Image updated successfully" }) : json({ error: "Failed to update image" }, { status: 400 });
  }
  return json({ error: "Invalid action" }, { status: 400 });
};
function ManageGallery() {
  let { images } = useLoaderData(), actionData = useActionData(), [editingId, setEditingId] = React.useState(null);
  return /* @__PURE__ */ jsx4("div", { className: "min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs3("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs3("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx4("h2", { className: "text-3xl font-extrabold text-white", children: "Manage Gallery" }),
      /* @__PURE__ */ jsx4("p", { className: "mt-2 text-sm text-gray-400", children: "Edit or delete images from the gallery" })
    ] }),
    actionData?.error && /* @__PURE__ */ jsx4("div", { className: "mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded", children: actionData.error }),
    actionData?.success && /* @__PURE__ */ jsx4("div", { className: "mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded", children: actionData.success }),
    /* @__PURE__ */ jsx4("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: images.map((image) => /* @__PURE__ */ jsxs3(
      "div",
      {
        className: "bg-gray-900 rounded-lg overflow-hidden shadow-lg",
        children: [
          /* @__PURE__ */ jsx4("div", { className: "aspect-w-16 aspect-h-9", children: /* @__PURE__ */ jsx4(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "w-full h-full object-cover"
            }
          ) }),
          editingId === image.id ? /* @__PURE__ */ jsxs3(Form, { method: "post", className: "p-4", children: [
            /* @__PURE__ */ jsx4("input", { type: "hidden", name: "imageId", value: image.id }),
            /* @__PURE__ */ jsx4("input", { type: "hidden", name: "_action", value: "update" }),
            /* @__PURE__ */ jsxs3("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx4("label", { className: "block text-sm font-medium text-gray-300", children: "Category" }),
              /* @__PURE__ */ jsxs3(
                "select",
                {
                  name: "category",
                  defaultValue: image.category,
                  className: "mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white",
                  required: !0,
                  children: [
                    /* @__PURE__ */ jsx4("option", { value: "Framing", children: "Framing" }),
                    /* @__PURE__ */ jsx4("option", { value: "Decking", children: "Decking" }),
                    /* @__PURE__ */ jsx4("option", { value: "New Construction", children: "New Construction" }),
                    /* @__PURE__ */ jsx4("option", { value: "Renovation", children: "Renovation" }),
                    /* @__PURE__ */ jsx4("option", { value: "Commercial", children: "Commercial" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs3("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx4("label", { className: "block text-sm font-medium text-gray-300", children: "Description" }),
              /* @__PURE__ */ jsx4(
                "input",
                {
                  type: "text",
                  name: "alt",
                  defaultValue: image.alt,
                  className: "mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ jsxs3("div", { className: "flex justify-end space-x-2", children: [
              /* @__PURE__ */ jsx4(
                "button",
                {
                  type: "button",
                  onClick: () => setEditingId(null),
                  className: "px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx4(
                "button",
                {
                  type: "submit",
                  className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500",
                  children: "Save"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxs3("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx4("p", { className: "text-white text-sm mb-1", children: image.alt }),
            /* @__PURE__ */ jsx4("p", { className: "text-red-500 text-xs mb-3", children: image.category }),
            /* @__PURE__ */ jsxs3("div", { className: "flex justify-end space-x-2", children: [
              /* @__PURE__ */ jsx4(
                "button",
                {
                  onClick: () => setEditingId(image.id),
                  className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500",
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ jsxs3(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ jsx4("input", { type: "hidden", name: "imageId", value: image.id }),
                /* @__PURE__ */ jsx4("input", { type: "hidden", name: "_action", value: "delete" }),
                /* @__PURE__ */ jsx4(
                  "button",
                  {
                    type: "submit",
                    className: "px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500",
                    onClick: (e) => {
                      confirm(
                        "Are you sure you want to delete this image?"
                      ) || e.preventDefault();
                    },
                    children: "Delete"
                  }
                )
              ] })
            ] })
          ] })
        ]
      },
      image.id
    )) })
  ] }) });
}

// app/routes/admin.upload.tsx
var admin_upload_exports = {};
__export(admin_upload_exports, {
  action: () => action2,
  default: () => AdminUpload,
  loader: () => loader3
});
import { json as json2 } from "@remix-run/node";
import { Form as Form2, useActionData as useActionData2, Link as Link2 } from "@remix-run/react";
import { PutObjectCommand as PutObjectCommand2 } from "@aws-sdk/client-s3";

// app/utils/s3.server.ts
import { S3Client } from "@aws-sdk/client-s3";
console.log("S3 Configuration Check:", {
  hasRegion: !!process.env.AWS_REGION,
  hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
  hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
  hasBucketName: !!process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
  bucketName: process.env.AWS_BUCKET_NAME
});
if (!process.env.AWS_REGION)
  throw new Error("AWS_REGION is not configured");
if (!process.env.AWS_ACCESS_KEY_ID)
  throw new Error("AWS_ACCESS_KEY_ID is not configured");
if (!process.env.AWS_SECRET_ACCESS_KEY)
  throw new Error("AWS_SECRET_ACCESS_KEY is not configured");
if (!process.env.AWS_BUCKET_NAME)
  throw new Error("AWS_BUCKET_NAME is not configured");
var s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});
s3Client.config.credentials().then(
  (creds) => {
    console.log("S3 client configured successfully");
  },
  (error) => {
    console.error("S3 client configuration error:", error);
  }
);
var AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME, AWS_REGION = process.env.AWS_REGION;

// app/routes/admin.upload.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var loader3 = async ({ request }) => (await requireAdminUser(request), json2({})), sharp = null;
typeof window > "u" && import("sharp").then((sharpModule) => {
  sharp = sharpModule.default;
});
var action2 = async ({ request }) => {
  await requireAdminUser(request);
  let formData = await request.formData(), image = formData.get("image"), category = formData.get("category"), alt = formData.get("alt");
  if (console.log("Upload attempt:", {
    hasImage: !!image,
    imageType: image?.type,
    imageName: image?.name,
    imageSize: image?.size,
    category,
    alt
  }), !image || !category || !alt)
    return json2(
      { error: "Image, category, and description are required" },
      { status: 400 }
    );
  try {
    console.log("Processing image...");
    let buffer = Buffer.from(await image.arrayBuffer()), processedImage = buffer;
    sharp && (console.log("Resizing image with sharp..."), processedImage = await sharp(buffer).resize(1200, 800, { fit: "inside" }).jpeg({ quality: 80 }).toBuffer());
    let filename = `${Date.now()}-${image.name}`;
    console.log("Attempting S3 upload:", {
      bucket: AWS_BUCKET_NAME,
      region: AWS_REGION,
      filename,
      imageSize: processedImage.length
    }), await s3Client.send(
      new PutObjectCommand2({
        Bucket: AWS_BUCKET_NAME,
        Key: filename,
        Body: processedImage,
        ContentType: "image/jpeg"
      })
    );
    let imageUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${filename}`;
    console.log("Upload successful:", { imageUrl });
    let savedImage = addImage({
      src: imageUrl,
      alt,
      category
    });
    return console.log("Image metadata saved:", savedImage), json2({ success: !0, imageUrl });
  } catch (error) {
    return console.error("Upload error details:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      name: error instanceof Error ? error.name : void 0
    }), json2(
      { error: "Failed to upload image. Please try again." },
      { status: 500 }
    );
  }
};
function AdminUpload() {
  let actionData = useActionData2();
  return /* @__PURE__ */ jsx5("div", { className: "min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs4("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs4("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx5("h2", { className: "text-3xl font-extrabold text-white", children: "Upload Image" }),
      /* @__PURE__ */ jsx5("p", { className: "mt-2 text-sm text-gray-400", children: "Add new images to the gallery" }),
      /* @__PURE__ */ jsx5(
        Link2,
        {
          to: "/admin/manage",
          className: "inline-block mt-2 text-red-500 hover:text-red-400",
          children: "Manage existing images \u2192"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs4(
      Form2,
      {
        method: "post",
        className: "mt-8 space-y-6",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsxs4("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5(
                "label",
                {
                  htmlFor: "image",
                  className: "block text-sm font-medium text-white",
                  children: "Image"
                }
              ),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  type: "file",
                  id: "image",
                  name: "image",
                  accept: "image/*",
                  required: !0,
                  className: `mt-1 block w-full text-sm text-gray-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-red-600 file:text-white
                hover:file:bg-red-700`
                }
              )
            ] }),
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5(
                "label",
                {
                  htmlFor: "category",
                  className: "block text-sm font-medium text-white",
                  children: "Category"
                }
              ),
              /* @__PURE__ */ jsxs4(
                "select",
                {
                  id: "category",
                  name: "category",
                  required: !0,
                  className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",
                  children: [
                    /* @__PURE__ */ jsx5("option", { value: "", children: "Select a category" }),
                    /* @__PURE__ */ jsx5("option", { value: "Framing", children: "Framing" }),
                    /* @__PURE__ */ jsx5("option", { value: "Decking", children: "Decking" }),
                    /* @__PURE__ */ jsx5("option", { value: "New Construction", children: "New Construction" }),
                    /* @__PURE__ */ jsx5("option", { value: "Renovation", children: "Renovation" }),
                    /* @__PURE__ */ jsx5("option", { value: "Commercial", children: "Commercial" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5(
                "label",
                {
                  htmlFor: "alt",
                  className: "block text-sm font-medium text-white",
                  children: "Description"
                }
              ),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  type: "text",
                  id: "alt",
                  name: "alt",
                  required: !0,
                  className: "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm",
                  placeholder: "Brief description of the image"
                }
              )
            ] })
          ] }),
          actionData?.error && /* @__PURE__ */ jsx5("div", { className: "text-red-500 text-sm", children: actionData.error }),
          actionData?.success && /* @__PURE__ */ jsx5("div", { className: "text-green-500 text-sm", children: "Image uploaded successfully!" }),
          /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsx5(
            "button",
            {
              type: "submit",
              className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              children: "Upload"
            }
          ) })
        ]
      }
    )
  ] }) });
}

// app/routes/admin.login.tsx
var admin_login_exports = {};
__export(admin_login_exports, {
  action: () => action3,
  default: () => AdminLogin,
  loader: () => loader4
});
import { json as json3, redirect as redirect3 } from "@remix-run/node";
import { Form as Form3, useActionData as useActionData3 } from "@remix-run/react";
import bcrypt from "bcryptjs";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var loader4 = async ({ request }) => (console.log("Login page loaded - TESTING"), (await getUserSession(request)).get("username") === process.env.ADMIN_USERNAME ? redirect3("/admin/upload") : json3({ message: "Login page loaded" })), action3 = async ({ request }) => {
  console.log(`
=== Login Attempt Started - IMMEDIATE LOG ===`), request.method === "POST" && console.log("POST request received");
  let formData = await request.formData(), username = formData.get("username"), password = formData.get("password");
  console.log("Form data received:", {
    username: username?.toString(),
    passwordLength: password ? password.toString().length : 0
  });
  let ADMIN_USERNAME = process.env.ADMIN_USERNAME, ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
  if (console.log("Environment variables:", {
    ADMIN_USERNAME,
    ADMIN_PASSWORD_HASH,
    envUsernameLength: ADMIN_USERNAME?.length,
    envHashLength: ADMIN_PASSWORD_HASH?.length
  }), !ADMIN_USERNAME || !ADMIN_PASSWORD_HASH)
    return console.error("Missing admin credentials in environment"), json3({ error: "Server configuration error" }, { status: 500 });
  if (!username || !password)
    return console.log("Missing username or password in request"), json3(
      { error: "Username and password are required" },
      { status: 400 }
    );
  let usernameMatches = username === ADMIN_USERNAME;
  if (console.log("Username check:", {
    provided: username,
    expected: ADMIN_USERNAME,
    matches: usernameMatches
  }), !usernameMatches)
    return console.log("Username mismatch"), json3({ error: "Invalid credentials" }, { status: 401 });
  try {
    console.log("Attempting password verification...");
    let passwordMatch = await bcrypt.compare(
      password.toString(),
      ADMIN_PASSWORD_HASH
    );
    return console.log("Password check result:", {
      matches: passwordMatch
    }), passwordMatch ? (console.log("Login successful, creating session..."), createUserSession({
      username: username.toString(),
      redirectTo: "/admin/upload"
    })) : json3({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return console.error("Password verification error:", error), json3({ error: "An error occurred during login" }, { status: 500 });
  }
};
function AdminLogin() {
  let actionData = useActionData3();
  return /* @__PURE__ */ jsx6("div", { className: "min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6("h2", { className: "mt-6 text-center text-3xl font-extrabold text-white", children: "Admin Login" }) }),
    /* @__PURE__ */ jsxs5(Form3, { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ jsxs5("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx6("label", { htmlFor: "username", className: "sr-only", children: "Username" }),
          /* @__PURE__ */ jsx6(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",
              placeholder: "Username"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx6("label", { htmlFor: "password", className: "sr-only", children: "Password" }),
          /* @__PURE__ */ jsx6(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",
              placeholder: "Password"
            }
          )
        ] })
      ] }),
      actionData?.error && /* @__PURE__ */ jsx6("div", { className: "text-red-500 text-sm", children: actionData.error }),
      /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
          children: "Sign in"
        }
      ) })
    ] })
  ] }) });
}

// app/routes/request-bid.tsx
var request_bid_exports = {};
__export(request_bid_exports, {
  action: () => action4,
  default: () => RequestBid
});
import { json as json4 } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Resend } from "resend";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var action4 = async ({ request }) => {
  let resend = new Resend(process.env.RESEND_API_KEY), formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), phone = formData.get("phone"), contactPreference = formData.get("contactPreference"), projectType = formData.get("projectType"), projectDescription = formData.get("projectDescription"), timeline = formData.get("timeline");
  if (!name || !email || !phone || !contactPreference || !projectType || !projectDescription || !timeline || typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof contactPreference != "string" || typeof projectType != "string" || typeof projectDescription != "string" || typeof timeline != "string")
    return json4(
      { success: !1, error: "All fields are required and must be valid." },
      { status: 400 }
    );
  let data = {
    name,
    email,
    phone,
    contactPreference,
    projectType,
    projectDescription,
    timeline
  };
  try {
    let { data: resendData, error } = await resend.emails.send({
      from: "Grit Construction <onboarding@resend.dev>",
      to: ["stoney.harward@gmail.com"],
      subject: `New Bid Request from ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,
      html: `
        <h2>New Bid Request</h2>
        <p><strong>Name:</strong> ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
        <p><strong>Email:</strong> ${data.email.toLowerCase()}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${data.contactPreference.charAt(0).toUpperCase() + data.contactPreference.slice(1)}</p>
        <p><strong>Project Type:</strong> ${data.projectType.charAt(0).toUpperCase() + data.projectType.slice(1)}</p>
        <p><strong>Project Description:</strong> ${data.projectDescription.charAt(0).toUpperCase() + data.projectDescription.slice(1)}</p>
        <p><strong>Desired Timeline:</strong> ${data.timeline.charAt(0).toUpperCase() + data.timeline.slice(1)}</p>
      `
    });
    return error ? json4(
      {
        success: !1,
        error: `Failed to send email: ${error.message}`
      },
      { status: 500 }
    ) : json4(
      {
        success: !0,
        message: "Request sent successfully!"
      },
      { status: 200 }
    );
  } catch (error) {
    return json4(
      {
        success: !1,
        error: error instanceof Error ? error.message : "Failed to submit bid request. Please try again."
      },
      { status: 500 }
    );
  }
};
function RequestBid() {
  let fetcher = useFetcher(), [showSuccess, setShowSuccess] = useState(!1), [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactPreference: "email",
    projectType: "",
    projectDescription: "",
    timeline: ""
  });
  useEffect(() => {
    if (fetcher.data?.success) {
      setShowSuccess(!0), setFormData({
        name: "",
        email: "",
        phone: "",
        contactPreference: "email",
        projectType: "",
        projectDescription: "",
        timeline: ""
      }), window.scrollTo({ top: 0, behavior: "smooth" });
      let timer = setTimeout(() => {
        setShowSuccess(!1);
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [fetcher.data]);
  let handleSubmit = (e) => {
    e.preventDefault();
    let formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    }), fetcher.submit(formDataToSubmit, {
      method: "post",
      action: "/request-bid"
    });
  }, handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: "min-h-screen bg-cover bg-center bg-no-repeat relative py-12",
      style: {
        backgroundImage: "url('https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg')"
      },
      children: [
        /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 bg-black bg-opacity-50" }),
        /* @__PURE__ */ jsx7(
          "div",
          {
            className: `fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ${showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`,
            children: /* @__PURE__ */ jsxs6("div", { className: "bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl flex items-center text-sm font-medium", children: [
              /* @__PURE__ */ jsx7(
                "svg",
                {
                  className: "w-4 h-4 mr-1.5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx7(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7"
                    }
                  )
                }
              ),
              fetcher.data?.message || "Request Sent Successfully!"
            ] })
          }
        ),
        /* @__PURE__ */ jsx7("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs6("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxs6("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx7("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Request a Bid" }),
            /* @__PURE__ */ jsx7("p", { className: "mt-4 text-lg text-white", children: "Fill out the form below and we'll get back to you with a detailed quote for your project." })
          ] }),
          fetcher.data?.error && /* @__PURE__ */ jsx7("div", { className: "mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded", children: fetcher.data.error }),
          /* @__PURE__ */ jsx7("div", { className: "mt-12", children: /* @__PURE__ */ jsxs6(
            fetcher.Form,
            {
              method: "post",
              onSubmit: handleSubmit,
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7(
                    "label",
                    {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-white",
                      children: "Name"
                    }
                  ),
                  /* @__PURE__ */ jsx7(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      id: "name",
                      required: !0,
                      value: formData.name,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-white",
                      children: "Email"
                    }
                  ),
                  /* @__PURE__ */ jsx7(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      id: "email",
                      required: !0,
                      value: formData.email,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7(
                    "label",
                    {
                      htmlFor: "phone",
                      className: "block text-sm font-medium text-white",
                      children: "Phone"
                    }
                  ),
                  /* @__PURE__ */ jsx7(
                    "input",
                    {
                      type: "tel",
                      name: "phone",
                      id: "phone",
                      required: !0,
                      value: formData.phone,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7("label", { className: "block text-sm font-medium text-white mb-2", children: "Preferred Contact Method" }),
                  /* @__PURE__ */ jsxs6("div", { className: "flex space-x-6", children: [
                    /* @__PURE__ */ jsxs6("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "radio",
                          id: "email-preference",
                          name: "contactPreference",
                          value: "email",
                          checked: formData.contactPreference === "email",
                          onChange: handleChange,
                          className: "h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 accent-red-600"
                        }
                      ),
                      /* @__PURE__ */ jsx7(
                        "label",
                        {
                          htmlFor: "email-preference",
                          className: "ml-2 text-sm text-white",
                          children: "Email"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs6("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsx7(
                        "input",
                        {
                          type: "radio",
                          id: "phone-preference",
                          name: "contactPreference",
                          value: "phone",
                          checked: formData.contactPreference === "phone",
                          onChange: handleChange,
                          className: "h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 accent-red-600"
                        }
                      ),
                      /* @__PURE__ */ jsx7(
                        "label",
                        {
                          htmlFor: "phone-preference",
                          className: "ml-2 text-sm text-white",
                          children: "Phone"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7(
                    "label",
                    {
                      htmlFor: "projectType",
                      className: "block text-sm font-medium text-white",
                      children: "Project Type"
                    }
                  ),
                  /* @__PURE__ */ jsxs6(
                    "select",
                    {
                      name: "projectType",
                      id: "projectType",
                      required: !0,
                      value: formData.projectType,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",
                      children: [
                        /* @__PURE__ */ jsx7("option", { value: "", children: "Select a project type" }),
                        /* @__PURE__ */ jsx7("option", { value: "residential", children: "Residential" }),
                        /* @__PURE__ */ jsx7("option", { value: "commercial", children: "Commercial" }),
                        /* @__PURE__ */ jsx7("option", { value: "renovation", children: "Renovation" }),
                        /* @__PURE__ */ jsx7("option", { value: "new-construction", children: "New Construction" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7(
                    "label",
                    {
                      htmlFor: "projectDescription",
                      className: "block text-sm font-medium text-white",
                      children: "Project Description"
                    }
                  ),
                  /* @__PURE__ */ jsx7(
                    "textarea",
                    {
                      name: "projectDescription",
                      id: "projectDescription",
                      rows: 4,
                      required: !0,
                      value: formData.projectDescription,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs6("div", { children: [
                  /* @__PURE__ */ jsx7(
                    "label",
                    {
                      htmlFor: "timeline",
                      className: "block text-sm font-medium text-white",
                      children: "Desired Timeline"
                    }
                  ),
                  /* @__PURE__ */ jsx7(
                    "input",
                    {
                      type: "text",
                      name: "timeline",
                      id: "timeline",
                      placeholder: "e.g., ASAP, 3 months, etc.",
                      required: !0,
                      value: formData.timeline,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx7("div", { children: /* @__PURE__ */ jsx7(
                  "button",
                  {
                    type: "submit",
                    disabled: fetcher.state !== "idle",
                    className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${fetcher.state !== "idle" ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}`,
                    children: fetcher.state !== "idle" ? /* @__PURE__ */ jsxs6("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxs6(
                        "svg",
                        {
                          className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                            /* @__PURE__ */ jsx7(
                              "circle",
                              {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                              }
                            ),
                            /* @__PURE__ */ jsx7(
                              "path",
                              {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              }
                            )
                          ]
                        }
                      ),
                      "Submitting..."
                    ] }) : "Submit Request"
                  }
                ) })
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
}

// app/routes/admin.test.tsx
var admin_test_exports = {};
__export(admin_test_exports, {
  action: () => action5,
  default: () => AdminTest,
  loader: () => loader5
});
import { json as json5 } from "@remix-run/node";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var loader5 = () => (console.log("Test route loaded"), json5({ message: "Test route loaded" })), action5 = async ({ request }) => (console.log("Test route action called"), json5({ message: "Test action called" }));
function AdminTest() {
  return /* @__PURE__ */ jsxs7("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx8("h1", { children: "Test Route" }),
    /* @__PURE__ */ jsx8("form", { method: "post", children: /* @__PURE__ */ jsx8("button", { type: "submit", children: "Test Post" }) })
  ] });
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services,
  meta: () => meta
});
import { Link as Link3 } from "@remix-run/react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var meta = () => [
  { title: "Our Services - Grit Construction" },
  {
    name: "description",
    content: "Professional general contracting and framing services for residential and commercial projects."
  }
], services = [
  {
    title: "General Contracting",
    description: "Full-service general contracting for residential and commercial projects. We manage every aspect of your construction project from start to finish.",
    icon: /* @__PURE__ */ jsx9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsx9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          }
        )
      }
    )
  },
  {
    title: "Framing",
    description: "Expert framing services for new construction and renovations. We ensure structural integrity and precision in every project.",
    icon: /* @__PURE__ */ jsx9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsx9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 10h16M4 14h16M4 18h16"
          }
        )
      }
    )
  },
  {
    title: "Project Management",
    description: "Comprehensive project management services to keep your construction project on time and within budget.",
    icon: /* @__PURE__ */ jsx9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsx9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          }
        )
      }
    )
  },
  {
    title: "Custom Solutions",
    description: "Tailored construction solutions to meet your specific needs and requirements.",
    icon: /* @__PURE__ */ jsx9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsx9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          }
        )
      }
    )
  }
];
function Services() {
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: "min-h-screen bg-cover bg-center bg-no-repeat relative",
      style: {
        backgroundImage: "url('https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg')"
      },
      children: [
        /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 bg-black bg-opacity-50" }),
        /* @__PURE__ */ jsxs8("div", { className: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs8("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx9("h2", { className: "text-base text-red-600 font-semibold tracking-wide uppercase", children: "Our Services" }),
            /* @__PURE__ */ jsx9("p", { className: "mt-2 text-3xl font-extrabold text-white sm:text-4xl", children: "Professional Construction Services" }),
            /* @__PURE__ */ jsx9("p", { className: "mt-4 max-w-2xl text-xl text-white mx-auto", children: "We provide comprehensive construction services for both residential and commercial projects." })
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "mt-20", children: /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2", children: services.map((service) => /* @__PURE__ */ jsx9("div", { className: "relative", children: /* @__PURE__ */ jsxs8("div", { className: "relative bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx9("div", { className: "absolute top-0 left-0 -mt-4 -ml-4", children: /* @__PURE__ */ jsx9("div", { className: "flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white", children: service.icon }) }),
            /* @__PURE__ */ jsx9("h3", { className: "text-lg font-medium text-black", children: service.title }),
            /* @__PURE__ */ jsx9("p", { className: "mt-2 text-base text-black", children: service.description })
          ] }) }, service.title)) }) }),
          /* @__PURE__ */ jsx9("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx9(
            Link3,
            {
              to: "/request-bid",
              className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              children: "Request a Bid"
            }
          ) })
        ] })
      ]
    }
  );
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
  meta: () => meta2
});
import { Form as Form4 } from "@remix-run/react";
import { useState as useState2 } from "react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "Contact Us - Grit Construction" },
  {
    name: "description",
    content: "Get in touch with Grit Construction for your construction needs."
  }
];
function Contact() {
  let [formData, setFormData] = useState2({
    name: "",
    email: "",
    phone: "",
    message: ""
  }), handleSubmit = async (event) => {
    event.preventDefault(), console.log("Form submitted:", formData);
  }, handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return /* @__PURE__ */ jsx10("div", { className: "bg-white", children: /* @__PURE__ */ jsx10("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs9("div", { className: "max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8", children: [
    /* @__PURE__ */ jsxs9("div", { children: [
      /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-extrabold text-gray-900 sm:text-3xl", children: "Contact Information" }),
      /* @__PURE__ */ jsxs9("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsx10("p", { className: "text-lg text-gray-700", children: "Get in touch with us for any questions about our services or to discuss your project." }),
        /* @__PURE__ */ jsxs9("dl", { className: "mt-8 text-base text-gray-700", children: [
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx10("dt", { className: "sr-only", children: "Phone number" }),
            /* @__PURE__ */ jsxs9("dd", { className: "flex", children: [
              /* @__PURE__ */ jsx10(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx10(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx10("span", { className: "ml-3", children: "+1 (555) 123-4567" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx10("dt", { className: "sr-only", children: "Email" }),
            /* @__PURE__ */ jsxs9("dd", { className: "flex", children: [
              /* @__PURE__ */ jsx10(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx10(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx10("span", { className: "ml-3", children: "contact@gritconstruction.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx10("dt", { className: "sr-only", children: "Address" }),
            /* @__PURE__ */ jsxs9("dd", { className: "flex", children: [
              /* @__PURE__ */ jsxs9(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: [
                    /* @__PURE__ */ jsx10(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      }
                    ),
                    /* @__PURE__ */ jsx10(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs9("span", { className: "ml-3", children: [
                "123 Construction Ave",
                /* @__PURE__ */ jsx10("br", {}),
                "Building City, ST 12345"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "mt-12 sm:mt-16 md:mt-0", children: [
      /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-extrabold text-gray-900 sm:text-3xl", children: "Send us a message" }),
      /* @__PURE__ */ jsx10("div", { className: "mt-3", children: /* @__PURE__ */ jsxs9(
        Form4,
        {
          method: "post",
          onSubmit: handleSubmit,
          className: "grid grid-cols-1 gap-y-6",
          children: [
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx10(
                "label",
                {
                  htmlFor: "name",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Name"
                }
              ),
              /* @__PURE__ */ jsx10("div", { className: "mt-1", children: /* @__PURE__ */ jsx10(
                "input",
                {
                  type: "text",
                  name: "name",
                  id: "name",
                  required: !0,
                  value: formData.name,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx10(
                "label",
                {
                  htmlFor: "email",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Email"
                }
              ),
              /* @__PURE__ */ jsx10("div", { className: "mt-1", children: /* @__PURE__ */ jsx10(
                "input",
                {
                  type: "email",
                  name: "email",
                  id: "email",
                  required: !0,
                  value: formData.email,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx10(
                "label",
                {
                  htmlFor: "phone",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Phone"
                }
              ),
              /* @__PURE__ */ jsx10("div", { className: "mt-1", children: /* @__PURE__ */ jsx10(
                "input",
                {
                  type: "tel",
                  name: "phone",
                  id: "phone",
                  required: !0,
                  value: formData.phone,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx10(
                "label",
                {
                  htmlFor: "message",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Message"
                }
              ),
              /* @__PURE__ */ jsx10("div", { className: "mt-1", children: /* @__PURE__ */ jsx10(
                "textarea",
                {
                  name: "message",
                  id: "message",
                  rows: 4,
                  required: !0,
                  value: formData.message,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10(
              "button",
              {
                type: "submit",
                className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                children: "Send Message"
              }
            ) })
          ]
        }
      ) })
    ] })
  ] }) }) });
}

// app/routes/gallery.tsx
var gallery_exports = {};
__export(gallery_exports, {
  default: () => Gallery,
  loader: () => loader6
});
import React4 from "react";
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var loader6 = async () => {
  let images = getAllImages();
  return json6({ images });
};
function Gallery() {
  let { images } = useLoaderData2(), [selectedCategory, setSelectedCategory] = React4.useState("all"), categories = ["all", ...new Set(images.map((img) => img.category))], filteredImages = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory);
  return /* @__PURE__ */ jsx11("div", { className: "min-h-screen bg-white py-12", children: /* @__PURE__ */ jsxs10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs10("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx11("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Our Work" }),
      /* @__PURE__ */ jsx11("p", { className: "mt-4 text-lg text-gray-600", children: "Browse through our portfolio of completed projects" })
    ] }),
    /* @__PURE__ */ jsx11("div", { className: "mt-8 flex justify-center space-x-4", children: categories.map((category) => /* @__PURE__ */ jsx11(
      "button",
      {
        onClick: () => setSelectedCategory(category),
        className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
        children: category.charAt(0).toUpperCase() + category.slice(1)
      },
      category
    )) }),
    /* @__PURE__ */ jsx11("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredImages.length === 0 ? /* @__PURE__ */ jsx11("div", { className: "col-span-3 text-center text-gray-500", children: "No images found in this category" }) : filteredImages.map((image) => /* @__PURE__ */ jsxs10(
      "div",
      {
        className: "relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9",
        children: [
          /* @__PURE__ */ jsx11(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx11("div", { className: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end", children: /* @__PURE__ */ jsxs10("div", { className: "p-4 w-full", children: [
            /* @__PURE__ */ jsx11("p", { className: "text-white text-sm", children: image.alt }),
            /* @__PURE__ */ jsx11("span", { className: "text-red-400 text-xs mt-1 block", children: image.category })
          ] }) })
        ]
      },
      image.id
    )) })
  ] }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
import { Link as Link4 } from "@remix-run/react";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var meta3 = () => [
  { title: "Grit Construction - Professional General Contracting & Framing" },
  {
    name: "description",
    content: "Professional general contracting and framing services for residential and commercial projects."
  }
];
function Index() {
  return /* @__PURE__ */ jsxs11("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs11("div", { className: "relative h-[600px]", children: [
      /* @__PURE__ */ jsxs11("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx12(
          "img",
          {
            src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2",
            alt: "Luxury wrap-around deck",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx12("div", { className: "absolute inset-0 bg-black opacity-50" })
      ] }),
      /* @__PURE__ */ jsx12("div", { className: "relative h-full max-w-7xl mx-auto", children: /* @__PURE__ */ jsx12("div", { className: "relative z-10 h-full flex items-center", children: /* @__PURE__ */ jsx12("main", { className: "w-full mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs11("div", { className: "sm:text-center lg:text-left", children: [
        /* @__PURE__ */ jsxs11("h1", { className: "text-4xl tracking-tight font-extrabold text-white drop-shadow-lg sm:text-5xl md:text-6xl", children: [
          /* @__PURE__ */ jsx12("span", { className: "block", children: "Quality Construction" }),
          /* @__PURE__ */ jsx12("span", { className: "block text-red-600 drop-shadow-lg", children: "Built with Grit" })
        ] }),
        /* @__PURE__ */ jsx12("p", { className: "mt-3 text-base text-white drop-shadow sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0", children: "Professional general contracting and framing services for your residential and commercial projects. Get expert craftsmanship and reliable service." }),
        /* @__PURE__ */ jsxs11("div", { className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx12("div", { className: "rounded-md shadow", children: /* @__PURE__ */ jsx12(
            Link4,
            {
              to: "/request-bid",
              className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10",
              children: "Request a Bid"
            }
          ) }),
          /* @__PURE__ */ jsx12("div", { className: "mt-3 sm:mt-0 sm:ml-3", children: /* @__PURE__ */ jsx12(
            Link4,
            {
              to: "/services",
              className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10",
              children: "Our Services"
            }
          ) })
        ] })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxs11("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs11("div", { className: "lg:text-center", children: [
        /* @__PURE__ */ jsx12("h2", { className: "text-base text-red-600 font-semibold tracking-wide uppercase", children: "Our Services" }),
        /* @__PURE__ */ jsx12("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl", children: "Professional Construction Services" })
      ] }),
      /* @__PURE__ */ jsx12("div", { className: "mt-10", children: /* @__PURE__ */ jsxs11("div", { className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10", children: [
        /* @__PURE__ */ jsxs11("div", { className: "relative", children: [
          /* @__PURE__ */ jsx12("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white", children: /* @__PURE__ */ jsx12(
            "svg",
            {
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx12(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs11("div", { className: "ml-16", children: [
            /* @__PURE__ */ jsx12("h3", { className: "text-lg leading-6 font-medium text-black", children: "General Contracting" }),
            /* @__PURE__ */ jsx12("p", { className: "mt-2 text-base text-black", children: "Full-service general contracting for residential and commercial projects." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "relative", children: [
          /* @__PURE__ */ jsx12("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white", children: /* @__PURE__ */ jsx12(
            "svg",
            {
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx12(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M4 6h16M4 10h16M4 14h16M4 18h16"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs11("div", { className: "ml-16", children: [
            /* @__PURE__ */ jsx12("h3", { className: "text-lg leading-6 font-medium text-black", children: "Framing" }),
            /* @__PURE__ */ jsx12("p", { className: "mt-2 text-base text-black", children: "Expert framing services for new construction and renovations." })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FCQTH7T5.js", imports: ["/build/_shared/chunk-EJBBG3W2.js", "/build/_shared/chunk-QLCKI4IE.js", "/build/_shared/chunk-WGMZMA5L.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DJMLIUQ3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FZ5QAT2N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.login": { id: "routes/admin.login", parentId: "root", path: "admin/login", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.login-5OMCRAF7.js", imports: ["/build/_shared/chunk-5IPMJIAT.js", "/build/_shared/chunk-VZQVWFLO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.manage": { id: "routes/admin.manage", parentId: "root", path: "admin/manage", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.manage-WGKTD2IO.js", imports: ["/build/_shared/chunk-4JF25FIG.js", "/build/_shared/chunk-5IPMJIAT.js", "/build/_shared/chunk-VZQVWFLO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.test": { id: "routes/admin.test", parentId: "root", path: "admin/test", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.test-DSRMUZ5W.js", imports: ["/build/_shared/chunk-VZQVWFLO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.upload": { id: "routes/admin.upload", parentId: "root", path: "admin/upload", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.upload-7VMNHV7S.js", imports: ["/build/_shared/chunk-4JF25FIG.js", "/build/_shared/chunk-5IPMJIAT.js", "/build/_shared/chunk-VZQVWFLO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-GOS7SUTZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/gallery": { id: "routes/gallery", parentId: "root", path: "gallery", index: void 0, caseSensitive: void 0, module: "/build/routes/gallery-LQRFFX72.js", imports: ["/build/_shared/chunk-4JF25FIG.js", "/build/_shared/chunk-VZQVWFLO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/request-bid": { id: "routes/request-bid", parentId: "root", path: "request-bid", index: void 0, caseSensitive: void 0, module: "/build/routes/request-bid-37G7GH4H.js", imports: ["/build/_shared/chunk-VZQVWFLO.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-ZN6TRHFI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4ba8f333", hmr: void 0, url: "/build/manifest-4BA8F333.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin.manage": {
    id: "routes/admin.manage",
    parentId: "root",
    path: "admin/manage",
    index: void 0,
    caseSensitive: void 0,
    module: admin_manage_exports
  },
  "routes/admin.upload": {
    id: "routes/admin.upload",
    parentId: "root",
    path: "admin/upload",
    index: void 0,
    caseSensitive: void 0,
    module: admin_upload_exports
  },
  "routes/admin.login": {
    id: "routes/admin.login",
    parentId: "root",
    path: "admin/login",
    index: void 0,
    caseSensitive: void 0,
    module: admin_login_exports
  },
  "routes/request-bid": {
    id: "routes/request-bid",
    parentId: "root",
    path: "request-bid",
    index: void 0,
    caseSensitive: void 0,
    module: request_bid_exports
  },
  "routes/admin.test": {
    id: "routes/admin.test",
    parentId: "root",
    path: "admin/test",
    index: void 0,
    caseSensitive: void 0,
    module: admin_test_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/gallery": {
    id: "routes/gallery",
    parentId: "root",
    path: "gallery",
    index: void 0,
    caseSensitive: void 0,
    module: gallery_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
