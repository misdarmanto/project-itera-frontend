import { useState } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import Button from "~/components/buttom";
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Table
      header={loader.table.header}
      body={loader.table.body}
      actionComponent={(item: any) => (
        <>
          <Button title="More" onClick={() => setIsOpenModal(!isOpenModal)} />

          {isOpenModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-10"
                onClick={() => setIsOpenModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative flex justify-between h-96 w-full max-w-xl p-8 mx-auto bg-white rounded-md shadow-lg">
                  <h1>detail user</h1>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    />
  );
}
