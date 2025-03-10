const { createRequestHandler } = require("@remix-run/netlify");
const build = require("@remix-run/dev/server-build");

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

exports.handler = async (event, context) => {
  try {
    return await handler(event, context);
  } catch (error) {
    console.error("Error in server function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
