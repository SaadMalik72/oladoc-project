// components/Health.jsx
import React from 'react';

const Health = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Main Heading */}
            <h2 className="text-2xl font-semibold text-left mb-10 text-gray-800">
                Get specialized health care
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[430px]">
            {/* Health Cards Container - modified spacing */}
            <div className="bg-sky-100 rounded-xl shadow-md overflow-hidden transition-shadow w-[470px] h-28">
                    <div className="p-5 h-full flex justify-between">
                        <div className="flex flex-col justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 mt-2">Haleon Oral Health Care</h3>
                        <p className="text-gray-600 mb-4">Your ultimate guide to oral health</p>
                        </div>
                        <div className="w-20 h-full flex items-center">
                        <img 
                            src="https://oladoc.com/dist/images/compaign/sensodyne.webp?v=1748601204" 
                            alt="BOLO Health Logo" 
                            className="w-full h-full object-contain"
                        />
                        </div>
                    </div>
                </div>

                {/* BOLO Health Card - wider and shorter */}
                <div className="bg-pink-100 rounded-xl shadow-md overflow-hidden transition-shadow w-[470px] h-28">
                    <div className="p-5 h-full flex justify-between">
                        <div className="flex flex-col justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 mt-2">BOLO Health for Youth</h3>
                        <p className="text-gray-600 mb-4">Family planning & reproductive health services</p>
                        </div>
                        <div className="w-20 h-full flex items-center">
                        <img 
                            src="https://oladoc.com/dist/images/compaign/bolo.webp?v=1748601204" 
                            alt="BOLO Health Logo" 
                            className="w-full h-full object-contain"
                        />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Health;