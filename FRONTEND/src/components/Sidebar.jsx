import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaDollarSign,
  FaSignOutAlt,
} from 'react-icons/fa';
import { FiTrendingUp, FiGrid } from 'react-icons/fi';
import { UserIcon, PencilIcon } from '@heroicons/react/24/outline'; // Updated import

export default function Sidebar() {
  return (
    <div className="bg-white rounded-xl w-64 min-h-screen p-4 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-16 h-16">
          {/* Profile Icon */}
          <div className="bg-[#4b3c78] shadow-sm overflow-hidden rounded-full w-full h-full flex items-center justify-center">
            <UserIcon className="text-[#e0dcea] translate-y-2 w-16 h-16" />
          </div>

          {/* Pencil Icon */}
          <div className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-1">
            <PencilIcon className="w-3 h-3 text-black" />
          </div>
        </div>

        <span className="text-black font-bold mt-2">John Smith</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center px-4 py-4 rounded-2xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-[#6a50a7] text-black'
                : 'bg-white text-black hover:bg-pink-100'
            }`
          }
        >
          <FiGrid className="mr-3 text-2xl" /> Dashboard
        </NavLink>

        <NavLink
          to="/income"
          className={({ isActive }) =>
            `flex items-center px-4 py-4 rounded-2xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-[#6a50a7] text-black'
                : 'bg-white text-black hover:bg-pink-100'
            }`
          }
        >
          <FaDollarSign className="mr-3 text-2xl" /> Income
        </NavLink>

        <NavLink
          to="/expense"
          className={({ isActive }) =>
            `flex items-center px-4 py-4 rounded-2xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-[#e178b6] text-black'
                : 'bg-white text-black hover:bg-pink-100'
            }`
          }
        >
          <FiTrendingUp className="mr-3 text-2xl" /> Expense
        </NavLink>

        <NavLink
          to="/logout"
          className="flex items-center px-4 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-pink-100 transition-all duration-200"
        >
          <FaSignOutAlt className="mr-3 text-2xl" /> Logout
        </NavLink>
      </nav>
    </div>
  );
}
