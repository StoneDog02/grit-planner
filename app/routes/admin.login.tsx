import React from "react";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { createUserSession, getUserSession } from "../utils/session.server";
import bcrypt from "bcryptjs";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

interface ActionData {
  error?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  console.log("Login page loaded - TESTING");

  try {
    // Check if already logged in
    const session = await getUserSession(request);
    const username = session.get("username");

    console.log("Login loader check:", {
      hasSession: !!session,
      username,
      expectedUsername: process.env.ADMIN_USERNAME,
      matches: username === process.env.ADMIN_USERNAME,
    });

    if (username === process.env.ADMIN_USERNAME) {
      // If already logged in, redirect to upload page
      console.log("User already logged in, redirecting to upload");
      return redirect("/admin/upload");
    }

    return json({ message: "Login page loaded" });
  } catch (error) {
    console.error("Login loader error:", error);
    return json({ message: "Login page loaded" });
  }
};

export const action: ActionFunction = async ({ request }) => {
  console.log("\n=== Login Attempt Started - IMMEDIATE LOG ===");

  // Immediately log and return to test if this is being hit
  if (request.method === "POST") {
    console.log("POST request received");
  }

  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  console.log("Form data received:", {
    username: username?.toString(),
    passwordLength: password ? password.toString().length : 0,
  });

  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

  console.log("Environment variables:", {
    ADMIN_USERNAME,
    ADMIN_PASSWORD_HASH,
    envUsernameLength: ADMIN_USERNAME?.length,
    envHashLength: ADMIN_PASSWORD_HASH?.length,
  });

  if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
    console.error("Missing admin credentials in environment");
    return json({ error: "Server configuration error" }, { status: 500 });
  }

  if (!username || !password) {
    console.log("Missing username or password in request");
    return json(
      { error: "Username and password are required" },
      { status: 400 }
    );
  }

  // First check username separately
  const usernameMatches = username === ADMIN_USERNAME;
  console.log("Username check:", {
    provided: username,
    expected: ADMIN_USERNAME,
    matches: usernameMatches,
  });

  if (!usernameMatches) {
    console.log("Username mismatch");
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Then check password
  try {
    console.log("Attempting password verification...");
    const passwordMatch = await bcrypt.compare(
      password.toString(),
      ADMIN_PASSWORD_HASH
    );

    console.log("Password check result:", {
      matches: passwordMatch,
    });

    if (!passwordMatch) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    console.log("Login successful, creating session...");
    // Clear any existing session first
    const session = await getUserSession(request);
    await session.unset("username");

    return createUserSession({
      username: username.toString(),
      redirectTo: "/admin/upload",
    });
  } catch (error) {
    console.error("Password verification error:", error);
    return json({ error: "An error occurred during login" }, { status: 500 });
  }
};

export default function AdminLogin() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Admin Login
          </h2>
        </div>
        <Form method="post" className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {actionData?.error && (
            <div className="text-red-500 text-sm">{actionData.error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
