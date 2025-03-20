import React from "react";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import {
  createUserSession,
  getUserSession,
  storage,
} from "../utils/session.server";
import bcrypt from "bcryptjs";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

interface ActionData {
  error?: string;
}

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const username = formData.get("username")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    // Get environment variables
    const storedHash = process.env.ADMIN_PASSWORD_HASH || "";
    const storedUsername = process.env.ADMIN_USERNAME || "";

    // Debug environment variables
    console.log("Environment Debug:");
    console.log("Raw stored hash:", storedHash);
    console.log("Raw stored username:", storedUsername);
    console.log("Hash length:", storedHash.length);
    console.log("Username length:", storedUsername.length);

    // Basic validation
    if (!username || !password) {
      return json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Clean the hash (remove quotes and trim)
    const cleanHash = storedHash.replace(/^["']|["']$/g, "").trim();
    console.log("Cleaned hash:", cleanHash);
    console.log("Cleaned hash length:", cleanHash.length);

    // Simple credential check
    const isValidUsername = username === storedUsername;

    console.log("Username comparison:", {
      provided: username,
      stored: storedUsername,
      matches: isValidUsername,
    });

    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, cleanHash);
      console.log("Password validation result:", isValidPassword);
    } catch (error) {
      console.error("bcrypt error:", error);
      return json({ error: "Error validating credentials" }, { status: 500 });
    }

    if (!isValidUsername || !isValidPassword) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create new session
    return createUserSession({
      username,
      redirectTo: "/admin/upload",
    });
  } catch (error) {
    console.error("Login error:", error);
    return json({ error: "An error occurred during login" }, { status: 500 });
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getUserSession(request);
  const username = session.get("username");

  console.log("Login page loader:", {
    hasSession: !!session,
    username,
    expectedUsername: process.env.ADMIN_USERNAME,
  });

  // Only redirect if we have a valid session
  if (username && username === process.env.ADMIN_USERNAME) {
    console.log("Valid session found, redirecting to upload");
    return redirect("/admin/upload");
  }

  // Otherwise, allow login page to render
  console.log("No valid session, showing login page");
  return null;
};

export default function Login() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {actionData?.error && (
            <div className="text-red-600 text-sm">{actionData.error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
