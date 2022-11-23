import { LoaderFunction, useLoaderData } from "remix";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const loader: LoaderFunction = async () => {
  try {
    const posts = "";
    return posts;
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

export default function Index() {
  return (
    <div className="flex flex-wrap">
      <div className="bg-white rounded-md shadow-md p-8 m-5">
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
          width={400}
          height={250}
          data={data}
          margin={{
            top: 10,
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

      <div className="bg-white rounded-md shadow-md p-8 m-5">
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
          width={400}
          height={250}
          data={data}
          margin={{
            top: 10,
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
    </div>
  );
}
