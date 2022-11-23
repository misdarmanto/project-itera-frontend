import { LoaderFunction, useLoaderData } from "remix";
import { API } from "~/services/api";
import { CONFIG } from "~/config";

export let loader: LoaderFunction = async () => {
  try {
    const posts = await API.get(`${CONFIG.base_url_api.media}/post/list`);
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const posts = useLoaderData();
  return <h1>Home</h1>
}
