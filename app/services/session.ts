import { createCookieSessionStorage, redirect, Session } from "remix";
import { CONFIG } from "~/config";
import { CONSOLE } from "~/utilities/log";

// let sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) throw new Error("SESSION_SECRET must be set");

export let storage = createCookieSessionStorage({
  cookie: {
    name: CONFIG.session.name,
    secure: CONFIG.env == "production",
    secrets: [CONFIG.session.secret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
    httpOnly: true,
  },
});

export async function createSession({ data, redirectTo }: { data: any; redirectTo: string }) {
  try {
    let session = await storage.getSession();
    session.set("userId", data.user.userId);
    session.set("role", data.user.role);
    session.set("session", data.session.session)
    return redirect(redirectTo, {
      headers: { "Set-Cookie": await storage.commitSession(session) },
    });
  } catch (error) {
    CONSOLE.log(error);
  }
}

export async function logout(request: Request) {
  let session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export const checkSession = async (request: Request) => {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const isLogedIn = session.has("userId");
  if (!isLogedIn) return false;
  return {
    userId: session.get("userId"),
    role: session.get("role"),
    session: session.get("session"),
  };
};
