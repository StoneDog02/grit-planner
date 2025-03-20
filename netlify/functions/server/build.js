var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

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
import { jsxDEV } from "react/jsx-dev-runtime";
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
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

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6TVD62GX.css";

// app/components/Layout.tsx
import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  let location = useLocation(), [isMobileMenuOpen, setIsMobileMenuOpen] = useState(!1), navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ], requestBidLink = { name: "Request Bid", href: "/request-bid" };
  return /* @__PURE__ */ jsxDEV2(Fragment, { children: [
    /* @__PURE__ */ jsxDEV2("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV2("nav", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "flex h-16 justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV2("div", { className: "flex md:hidden", children: /* @__PURE__ */ jsxDEV2(
          "button",
          {
            type: "button",
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            children: [
              /* @__PURE__ */ jsxDEV2("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 33,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV2(
                "svg",
                {
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV2(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 41,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 34,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 28,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "flex-1 flex items-center", children: [
          /* @__PURE__ */ jsxDEV2(Link, { to: "/", className: "py-3 px-6", children: /* @__PURE__ */ jsxDEV2(
            "img",
            {
              src: "/images/Grit_construction_logo-removebg-preview.png",
              alt: "Grit Construction",
              className: "h-12 w-auto"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 53,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV2("div", { className: "hidden md:flex md:ml-16", children: navigation.map((item) => {
            let isActive = item.href === "/" && location.pathname === "/" || item.href !== "/" && location.pathname.startsWith(item.href);
            return /* @__PURE__ */ jsxDEV2(
              Link,
              {
                to: item.href,
                className: `inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium mx-6 ${isActive ? "border-red-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`,
                children: item.name
              },
              item.name,
              !1,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 69,
                columnNumber: 21
              },
              this
            );
          }) }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "hidden md:flex items-center", children: /* @__PURE__ */ jsxDEV2(
          Link,
          {
            to: requestBidLink.href,
            className: `inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors ${location.pathname.startsWith(requestBidLink.href) ? "bg-red-700" : ""}`,
            children: requestBidLink.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "div",
        {
          className: `${isMobileMenuOpen ? "block" : "hidden"} md:hidden border-t border-gray-200`,
          children: /* @__PURE__ */ jsxDEV2("div", { className: "pt-2 pb-3 space-y-1", children: [...navigation, requestBidLink].map((item) => {
            let isActive = item.href === "/" && location.pathname === "/" || item.href !== "/" && location.pathname.startsWith(item.href);
            return /* @__PURE__ */ jsxDEV2(
              Link,
              {
                to: item.href,
                className: `block pl-3 pr-4 py-2 text-base font-medium ${isActive ? "bg-red-50 border-l-4 border-red-500 text-red-700" : "border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`,
                onClick: () => setIsMobileMenuOpen(!1),
                children: item.name
              },
              item.name,
              !1,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 114,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Layout.tsx",
          lineNumber: 101,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("main", { children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "icon", type: "image/svg+xml", href: "/images/logo.svg" },
  { rel: "alternate icon", href: "/favicon.ico" }
], loader = () => (console.log("Root loader called"), null);
function App() {
  return console.log("Root component rendered"), /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxDEV3(Layout, { children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("footer", { className: "bg-white", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV3("p", { className: "text-center text-black", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Grit Construction. All rights reserved."
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/admin.manage.tsx
var admin_manage_exports = {};
__export(admin_manage_exports, {
  action: () => action,
  default: () => ManageGallery,
  loader: () => loader2
});
import React2 from "react";
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
    secure: !1,
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
  return session.set("username", username), console.log("Creating session:", {
    username,
    redirectTo,
    hasSession: !!session
  }), redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function getUserSession(request) {
  let cookie = request.headers.get("Cookie");
  return console.log("Getting user session:", {
    hasCookie: !!cookie,
    cookieValue: cookie
  }), storage.getSession(cookie);
}
async function requireAdminUser(request) {
  let session = await getUserSession(request), username = session.get("username"), expectedUsername = process.env.ADMIN_USERNAME;
  if (console.log("Session check:", {
    hasSession: !!session,
    username,
    expectedUsername,
    matches: username === expectedUsername,
    url: request.url
  }), !username || username !== expectedUsername) {
    let url = new URL(request.url);
    if (url.pathname === "/admin/login" || url.pathname === "/admin")
      return null;
    throw redirect("/admin/login", {
      headers: {
        "Set-Cookie": await storage.destroySession(session)
      }
    });
  }
  return username;
}

// app/models/gallery.server.ts
import { GetObjectCommand, PutObjectCommand as PutObjectCommand2 } from "@aws-sdk/client-s3";

// app/utils/s3.server.ts
import { S3Client } from "@aws-sdk/client-s3";
console.log("S3 Configuration Check:", {
  hasRegion: !!process.env.MY_AWS_REGION,
  hasAccessKey: !!process.env.MY_AWS_ACCESS_KEY_ID,
  hasSecretKey: !!process.env.MY_AWS_SECRET_KEY,
  hasBucketName: !!process.env.AWS_BUCKET_NAME,
  region: process.env.MY_AWS_REGION,
  bucketName: process.env.AWS_BUCKET_NAME
});
if (!process.env.MY_AWS_REGION)
  throw new Error("MY_AWS_REGION is not configured");
if (!process.env.MY_AWS_ACCESS_KEY_ID)
  throw new Error("MY_AWS_ACCESS_KEY_ID is not configured");
if (!process.env.MY_AWS_SECRET_KEY)
  throw new Error("MY_AWS_SECRET_KEY is not configured");
if (!process.env.AWS_BUCKET_NAME)
  throw new Error("AWS_BUCKET_NAME is not configured");
var s3Client = new S3Client({
  region: process.env.MY_AWS_REGION,
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_KEY
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
var AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME, AWS_REGION = process.env.MY_AWS_REGION;

// app/models/gallery.server.ts
var galleryImages = [], GALLERY_METADATA_KEY = "gallery-metadata.json";
async function loadGalleryFromS3() {
  try {
    let command = new GetObjectCommand({
      Bucket: AWS_BUCKET_NAME,
      Key: GALLERY_METADATA_KEY
    }), data = await (await s3Client.send(command)).Body?.transformToString();
    if (data) {
      let parsedData = JSON.parse(data);
      parsedData && Array.isArray(parsedData.images) && (galleryImages = parsedData.images);
    }
  } catch (error) {
    if (error.name === "NoSuchKey")
      galleryImages = [], await saveGalleryToS3();
    else
      throw console.error("Error loading gallery data from S3:", error), error;
  }
}
async function saveGalleryToS3() {
  try {
    let command = new PutObjectCommand2({
      Bucket: AWS_BUCKET_NAME,
      Key: GALLERY_METADATA_KEY,
      Body: JSON.stringify({ images: galleryImages }, null, 2),
      ContentType: "application/json"
    });
    await s3Client.send(command);
  } catch (error) {
    throw console.error("Error saving gallery data to S3:", error), error;
  }
}
loadGalleryFromS3().catch(console.error);
async function getAllImages() {
  return await loadGalleryFromS3(), galleryImages;
}
async function addImage(image) {
  let newImage = {
    ...image,
    id: Date.now().toString(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  return galleryImages.push(newImage), await saveGalleryToS3(), newImage;
}
async function updateImage(id, updates) {
  let index = galleryImages.findIndex((img) => img.id === id);
  return index === -1 ? null : (galleryImages[index] = {
    ...galleryImages[index],
    ...updates
  }, await saveGalleryToS3(), galleryImages[index]);
}
async function deleteImage(id) {
  let initialLength = galleryImages.length;
  galleryImages = galleryImages.filter((img) => img.id !== id);
  let wasDeleted = galleryImages.length !== initialLength;
  return wasDeleted && await saveGalleryToS3(), wasDeleted;
}

// app/routes/admin.manage.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader2 = async ({ request }) => {
  await requireAdminUser(request);
  let images = await getAllImages();
  return json({ images });
}, action = async ({ request }) => {
  await requireAdminUser(request);
  let formData = await request.formData(), action7 = formData.get("_action");
  if (action7 === "delete") {
    let imageId = formData.get("imageId");
    return imageId ? await deleteImage(imageId) ? json({ success: "Image deleted successfully" }) : json({ error: "Failed to delete image" }, { status: 400 }) : json({ error: "Image ID is required" }, { status: 400 });
  }
  if (action7 === "update") {
    let imageId = formData.get("imageId"), category = formData.get("category"), service = formData.get("service"), alt = formData.get("alt");
    return !imageId || !category || !service || !alt ? json(
      { error: "Image ID, category, service, and description are required" },
      { status: 400 }
    ) : await updateImage(imageId, { category, service, alt }) ? json({ success: "Image updated successfully" }) : json({ error: "Failed to update image" }, { status: 400 });
  }
  return json({ error: "Invalid action" }, { status: 400 });
};
function ManageGallery() {
  let { images } = useLoaderData(), actionData = useActionData(), [editingId, setEditingId] = React2.useState(null), services2 = [
    "general-contracting",
    "framing",
    "concrete",
    "door-window-installation",
    "finish-carpentry-trim",
    "drywall"
  ];
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxDEV4("h2", { className: "text-3xl font-extrabold text-white", children: "Manage Gallery" }, void 0, !1, {
        fileName: "app/routes/admin.manage.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 text-sm text-gray-400", children: "Edit or delete images from the gallery" }, void 0, !1, {
        fileName: "app/routes/admin.manage.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.manage.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    actionData?.error && /* @__PURE__ */ jsxDEV4("div", { className: "mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded", children: actionData.error }, void 0, !1, {
      fileName: "app/routes/admin.manage.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    actionData?.success && /* @__PURE__ */ jsxDEV4("div", { className: "mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded", children: actionData.success }, void 0, !1, {
      fileName: "app/routes/admin.manage.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: images.map((image) => /* @__PURE__ */ jsxDEV4(
      "div",
      {
        className: "bg-gray-900 rounded-lg overflow-hidden shadow-lg",
        children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "aspect-w-16 aspect-h-9", children: /* @__PURE__ */ jsxDEV4(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "w-full h-full object-cover"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 112,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin.manage.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          editingId === image.id ? /* @__PURE__ */ jsxDEV4(Form, { method: "post", className: "p-4", children: [
            /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "imageId", value: image.id }, void 0, !1, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "_action", value: "update" }, void 0, !1, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 122,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxDEV4("label", { className: "block text-sm font-medium text-gray-300", children: "Service" }, void 0, !1, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4(
                "select",
                {
                  name: "service",
                  defaultValue: image.service,
                  className: "mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white",
                  required: !0,
                  children: services2.map((service) => /* @__PURE__ */ jsxDEV4("option", { value: service, children: service.split("-").map(
                    (word) => word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(" ") }, service, !1, {
                    fileName: "app/routes/admin.manage.tsx",
                    lineNumber: 135,
                    columnNumber: 25
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 128,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxDEV4("label", { className: "block text-sm font-medium text-gray-300", children: "Category" }, void 0, !1, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 149,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4(
                "select",
                {
                  name: "category",
                  defaultValue: image.category,
                  className: "mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white",
                  required: !0,
                  children: [
                    /* @__PURE__ */ jsxDEV4("option", { value: "residential", children: "Residential" }, void 0, !1, {
                      fileName: "app/routes/admin.manage.tsx",
                      lineNumber: 158,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV4("option", { value: "commercial", children: "Commercial" }, void 0, !1, {
                      fileName: "app/routes/admin.manage.tsx",
                      lineNumber: 159,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 152,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxDEV4("label", { className: "block text-sm font-medium text-gray-300", children: "Description" }, void 0, !1, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 164,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4(
                "input",
                {
                  type: "text",
                  name: "alt",
                  defaultValue: image.alt,
                  className: "mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 167,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-end space-x-2", children: [
              /* @__PURE__ */ jsxDEV4(
                "button",
                {
                  type: "button",
                  onClick: () => setEditingId(null),
                  className: "px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600",
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 177,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV4(
                "button",
                {
                  type: "submit",
                  className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500",
                  children: "Save"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 184,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.manage.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV4("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxDEV4("p", { className: "text-white text-sm mb-1", children: image.alt }, void 0, !1, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "flex gap-2 mb-3", children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "text-red-500 text-xs", children: image.service.split("-").map(
                (word) => word.charAt(0).toUpperCase() + word.slice(1)
              ).join(" ") }, void 0, !1, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 196,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4("span", { className: "text-gray-400 text-xs", children: "\u2022" }, void 0, !1, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 204,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4("span", { className: "text-gray-400 text-xs", children: image.category.charAt(0).toUpperCase() + image.category.slice(1) }, void 0, !1, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-end space-x-2", children: [
              /* @__PURE__ */ jsxDEV4(
                "button",
                {
                  onClick: () => setEditingId(image.id),
                  className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500",
                  children: "Edit"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 212,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV4(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "imageId", value: image.id }, void 0, !1, {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 219,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "_action", value: "delete" }, void 0, !1, {
                  fileName: "app/routes/admin.manage.tsx",
                  lineNumber: 220,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV4(
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
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin.manage.tsx",
                    lineNumber: 221,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/admin.manage.tsx",
                lineNumber: 218,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.manage.tsx",
              lineNumber: 211,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.manage.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, this)
        ]
      },
      image.id,
      !0,
      {
        fileName: "app/routes/admin.manage.tsx",
        lineNumber: 107,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/admin.manage.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.manage.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.manage.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
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
import { PutObjectCommand as PutObjectCommand3 } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader3 = async ({ request }) => (await requireAdminUser(request), json2({})), action2 = async ({ request }) => {
  await requireAdminUser(request);
  let formData = await request.formData(), image = formData.get("image"), category = formData.get("category"), service = formData.get("service"), alt = formData.get("alt");
  if (console.log("Upload attempt:", {
    hasImage: !!image,
    imageType: image?.type,
    imageName: image?.name,
    imageSize: image?.size,
    category,
    service,
    alt
  }), !image || !category || !service || !alt)
    return json2(
      { error: "Image, category, service, and description are required" },
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
      new PutObjectCommand3({
        Bucket: AWS_BUCKET_NAME,
        Key: filename,
        Body: processedImage,
        ContentType: "image/jpeg"
      })
    );
    let imageUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${filename}`;
    console.log("Upload successful:", { imageUrl });
    let savedImage = await addImage({
      src: imageUrl,
      alt,
      category,
      service
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
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV5("h2", { className: "text-3xl font-extrabold text-white", children: "Upload Image" }, void 0, !1, {
        fileName: "app/routes/admin.upload.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "mt-2 text-sm text-gray-400", children: "Add new images to the gallery" }, void 0, !1, {
        fileName: "app/routes/admin.upload.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(
        Link2,
        {
          to: "/admin/manage",
          className: "inline-block mt-2 text-red-500 hover:text-red-400",
          children: "Manage existing images \u2192"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.upload.tsx",
          lineNumber: 130,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin.upload.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(
      Form2,
      {
        method: "post",
        className: "mt-8 space-y-6",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "image",
                  className: "block text-sm font-medium text-white",
                  children: "Image"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 145,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5(
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
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 151,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.upload.tsx",
              lineNumber: 144,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "service",
                  className: "block text-sm font-medium text-white",
                  children: "Service"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 167,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5(
                "select",
                {
                  id: "service",
                  name: "service",
                  required: !0,
                  className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",
                  children: [
                    /* @__PURE__ */ jsxDEV5("option", { value: "", children: "Select a service" }, void 0, !1, {
                      fileName: "app/routes/admin.upload.tsx",
                      lineNumber: 179,
                      columnNumber: 17
                    }, this),
                    [
                      "general-contracting",
                      "framing",
                      "concrete",
                      "door-window-installation",
                      "finish-carpentry-trim",
                      "drywall"
                    ].map((service) => /* @__PURE__ */ jsxDEV5("option", { value: service, children: service.split("-").map(
                      (word) => word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(" ") }, service, !1, {
                      fileName: "app/routes/admin.upload.tsx",
                      lineNumber: 181,
                      columnNumber: 19
                    }, this))
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 173,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.upload.tsx",
              lineNumber: 166,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "category",
                  className: "block text-sm font-medium text-white",
                  children: "Category"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 194,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5(
                "select",
                {
                  id: "category",
                  name: "category",
                  required: !0,
                  className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",
                  children: [
                    /* @__PURE__ */ jsxDEV5("option", { value: "", children: "Select a category" }, void 0, !1, {
                      fileName: "app/routes/admin.upload.tsx",
                      lineNumber: 206,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV5("option", { value: "residential", children: "Residential" }, void 0, !1, {
                      fileName: "app/routes/admin.upload.tsx",
                      lineNumber: 207,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV5("option", { value: "commercial", children: "Commercial" }, void 0, !1, {
                      fileName: "app/routes/admin.upload.tsx",
                      lineNumber: 208,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 200,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.upload.tsx",
              lineNumber: 193,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "alt",
                  className: "block text-sm font-medium text-white",
                  children: "Description"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 213,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  type: "text",
                  id: "alt",
                  name: "alt",
                  required: !0,
                  className: "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm",
                  placeholder: "Brief description of the image"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin.upload.tsx",
                  lineNumber: 219,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/admin.upload.tsx",
              lineNumber: 212,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.upload.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this),
          actionData?.error && /* @__PURE__ */ jsxDEV5("div", { className: "text-red-500 text-sm", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/admin.upload.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this),
          actionData?.success && /* @__PURE__ */ jsxDEV5("div", { className: "text-green-500 text-sm", children: "Image uploaded successfully!" }, void 0, !1, {
            fileName: "app/routes/admin.upload.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
            "button",
            {
              type: "submit",
              className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              children: "Upload"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.upload.tsx",
              lineNumber: 241,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin.upload.tsx",
            lineNumber: 240,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/admin.upload.tsx",
        lineNumber: 138,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin.upload.tsx",
    lineNumber: 124,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.upload.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

// app/routes/admin.login.tsx
var admin_login_exports = {};
__export(admin_login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader4
});
import { json as json3, redirect as redirect3 } from "@remix-run/node";
import { Form as Form3, useActionData as useActionData3 } from "@remix-run/react";
import bcrypt from "bcryptjs";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var action3 = async ({ request }) => {
  try {
    let formData = await request.formData(), username = formData.get("username")?.toString() ?? "", password = formData.get("password")?.toString() ?? "", storedHash = process.env.ADMIN_PASSWORD_HASH || "", storedUsername = process.env.ADMIN_USERNAME || "";
    if (console.log("Environment Debug:"), console.log("Raw stored hash:", storedHash), console.log("Raw stored username:", storedUsername), console.log("Hash length:", storedHash.length), console.log("Username length:", storedUsername.length), !username || !password)
      return json3(
        { error: "Username and password are required" },
        { status: 400 }
      );
    let cleanHash = storedHash.replace(/^["']|["']$/g, "").trim();
    console.log("Cleaned hash:", cleanHash), console.log("Cleaned hash length:", cleanHash.length);
    let isValidUsername = username === storedUsername;
    console.log("Username comparison:", {
      provided: username,
      stored: storedUsername,
      matches: isValidUsername
    });
    let isValidPassword = !1;
    try {
      isValidPassword = await bcrypt.compare(password, cleanHash), console.log("Password validation result:", isValidPassword);
    } catch (error) {
      return console.error("bcrypt error:", error), json3({ error: "Error validating credentials" }, { status: 500 });
    }
    return !isValidUsername || !isValidPassword ? json3({ error: "Invalid credentials" }, { status: 401 }) : createUserSession({
      username,
      redirectTo: "/admin/upload"
    });
  } catch (error) {
    return console.error("Login error:", error), json3({ error: "An error occurred during login" }, { status: 500 });
  }
}, loader4 = async ({ request }) => {
  let session = await getUserSession(request), username = session.get("username");
  return console.log("Login page loader:", {
    hasSession: !!session,
    username,
    expectedUsername: process.env.ADMIN_USERNAME
  }), username && username === process.env.ADMIN_USERNAME ? (console.log("Valid session found, redirecting to upload"), redirect3("/admin/upload")) : (console.log("No valid session, showing login page"), null);
};
function Login() {
  let actionData = useActionData3();
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Admin Login" }, void 0, !1, {
      fileName: "app/routes/admin.login.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.login.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Form3, { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "username", className: "sr-only", children: "Username" }, void 0, !1, {
            fileName: "app/routes/admin.login.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
              placeholder: "Username"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.login.tsx",
              lineNumber: 117,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.login.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "password", className: "sr-only", children: "Password" }, void 0, !1, {
            fileName: "app/routes/admin.login.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
              placeholder: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.login.tsx",
              lineNumber: 130,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.login.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.login.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ jsxDEV6("div", { className: "text-red-600 text-sm", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/admin.login.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Sign in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.login.tsx",
          lineNumber: 146,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.login.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.login.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.login.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.login.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

// app/routes/request-bid.tsx
var request_bid_exports = {};
__export(request_bid_exports, {
  action: () => action4,
  default: () => RequestBid
});
import { json as json4 } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useState as useState2, useEffect } from "react";
import { Resend } from "resend";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var action4 = async ({ request }) => {
  let resend = new Resend(process.env.RESEND_API_KEY), formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), phone = formData.get("phone"), contactPreference = formData.get("contactPreference"), scope = formData.get("scope"), projectType = formData.get("projectType"), projectDescription = formData.get("projectDescription"), timeline = formData.get("timeline");
  if (!name || !email || !phone || !contactPreference || !scope || !projectType || !projectDescription || !timeline || typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof contactPreference != "string" || typeof scope != "string" || typeof projectType != "string" || typeof projectDescription != "string" || typeof timeline != "string")
    return json4(
      { success: !1, error: "All fields are required and must be valid." },
      { status: 400 }
    );
  let data = {
    name,
    email,
    phone,
    contactPreference,
    scope,
    projectType,
    projectDescription,
    timeline
  };
  try {
    let { data: resendData, error } = await resend.emails.send({
      from: "Grit Construction <no-reply@grit-built.com>",
      to: ["gritconstruction2023@gmail.com"],
      subject: `New Bid Request from ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,
      html: `
        <h2>New Bid Request</h2>
        <p><strong>Name:</strong> ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
        <p><strong>Email:</strong> ${data.email.toLowerCase()}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${data.contactPreference.charAt(0).toUpperCase() + data.contactPreference.slice(1)}</p>
        <p><strong>Project Scope:</strong> ${data.scope.charAt(0).toUpperCase() + data.scope.slice(1)}</p>
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
  let fetcher = useFetcher(), [showSuccess, setShowSuccess] = useState2(!1), [formData, setFormData] = useState2({
    name: "",
    email: "",
    phone: "",
    contactPreference: "email",
    scope: "",
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
        scope: "",
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
  return /* @__PURE__ */ jsxDEV7(
    "div",
    {
      className: "min-h-screen bg-cover bg-center bg-no-repeat relative py-12",
      style: {
        backgroundImage: "url('https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg')"
      },
      children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-0 bg-black bg-opacity-50" }, void 0, !1, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 222,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "div",
          {
            className: `fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ${showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`,
            children: /* @__PURE__ */ jsxDEV7("div", { className: "bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl flex items-center text-sm font-medium", children: [
              /* @__PURE__ */ jsxDEV7(
                "svg",
                {
                  className: "w-4 h-4 mr-1.5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsxDEV7(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 239,
                      columnNumber: 13
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 233,
                  columnNumber: 11
                },
                this
              ),
              fetcher.data?.message || "Request Sent Successfully!"
            ] }, void 0, !0, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 232,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 225,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxDEV7("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Request a Bid" }, void 0, !1, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 253,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV7("p", { className: "mt-4 text-lg text-white", children: "Fill out the form below and we'll get back to you with a detailed quote for your project." }, void 0, !1, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 256,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 252,
            columnNumber: 11
          }, this),
          fetcher.data?.error && /* @__PURE__ */ jsxDEV7("div", { className: "mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded", children: fetcher.data.error }, void 0, !1, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 263,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "mt-12", children: /* @__PURE__ */ jsxDEV7(
            fetcher.Form,
            {
              method: "post",
              onSubmit: handleSubmit,
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-white",
                      children: "Name"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 275,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      id: "name",
                      required: !0,
                      value: formData.name,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 281,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 274,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-white",
                      children: "Email"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 293,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      id: "email",
                      required: !0,
                      value: formData.email,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 299,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 292,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "phone",
                      className: "block text-sm font-medium text-white",
                      children: "Phone"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 311,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
                    "input",
                    {
                      type: "tel",
                      name: "phone",
                      id: "phone",
                      required: !0,
                      value: formData.phone,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 317,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 310,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7("label", { className: "block text-sm font-medium text-white mb-2", children: "Preferred Contact Method" }, void 0, !1, {
                    fileName: "app/routes/request-bid.tsx",
                    lineNumber: 329,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV7("div", { className: "flex space-x-6", children: [
                    /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxDEV7(
                        "input",
                        {
                          type: "radio",
                          id: "email-preference",
                          name: "contactPreference",
                          value: "email",
                          checked: formData.contactPreference === "email",
                          onChange: handleChange,
                          className: "h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 accent-red-600"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 334,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV7(
                        "label",
                        {
                          htmlFor: "email-preference",
                          className: "ml-2 text-sm text-white",
                          children: "Email"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 343,
                          columnNumber: 21
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 333,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxDEV7(
                        "input",
                        {
                          type: "radio",
                          id: "phone-preference",
                          name: "contactPreference",
                          value: "phone",
                          checked: formData.contactPreference === "phone",
                          onChange: handleChange,
                          className: "h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 accent-red-600"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 351,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV7(
                        "label",
                        {
                          htmlFor: "phone-preference",
                          className: "ml-2 text-sm text-white",
                          children: "Phone"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 360,
                          columnNumber: 21
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 350,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/request-bid.tsx",
                    lineNumber: 332,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 328,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "scope",
                      className: "block text-sm font-medium text-white",
                      children: "Project Type"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 371,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
                    "select",
                    {
                      name: "scope",
                      id: "scope",
                      required: !0,
                      value: formData.scope,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",
                      children: [
                        /* @__PURE__ */ jsxDEV7("option", { value: "", children: "Select project type" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 385,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "residential", children: "Residential" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 386,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "commercial", children: "Commercial" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 387,
                          columnNumber: 19
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 377,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 370,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "projectType",
                      className: "block text-sm font-medium text-white",
                      children: "Project Scope"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 392,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
                    "select",
                    {
                      name: "projectType",
                      id: "projectType",
                      required: !0,
                      value: formData.projectType,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",
                      children: [
                        /* @__PURE__ */ jsxDEV7("option", { value: "", children: "Select project scope" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 406,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "general-contracting", children: "General Contracting" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 407,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "framing", children: "Framing" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 410,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "concrete", children: "Concrete" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 411,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "door-window-installation", children: "Door & Window Installation" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 412,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "finish-carpentry-trim", children: "Finish Carpentry & Trim" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 415,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV7("option", { value: "drywall", children: "Drywall" }, void 0, !1, {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 418,
                          columnNumber: 19
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 398,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 391,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "projectDescription",
                      className: "block text-sm font-medium text-white",
                      children: "Project Description"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 423,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
                    "textarea",
                    {
                      name: "projectDescription",
                      id: "projectDescription",
                      rows: 4,
                      required: !0,
                      value: formData.projectDescription,
                      onChange: handleChange,
                      className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 429,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 422,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7(
                    "label",
                    {
                      htmlFor: "timeline",
                      className: "block text-sm font-medium text-white",
                      children: "Desired Timeline"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 441,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7(
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
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 447,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 440,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
                  "button",
                  {
                    type: "submit",
                    disabled: fetcher.state !== "idle",
                    className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${fetcher.state !== "idle" ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}`,
                    children: fetcher.state !== "idle" ? /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxDEV7(
                        "svg",
                        {
                          className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                            /* @__PURE__ */ jsxDEV7(
                              "circle",
                              {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/request-bid.tsx",
                                lineNumber: 477,
                                columnNumber: 25
                              },
                              this
                            ),
                            /* @__PURE__ */ jsxDEV7(
                              "path",
                              {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/request-bid.tsx",
                                lineNumber: 485,
                                columnNumber: 25
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/routes/request-bid.tsx",
                          lineNumber: 471,
                          columnNumber: 23
                        },
                        this
                      ),
                      "Submitting..."
                    ] }, void 0, !0, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 470,
                      columnNumber: 21
                    }, this) : "Submit Request"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/request-bid.tsx",
                    lineNumber: 460,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 459,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 269,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 268,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 251,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 250,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/request-bid.tsx",
      lineNumber: 215,
      columnNumber: 5
    },
    this
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
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var loader5 = () => (console.log("Test route loaded"), json5({ message: "Test route loaded" })), action5 = async ({ request }) => (console.log("Test route action called"), json5({ message: "Test action called" }));
function AdminTest() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxDEV8("h1", { children: "Test Route" }, void 0, !1, {
      fileName: "app/routes/admin.test.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("form", { method: "post", children: /* @__PURE__ */ jsxDEV8("button", { type: "submit", children: "Test Post" }, void 0, !1, {
      fileName: "app/routes/admin.test.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.test.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.test.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services,
  meta: () => meta
});
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
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
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 28,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Framing",
    description: "Expert framing services for new construction and renovations. We ensure structural integrity and precision in every project.",
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 10h16M4 14h16M4 18h16"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 48,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Concrete",
    description: "Professional concrete services including foundations, driveways, patios, and decorative concrete work. We deliver durable and aesthetically pleasing concrete solutions.",
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM12 7v10M7 12h10"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 68,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Door & Window Installation",
    description: "Expert installation of doors and windows for both new construction and replacement projects. We ensure proper fitting, sealing, and energy efficiency in every installation.",
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 88,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 82,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Finish Carpentry & Trim",
    description: "Precision finish carpentry and trim work that adds the perfect finishing touch to your space. From baseboards to crown molding, we deliver exceptional craftsmanship and attention to detail.",
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 108,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 102,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Drywall",
    description: "Professional drywall installation and finishing services. From hanging to taping and texturing, we create flawless walls and ceilings that provide the perfect foundation for your space.",
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16M4 18h16"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 128,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 122,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Custom Solutions",
    description: "Tailored construction solutions to meet your specific needs and requirements.",
    icon: /* @__PURE__ */ jsxDEV9(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV9(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.tsx",
            lineNumber: 148,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 142,
        columnNumber: 7
      },
      this
    )
  }
];
function Services() {
  return /* @__PURE__ */ jsxDEV9(
    "div",
    {
      className: "min-h-screen bg-cover bg-center bg-no-repeat relative",
      style: {
        backgroundImage: "url('https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg')"
      },
      children: [
        /* @__PURE__ */ jsxDEV9("div", { className: "absolute inset-0 bg-black bg-opacity-50" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 168,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxDEV9("h2", { className: "text-base text-red-600 font-semibold tracking-wide uppercase", children: "Our Services" }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 173,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV9("p", { className: "mt-2 text-3xl font-extrabold text-white sm:text-4xl", children: "Professional Construction Services" }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 176,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV9("p", { className: "mt-4 max-w-2xl text-xl text-white mx-auto", children: "We provide comprehensive construction services for both residential and commercial projects." }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 179,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 172,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "mt-20", children: /* @__PURE__ */ jsxDEV9("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2", children: services.map((service) => /* @__PURE__ */ jsxDEV9("div", { className: "relative", children: /* @__PURE__ */ jsxDEV9("div", { className: "relative bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV9("div", { className: "absolute top-0 left-0 -mt-4 -ml-4", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white", children: service.icon }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 191,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 190,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("h3", { className: "text-lg font-medium text-black", children: service.title }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("p", { className: "mt-2 text-base text-black", children: service.description }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 198,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this) }, service.title, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this)) }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 186,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 185,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxDEV9(
            Link3,
            {
              to: "/request-bid",
              className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              children: "Request a Bid"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/services.tsx",
              lineNumber: 208,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 207,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 171,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.tsx",
      lineNumber: 161,
      columnNumber: 5
    },
    this
  );
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action6,
  default: () => Contact,
  meta: () => meta2
});
import { json as json6 } from "@remix-run/node";
import { useFetcher as useFetcher2 } from "@remix-run/react";
import { useState as useState3, useEffect as useEffect2 } from "react";
import { Resend as Resend2 } from "resend";
import { Fragment as Fragment2, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Contact Us - Grit Construction" },
  {
    name: "description",
    content: "Get in touch with Grit Construction for your construction needs."
  }
], action6 = async ({ request }) => {
  let resend = new Resend2(process.env.RESEND_API_KEY), formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), phone = formData.get("phone"), message = formData.get("message");
  if (!name || !email || !phone || !message || typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof message != "string")
    return json6(
      { success: !1, error: "All fields are required and must be valid." },
      { status: 400 }
    );
  try {
    let { data: resendData, error } = await resend.emails.send({
      from: "Grit Construction <no-reply@grit-built.com>",
      to: ["gritconstruction2023@gmail.com"],
      subject: `New Contact Form Message from ${name.charAt(0).toUpperCase() + name.slice(1)}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <p><strong>Email:</strong> ${email.toLowerCase()}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    return error ? json6(
      {
        success: !1,
        error: `Failed to send email: ${error.message}`
      },
      { status: 500 }
    ) : json6(
      {
        success: !0,
        message: "Message sent successfully!"
      },
      { status: 200 }
    );
  } catch (error) {
    return json6(
      {
        success: !1,
        error: error instanceof Error ? error.message : "Failed to send message. Please try again."
      },
      { status: 500 }
    );
  }
};
function Contact() {
  let fetcher = useFetcher2(), [showSuccess, setShowSuccess] = useState3(!1), [formData, setFormData] = useState3({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  useEffect2(() => {
    if (fetcher.data?.success) {
      setShowSuccess(!0), setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      }), window.scrollTo({ top: 0, behavior: "smooth" });
      let timer = setTimeout(() => {
        setShowSuccess(!1);
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [fetcher.data]);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, handleSubmit = (e) => {
    e.preventDefault();
    let formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    }), fetcher.submit(formDataToSubmit, {
      method: "post",
      action: "/contact"
    });
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "bg-white", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8", children: [
    /* @__PURE__ */ jsxDEV10("div", { children: [
      /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl font-extrabold text-gray-900 sm:text-3xl", children: "Contact Information" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsxDEV10("p", { className: "text-lg text-gray-700", children: "Get in touch with us for any questions about our services or to discuss your project." }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV10("dl", { className: "mt-8 text-base text-gray-700", children: [
          /* @__PURE__ */ jsxDEV10("div", { children: [
            /* @__PURE__ */ jsxDEV10("dt", { className: "sr-only", children: "Phone number" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 175,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV10("dd", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV10(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV10(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/contact.tsx",
                      lineNumber: 183,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 177,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV10("span", { className: "ml-3", children: "(435) 760-4055" }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 190,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV10("dt", { className: "sr-only", children: "Email" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV10("dd", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV10(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV10(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/contact.tsx",
                      lineNumber: 202,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 196,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV10("span", { className: "ml-3", children: "gritconstruction2023@gmail.com" }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 209,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 164,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mt-12 sm:mt-16 md:mt-0", children: [
      /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl font-extrabold text-gray-900 sm:text-3xl", children: "Send us a message" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "mt-3", children: [
        fetcher.data?.error && /* @__PURE__ */ jsxDEV10("div", { className: "mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded", children: fetcher.data.error }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 221,
          columnNumber: 17
        }, this),
        showSuccess && /* @__PURE__ */ jsxDEV10("div", { className: "mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded", children: fetcher.data?.message }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 227,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10(
          fetcher.Form,
          {
            method: "post",
            onSubmit: handleSubmit,
            className: "grid grid-cols-1 gap-y-6",
            children: [
              /* @__PURE__ */ jsxDEV10("div", { children: [
                /* @__PURE__ */ jsxDEV10(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Name"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 238,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV10("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV10(
                  "input",
                  {
                    type: "text",
                    name: "name",
                    id: "name",
                    required: !0,
                    value: formData.name,
                    onChange: handleChange,
                    className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 245,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 244,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 237,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV10("div", { children: [
                /* @__PURE__ */ jsxDEV10(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Email"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 258,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV10("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV10(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    id: "email",
                    required: !0,
                    value: formData.email,
                    onChange: handleChange,
                    className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 265,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 264,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 257,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV10("div", { children: [
                /* @__PURE__ */ jsxDEV10(
                  "label",
                  {
                    htmlFor: "phone",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Phone"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 278,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV10("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV10(
                  "input",
                  {
                    type: "tel",
                    name: "phone",
                    id: "phone",
                    required: !0,
                    value: formData.phone,
                    onChange: handleChange,
                    className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 285,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 284,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 277,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV10("div", { children: [
                /* @__PURE__ */ jsxDEV10(
                  "label",
                  {
                    htmlFor: "message",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Message"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 298,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV10("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV10(
                  "textarea",
                  {
                    name: "message",
                    id: "message",
                    rows: 4,
                    required: !0,
                    value: formData.message,
                    onChange: handleChange,
                    className: "py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 305,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 304,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 297,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10(
                "button",
                {
                  type: "submit",
                  disabled: fetcher.state === "submitting",
                  className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed",
                  children: fetcher.state === "submitting" ? /* @__PURE__ */ jsxDEV10(Fragment2, { children: [
                    /* @__PURE__ */ jsxDEV10(
                      "svg",
                      {
                        className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ jsxDEV10(
                            "circle",
                            {
                              className: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              strokeWidth: "4"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/contact.tsx",
                              lineNumber: 331,
                              columnNumber: 27
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV10(
                            "path",
                            {
                              className: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/contact.tsx",
                              lineNumber: 339,
                              columnNumber: 27
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/contact.tsx",
                        lineNumber: 325,
                        columnNumber: 25
                      },
                      this
                    ),
                    "Sending..."
                  ] }, void 0, !0, {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 324,
                    columnNumber: 23
                  }, this) : "Send Message"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 318,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 317,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 232,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 215,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 163,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 162,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 161,
    columnNumber: 5
  }, this);
}

// app/routes/gallery.tsx
var gallery_exports = {};
__export(gallery_exports, {
  default: () => Gallery,
  loader: () => loader6
});
import React5 from "react";
import { json as json7 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var loader6 = async () => {
  let images = await getAllImages();
  return json7({ images });
};
function Gallery() {
  let { images } = useLoaderData2(), [selectedCategory, setSelectedCategory] = React5.useState("all"), [selectedService, setSelectedService] = React5.useState("all"), uniqueServices = [...new Set(images.map((img) => img.service))], uniqueCategories = [...new Set(images.map((img) => img.category))], filteredImages = images.filter((img) => {
    let categoryMatch = selectedCategory === "all" || img.category === selectedCategory, serviceMatch = selectedService === "all" || img.service === selectedService;
    return categoryMatch && serviceMatch;
  });
  return /* @__PURE__ */ jsxDEV11("div", { className: "min-h-screen bg-white py-12", children: /* @__PURE__ */ jsxDEV11("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV11("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Our Work" }, void 0, !1, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { className: "mt-4 text-lg text-gray-600", children: "Browse through our portfolio of completed projects" }, void 0, !1, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxDEV11(
        "button",
        {
          onClick: () => {
            setSelectedCategory("all"), setSelectedService("all");
          },
          className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === "all" && selectedService === "all" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: "All"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 52,
          columnNumber: 13
        },
        this
      ),
      uniqueServices.map((service) => /* @__PURE__ */ jsxDEV11(
        "button",
        {
          onClick: () => setSelectedService(service),
          className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedService === service ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: service.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        },
        service,
        !1,
        {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 65,
          columnNumber: 15
        },
        this
      )),
      uniqueCategories.map((category) => /* @__PURE__ */ jsxDEV11(
        "button",
        {
          onClick: () => setSelectedCategory(category),
          className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: category.charAt(0).toUpperCase() + category.slice(1)
        },
        category,
        !1,
        {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 83,
          columnNumber: 15
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredImages.length === 0 ? /* @__PURE__ */ jsxDEV11("div", { className: "col-span-3 text-center text-gray-500", children: "No images found for the selected filters" }, void 0, !1, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this) : filteredImages.map((image) => /* @__PURE__ */ jsxDEV11(
      "div",
      {
        className: "relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9",
        children: [
          /* @__PURE__ */ jsxDEV11(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 110,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV11("div", { className: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end", children: /* @__PURE__ */ jsxDEV11("div", { className: "p-4 w-full", children: [
            /* @__PURE__ */ jsxDEV11("p", { className: "text-white text-sm", children: image.alt }, void 0, !1, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV11("div", { className: "flex gap-2 mt-1", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-red-400 text-xs", children: image.service?.split("-").map(
                (word) => word.charAt(0).toUpperCase() + word.slice(1)
              ).join(" ") }, void 0, !1, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 119,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-300 text-xs", children: "\u2022" }, void 0, !1, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 128,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-300 text-xs", children: image.category.charAt(0).toUpperCase() + image.category.slice(1) }, void 0, !1, {
                fileName: "app/routes/gallery.tsx",
                lineNumber: 129,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/gallery.tsx",
              lineNumber: 118,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/gallery.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this)
        ]
      },
      image.id,
      !0,
      {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 106,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Grit Construction - Professional General Contracting & Framing" },
  {
    name: "description",
    content: "Professional general contracting and framing services for residential and commercial projects."
  }
];
function Index() {
  return /* @__PURE__ */ jsxDEV12("div", { className: "relative", children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "relative h-[600px]", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxDEV12(
          "img",
          {
            src: "/images/IMG_4391.jpg",
            alt: "Quality Construction",
            className: "w-full h-full object-cover"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV12("div", { className: "absolute inset-0 bg-black opacity-50" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "relative h-full max-w-7xl mx-auto", children: /* @__PURE__ */ jsxDEV12("div", { className: "relative z-10 h-full flex items-center", children: /* @__PURE__ */ jsxDEV12("main", { className: "w-full mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV12("div", { className: "sm:text-center lg:text-left", children: [
        /* @__PURE__ */ jsxDEV12("h1", { className: "text-4xl tracking-tight font-extrabold text-white drop-shadow-lg sm:text-5xl md:text-6xl", children: [
          /* @__PURE__ */ jsxDEV12("span", { className: "block", children: "Quality Construction" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 34,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV12("span", { className: "block text-red-600 drop-shadow-lg", children: [
            "Built with",
            " ",
            /* @__PURE__ */ jsxDEV12(
              "img",
              {
                src: "/images/GRIT_red.png",
                alt: "Grit",
                className: "h-16 w-auto inline-block"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 37,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-3 text-base text-white drop-shadow sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0", children: "Professional general contracting and framing services for your residential and commercial projects. Get expert craftsmanship and reliable service." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "rounded-md shadow", children: /* @__PURE__ */ jsxDEV12(
            Link4,
            {
              to: "/request-bid",
              className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10",
              children: "Request a Bid"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 51,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "mt-3 sm:mt-0 sm:ml-3", children: /* @__PURE__ */ jsxDEV12(
            Link4,
            {
              to: "/services",
              className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10",
              children: "Our Services"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 59,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxDEV12("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "lg:text-center", children: [
        /* @__PURE__ */ jsxDEV12("h2", { className: "text-base text-red-600 font-semibold tracking-wide uppercase", children: "Our Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl", children: "Professional Construction Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV12("div", { className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10", children: [
        /* @__PURE__ */ jsxDEV12("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white", children: /* @__PURE__ */ jsxDEV12(
            "svg",
            {
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV12(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 96,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 90,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "ml-16", children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg leading-6 font-medium text-black", children: "General Contracting" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-base text-black", children: "Full-service general contracting for residential and commercial projects." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white", children: /* @__PURE__ */ jsxDEV12(
            "svg",
            {
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV12(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M4 6h16M4 10h16M4 14h16M4 18h16"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 124,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 118,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "ml-16", children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg leading-6 font-medium text-black", children: "Framing" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "mt-2 text-base text-black", children: "Expert framing services for new construction and renovations." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  loader: () => loader7
});
import { redirect as redirect4 } from "@remix-run/node";
import { Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var loader7 = async ({ request }) => {
  let url = new URL(request.url), username = (await getUserSession(request)).get("username");
  return url.pathname === "/admin/login" ? username === process.env.ADMIN_USERNAME ? redirect4("/admin/upload") : null : username !== process.env.ADMIN_USERNAME ? redirect4("/admin/login") : null;
};
function Admin() {
  return /* @__PURE__ */ jsxDEV13("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV13(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ISKK7BLI.js", imports: ["/build/_shared/chunk-X3PXDGUE.js", "/build/_shared/chunk-PEEBZOBP.js", "/build/_shared/chunk-PLT55Z5M.js", "/build/_shared/chunk-MT4G4X2W.js", "/build/_shared/chunk-F4KNNEUR.js", "/build/_shared/chunk-2Z2JGDFU.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RIWOPQOB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-U4PPPIWQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-BX5TRNXD.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.login": { id: "routes/admin.login", parentId: "routes/admin", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.login-EPILGESY.js", imports: ["/build/_shared/chunk-HWDIXWJA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.manage": { id: "routes/admin.manage", parentId: "routes/admin", path: "manage", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.manage-QSZJKO2J.js", imports: ["/build/_shared/chunk-GW4BFBY4.js", "/build/_shared/chunk-HWDIXWJA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.test": { id: "routes/admin.test", parentId: "routes/admin", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.test-WJQ4PSE5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.upload": { id: "routes/admin.upload", parentId: "routes/admin", path: "upload", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.upload-5S7UN5W2.js", imports: ["/build/_shared/chunk-GW4BFBY4.js", "/build/_shared/chunk-HWDIXWJA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-ONWOLKTI.js", imports: ["/build/_shared/chunk-6AL2JX5S.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/gallery": { id: "routes/gallery", parentId: "root", path: "gallery", index: void 0, caseSensitive: void 0, module: "/build/routes/gallery-BVR65BUI.js", imports: ["/build/_shared/chunk-GW4BFBY4.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/request-bid": { id: "routes/request-bid", parentId: "root", path: "request-bid", index: void 0, caseSensitive: void 0, module: "/build/routes/request-bid-UFOOODJY.js", imports: ["/build/_shared/chunk-6AL2JX5S.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-7FKQY6U4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0ed59938", hmr: { runtime: "/build/_shared/chunk-MT4G4X2W.js", timestamp: 1742503412867 }, url: "/build/manifest-0ED59938.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
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
    parentId: "routes/admin",
    path: "manage",
    index: void 0,
    caseSensitive: void 0,
    module: admin_manage_exports
  },
  "routes/admin.upload": {
    id: "routes/admin.upload",
    parentId: "routes/admin",
    path: "upload",
    index: void 0,
    caseSensitive: void 0,
    module: admin_upload_exports
  },
  "routes/admin.login": {
    id: "routes/admin.login",
    parentId: "routes/admin",
    path: "login",
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
    parentId: "routes/admin",
    path: "test",
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
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
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
//# sourceMappingURL=build.js.map
