import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-K23C2BAP.js";
import {
  createHotContext
} from "/build/_shared/chunk-U7VO7F7C.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles.css
var styles_default = "/build/_assets/styles-JTYIOFK3.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: styles_default
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "min-h-screen bg-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black", children: "Grit Construction" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600", children: "Home" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/services", className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600", children: "Services" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/request-bid", className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600", children: "Request a Bid" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/contact", className: "text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600", children: "Contact" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-black", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Grit Construction. All rights reserved."
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-KAPTIBJF.js.map
