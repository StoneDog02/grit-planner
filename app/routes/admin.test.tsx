import React from "react";
import { json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  console.log("Test route loaded");
  return json({ message: "Test route loaded" });
};

export const action: ActionFunction = async ({ request }) => {
  console.log("Test route action called");
  return json({ message: "Test action called" });
};

export default function AdminTest() {
  return (
    <div className="p-4">
      <h1>Test Route</h1>
      <form method="post">
        <button type="submit">Test Post</button>
      </form>
    </div>
  );
}
