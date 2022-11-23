import { LoaderFunction,  useLoaderData } from "remix";

export let loader: LoaderFunction = async () => {
  try {
    const posts = ""
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  return <h1>Settings</h1>;
}
