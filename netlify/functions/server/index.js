import { createRequestHandler } from "@netlify/remix-adapter";
import * as build from "./build.js";

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
