import React, { useState, useEffect } from 'react';
import ReviewSlider from './homepages/ReviewSlider';
import Cards from './homepages/Cards';
import Health from './homepages/Health';
import Categories from './homepages/Categories';
import Categories2 from './homepages/Categories2';
import Partners from './homepages/Partners';
import News from './homepages/News';
import CustomerReviews from './homepages/CustomerReviews';
import DownloadAppSection from './homepages/DownloadAppSection';
import DoctorsByCity from './homepages/DoctorsByCity';
import Footer from './Footer';


const Home = () => {
  // Review slider items
  const reviewItems = [
    "25K+ doctors",
    "50M+ patients served",
    "1M+ patient reviews",
  ];
  
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % reviewItems.length);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 relative">
      {/* Hero Section */}
      <div className="flex items-start justify-between w-full max-w-6xl rounded-3xl bg-gradient-to-r from-[#7D4D3E] to-[#281A5A] mb-8">
        {/* Left side - Content */}
        <div className="w-1/2 pr-8 flex flex-col justify-start mt-12">
          {/* Main Heading */}
          <h1 className="text-5xl font-medium text-white mb-4 ml-12">
            Find and Book the<br />
            <span className='text-orange-400'>Best Doctors</span> near you
          </h1>
          
          {/* Use the ReviewSlider component */}
          <div className="mb-8 ml-12">
            <ReviewSlider items={reviewItems} />
          </div>
          
          {/* Search Box */}
          <div className="bg-opacity-90 rounded-lg shadow-xl max-w-lg ml-12 mb-10">
            <div className="flex justify-items-center">
              {/* Detect Section */}
              <div className="flex-1 flex p-1 bg-white rounded-l-md">
                <div className="w-[200px] px-4 py-3 font-medium text-black">
                  Lahore
                </div>
                <button className="flex items-center justify-center gap-1 bg-gray-200 text-indigo-950 px-5 py-1 font-medium transition whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                  </svg>
                  Detect
                </button>
              </div>

              {/* Search Section */}
              <div className="flex-1 flex p-1 bg-white border border-gray-300 border-l-0 rounded-r-md min-w-[400px]">
                <input 
                  type="text" 
                  placeholder="Doctors, Hospital, Conditions" 
                  className="flex-grow px-4 py-3 outline-none text-lg bg-transparent"
                />
                <button className="bg-amber-500 text-white px-8 py-2 font-medium rounded-md transition whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Services Section */}
      <Cards /> {/* Yahan use kiya gaya hai */}

      {/* Health Section */}
      <Health /> {/* Yahan use kiya gaya hai */}

      {/* Categories Section */}
      <Categories /> {/* Yahan use kiya gaya hai */}

      {/* Categories2 Section */}
      <Categories2 /> {/* Yahan use kiya gaya hai */}

      {/* Partners Section */}
      <Partners /> {/* Yahan use kiya gaya hai */}

      {/* News Section */}
      <News /> {/* Yahan use kiya gaya hai */}

      {/* CustomerReviews Section */}
      <CustomerReviews /> {/* Yahan use kiya gaya hai */}

      {/* DownloadAppSection Section */}
      <DownloadAppSection /> {/* Yahan use kiya gaya hai */}

      {/* DoctorsByCity Section */}
      <DoctorsByCity /> {/* Yahan use kiya gaya hai */}

      {/* Footer Section */}
      <Footer /> {/* Yahan use kiya gaya hai */}
    </div>
  );
};

export default Home;