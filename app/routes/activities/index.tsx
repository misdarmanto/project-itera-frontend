import { LoaderFunction, useLoaderData } from "remix";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Tab } from "@headlessui/react";
import Table from "~/components/table";
import Button from "~/components/buttom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export let loader: LoaderFunction = async () => {
  try {
    const header = ["Owner", "Name", "Type", "Plate", "RFID", "Check In", "Check car", "Action"];
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

const data = [
  {
    name: "Page A",
    motorcycle: 400,
    car: 240,
  },
  {
    name: "Page B",
    motorcycle: 300,
    car: 138,
  },
  {
    name: "Page C",
    motorcycle: 200,
    car: 980,
  },
  {
    name: "Page D",
    motorcycle: 270,
    car: 398,
  },
  {
    name: "Page E",
    motorcycle: 180,
    car: 480,
  },
  {
    name: "Page F",
    motorcycle: 230,
    car: 380,
  },
  {
    name: "Page G",
    motorcycle: 340,
    car: 430,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const loader = useLoaderData();
  let [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <div className="p-5 bg-white shadow-sm rounded-md">
        <div className="flex items-center text-gray-500 mb-5">
          <div className="flex items-center">
            <div style={{ backgroundColor: "#14b8a6" }} className="h-5 w-5 mx-2 rounded-sm"></div>
            <h1>Motorcycle</h1>
          </div>
          <div className="flex items-center">
            <div style={{ backgroundColor: "#ffc658" }} className="h-5 w-5 mx-2 rounded-sm"></div>
            <h1>car</h1>
          </div>
          <h1 className="text-xl font-semibold ml-10">Traffics</h1>
        </div>
        <AreaChart
          width={700}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="car" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="motorcycle" stroke="#14b8a6" fill="#14b8a6" />
        </AreaChart>
      </div>

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
                      src="https://cdn.motor1.com/images/mgl/P33WYL/s3/ferrari-sp48-unica.jpg"
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
