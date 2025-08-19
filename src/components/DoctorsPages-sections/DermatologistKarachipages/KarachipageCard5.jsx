import React from 'react';

const KarachipageCard5 = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1583750796_87e84ef0-5938-4657-b22a-09676d6fa349.webp?t=1740227352" 
                                alt="Dr. Attia Tabassum"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Ashba Nasir Cheema</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Laser Specialist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S., M.C.P.S, M.D.</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">Under 15 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">15 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">98% (1353)</p>
                                    <p className="text-gray-500 text-sm">Satisfied Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consultation Boxes - Now side by side */}
                    <div className="flex gap-4">
                        {/* Consultation Info 1 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <svg className="w-5 h-5 p-1 mr-2 rounded-full text-white bg-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium">Online Video Consultation</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 1,500</p>
                                    </div>
                                </div>

                                <div className="bg-blue-900 p-1 rounded-b-md">
                                    <p className="text-white text-xs font-normal text-center">Pay Online & Get 10% OFF</p>
                                </div>
                            </div>
                        </div>

                        {/* Consultation Info 2 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <svg className="w-5 h-5 p-1 mr-2 rounded-full text-white bg-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium">Experts Skin and Laser Clinic (Lahore) (DHA)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,500</p>
                                    </div>
                                </div>

                                <div className="bg-blue-900 p-1 rounded-b-md">
                                    <p className="text-white text-xs font-normal text-center">Pay Online & Get Upto 15% OFF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Content - 30% width with large left margin */}
                <div className="w-[30%] ml-24 relative">
                    {/* PADC Verified Badge */}
                    <div className="absolute -top-6 -right-6">
                        <p className="font-normal text-white py-1 px-2 text-xs bg-slate-600 rounded-tr-lg rounded-bl-lg">
                            PADC Verified
                        </p>
                    </div>
                    
                    {/* Buttons container */}
                    <div className="sticky top-6 flex flex-col gap-3 pt-8">
                        <div className="flex flex-col gap-3 w-full">
                            <button className="text-blue-950 border border-blue-950 rounded px-4 py-2 text-[16px] hover:bg-blue-950 hover:text-white ml-28 w-[200px] h-12">
                                Video Consultation
                            </button>
                            <button className="bg-orange-400 text-white rounded font-bold py-2 px-4 text-sm ml-28 w-[200px] h-12">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KarachipageCard5;