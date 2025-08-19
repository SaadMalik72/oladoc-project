import React from 'react';
import KarachipagesCard1 from '../../DoctorsPages-sections/DermatologistKarachipages/KarachipageCard1';
import KarachipagesCard2 from '../../DoctorsPages-sections/DermatologistKarachipages/KarachipageCard2';
import KarachipagesCard3 from '../../DoctorsPages-sections/DermatologistKarachipages/KarachipageCard3';
import KarachipagesCard4 from '../../DoctorsPages-sections/DermatologistKarachipages/KarachipageCard4';
import KarachipagesCard5 from '../../DoctorsPages-sections/DermatologistKarachipages/KarachipageCard5';
import KarachipagesCard6 from '../../DoctorsPages-sections/DermatologistKarachipages/KarachipageCard6';

const DermatologistKarachi = () => {
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
          <a href="#" className="cursor-pointer">Karachi</a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-800 font-medium">DERMATOLOGISTS IN Karachi</span>
        </div>

        {/* Main Header */}
        <h1 className="text-[30px] font-medium text-black mb-1">
            381 Best Dermatologists/Skin Specialists in Karachi
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

        {/* Card 1 */}
        <KarachipagesCard1/>

        {/* Card 2 */}
        <KarachipagesCard2/>

        {/* Card 3 */}
        <KarachipagesCard3/>

        {/* Card 4 */}
        <KarachipagesCard4/>

        {/* Card 5 */}
        <KarachipagesCard5/>

        {/* Card 6 */}
        <KarachipagesCard6/>
        </div>
    </div>
    );
};

export default DermatologistKarachi;