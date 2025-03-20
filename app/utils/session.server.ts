import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

export const storage = createCookieSessionStorage({
  cookie: {
    name: "GRIT_admin_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

export async function createUserSession({
  username,
  redirectTo,
}: {
  username: string;
  redirectTo: string;
}) {
  const session = await storage.getSession();
  session.set("username", username);

  console.log("Creating session:", {
    username,
    redirectTo,
    hasSession: !!session,
  });

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  console.log("Getting user session:", {
    hasCookie: !!cookie,
    cookieValue: cookie,
  });
  return storage.getSession(cookie);
}

export async function requireAdminUser(request: Request) {
  const session = await getUserSession(request);
  const username = session.get("username");
  const expectedUsername = process.env.ADMIN_USERNAME;

  console.log("Session check:", {
    hasSession: !!session,
    username,
    expectedUsername,
    matches: username === expectedUsername,
    url: request.url,
  });

  // Only redirect if we don't have a valid session
  if (!username || username !== expectedUsername) {
    const url = new URL(request.url);

    // Don't redirect or destroy session if we're already on the login page
    // or if we're at the /admin root (which handles its own redirects)
    if (url.pathname === "/admin/login" || url.pathname === "/admin") {
      return null;
    }

    // For other protected routes, clear session and redirect
    throw redirect("/admin/login", {
      headers: {
        "Set-Cookie": await storage.destroySession(session),
      },
    });
  }

  return username;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/admin/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
