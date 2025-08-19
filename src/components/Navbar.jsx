import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import oladoc from '../assets/oladoc.png';
import DoctorDropdown from './navbarpages/DoctorDropdown';
import HospitalDropdown from './navbarpages/HospitalDropdown'; 
import LabsDropdown from './navbarpages/LabsDropdown';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50 w-full">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-10">
                {/* Two-tone Logo */}
                <div className="flex items-center space-x-12">
                    <Link to="/" className="relative" onClick={closeAllDropdowns}>
                        <img src={oladoc} className="h-12 w-auto " alt="oladoc logo" />
                    </Link>
                </div>

                {/* Navigation Links with Dropdown Icons */}
                <div className="hidden md:flex space-x-6">
                    {/* Doctors with dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => toggleDropdown('doctors')}
                            className="text-gray-700 font-medium flex items-center focus:outline-none"
                        >
                            Doctors
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'doctors' ? 'rotate-180' : ''}`}
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'doctors' && (
                            <DoctorDropdown closeAllDropdowns={closeAllDropdowns} />
                        )}
                    </div>

                    {/* Hospitals with dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => toggleDropdown('hospitals')}
                            className="text-gray-700 font-medium flex items-center focus:outline-none"
                        >
                            Hospitals
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'hospitals' ? 'rotate-180' : ''}`}
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'hospitals' && (
                            <HospitalDropdown closeAllDropdowns={closeAllDropdowns} />
                        )}
                    </div>

                    {/* Labs and Diagnostics with dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => toggleDropdown('labs')}
                            className="text-gray-700 font-medium flex items-center focus:outline-none"
                        >
                            Labs and Diagnostics
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'labs' ? 'rotate-180' : ''}`}
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'labs' && (
                            <LabsDropdown closeAllDropdowns={closeAllDropdowns} />
                        )}
                    </div>

                    {/* Regular links without dropdown */}
                    <Link to="/surgeries" className="text-gray-700 font-medium" onClick={closeAllDropdowns}>Surgeries</Link>
                    <Link to="/health-blog" className="text-gray-700 font-medium" onClick={closeAllDropdowns}>Health Blog</Link>
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
                <Link to="#" className="text-sm text-indigo-900 border-[1px] border-indigo-300 font-medium px-4 py-2 rounded-md transition-colors" onClick={closeAllDropdowns}>Login/SignUp</Link>
                <Link 
                    to="/join-as-doctor" 
                    className="hidden md:inline-block text-sm text-amber-600 border-[1px] border-amber-600 px-4 py-2 rounded-md font-medium hover:bg-amber-50 transition duration-300"
                    onClick={closeAllDropdowns}
                >
                    Join as Doctor
                </Link>
                <div className="hidden md:flex items-center space-x-2 bg-indigo-900 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white font-normal">04238900939</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;