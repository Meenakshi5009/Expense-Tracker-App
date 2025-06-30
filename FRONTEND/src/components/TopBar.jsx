import React from 'react';
import logo from '../assets/images/logotops.png'; // adjust if your path differs

export default function TopBar() {
  return (
    <div className="w-full bg-[#6f54a3] rounded-xl p-3 flex items-center shadow-md mb-4">
      <img src={logo} alt="Xpenso Logo" className="h-8 mr-2" />
      <span className="text-white font-bold text-xl">Xpenso.</span>
    </div>
  );
}
