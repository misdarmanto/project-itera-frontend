import { LoaderFunction, useLoaderData } from "remix";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { FaUsers, FaCarSide, FaMotorcycle } from "react-icons/fa";


export let loader: LoaderFunction = async () => {
  try {
    const posts = "";
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const data = [
    { name: "Motorcycle", value: 500 },
    { name: "Car", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex bg-white rounded-md shadow-md p-8 m-5 sm:w-96">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="ml-5">
          <div className="flex items-center mb-5">
            <div style={{ backgroundColor: "#0088FE" }} className="h-5 w-5 mx-2 rounded-full"></div>
            <h1 className="text-md font-semibold text-gray-500">Motorcycle</h1>
          </div>
          <div className="flex items-center mb-5">
            <div style={{ backgroundColor: "#00C49F" }} className="h-5 w-5 mx-2 rounded-full"></div>
            <h1 className="text-md font-semibold text-gray-500">Car</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex items-center bg-white rounded-md shadow-md p-5 m-5 sm:w-96">
          <FaUsers className="text-3xl mr-5 text-gray-500" />
          <h1 className="text-md text-gray-500">1233 Users Registered</h1>
        </div>
        <div className="flex items-center bg-white rounded-md shadow-md p-5 m-5 sm:w-96">
          <FaCarSide className="text-3xl mr-5 text-gray-500" />
          <h1 className="text-md text-gray-500">500 Cars Registered</h1>
        </div>
        <div className="flex items-center bg-white rounded-md shadow-md p-5 m-5 sm:w-96">
          <FaMotorcycle className="text-3xl mr-5 text-gray-500" />
          <h1 className="text-md text-gray-500">1000 Motorcycles Registered</h1>
        </div>
      </div>
    </div>
  );
}
