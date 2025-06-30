import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";

const incomeData = [
  { date: "02 Mar", income: 70 },
  { date: "26 Feb", income: 20 },
  { date: "21 Feb", income: 30 },
  { date: "16 Feb", income: 55 },
  { date: "10 Feb", income: 60 },
  { date: "19 Jan", income: 50 },
  { date: "18 Jan", income: 0 },
  { date: "10 Jan", income: 45 },
  { date: "05 Jan", income: 50 },
  { date: "03 Jan", income: 30 },
  { date: "31 Dec", income: 80 },
  { date: "29 Dec", income: 40 },
];

const incomeSources = [
  { title: "Shopping", date: "17 February 2025", amount: 430 },
  { title: "Travel", date: "17 February 2025", amount: 800 },
  { title: "Electricity Bill", date: "15 February 2025", amount: 120 },
  { title: "Interest From Savings", date: "15 January 2025", amount: 40 },
  { title: "Grocery", date: "15 January 2025", amount: 220 },
  { title: "Water Bill", date: "12 January 2025", amount: 90 },
];

const Income = () => {
  return (
    <div className="flex min-h-screen bg-gray-300">
      <Sidebar />
      <div className="flex-1 p-4">

        {/* Income Overview Section */}
        <div className="rounded-[24px] bg-white p-4 mb-6 ">
          {/* Top Title Row */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Income Overview</h2>
            <button className="text-sm px-3 py-1 rounded-full bg-[#e6e6ec] hover:bg-gray-300 transition shadow-sm">
              + Income
            </button>
          </div>

          {/* Chart Card */}
          <div className="bg-white rounded-[24px] px-6 py-5 shadow-2xl">
            {/* Chart Tabs Row */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-[#0a66c2] border-b-2 border-[#0a66c2] pb-0.5">
                Bar
              </span>
              <span className="text-sm text-gray-400 font-medium tracking-wide">
                MORE
              </span>
            </div>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={incomeData}
                margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
              >
                <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#555", fontSize: 12 }}
                  axisLine={{ stroke: "#ccc" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#555", fontSize: 12 }}
                  axisLine={{ stroke: "#ccc" }}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(value) => [`$${value * 100}`, ""]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    fontSize: "13px",
                  }}
                  labelStyle={{ fontWeight: "bold" }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="square"
                  formatter={() => "2025"}
                />
                <Bar
                  dataKey="income"
                  fill="#a996fd"
                  radius={[6, 6, 0, 0]}
                  barSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Income Sources Section */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Income sources</h2>
            <button className="text-sm flex items-center gap-2 px-3 py-1 rounded-full bg-[#b1b1f6]">
              <FaDownload /> Download
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {incomeSources.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gradient-to-r from-[#ede9fe] to-[#f4f2ff] p-4 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {/* Circle Avatar Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-[#3d2f78]" />
                  <div>
                    <p className="font-semibold text-[#1c1c1e]">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
                <p className="text-green-600 font-semibold text-md">
                  +${item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Income;
