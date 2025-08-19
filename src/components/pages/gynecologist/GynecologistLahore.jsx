import React from 'react';
import LahorepageCard1 from '../../DoctorsPages-sections/GynecologistLahorepages/LahorepageCard1';
import LahorepageCard2 from '../../DoctorsPages-sections/GynecologistLahorepages/LahorepageCard2';
import LahorepageCard3 from '../../DoctorsPages-sections/GynecologistLahorepages/LahorepageCard3';
import LahorepageCard4 from '../../DoctorsPages-sections/GynecologistLahorepages/LahorepageCard4';
import LahorepageCard5 from '../../DoctorsPages-sections/GynecologistLahorepages/LahorepageCard5';
import LahorepageCard6 from '../../DoctorsPages-sections/GynecologistLahorepages/LahorepageCard6';

const GynecologistLahore = () => {
  return (
    <div className='w-[1585px] bg-gray-100'>
      <div className='w-[1585px]'>
      <div className="px-56 py-2 mt-3 bg-white">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-[10px] text-slate-900 mb-4">
          <a href="#" className="cursor-pointer">HOME</a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="cursor-pointer">PAKISTAN</a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="cursor-pointer">LAHORE</a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-800 font-medium">DERMATOLOGISTS IN LAHORE</span>
        </div>

        {/* Main Header */}
        <h1 className="text-[30px] font-medium text-black mb-1">
          241 Best Dermatologists/Skin Specialists in Lahore
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

        {/*DoctorProfileCard Start */}
        <LahorepageCard1/>

        {/*DoctorProfileCard Start */}
        <LahorepageCard2/>

        {/*DoctorProfileCard Start */}
        <LahorepageCard3/>

        {/*DoctorProfileCard Start */}
        <LahorepageCard4/>

        {/*DoctorProfileCard Start */}
        <LahorepageCard5/>

        {/*DoctorProfileCard Start */}
        <LahorepageCard6/>
      </div>
    </div>
  );
};

export default GynecologistLahore;