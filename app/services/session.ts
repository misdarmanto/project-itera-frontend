import { createCookieSessionStorage, redirect, Session } from "remix";
import { CONFIG } from "~/config";
import { CONSOLE } from "~/utilities/log";

export let storage = createCookieSessionStorage({
    cookie: {
        name: CONFIG.session.name,
        secure: CONFIG.env == 'production',
        secrets: [CONFIG.session.secret],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 12,
        httpOnly: true,
    },
});

export async function createSession(data: any, redirectTo: string) {
    try {
        let session = await storage.getSession();
        session.set("admin_id", data.data.account.id)
        session.set("admin_name", data.data.account.name)
        session.set("phone", data.data.account.phone)
        session.set("email", data.data.account.email)
        session.set("role", data.data.account.role)
        session.set("session", data.data.session.session)
        session.set("expired_on", data.data.session.expired_on)
        session.set("modules", data.data.modules)
        return redirect(redirectTo, {
            headers: { "Set-Cookie": await storage.commitSession(session) }
        });
    } catch (error) {
        CONSOLE.log(error)
    }
}

export async function logout(request: Request) {
    let session = await storage.getSession(
        request.headers.get("Cookie")
    );
    return redirect("/login", {
        headers: {
            "Set-Cookie": await storage.destroySession(session)
        }
    });
}


export const checkSession = async (request: Request) => {
    const session = await storage.getSession(request.headers.get("Cookie"))
    const isLogedIn = session.has('admin_id')
    if (!isLogedIn) {
        return false;
    }
    return {
        admin_id: session.get("admin_id"),
        admin_name: session.get("admin_name"),
        phone: session.get("phone"),
        email: session.get("email"),
        role: session.get("role"),
        session: session.get("session"),
        expired: session.get("expired_on"),
        modules: session.get("modules")
    };
}
