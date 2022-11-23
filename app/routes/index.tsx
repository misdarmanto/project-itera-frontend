import { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params, request }: { params: any; request: any }) => {
  return "";
};

export default function Index() {
  return <h1>Home</h1>;
}
