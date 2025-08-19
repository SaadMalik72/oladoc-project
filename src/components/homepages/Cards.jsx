// components/DoctorServices.js
import React from 'react';

const Cards = () => {
    return (
        <div className="max-w-6xl w-full mx-auto">
            {/* Cards container */}
            <div className="flex justify-between space-x-6">
                {/* Service 1 */}
                <div className="h-[280px] bg-gray-0 rounded-[30px] border border-gray-200 shadow-md transition flex-1 min-w-0 flex flex-col relative"> {/* Added 'relative' for positioning */}
                    {/* Image container with colored background */}
                    <div className="bg-blue-50 rounded-t-[30px] w-full p-4 flex justify-center">
                        <img 
                            src="https://oladoc.com/dist/images/online-now-home-2x_highly-compressed.webp" 
                            alt="Online Consultation" 
                            className="w-full h-36 object-contain text-white"
                        />
                        {/* Orange badge with doctor count (OVERLAY) */}
                        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-orange-400 px-6 py-1 flex items-center gap-2">
                    {/* Green Dot */}
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {/* Text */}
                    <span className="text-white font-normal text-sm whitespace-nowrap">30 Doctors Online Now</span>
                </div>
                    </div>
                    {/* Text content */}
                    <div className="p-3">
                        <div className="text-black text-lg font-semibold">Consult Online Now</div>
                        <p className="text-black font-normal text-sm mt-1">Instantly connect with Specialists through Video call.</p>
                    </div>
                </div>

                {/* Repeat similar structure for other services */}
                {/* Service 2 */}
                <div className="h-[280px] rounded-[30px] border border-gray-200 shadow-md transition flex-1 w-auto flex flex-col">
                    <div className="bg-orange-100 rounded-t-[30px] w-full p-4 flex justify-center">
                        <img 
                            src="https://oladoc.com/dist/images/home-appt-2xx_compressed.webp" 
                            alt="Clinic Visit" 
                            className="w-full h-36 object-contain"
                        />
                    </div>
                    <div className="p-2">
                        <div className="text-black text-lg font-semibold">In-Clinic Appointments</div>
                        <p className="text-black font-normal text-sm mt-1">Book an In-Person visit to doctor's clinic.</p>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="h-[280px] rounded-[30px] border border-gray-200 shadow-md transition flex-1 w-auto flex flex-col">
                    <div className="bg-blue-50 rounded-t-[30px] w-full flex justify-center">
                        <img 
                            src="https://oladoc.com/dist/images/home-lab-2x_compressed.webp?v=1748601204" 
                            alt="Lab Tests" 
                            className="w-full h-44 object-contain"
                        />
                    </div>
                    <div className="p-2">
                        <div className="text-black text-lg font-semibold">Laboratory Tests</div>
                        <p className="text-black font-normal text-sm mt-1">Avail Exclusive discounts on lab tests.</p>
                    </div>
                </div>

                {/* Service 4 */}
                <div className="h-[280px] rounded-[30px] border border-gray-200 shadow-md transition flex-1 w-max flex flex-col">
                    <div className="bg-pink-100 rounded-t-[30px] w-full p-4 flex justify-center">
                        <img 
                            src="https://oladoc.com/dist/images/home-surgeries-2xx_compressed.webp?v=1748601204" 
                            alt="Surgeries" 
                            className="w-full h-36 object-contain"
                        />
                    </div>
                    <div className="p-2">
                        <div className="text-black text-lg font-semibold">Procedures & Surgeries</div>
                        <p className="text-black font-normal text-sm mt-1">Plan your surgeries at discounted rates.</p>
                    </div>
                </div>

                {/* Service 5 */}
                <div className="h-[270px] rounded-[30px] border border-gray-200 shadow-md transition flex-1 flex flex-col">
                    <div className="bg-blue-50 rounded-t-[30px] w-full flex justify-center">
                        <img 
                            src="https://oladoc.com/dist/images/medicine-home-card.webp?v=1748601204" 
                            alt="Medicines" 
                            className="w-full h-44 object-contain"
                        />
                    </div>
                    <div className="p-2">
                        <div className="text-black text-lg font-semibold">Medicines</div>
                        <p className="text-black font-normal text-sm mt-1">Know your medicines better</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;