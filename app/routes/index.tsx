import { LoaderFunction, useLoaderData } from "remix";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
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
  const pieChartData = [
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

  const lineChartData = [
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

  return (
    <div className="flex flex-wrap">
      <div className="flex bg-white rounded-md shadow-md h-72 p-8 m-5">
        <PieChart width={300} height={200}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
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

      <div className="p-2 bg-white shadow-md rounded-md m-5 h-72">
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
          width={500}
          height={200}
          data={lineChartData}
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

      <div className="flex flex-col justify-between m-5">
        <div className="flex items-center bg-white rounded-md shadow-md p-5 my-1 sm:w-96">
          <FaUsers className="text-3xl mr-5 text-gray-500" />
          <h1 className="text-md text-gray-500">1233 Users Registered</h1>
        </div>
        <div className="flex items-center bg-white rounded-md shadow-md p-5 my-2 sm:w-96">
          <FaCarSide className="text-3xl mr-5 text-gray-500" />
          <h1 className="text-md text-gray-500">500 Cars Registered</h1>
        </div>
        <div className="flex items-center bg-white rounded-md shadow-md p-5 my-2 sm:w-96">
          <FaMotorcycle className="text-3xl mr-5 text-gray-500" />
          <h1 className="text-md text-gray-500">1000 Motorcycles Registered</h1>
        </div>
      </div>
    </div>
  );
}
