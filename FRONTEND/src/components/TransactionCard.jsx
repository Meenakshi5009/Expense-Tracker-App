import React from 'react';

export default function TransactionCard({ title, date, amount }) {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#d1d0f9] via-[#e2e2f4] to-[#eee] p-4 rounded-lg shadow-sm mb-2">
      
      {/* 🟣 Added circle and text wrapper */}
      <div className="flex items-center">
        {/* 🟣 Pink circle */}
        <div className="w-10 h-10 rounded-full bg-[#3e2f72] mr-4"></div>

        {/* 🟣 Existing title and date */}
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Amount on the right */}
      <p className={`font-bold ${amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
        {amount}
      </p>
    </div>
  );
}
