import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    uv: 4000,
    sales: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    sales: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 2000,
    sales: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    uv: 2780,
    sales: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    uv: 1890,
    sales: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    uv: 2390,
    sales: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    uv: 3490,
    sales: 4300,
    amt: 2100,
  },
];

const VaiticalChart = () => {
  return (
    <body
      style={{
        boxSizing: "border-box",
        padding: " 10px",
        // width: "80%",
        height: "300px",
      }}
    >
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </body>
  );
};

export default VaiticalChart;
