import React from 'react';

const IslamabadpageCard1 = () => {
  return (
    <div>
      {/* Card 1 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
      {/* Main Content Container */}
      <div className="flex justify-between">
        {/* Left Side Content - 60% width */}
        <div className="w-[60%]">
          {/* Doctor Header with Image */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
              <img 
                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1692364507_d41f2af4-a4ca-4101-8cc7-dc766b7097b2.webp?t=1692851523" 
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
                <h1 className="text-[23px] font-normal text-black">Dr. Sadaf Khalid</h1>
                {/* Right side image */}
                <img 
                  src="https://oladoc.com/dist/images/platinum-badge.svg" 
                  alt="Badge"
                  className="w-[190px] h-full rounded-full object-cover mr-[120px]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/40';
                  }}
                />
              </div>
              <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
              <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S., F.C.P.S (Dermatology)</p>
              
              {/* Stats Section - Moved below qualifications */}
              <div className="flex w-[350px] mb-5 ml-3 mt-5">
                <div className="flex-1 border-r border-gray-400">
                  <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                  <p className="text-gray-500 text-sm">Wait Time</p>
                </div>
                
                <div className="flex-1 text-center border-r border-gray-400">
                  <p className="font-semibold text-gray-800 text-sm">5 Years</p>
                  <p className="text-gray-500 text-sm">Experience</p>
                </div>
                
                <div className="flex-1 ml-4">
                  <p className="font-semibold text-gray-800 text-sm">98% (740)</p>
                  <p className="text-gray-500 text-sm">Satisfied Patients</p>
                </div>
              </div>
            </div>
          </div>

            {/* Consultation Info - Left aligned */}
            <div className="w-[330px] border border-gray-300 rounded-lg mb-3 bg-white">
                <div className="space-y-2 ">
                    <div className='ml-3 mt-3 flex items-center'>
                    {/* Video Icon */}
                    <svg className="w-5 h-5 p-1 mr-2 rounded-full text-white bg-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Online Video Consultation</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 ml-3">
                    <div className="flex items-center -mt-4">
                        {/* Green Dot */}
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-green-600 text-sm">Online</span>
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

      {/* Card 2 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
        {/* Main Content Container */}
        <div className="flex justify-between">
          {/* Left Side Content - 60% width */}
          <div className="w-[60%]">
            {/* Doctor Header with Image */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                <img 
                  src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1677049994_b9d31b91-c1cf-42a0-b54e-56f020d75d2b.webp?t=1741073881" 
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
                  <h1 className="text-[23px] font-normal text-black">Dr. Attia Tabassum</h1>
                  {/* Right side image */}
                  <img 
                    src="https://oladoc.com/dist/images/platinum-badge.svg" 
                    alt="Badge"
                    className="w-[190px] h-full rounded-full object-cover mr-[120px]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/40';
                    }}
                  />
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
                    <p className="font-semibold text-gray-800 text-sm">10 Years</p>
                    <p className="text-gray-500 text-sm">Experience</p>
                  </div>
                  
                  <div className="flex-1 ml-4">
                    <p className="font-semibold text-gray-800 text-sm">99% (601)</p>
                    <p className="text-gray-500 text-sm">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>

              {/* Consultation Info - Left aligned */}
              <div className="w-[330px] border border-gray-300 rounded-lg mb-3 bg-white">
                  <div className="space-y-2 ">
                      <div className='ml-3 mt-3 flex items-center'>
                      {/* Video Icon */}
                      <svg className="w-5 h-5 p-1 mr-2 rounded-full text-white bg-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">Online Video Consultation</p>
                      </div>

                      <div className="flex items-center justify-between pt-2 ml-3">
                      <div className="flex items-center -mt-4">
                          {/* Green Dot */}
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

      {/* Card 3 */}
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

      {/* Card 4 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1720071448_Dr_Saba_Hameed-removebg-preview.webp?t=1720071449';" 
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
                                <h1 className="text-[23px] font-normal text-black">Dr. Saba Hameed</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Aesthetic Physician</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, Diploma in Clinical Dermatology (London), AARM, AAPP</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">Under 15</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">12 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">98% (62)</p>
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
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
                                    </div>
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
                                    <p className="text-sm font-medium">Dr Hameed's Clinic (DHA)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
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

      {/* Card 5 */}
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

      {/* Card 6 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1567510418_dfc011c1-cb62-45aa-aa4e-3508ae7d69be.webp?t=1725863770" 
                                alt="Dr. Munazza Nasir"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Munazza Nasir</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Aesthetic Physician, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S, M.C.P.S (Derma), AAAM</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">15 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">99% (241)</p>
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
                                    <p className="text-sm font-medium">Health Plus Speciality Clinics (Bahria Town)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 2,000</p>
                                    </div>
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

      {/* Card 7 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
        {/* Main Content Container */}
        <div className="flex justify-between">
            {/* Left Side Content - 60% width */}
            <div className="w-[60%]">
            {/* Doctor Header with Image */}
            <div className="flex items-start gap-4 mb-6">
                <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                <img 
                    src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1550644749_adnan-mehmood.webp?t=1605633635" 
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
                    <h1 className="text-[23px] font-normal text-black">Dr. Adnan Mehmood</h1>
                </div>
                <p className="text-gray-800 ml-3 mt-2">Dermatologist, Hair Transplant Surgeon</p>
                <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, M.D (Dermatology), Post Graduation Diploma in Aesthetic Dermato...</p>
                
                {/* Stats Section - Moved below qualifications */}
                <div className="flex w-[350px] mb-5 ml-3 mt-5">
                    <div className="flex-1 border-r border-gray-400">
                    <p className="font-semibold text-sm text-gray-800">Under 15 Min</p>
                    <p className="text-gray-500 text-sm">Wait Time</p>
                    </div>
                    
                    <div className="flex-1 text-center border-r border-gray-400">
                    <p className="font-semibold text-gray-800 text-sm">20 Years</p>
                    <p className="text-gray-500 text-sm">Experience</p>
                    </div>
                    
                    <div className="flex-1 ml-4">
                    <p className="font-semibold text-gray-800 text-sm">96% (2092)</p>
                    <p className="text-gray-500 text-sm">Satisfied Patients</p>
                    </div>
                </div>
                </div>
            </div>

                {/* Consultation Info - Left aligned */}
                <div className="w-[330px] border border-gray-300 rounded-lg mb-3 bg-white">
                    <div className="space-y-2 ">
                        <div className='ml-3 mt-3 flex items-center'>
                        {/* Video Icon */}
                        <svg className="w-5 h-5 p-1 mr-2 rounded-full text-white bg-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium">Online Video Consultation</p>
                        </div>

                        <div className="flex items-center justify-between pt-2 ml-3">
                        <div className="flex items-center -mt-4">
                            {/* Green Dot */}
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

      {/* Card 8 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1485335251_61.webp?t=1740227125" 
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
                                <h1 className="text-[23px] font-normal text-black">Assoc. Prof. Dr. Uzma Sarwar</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Aesthetic Physician, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, FCPS (Dermatology), CHPE, Certified in Aesthetic Physician</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">18 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">99% (511)</p>
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
                                    <p className="text-sm font-medium">Derma Excellence (Skin & Aesthetic Clinic)...</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
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

      {/* Card 9 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1540453796_dr-tahir-kamal-lahore-dpedited.webp?t=1627974922;" 
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
                                <h1 className="text-[23px] font-normal text-black">Dr. Tahir Kamal</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetic Surgeon, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, FCPS (Dermatology), MAACS (USA), DDSC (UK)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">Under 15</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">30 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">97% (772)</p>
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
                                    <p className="text-sm font-medium">Skin Life Clinic (Cavalry Ground)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 4,500</p>
                                    </div>
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
                                    <p className="text-sm font-medium">Integrated Medical Hospital (DHA)</p>
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

      {/* Card 10 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1703676065_WhatsAppImage2023-12-26at4.02.24PM.webp?t=1746421635" 
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
                                <h1 className="text-[23px] font-normal text-black">Dr. Mahru Usman</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, MCPS (Dermatology), Certificate in Aesthetic Medicine (USA)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">13 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">98% (188)</p>
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

      {/* Card 11 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1658304917_7fe7e56c-190c-4eb3-b63e-132b60c0632b.webp?t=1740227211" 
                                alt="Dr. Alina Abbas"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Alina Abbas</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S., F.C.P.S.</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">8 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">100% (1064)</p>
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
                                    <p className="text-sm font-medium">Ihsan Mumtaz Hospital (Johar Town)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 2,500</p>
                                    </div>
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

      {/* Card 12 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1606199219_rabiaishfaq.webp?t=1627977221;" 
                                alt="Assist. Prof. Dr. Rabia Ishfaq"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Assist. Prof. Dr. Rabia Ishfaq</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Laser Specialist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S, F.C.P.S (Dermatology)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">Under 15</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">17 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">96% (869)</p>
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
                                    <p className="text-sm font-medium">Hameedah Memorial Hospital (Valencia Town)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 2,500</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consultation Info 2 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <p className="text-sm font-medium">Alshifa Surgical and General Hospital (Kamoke)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 1,000</p>
                                    </div>
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

                    {/* Consultation Info 3 */}
                    <div className="w-[330px] border border-gray-300 rounded-lg bg-white mt-[70px] -ml-24">
                        <div className="space-y-2">
                            <div className='ml-3 mt-3 flex items-center'>
                                <p className="text-sm font-medium">Skin Laser and Aesthetic Clinic by dr Rabia Ishfaq</p>
                            </div>

                            <div className="flex items-center justify-between pt-2 ml-3">
                                <div className="flex items-center -mt-4">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span className="text-green-600 text-sm">Available today</span>
                                </div>
                                <div className='-mt-3 mb-2'>
                                    <p className="text-sm font-medium mr-3">Rs. 2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Card 13 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1560421606_saadiya.webp?t=1744265707" 
                                alt="Assist. Prof. Dr. Saadiya Siddiqui"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Assist. Prof. Dr. Saadiya Siddiqui</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, FCPS (Dermatology)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">18 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">100% (118)</p>
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
                                        <p className="text-sm font-medium mr-3">Rs. 2,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consultation Info 2 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <p className="text-sm font-medium">Experts Skin and Laser Clinic (Lahore) (DHA)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
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

      {/* Card 14 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1579518708_dr_sheeza_ali_edited.webp?t=1605629422" 
                                alt="Dr. Sheeza Ali"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Sheeza Ali</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Aesthetic Physician, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS (Gold Medalist), MCPS (Dermatology), Certified in Aesthetics by A...</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">10 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">99% (195)</p>
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
                                        <span className="text-green-600 text-sm">Available Web, jul 16</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 4,000</p>
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
                                    <p className="text-sm font-medium">Integrated Medical Hospital (DHA)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available Web, Jul 16</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 5,000</p>
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

      {/* Card 15 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1645768204_WhatsAppImage2022-02-21at9.46.57AM-min.webp?t=1737964210" 
                                alt="Dr. Nida Eily"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Nida Eily</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, FCPS (Dermatology)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">30 - 45 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">4 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">99% (93)</p>
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
                                    <p className="text-sm font-medium">Health Care Hospital (Bedian Road) (Bedian...</p>
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
                            </div>
                        </div>

                        {/* Consultation Info 2 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <p className="text-sm font-medium">Skin Sculpt (DHA)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
                                    </div>
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

      {/* Card 16 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1550654346_Wajieha-saeed.webp?t=1687349167" 
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
                                <h1 className="text-[23px] font-normal text-black">Dr. Wajieha Saeed</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, FCPS (Dermatology)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">16 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">98% (1500)</p>
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
                                        <p className="text-sm font-medium mr-3">Rs. 5,000</p>
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
                                    <p className="text-sm font-medium">Enhance Derma & Laser Clinic (Cavalry...</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
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

      {/* Card 17 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
        {/* Main Content Container */}
        <div className="flex justify-between">
            {/* Left Side Content - 60% width */}
            <div className="w-[60%]">
            {/* Doctor Header with Image */}
            <div className="flex items-start gap-4 mb-6">
                <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                <img 
                    src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1553494280_qurat-ul-ain-sajjida.webp?t=1605618913" 
                    alt="Dr. Quratul Ain Sajida"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/80';
                    }}
                />
                </div>
                
                <div className="flex-1">
                <div className="flex justify-between items-center ml-3 mt-4">
                    <h1 className="text-[21px] text-black">Dr. Quratul Ain Sajida</h1>
                </div>
                <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, MCPS (Dermatology)</p>
                
                {/* Stats Section - Moved below qualifications */}
                <div className="flex w-[350px] mb-5 ml-3 mt-5">
                    <div className="flex-1 border-r border-gray-400">
                    <p className="font-semibold text-sm text-gray-800">Under 15 Min</p>
                    <p className="text-gray-500 text-sm">Wait Time</p>
                    </div>
                    
                    <div className="flex-1 text-center border-r border-gray-400">
                    <p className="font-semibold text-gray-800 text-sm">32 Years</p>
                    <p className="text-gray-500 text-sm">Experience</p>
                    </div>
                    
                    <div className="flex-1 ml-4">
                    <p className="font-semibold text-gray-800 text-sm">97% (1824)</p>
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
                                        <p className="text-sm font-medium mr-3">Rs. 3,500</p>
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

      {/* Card 18 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
        {/* Main Content Container */}
        <div className="flex justify-between">
            {/* Left Side Content - 60% width */}
            <div className="w-[60%]">
            {/* Doctor Header with Image */}
            <div className="flex items-start gap-4 mb-6">
                <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                <img 
                    src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/default/general_doc_orig.png?t=0" 
                    alt="Dr. Azfreen Imtiaz"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/80';
                    }}
                />
                </div>
                
                <div className="flex-1">
                <div className="flex justify-between items-center ml-3 mt-4">
                    <h1 className="text-[23px] font-normal text-black">Dr. Azfreen Imtiaz</h1>
                </div>
                <p className="text-gray-800 ml-3">Dermatologist, Cosmetologist</p>
                <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, MCPS (Dermatology)</p>
                
                {/* Stats Section - Moved below qualifications */}
                <div className="flex w-[350px] mb-5 ml-3 mt-5">
                    <div className="flex-1 border-r border-gray-400">
                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                    <p className="text-gray-500 text-sm">Wait Time</p>
                    </div>
                    
                    <div className="flex-1 text-center border-r border-gray-400">
                    <p className="font-semibold text-gray-800 text-sm">23 Years</p>
                    <p className="text-gray-500 text-sm">Experience</p>
                    </div>
                    
                    <div className="flex-1 ml-4">
                    <p className="font-semibold text-gray-800 text-sm">94% (31)</p>
                    <p className="text-gray-500 text-sm">Satisfied Patients</p>
                    </div>
                </div>
                </div>
            </div>

                {/* Consultation Info - Left aligned */}
                <div className="w-[340px] border border-gray-300 rounded-lg mb-3 bg-white">
                    <div className="space-y-2 ">
                        <div className='ml-3 mt-3 flex items-center'>
                        {/* Video Icon */}
                        <svg className="w-5 h-5 p-1 mr-2 rounded-full text-white bg-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium">BMC - Bashir Medical Complex (Walton Road)</p>
                        </div>

                        <div className="flex items-center justify-between pt-2 ml-3">
                        <div className="flex items-center -mt-4">
                            {/* Green Dot */}
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-green-600 text-sm">Available today</span>
                        </div>
                        <div className='-mt-3 mb-2'>
                            <p className="text-sm font-medium mr-3">Rs. 2,000</p>
                        </div>
                        </div>

                        <div className="bg-blue-900 p-1 rounded-b-md">
                        <p className="text-white text-xs font-normal text-center">Pay Online & Get 10% OFF</p>
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

      {/* Card 19 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1634815081_b381dd24-32a3-4380-9944-eefc495224df.webp?t=1721974028;" 
                                alt="Assist. Prof. Dr. Rabia Ishfaq"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Madiha Kashan Kash</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">M.B.B.S., F.C.P.S. (Dermatology)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">15 - 30 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">12 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">99% (159)</p>
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
                            </div>
                        </div>

                        {/* Consultation Info 2 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <p className="text-sm font-medium">Dr Kash Clinic (Samanabad)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 1,250</p>
                                    </div>
                                </div>

                                <div className="bg-blue-900 p-1 rounded-b-md">
                                    <p className="text-white text-xs font-normal text-center">Pay Online & Get 10% OFF</p>
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

                    {/* Consultation Info 3 */}
                    <div className="w-[330px] border border-gray-300 rounded-lg bg-white mt-[70px] -ml-24">
                        <div className="space-y-2">
                            <div className='ml-3 mt-3 flex items-center'>
                                <p className="text-sm font-medium">Won Aesthetics Clinic (DHA)</p>
                            </div>

                            <div className="flex items-center justify-between pt-2 ml-3">
                                <div className="flex items-center -mt-4">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span className="text-green-600 text-sm">Available today</span>
                                </div>
                                <div className='-mt-3 mb-2'>
                                    <p className="text-sm font-medium mr-3">Rs. 2,500</p>
                                </div>
                            </div>

                            <div className="bg-blue-900 p-1 rounded-b-md">
                                <p className="text-white text-xs font-normal text-center">Pay Online & Get 10% OFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Card 20 */}
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Main Content Container */}
            <div className="flex justify-between">
                {/* Left Side Content - 60% width */}
                <div className="w-[60%]">
                    {/* Doctor Header with Image */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1645768204_WhatsAppImage2022-02-21at9.46.57AM-min.webp?t=1737964210" 
                                alt="Dr. Nida Eily"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center ml-3 mt-4">
                                <h1 className="text-[23px] font-normal text-black">Dr. Nida Eily</h1>
                            </div>
                            <p className="text-gray-800 ml-3 mt-2">Dermatologist, Cosmetologist</p>
                            <p className="text-gray-800 text-sm mb-4 ml-3 mt-1">MBBS, FCPS (Dermatology)</p>
                            
                            {/* Stats Section */}
                            <div className="flex w-[350px] mb-5 ml-3 mt-5">
                                <div className="flex-1 border-r border-gray-400">
                                    <p className="font-semibold text-sm text-gray-800">30 - 45 Min</p>
                                    <p className="text-gray-500 text-sm">Wait Time</p>
                                </div>
                                
                                <div className="flex-1 text-center border-r border-gray-400">
                                    <p className="font-semibold text-gray-800 text-sm">4 Years</p>
                                    <p className="text-gray-500 text-sm">Experience</p>
                                </div>
                                
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold text-gray-800 text-sm">99% (93)</p>
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
                                    <p className="text-sm font-medium">Health Care Hospital (Bedian Road) (Bedian...</p>
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
                            </div>
                        </div>

                        {/* Consultation Info 2 */}
                        <div className="w-[330px] border border-gray-300 rounded-lg bg-white">
                            <div className="space-y-2">
                                <div className='ml-3 mt-3 flex items-center'>
                                    <p className="text-sm font-medium">Skin Sculpt (DHA)</p>
                                </div>

                                <div className="flex items-center justify-between pt-2 ml-3">
                                    <div className="flex items-center -mt-4">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-green-600 text-sm">Available today</span>
                                    </div>
                                    <div className='-mt-3 mb-2'>
                                        <p className="text-sm font-medium mr-3">Rs. 3,000</p>
                                    </div>
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

    </div>
    
  );
};

export default IslamabadpageCard1;