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
  return (
    <div className="bg-white w-full h-96 rounded-md shadow-md"></div>
  )
}
