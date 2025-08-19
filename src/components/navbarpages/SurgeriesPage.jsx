import React from 'react';
import SurgicalSpecialties from './SurgeriesSection/SurgicalSpecialties';
import Footer from '../Footer';

const SurgeriesPage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 relative">
            {/* Hero Section */}
            <div className="flex items-start justify-between w-full max-w-6xl rounded-3xl bg-gradient-to-r from-[#7D4D3E] to-[#281A5A] mb-8">
                {/* Left side - Content */}
                <div className="w-1/2 pr-8 flex flex-col justify-start mt-12">
                    {/* Main Heading */}
                    <h1 className="w-auto text-[32px] font-semibold text-white mb-4 ml-12 mt-3">
                        Discounted booking with <span className='text-orange-400'>Leading<br /></span>
                        <span className='text-orange-400'>Surgeons</span> Anytime, Anywhere
                    </h1>
                    
                    {/* Search Box */}
                    <div className="bg-opacity-90 rounded-lg shadow-xl max-w-lg ml-12 mt-10">
                        <div className="flex justify-items-center">
                            {/* Search Section */}
                            <div className="flex-1 flex p-1 bg-white border border-gray-300 rounded-md min-w-[400px]">
                                <input 
                                    type="text" 
                                    placeholder="Search for surgeries or Procedures" 
                                    className="flex-grow px-4 py-3 outline-none text-lg bg-transparent"
                                />
                                <button className="w-28 m-1 bg-amber-500 text-white font-medium rounded-md transition whitespace-nowrap">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-1/2 flex justify-end">
                    <img 
                        src="https://d1t78adged64l7.cloudfront.net/dist/images/surgery-doc.webp" 
                        alt="Doctor illustration"
                        className="h-[350px] object-cover object-left mt-4 mr-12"
                        loading="eager"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg";
                        }}
                    />
                </div>
            </div>

            <SurgicalSpecialties/>
            <Footer/>

        </div>
        
    );
};

export default SurgeriesPage;