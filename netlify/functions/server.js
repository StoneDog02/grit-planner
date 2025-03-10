import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

const requestHandler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export const handler = async (event, context) => {
  try {
    const response = await requestHandler(event, context);
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
