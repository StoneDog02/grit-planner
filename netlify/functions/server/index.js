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

const requestHandler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (event, context) => ({
    env: process.env,
    context,
    event,
  }),
});

export const handler = async (event, context) => {
  try {
    console.log("Handling request:", {
      path: event.path,
      httpMethod: event.httpMethod,
      headers: event.headers,
    });

    const response = await requestHandler(event, context);

    console.log("Response:", {
      statusCode: response.statusCode,
      hasBody: !!response.body,
      headers: response.headers,
    });

    // Ensure we always return a valid response
    return {
      ...response,
      statusCode: response.statusCode || 200,
      body: response.body || "",
    };
  } catch (error) {
    console.error("Error in server function:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Internal Server Error",
        message: error.message,
      }),
    };
  }
};
