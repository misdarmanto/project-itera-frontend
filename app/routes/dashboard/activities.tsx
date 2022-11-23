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
    in: 4000,
    out: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    in: 3000,
    out: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    in: 2000,
    out: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    in: 2780,
    out: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    in: 1890,
    out: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    in: 2390,
    out: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    in: 3490,
    out: 4300,
    amt: 2100,
  },
];

export default function Index() {
  return (
    <div className="flex flex-wrap">
      <div className="bg-white rounded-md shadow-md p-8 m-5">
        <AreaChart
          width={450}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
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
        <AreaChart
          width={450}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
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
