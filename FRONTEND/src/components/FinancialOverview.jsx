import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

// Thin segments
const segmentCount = 80;
const valuePerSegment = 988.75;
const data = Array.from({ length: segmentCount }, (_, i) => ({
  name: `Segment ${i + 1}`,
  value: valuePerSegment,
}));

// Gradient from dark to light purple
const generateGradientColors = () => {
  const startColor = [35, 0, 120];
  const endColor = [160, 130, 255];

  return Array.from({ length: segmentCount }, (_, i) => {
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * (i / segmentCount));
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * (i / segmentCount));
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * (i / segmentCount));
    return `rgb(${r}, ${g}, ${b})`;
  });
};

const COLORS = generateGradientColors();

export default function FinancialOverview() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>

      <div className="w-full h-80 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              paddingAngle={1}
              dataKey="value"
              label={({ cx, cy }) => (
                <text x={cx} y={cy} fill="black" textAnchor="middle" dominantBaseline="central">
                  <tspan x={cx} dy="-0.6em" fontSize="14">Total Balance</tspan>
                  <tspan x={cx} dy="1.2em" fontSize="26" fontWeight="bold">$79,100</tspan>
                </text>
              )}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Static Visual Legend */}
      <div className="flex justify-center gap-4 mt-2">
        <div className="px-4 py-1 rounded-md shadow text-sm bg-gray-100 text-gray-800">
          Expenditure
        </div>
        <div className="px-4 py-1 rounded-md shadow text-sm bg-gray-100 text-gray-800">
          Balance
        </div>
        <div className="px-4 py-1 rounded-md shadow text-sm bg-gray-100 text-gray-800">
          Income
        </div>
      </div>
    </div>
  );
}
