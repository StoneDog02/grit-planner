import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getUserSession } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const session = await getUserSession(request);
  const username = session.get("username");

  // If we're on the login page and not authenticated, allow access
  if (url.pathname === "/admin/login") {
    if (username === process.env.ADMIN_USERNAME) {
      // If already authenticated, redirect to upload page
      return redirect("/admin/upload");
    }
    return null;
  }

  // For all other admin routes, require authentication
  if (username !== process.env.ADMIN_USERNAME) {
    return redirect("/admin/login");
  }

  // Allow access to protected routes if authenticated
  return null;
};

export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}
