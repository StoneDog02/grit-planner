import { createRequestHandler } from "@netlify/remix-adapter";
import * as build from "./build.js";

// Log environment variables (without sensitive values)
console.log("Server Environment Check:", {
  hasSessionSecret: !!process.env.SESSION_SECRET,
  nodeEnv: process.env.NODE_ENV,
  hasAdminUsername: !!process.env.ADMIN_USERNAME,
  hasAwsRegion: !!process.env.MY_AWS_REGION,
  hasBucketName: !!process.env.AWS_BUCKET_NAME,
});

const remixHandler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (event, context) => {
    return {
      env: process.env,
      context,
      event,
    };
  },
});

export const handler = async (event, context) => {
  try {
    console.log("Handling request:", {
      path: event.path,
      httpMethod: event.httpMethod,
      headers: event.headers,
    });

    const response = await remixHandler(event, context);

    console.log("Response:", {
      statusCode: response.statusCode,
      hasBody: !!response.body,
      headers: response.headers,
    });

    return response;
  } catch (error) {
    console.error("Server error:", {
      error: error.message,
      stack: error.stack,
    });

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
