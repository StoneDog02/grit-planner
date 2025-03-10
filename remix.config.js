/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  browserNodeBuiltinsPolyfill: {
    modules: {
      util: true,
      stream: true,
      child_process: true,
      fs: true,
      crypto: true,
      path: true,
      events: true,
      os: true,
    },
  },
  tailwind: true,
  postcss: true,
  serverBuildTarget: "netlify",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "netlify/functions/server/build.js",
};
