import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from '../TopBar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-300">
      
      <div className="flex-1 p-4">
        <TopBar />
        
        <Outlet />
        
      </div>
    </div>
  );
}
