import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HospitalDropdown = ({ closeAllDropdowns }) => {
    const [activeCity, setActiveCity] = useState(null);

    const toggleCityDropdown = (city) => {
        setActiveCity(activeCity === city ? null : city);
    };

    return (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
        {/* Lahore Hospitals with nested dropdown */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCityDropdown('lahore')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Lahore Hospitals</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCity === 'lahore' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCity === 'lahore' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/hospitals/lahore/general" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Doctors Hospitals</Link>
                <Link to="/hospitals/lahore/heart" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Hameed Latif Hospital</Link>
                <Link to="/hospitals/lahore/orthopedic" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Evercare Hospital</Link>
                <Link to="/hospitals/lahore/children" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Fatima Memorial Hospital</Link>
                <Link to="/hospitals/lahore/eye" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}></Link>
                <Link to="/hospitals/lahore/emergency" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Emergency Centers</Link>
            </div>
            )}
        </div>

        {/* Islamabad Hospitals with nested dropdown */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCityDropdown('islamabad')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Islamabad Hospitals</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCity === 'islamabad' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCity === 'islamabad' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/hospitals/islamabad/general" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>General Hospitals</Link>
                <Link to="/hospitals/islamabad/cardiac" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Cardiac Centers</Link>
                <Link to="/hospitals/islamabad/bone" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Bone & Joint</Link>
                <Link to="/hospitals/islamabad/maternity" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Maternity Hospitals</Link>
                <Link to="/hospitals/islamabad/dental" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Dental Hospitals</Link>
                <Link to="/hospitals/islamabad/specialized" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Specialized Clinics</Link>
            </div>
            )}
        </div>

        {/* Karachi Hospitals with nested dropdown */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCityDropdown('karachi')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Karachi Hospitals</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCity === 'karachi' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCity === 'karachi' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/hospitals/karachi/general" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>General Hospitals</Link>
                <Link to="/hospitals/karachi/neuro" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Neuro Centers</Link>
                <Link to="/hospitals/karachi/cancer" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Cancer Hospitals</Link>
                <Link to="/hospitals/karachi/ent" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>ENT Hospitals</Link>
                <Link to="/hospitals/karachi/diabetes" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Diabetes Centers</Link>
                <Link to="/hospitals/karachi/physiotherapy" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Physiotherapy Centers</Link>
            </div>
            )}
        </div>
        </div>
    );
};

export default HospitalDropdown;