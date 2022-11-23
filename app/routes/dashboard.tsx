import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { API } from "~/services/api";
import { CONFIG } from "~/config";
import Layout from "~/components/Layout";

export let loader: LoaderFunction = async () => {
  try {
    const posts = ""
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const posts = useLoaderData();
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
