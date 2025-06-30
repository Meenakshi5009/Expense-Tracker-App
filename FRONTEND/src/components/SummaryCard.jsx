// src/components/SummaryCard.jsx
import React from 'react';

export default function SummaryCard({ title, value, iconBg }) {
  return (
    <div className="bg-white p-7 rounded-2xl  flex items-center">
      {/* Colored icon circle */}
      <div className={`${iconBg} p-7 rounded-full mr-4`}>
        {/* Icon placeholder */}
      </div>
      <div>
        <h3 className="text-black-200">{title}</h3>
        <p className="text-2xl font-bold">${value} {/* Add dynamic value here */}</p>
      </div>
    </div>
  );
}
