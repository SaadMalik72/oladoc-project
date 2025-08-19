import React from 'react';
import IslamabadpageCard from '../../DoctorsPages-sections/DermatologistIslamabadpages/IslamabadpageCard';
import DermatologistInfo from '../../DoctorsPages-sections/DermatologistIslamabadpages/DermatologistInfo';
import Footer from '../../Footer';

const DermatologistIslamabad = () => {
    return (
      <div className='w-[1585px]'>
        <div className='w-[1585px] bg-gray-100'>
          <div className="px-56 py-2 mt-3 bg-white">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center text-[10px] text-slate-900 mb-4">
              <a href="#" className="cursor-pointer">HOME</a>
              <span className="mx-2">&gt;</span>
              <a href="#" className="cursor-pointer">PAKISTAN</a>
              <span className="mx-2">&gt;</span>
              <a href="#" className="cursor-pointer">Islamabad</a>
              <span className="mx-2">&gt;</span>
              <span className="text-gray-800 font-medium">DERMATOLOGISTS IN Islamabad</span>
            </div>

            {/* Main Header */}
            <h1 className="text-[30px] font-medium text-black mb-1">
              123 Best Dermatologists/Skin Specialists in Islamabad
            </h1>

            {/* Subheader */}
            <div className="text-gray-600 mb-6">
              <p className="mb-6">Also known as Skin Specialist ,ماہرامراض جلد ,Skin Doctor and Mahir-e-imraz-e-jild</p>
              
              {/* Filter Tags with Rounded Arrow */}
              <div className="flex items-center">
                <div className="flex flex-wrap gap-2">
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Female Doctors</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Doctors Near Me</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Most Experienced</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Lowest Fee</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Best Rates</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Available Today</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Discounts</span>
                  <span className="text-base font-medium px-3 py-2 rounded-3xl border border-slate-900">Video Consultation</span>
                </div>
              </div>
            </div>
            </div>

        {/* Card */}
        <IslamabadpageCard/>

         {/* Load More Doctors Section */}
          <div className="mt-8 pt-6">
            <div className="flex justify-center">
              <button 
                className="w-[1150px] h-[60px] rounded-md px-6 py-2 text-blue-950 bg-gray-300 transition-colors mb-14 flex items-center justify-center gap-2"
                style={{
                  border: '2px dashed #312E81',
                }}
              >
                <span className="text-3xl rotate-90 font-semibold mt-1">»</span>
                <span className="text-xl font-semibold">Load More Doctors</span>
              </button>
            </div>
          </div>
        </div>

        {/* DermatologistInfo */}
        <DermatologistInfo/>

        {/* Footer */}
        <Footer/>
    </div>
    );
};

export default DermatologistIslamabad;