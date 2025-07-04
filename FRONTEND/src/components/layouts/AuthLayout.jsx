import React from 'react';
import LOGO from "../../assets/images/logo2.png";
import RIGHT_IMAGE from "../../assets/images/illustration.jpeg";

const AuthLayout = ({ children }) => {
    return (
        <div className="w-screen h-screen flex flex-row bg-neutral-200">
            {/* Left Panel */}
            <div className="w-full md:w-[60vw] px-10 md:px-16 pt-8 pb-12 flex flex-col">
                <div className="flex flex-col items-start mb-10">
                    <img
                        src={LOGO}
                        alt="Xpenso Logo"
                        className="w-[50px] h-[50px] object-contain bg-transparent"
                    />
                    <h2 className="-mt-1 text-[11px] font-bold text-gray-900">Xpenso</h2>
                </div>

                <div className="flex-grow flex items-center justify-center">
                    <div className="w-full max-w-md">{children}</div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="hidden md:flex w-[40vw] h-full bg-transparent items-center justify-center px-8 py-12">
                <div className="w-full h-[95%] bg-white rounded-3xl shadow-[4px_4px_10px_rgba(168,85,247,0.2)] border border-violet-500 p-6 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-extrabold text-black">Xpenso.</h1>
                    <p className="text-sm text-primary font-semibold mt-2 uppercase tracking-wide">
                        Your All In One Budget Tracker
                    </p>
                    <img
                        src={RIGHT_IMAGE}
                        alt="Finance Illustration"
                        className="mt-10 max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

