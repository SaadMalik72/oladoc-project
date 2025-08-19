import React from 'react';

const DoctorProfileCard15 = () => {
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
                    src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/3301-dr--farooq-tajammal.webp?t=1657786706" 
                    alt="Dr. Farooq Tajammal Khan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/80';
                    }}
                />
                </div>
                
                <div className="flex-1">
                <div className="flex justify-between items-center ml-3 mt-4">
                    <h1 className="text-[21px] text-black">DDr. Farooq Tajammal Khan</h1>
                </div>
                <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist, Plastic Surgeon</p>
                <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">F.C.P.S. (Plastic Surgery), D.Derm (London), F.R.C.S. (UK)</p>
                
                {/* Stats Section - Moved below qualifications */}
                <div className="flex w-[350px] mb-5 ml-3 mt-5">
                    <div className="flex-1 border-r border-gray-400">
                    <p className="font-semibold text-sm text-gray-800">Under 15 Min</p>
                    <p className="text-gray-500 text-sm">Wait Time</p>
                    </div>
                    
                    <div className="flex-1 text-center border-r border-gray-400">
                    <p className="font-semibold text-gray-800 text-sm">35 Years</p>
                    <p className="text-gray-500 text-sm">Experience</p>
                    </div>
                    
                    <div className="flex-1 ml-4">
                    <p className="font-semibold text-gray-800 text-sm">99% (482)</p>
                    <p className="text-gray-500 text-sm">Satisfied Patients</p>
                    </div>
                </div>
                </div>
            </div>

                {/* Consultation Info 1 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <p className="text-sm font-medium">Doctors Hospital (Johar Town)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 5,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>

            {/* Right Side Content - 30% width with large left margin */}
            <div className="w-[30%] ml-24 relative">
            {/* PADC Verified Badge - Absolutely positioned in top-right corner */}
            <div className="absolute -top-6 -right-6">
                <p className="font-normal text-white py-1 px-2 text-xs bg-slate-600 rounded-tr-lg rounded-bl-lg">
                PADC Verified
                </p>
            </div>
            
            {/* Buttons container - Original position */}
            <div className="sticky top-6 flex flex-col gap-3 pt-8">
                <div className="flex flex-col gap-3 w-full">
                <button className="text-blue-950 border border-blue-950 rounded px-4 py-2 text-[16px] hover:bg-blue-950 hover:text-white ml-28 w-[200px] h-12">
                    View Profile
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

export default DoctorProfileCard15;