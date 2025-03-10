import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "GRIT_admin_session",
    secure: true,
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
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function requireAdminUser(request: Request) {
  const session = await getUserSession(request);
  const username = session.get("username");

  if (!username || username !== process.env.ADMIN_USERNAME) {
    throw redirect("/admin/login");
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
