// src/layouts/AuthLayout.jsx
import React from 'react';
import xpenso from '../../assets/images/xpenso.png'; 
import images from '../../assets/images/rightxp.png'; 
const AuthLayout = ({ children}) => {
  return (
    <div className="min-h-screen bg-gray-200 flex">
      {/* Left side - Form */}
      <div className="w-full md:w-[40%] flex flex-col pt-4 md:pt-6 p-4 md:p-6 lg:p-10">
        <div className="-mt-4 mb-2 -ml-4">
          <img 
            src={xpenso}
            alt="Xpenso Logo" 
            className="h-16"
          />
        </div>
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-md mx-auto">
            {children}
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8 bg-gray-150 ">
        <div className="bg-white rounded-[20px] shadow-[3px_3px_2px_rgba(150,40,300,0.70)] p-8">
          <img 
            src={images} 
            alt="Auth Visual" 
            className="w-[600px] h-[640px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;