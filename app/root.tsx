import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "remix";
import type { MetaFunction } from "remix";
import rootStyles from "~/styles/tailwind.css";
import globalStyle from "~/styles/global.css";
import Layout from "./components/Layout";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_ITERA.png/600px-Logo_ITERA.png",
      type: "image/png",
    },
    { rel: "stylesheet", href: rootStyles },
    { rel: "stylesheet", href: globalStyle },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Kitera" };
};

// export let loader: LoaderFunction = async ({ params, request }: { params: any; request: any }) => {
//   const session: any = await checkSession(request);
//   try {
//     return {
//       session: session,
//     };
//   } catch (error) {
//     CONSOLE.log(error);
//     return { error_message: "error_message" };
//   }
// };

export default function App() {
  let location = useLocation();
  const loader = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {location.pathname.includes("login") || location.pathname.includes("signup") ? (
          <>
            <Outlet />
          </>
        ) : (
          <Layout>
            <Outlet />
          </Layout>
        )}
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}
