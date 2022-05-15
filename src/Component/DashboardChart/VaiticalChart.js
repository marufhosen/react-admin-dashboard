import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "JAN",
    songDiscovered: 4000,
    songListened: 2400,
  },
  {
    name: "FEB",
    songDiscovered: 3000,
    songListened: 1398,
  },
  {
    name: "MAR",
    songDiscovered: 2000,
    songListened: 9800,
  },
  {
    name: "APR",
    songDiscovered: 2780,
    songListened: 3908,
  },
  {
    name: "MAY",
    songDiscovered: 1890,
    songListened: 4800,
  },
  {
    name: "JUN",
    songDiscovered: 2390,
    songListened: 3800,
  },
  {
    name: "JUL",
    songDiscovered: 3490,
    songListened: 4300,
  },
  {
    name: "AUG",
    songDiscovered: 3490,
    songListened: 4300,
  },
];

const VaiticalChart = () => {
  return (
    <div className="user__activity">
      <ResponsiveContainer aspect={1.4} width="100%" height="70%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="songDiscovered" stackId="a" fill="#4361ee" />
          <Bar
            radius={[2, 2, 2, 2]}
            dataKey="songListened"
            stackId="b"
            fill="#5E72E4"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VaiticalChart;
