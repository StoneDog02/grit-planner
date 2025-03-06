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
  links: () => links
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
var styles_default = "/build/_assets/styles-MFAFJEJD.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: styles_default }];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "min-h-screen bg-black", children: [
      /* @__PURE__ */ jsxDEV2("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsxDEV2("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV2("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV2("h1", { className: "text-2xl font-bold text-black", children: "Grit Construction" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 30,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV2(
            "a",
            {
              href: "/",
              className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600",
              children: "Home"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 35,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(
            "a",
            {
              href: "/services",
              className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600",
              children: "Services"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 41,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(
            "a",
            {
              href: "/request-bid",
              className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600",
              children: "Request a Bid"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 47,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(
            "a",
            {
              href: "/contact",
              className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600",
              children: "Contact"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 53,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("main", { children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("footer", { className: "bg-white", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV2("p", { className: "text-center text-black", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Grit Construction. All rights reserved."
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/request-bid.tsx
var request_bid_exports = {};
__export(request_bid_exports, {
  action: () => action,
  default: () => RequestBid
});
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Resend } from "resend";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var action = async ({ request }) => {
  let resend = new Resend(process.env.RESEND_API_KEY), formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), phone = formData.get("phone"), contactPreference = formData.get("contactPreference"), projectType = formData.get("projectType"), projectDescription = formData.get("projectDescription"), timeline = formData.get("timeline");
  if (!name || !email || !phone || !contactPreference || !projectType || !projectDescription || !timeline || typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof contactPreference != "string" || typeof projectType != "string" || typeof projectDescription != "string" || typeof timeline != "string")
    return json(
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
      to: ["gritconstruction2023@gmail.com", "stoney.harward@gmail.com"],
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
    return error ? json(
      {
        success: !1,
        error: `Failed to send email: ${error.message}`
      },
      { status: 500 }
    ) : json(
      {
        success: !0,
        message: "Request sent successfully!"
      },
      { status: 200 }
    );
  } catch (error) {
    return json(
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
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-black py-12 relative", children: [
    /* @__PURE__ */ jsxDEV3(
      "div",
      {
        className: `fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ${showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`,
        children: /* @__PURE__ */ jsxDEV3("div", { className: "bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl flex items-center text-sm font-medium", children: [
          /* @__PURE__ */ jsxDEV3(
            "svg",
            {
              className: "w-4 h-4 mr-1.5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 221,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 215,
              columnNumber: 11
            },
            this
          ),
          fetcher.data?.message || "Request Sent Successfully!"
        ] }, void 0, !0, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 214,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 207,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV3("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Request a Bid" }, void 0, !1, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { className: "mt-4 text-lg text-white", children: "Fill out the form below and we'll get back to you with a detailed quote for your project." }, void 0, !1, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      fetcher.data?.error && /* @__PURE__ */ jsxDEV3("div", { className: "mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded", children: fetcher.data.error }, void 0, !1, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mt-12", children: /* @__PURE__ */ jsxDEV3(
        fetcher.Form,
        {
          method: "post",
          onSubmit: handleSubmit,
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 257,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 263,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 256,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 275,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
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
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 293,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
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
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3("label", { className: "block text-sm font-medium text-white mb-2", children: "Preferred Contact Method" }, void 0, !1, {
                fileName: "app/routes/request-bid.tsx",
                lineNumber: 311,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "flex space-x-6", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxDEV3(
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
                      lineNumber: 316,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
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
                      lineNumber: 325,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 315,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxDEV3(
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
                      lineNumber: 333,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
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
                      lineNumber: 342,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 332,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/request-bid.tsx",
                lineNumber: 314,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 310,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3(
                "label",
                {
                  htmlFor: "projectType",
                  className: "block text-sm font-medium text-white",
                  children: "Project Type"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 353,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
                "select",
                {
                  name: "projectType",
                  id: "projectType",
                  required: !0,
                  value: formData.projectType,
                  onChange: handleChange,
                  className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",
                  children: [
                    /* @__PURE__ */ jsxDEV3("option", { value: "", children: "Select a project type" }, void 0, !1, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 367,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV3("option", { value: "residential", children: "Residential" }, void 0, !1, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 368,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV3("option", { value: "commercial", children: "Commercial" }, void 0, !1, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 369,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV3("option", { value: "renovation", children: "Renovation" }, void 0, !1, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 370,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV3("option", { value: "new-construction", children: "New Construction" }, void 0, !1, {
                      fileName: "app/routes/request-bid.tsx",
                      lineNumber: 371,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 359,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 352,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 376,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 382,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 375,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 394,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
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
                  lineNumber: 400,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 393,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3(
              "button",
              {
                type: "submit",
                disabled: fetcher.state !== "idle",
                className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${fetcher.state !== "idle" ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}`,
                children: fetcher.state !== "idle" ? /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxDEV3(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ jsxDEV3(
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
                            lineNumber: 430,
                            columnNumber: 25
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV3(
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
                            lineNumber: 438,
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
                      lineNumber: 424,
                      columnNumber: 23
                    },
                    this
                  ),
                  "Submitting..."
                ] }, void 0, !0, {
                  fileName: "app/routes/request-bid.tsx",
                  lineNumber: 423,
                  columnNumber: 21
                }, this) : "Submit Request"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/request-bid.tsx",
                lineNumber: 413,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/request-bid.tsx",
              lineNumber: 412,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 251,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/request-bid.tsx",
      lineNumber: 233,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/request-bid.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/request-bid.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, this);
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services,
  meta: () => meta
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
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
    icon: /* @__PURE__ */ jsxDEV4(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV4(
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
    icon: /* @__PURE__ */ jsxDEV4(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV4(
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
    title: "Project Management",
    description: "Comprehensive project management services to keep your construction project on time and within budget.",
    icon: /* @__PURE__ */ jsxDEV4(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV4(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
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
    title: "Custom Solutions",
    description: "Tailored construction solutions to meet your specific needs and requirements.",
    icon: /* @__PURE__ */ jsxDEV4(
      "svg",
      {
        className: "h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV4(
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
  }
];
function Services() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "bg-black", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV4("h2", { className: "text-base text-red-600 font-semibold tracking-wide uppercase", children: "Our Services" }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 text-3xl font-extrabold text-white sm:text-4xl", children: "Professional Construction Services" }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-4 max-w-2xl text-xl text-white mx-auto", children: "We provide comprehensive construction services for both residential and commercial projects." }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "mt-20", children: /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2", children: services.map((service) => /* @__PURE__ */ jsxDEV4("div", { className: "relative", children: /* @__PURE__ */ jsxDEV4("div", { className: "relative bg-white p-6 rounded-lg shadow-lg", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "absolute top-0 left-0 -mt-4 -ml-4", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white", children: service.icon }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 122,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 121,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV4("h3", { className: "text-lg font-medium text-black", children: service.title }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 126,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 text-base text-black", children: service.description }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 129,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.tsx",
      lineNumber: 120,
      columnNumber: 17
    }, this) }, service.title, !1, {
      fileName: "app/routes/services.tsx",
      lineNumber: 119,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/services.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxDEV4(
      Link,
      {
        to: "/request-bid",
        className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
        children: "Request a Bid"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 139,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/services.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/services.tsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/services.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
  meta: () => meta2
});
import { Form } from "@remix-run/react";
import { useState as useState2 } from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV5("div", { className: "bg-black", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8", children: [
    /* @__PURE__ */ jsxDEV5("div", { children: [
      /* @__PURE__ */ jsxDEV5("h2", { className: "text-2xl font-extrabold text-white sm:text-3xl", children: "Contact Information" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsxDEV5("p", { className: "text-lg text-white", children: "Get in touch with us for any questions about our services or to discuss your project." }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("dl", { className: "mt-8 text-base text-white", children: [
          /* @__PURE__ */ jsxDEV5("div", { children: [
            /* @__PURE__ */ jsxDEV5("dt", { className: "sr-only", children: "Phone number" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5("dd", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV5(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV5(
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
                      lineNumber: 63,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 57,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("span", { className: "ml-3", children: "+1 (555) 123-4567" }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV5("dt", { className: "sr-only", children: "Email" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5("dd", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV5(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV5(
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
                      lineNumber: 82,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 76,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("span", { className: "ml-3", children: "contact@gritconstruction.com" }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 89,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV5("dt", { className: "sr-only", children: "Address" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5("dd", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV5(
                "svg",
                {
                  className: "flex-shrink-0 h-6 w-6 text-red-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: [
                    /* @__PURE__ */ jsxDEV5(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/contact.tsx",
                        lineNumber: 101,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/contact.tsx",
                        lineNumber: 107,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 95,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("span", { className: "ml-3", children: [
                "123 Construction Ave",
                /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 116,
                  columnNumber: 23
                }, this),
                "Building City, ST 12345"
              ] }, void 0, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "mt-12 sm:mt-16 md:mt-0", children: [
      /* @__PURE__ */ jsxDEV5("h2", { className: "text-2xl font-extrabold text-white sm:text-3xl", children: "Send us a message" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "mt-3", children: /* @__PURE__ */ jsxDEV5(
        Form,
        {
          method: "post",
          onSubmit: handleSubmit,
          className: "grid grid-cols-1 gap-y-6",
          children: [
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "name",
                  className: "block text-sm font-medium text-white",
                  children: "Name"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 135,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  type: "text",
                  name: "name",
                  id: "name",
                  required: !0,
                  value: formData.name,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 142,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "email",
                  className: "block text-sm font-medium text-white",
                  children: "Email"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 155,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  type: "email",
                  name: "email",
                  id: "email",
                  required: !0,
                  value: formData.email,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 162,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 161,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "phone",
                  className: "block text-sm font-medium text-white",
                  children: "Phone"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 175,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  type: "tel",
                  name: "phone",
                  id: "phone",
                  required: !0,
                  value: formData.phone,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 182,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 181,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5(
                "label",
                {
                  htmlFor: "message",
                  className: "block text-sm font-medium text-white",
                  children: "Message"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 195,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV5(
                "textarea",
                {
                  name: "message",
                  id: "message",
                  rows: 4,
                  required: !0,
                  value: formData.message,
                  onChange: handleChange,
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 202,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 201,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 194,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
              "button",
              {
                type: "submit",
                className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                children: "Send Message"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/contact.tsx",
                lineNumber: 215,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 129,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Grit Construction - Professional General Contracting & Framing" },
  {
    name: "description",
    content: "Professional general contracting and framing services for residential and commercial projects."
  }
];
function Index() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "relative bg-black overflow-hidden", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxDEV6("div", { className: "relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32", children: /* @__PURE__ */ jsxDEV6("main", { className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28", children: /* @__PURE__ */ jsxDEV6("div", { className: "sm:text-center lg:text-left", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "block", children: "Quality Construction" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 26,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("span", { className: "block text-red-600", children: "Built with Grit" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { className: "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0", children: "Professional general contracting and framing services for your residential and commercial projects. Get expert craftsmanship and reliable service." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "rounded-md shadow", children: /* @__PURE__ */ jsxDEV6(
          Link2,
          {
            to: "/request-bid",
            className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10",
            children: "Request a Bid"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 36,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 35,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "mt-3 sm:mt-0 sm:ml-3", children: /* @__PURE__ */ jsxDEV6(
          Link2,
          {
            to: "/services",
            className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10",
            children: "Our Services"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 44,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "lg:text-center", children: [
        /* @__PURE__ */ jsxDEV6("h2", { className: "text-base text-red-600 font-semibold tracking-wide uppercase", children: "Our Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl", children: "Professional Construction Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV6("div", { className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white", children: /* @__PURE__ */ jsxDEV6(
            "svg",
            {
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV6(
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
                  lineNumber: 81,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 75,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "ml-16", children: [
            /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-black", children: "General Contracting" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mt-2 text-base text-black", children: "Full-service general contracting for residential and commercial projects." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white", children: /* @__PURE__ */ jsxDEV6(
            "svg",
            {
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV6(
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
                  lineNumber: 109,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 103,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "ml-16", children: [
            /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-black", children: "Framing" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mt-2 text-base text-black", children: "Expert framing services for new construction and renovations." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-LMX6HS7O.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-K23C2BAP.js", "/build/_shared/chunk-U7VO7F7C.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SPVACRZA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YEUWFWII.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-7PCVLZG5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/request-bid": { id: "routes/request-bid", parentId: "root", path: "request-bid", index: void 0, caseSensitive: void 0, module: "/build/routes/request-bid-X5O4I6UV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-IONOIAPZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "20f97729", hmr: { runtime: "/build/_shared/chunk-U7VO7F7C.js", timestamp: 1741297779323 }, url: "/build/manifest-20F97729.js" };

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
  "routes/request-bid": {
    id: "routes/request-bid",
    parentId: "root",
    path: "request-bid",
    index: void 0,
    caseSensitive: void 0,
    module: request_bid_exports
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
//# sourceMappingURL=index.js.map
