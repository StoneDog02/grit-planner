import {
  Form
} from "/build/_shared/chunk-K23C2BAP.js";
import {
  createHotContext
} from "/build/_shared/chunk-U7VO7F7C.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/contact.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1741286265925.9429";
}
var meta = () => {
  return [{
    title: "Contact Us - Grit Construction"
  }, {
    name: "description",
    content: "Get in touch with Grit Construction for your construction needs."
  }];
};
function Contact() {
  _s();
  const [formData, setFormData] = (0, import_react2.useState)({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-white sm:text-3xl", children: "Contact Information" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-white", children: "Get in touch with us for any questions about our services or to discuss your project." }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-8 text-base text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "sr-only", children: "Phone number" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 h-6 w-6 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 72,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 71,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-3", children: "+1 (555) 123-4567" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 74,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "sr-only", children: "Email" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 h-6 w-6 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 81,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 80,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-3", children: "contact@gritconstruction.com" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "sr-only", children: "Address" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 h-6 w-6 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 90,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 91,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 89,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-3", children: [
                "123 Construction Ave",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 95,
                  columnNumber: 23
                }, this),
                "Building City, ST 12345"
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 93,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 sm:mt-16 md:mt-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-white sm:text-3xl", children: "Send us a message" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: handleSubmit, className: "grid grid-cols-1 gap-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-white", children: "Name" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", id: "name", required: true, value: formData.name, onChange: handleChange, className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 114,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-white", children: "Email" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 119,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", id: "email", required: true, value: formData.email, onChange: handleChange, className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 118,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium text-white", children: "Phone" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 128,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", name: "phone", id: "phone", required: true, value: formData.phone, onChange: handleChange, className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 131,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-medium text-white", children: "Message" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "message", id: "message", rows: 4, required: true, value: formData.message, onChange: handleChange, className: "py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 141,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 140,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500", children: "Send Message" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 146,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 145,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Contact, "2jvw9NrTnIwnRbyaHjsQVtHAqpc=");
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-7PCVLZG5.js.map
