import { LoaderFunction, useLoaderData } from "remix";
import { useState } from "react";
import Button from "~/components/buttom";
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
                  <h1>detail kendaran</h1>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    />
  );
}
