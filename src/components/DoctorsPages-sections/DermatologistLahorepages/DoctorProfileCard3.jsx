import React from 'react';

const DoctorProfileCard3 = () => {
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
                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1583916786_brig--dr--rehan-uddin.webp?t=1605638178" 
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
                <h1 className="text-[21px] text-black">Brig.(R) Dr. Rehan Uddin</h1>
              </div>
              <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
              <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S., F.C.P.S (Dermatology)</p>
              
              {/* Stats Section - Moved below qualifications */}
              <div className="flex w-[350px] mb-5 ml-3 mt-5">
                <div className="flex-1 border-r border-gray-400">
                  <p className="font-semibold text-sm text-gray-800">Under 15 Min</p>
                  <p className="text-gray-500 text-sm">Wait Time</p>
                </div>
                
                <div className="flex-1 text-center border-r border-gray-400">
                  <p className="font-semibold text-gray-800 text-sm">30 Years</p>
                  <p className="text-gray-500 text-sm">Experience</p>
                </div>
                
                <div className="flex-1 ml-4">
                  <p className="font-semibold text-gray-800 text-sm">98% (375)</p>
                  <p className="text-gray-500 text-sm">Satisfied Patients</p>
                </div>
              </div>
            </div>
          </div>

            {/* Consultation Info - Left aligned */}
            <div className="w-[330px] border border-gray-300 rounded-lg mb-3 bg-white">
                <div className="space-y-2">
                    <div className='ml-3 mt-3 flex items-center'>
                    <p className="text-sm font-medium">Center For Skin Problems (Cantt.)</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 ml-3">
                        <div className="flex items-center -mt-4">
                            {/* Calendar Icon */}
                            <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-black font-normal text-sm">M, Tu, W, Th, F</span>
                        </div>
                        <div className='-mt-3 mb-2'>
                            <p className="text-sm font-medium mr-3">Rs. 2,000</p>
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
              <button className="bg-blue-950 text-white rounded font-bold py-2 px-4 text-sm ml-28 w-[200px] h-12">
                Call Helpline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard3;