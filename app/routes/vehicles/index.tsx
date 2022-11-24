import { LoaderFunction, useLoaderData } from "remix";
import Button from "~/components/buttom";
import DropDown from "~/components/dropdown";
import Search from "~/components/form/search";
import Pagination from "~/components/pagination";
import Table from "~/components/table";

export let loader: LoaderFunction = async () => {
  try {
    const header = ["name", "type", "plate", "color", "owner", "action"];
    const body = [
      { name: "Avanza", type: "car", plate: "1222", color: "red", owner: "Jarwo" },
      { name: "Tesla", type: "car", plate: "3432", color: "white", owner: "Justin" },
    ];
    const table = { header, body };
    return { table };
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const loader = useLoaderData();
  return <Table header={loader.table.header} body={loader.table.body} />;
}
