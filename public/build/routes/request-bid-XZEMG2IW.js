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

// app/routes/request-bid.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/request-bid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/request-bid.tsx"
  );
  import.meta.hot.lastModified = "1741286230925.3691";
}
function RequestBid() {
  _s();
  const [formData, setFormData] = (0, import_react2.useState)({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDescription: "",
    timeline: ""
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-black py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Request a Bid" }, void 0, false, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-lg text-white", children: "Fill out the form below and we'll get back to you with a detailed quote for your project." }, void 0, false, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/request-bid.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: handleSubmit, className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-white", children: "Name" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", id: "name", required: true, value: formData.name, onChange: handleChange, className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-white", children: "Email" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", id: "email", required: true, value: formData.email, onChange: handleChange, className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium text-white", children: "Phone" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", name: "phone", id: "phone", required: true, value: formData.phone, onChange: handleChange, className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "projectType", className: "block text-sm font-medium text-white", children: "Project Type" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "projectType", id: "projectType", required: true, value: formData.projectType, onChange: handleChange, className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a project type" }, void 0, false, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "residential", children: "Residential" }, void 0, false, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 91,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "commercial", children: "Commercial" }, void 0, false, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 92,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "renovation", children: "Renovation" }, void 0, false, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 93,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "new-construction", children: "New Construction" }, void 0, false, {
            fileName: "app/routes/request-bid.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "projectDescription", className: "block text-sm font-medium text-white", children: "Project Description" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "projectDescription", id: "projectDescription", rows: 4, required: true, value: formData.projectDescription, onChange: handleChange, className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 102,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 98,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "timeline", className: "block text-sm font-medium text-white", children: "Desired Timeline" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "timeline", id: "timeline", placeholder: "e.g., ASAP, 3 months, etc.", required: true, value: formData.timeline, onChange: handleChange, className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" }, void 0, false, {
          fileName: "app/routes/request-bid.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500", children: "Submit Request" }, void 0, false, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/request-bid.tsx",
        lineNumber: 112,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/request-bid.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/request-bid.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/request-bid.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/request-bid.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/request-bid.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(RequestBid, "av0qr2tVPxBnWrkpBUWg7X8dAm0=");
_c = RequestBid;
var _c;
$RefreshReg$(_c, "RequestBid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RequestBid as default
};
//# sourceMappingURL=/build/routes/request-bid-XZEMG2IW.js.map
