import { createRequestHandler } from "@netlify/remix-adapter";
import * as build from "./build.js";

// Log environment variables (without sensitive values)
console.log("Server Environment Check:", {
  hasSessionSecret: !!process.env.SESSION_SECRET,
  nodeEnv: process.env.NODE_ENV,
  hasAdminUsername: !!process.env.ADMIN_USERNAME,
  hasAdminPasswordHash: !!process.env.ADMIN_PASSWORD_HASH,
  hasAwsRegion: !!process.env.MY_AWS_REGION,
  hasBucketName: !!process.env.AWS_BUCKET_NAME,
});

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext(event) {
    return {
      env: process.env,
    };
  },
});

export default handler;
