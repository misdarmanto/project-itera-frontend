import { LoaderFunction, useLoaderData } from "remix";
import Button from "~/components/buttom";
import DropDown from "~/components/dropdown";
import Search from "~/components/form/search";
import Pagination from "~/components/pagination";
import Table from "~/components/table";

export let loader: LoaderFunction = async () => {
  try {
    const header = ["name", "email", "role", "RFID", "Vehicle Total", "action"];
    const body = [
      { name: "Jhon Doe", email: "mail@mail.com", role: "guest", RFID: "12122", vheicleTotal: "2" },
      { name: "Marrie Doe", email: "mail@mail.com", role: "admin", RFID: "12122", vheicleTotal: "1" },
      { name: "Jarwo", email: "mail@mail.com", role: "super admin", RFID: "12332", vheicleTotal: "5" },
      { name: "Jack", email: "mail@mail.com", role: "admin", RFID: "23122", vheicleTotal: "1" },
      { name: "Tukimin", email: "mail@mail.com", role: "super admin", RFID: "72632", vheicleTotal: "5" },
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
