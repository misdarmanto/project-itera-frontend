import { LoaderFunction, useLoaderData } from "remix";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Tab } from "@headlessui/react";
import Table from "~/components/table";

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
        CheckIn: "Thu Nov 24 2022 08:10:50",
        CheckOut: "waiting",
      },
      {
        owner: "Justin",
        name: "Nissan GT-R50",
        type: "Car",
        plate: "54332",
        RFID: "88122",
        CheckIn: "Thu Nov 24 2022 08:10:50",
        CheckOut: "waiting",
      },

      {
        owner: "Putri",
        name: "Ferrari 488 Pista",
        type: "Car",
        plate: "4632",
        RFID: "23122",
        CheckIn: "Thu Nov 24 2022 08:10:50",
        CheckOut: "Thu Nov 24 2022 08:10:50",
      },

      {
        owner: "Marrie Doe",
        name: "ducati panigale v4",
        type: "Motorcycle",
        plate: "45332",
        RFID: "97122",
        CheckIn: "Thu Nov 24 2022 08:10:50",
        CheckOut: "waiting",
      },
      {
        owner: "Maya",
        name: "lamborghini",
        type: "Motorcycle",
        plate: "1332",
        RFID: "432122",
        CheckIn: "Thu Nov 24 2022 08:10:50",
        CheckOut: "Thu Nov 24 2022 08:10:50",
      },
      {
        owner: "Jhon Doe",
        name: "Ferrari 599 GTO",
        type: "Car",
        plate: "5332",
        RFID: "12122",
        CheckIn: "Thu Nov 24 2022 08:10:50",
        CheckOut: "Thu Nov 24 2022 08:10:50",
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
    in: 400,
    out: 240,
  },
  {
    name: "Page B",
    in: 300,
    out: 138,
  },
  {
    name: "Page C",
    in: 200,
    out: 980,
  },
  {
    name: "Page D",
    in: 270,
    out: 398,
  },
  {
    name: "Page E",
    in: 180,
    out: 480,
  },
  {
    name: "Page F",
    in: 230,
    out: 380,
  },
  {
    name: "Page G",
    in: 340,
    out: 430,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const loader = useLoaderData();
  return (
    <Tab.Group>
      <Tab.List className="flex mt-10 bg-white overflow-x-auto rounded-t-md">
        {["Traffics", "Vehicles"].map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "w-full py-2 leading-5 text-md",
                "ring-white bg-gray-100 ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                selected ? "bg-white text-teal-500 border-b-2 border-teal-500" : "text-gray-900 hover:text-gray-400",
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="pt-5 mb-10 bg-white min-h-32 shadow-md rounded-md p-5">
        <Tab.Panel>
          <div className="p-5">
            <div className="flex items-center text-gray-500 mb-5">
              <h1 className="text-xl font-semibold mr-5">Traffics</h1>
              <div className="flex items-center">
                <div style={{ backgroundColor: "#14b8a6" }} className="h-5 w-5 mx-2 rounded-sm"></div>
                <h1>In</h1>
              </div>
              <div className="flex items-center">
                <div style={{ backgroundColor: "#ffc658" }} className="h-5 w-5 mx-2 rounded-sm"></div>
                <h1>Out</h1>
              </div>
            </div>
            <AreaChart
              width={700}
              height={250}
              data={data}
              margin={{
                top: 2,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="out" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="in" stroke="#14b8a6" fill="#14b8a6" />
            </AreaChart>
          </div>

          <Table header={loader.table.header} body={loader.table.body} />
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-5">
            <div className="flex items-center text-gray-500 mb-5">
              <h1 className="text-xl font-semibold mr-5">Vehicles</h1>
              <div className="flex items-center">
                <div style={{ backgroundColor: "#14b8a6" }} className="h-5 w-5 mx-2 rounded-sm"></div>
                <h1>Car</h1>
              </div>
              <div className="flex items-center">
                <div style={{ backgroundColor: "#ffc658" }} className="h-5 w-5 mx-2 rounded-sm"></div>
                <h1>Motorcycle</h1>
              </div>
            </div>
            <AreaChart
              width={700}
              height={250}
              data={data}
              margin={{
                top: 2,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="out" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="in" stroke="#14b8a6" fill="#14b8a6" />
            </AreaChart>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
