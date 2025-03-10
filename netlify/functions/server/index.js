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
    // Construct a valid URL from the event
    const url = new URL(
      event.rawUrl ||
        `${event.headers["x-forwarded-proto"] || "https"}://${
          event.headers.host
        }${event.path}`
    );

    // Add query parameters if they exist
    if (event.queryStringParameters) {
      Object.entries(event.queryStringParameters).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    // Create a new request object with the proper URL
    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers: new Headers(event.headers),
      body:
        event.body && event.httpMethod !== "GET" && event.httpMethod !== "HEAD"
          ? event.isBase64Encoded
            ? Buffer.from(event.body, "base64").toString("utf8")
            : event.body
          : undefined,
    });

    console.log("Handling request:", {
      url: url.toString(),
      path: event.path,
      httpMethod: event.httpMethod,
      headers: event.headers,
    });

    const response = await requestHandler(request, context);

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
