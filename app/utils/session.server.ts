import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "GRIT_admin_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    domain: process.env.NODE_ENV === "production" ? ".netlify.app" : undefined,
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
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return storage.getSession(cookie);
}

export async function requireAdminUser(request: Request) {
  const session = await getUserSession(request);
  const username = session.get("username");

  console.log("Session check:", {
    hasSession: !!session,
    username,
    expectedUsername: process.env.ADMIN_USERNAME,
    matches: username === process.env.ADMIN_USERNAME,
  });

  if (!username || username !== process.env.ADMIN_USERNAME) {
    // Clear any existing session before redirecting
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
