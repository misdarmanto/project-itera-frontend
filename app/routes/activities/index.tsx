import { LoaderFunction, useLoaderData } from "remix";
import { Tab } from "@headlessui/react";
import Table from "~/components/table";
import Button from "~/components/buttom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export let loader: LoaderFunction = async () => {
  try {
    const header = ["Owner", "Name", "Type", "Plate", "RFID", "Check In", "Check Out", "Action"];
    const body = [
      {
        owner: "Budi",
        name: "ninja h2r",
        type: "Motorcycle",
        plate: "7332",
        RFID: "74122",
        Checkmotorcycle: "Thu Nov 24 2022 08:10:50",
        Checkcar: "waiting",
      },
      {
        owner: "Justin",
        name: "Nissan GT-R50",
        type: "Car",
        plate: "54332",
        RFID: "88122",
        Checkmotorcycle: "Thu Nov 24 2022 08:10:50",
        Checkcar: "waiting",
      },

      {
        owner: "Putri",
        name: "Ferrari 488 Pista",
        type: "Car",
        plate: "4632",
        RFID: "23122",
        Checkmotorcycle: "Thu Nov 24 2022 08:10:50",
        Checkcar: "Thu Nov 24 2022 08:10:50",
      },

      {
        owner: "Marrie Doe",
        name: "ducati panigale v4",
        type: "Motorcycle",
        plate: "45332",
        RFID: "97122",
        Checkmotorcycle: "Thu Nov 24 2022 08:10:50",
        Checkcar: "waiting",
      },
      {
        owner: "Maya",
        name: "lamborghini",
        type: "Motorcycle",
        plate: "1332",
        RFID: "432122",
        Checkmotorcycle: "Thu Nov 24 2022 08:10:50",
        Checkcar: "Thu Nov 24 2022 08:10:50",
      },
      {
        owner: "Jhon Doe",
        name: "Ferrari 599 GTO",
        type: "Car",
        plate: "5332",
        RFID: "12122",
        Checkmotorcycle: "Thu Nov 24 2022 08:10:50",
        Checkcar: "Thu Nov 24 2022 08:10:50",
      },
    ];
    const table = { header, body };
    return { table };
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const loader = useLoaderData();
  let [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Table
        header={loader.table.header}
        body={loader.table.body}
        actionComponent={() => (
          <>
            <Button title="More" onClick={() => setIsOpenModal(!isOpenModal)} />

            {isOpenModal && (
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-10"
                  onClick={() => setIsOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative flex justify-between w-full max-w-xl p-8 mx-auto bg-white rounded-md shadow-lg">
                    <img
                      className="max-w-xs h-auto rounded-md"
                      src="https://static.republika.co.id/uploads/images/inpicture_slide/sejumlah-pengendara-motor-memakai-sandal-jepit-melintas-di-jalan_220614151142-539.jpg"
                      alt="image vehecle"
                    />
                    <h1>detail kendaraan</h1>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
}
