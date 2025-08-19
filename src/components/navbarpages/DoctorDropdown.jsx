import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorDropdown = ({ closeAllDropdowns }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    closeAllDropdowns();
  };

  return (
    <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100"
         style={{ maxHeight: '50vh', overflowY: 'auto' }}> {/* Added scrollable container */}
      
      {/* First item */}
      <Link 
        to="" 
        className="flex items-center px-4 py-2 text-gray-950 font-medium text-lg hover:bg-gray-100 top-0 bg-white z-20"
        onClick={handleLinkClick}
      >
        Find doctor by speciality
      </Link>

      {/* Dermatologist dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('dermatologist')}
        >
          <span>Dermatologist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'dermatologist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'dermatologist' && (
          <div className="border-t border-gray-200 font-medium text-sm">
            <Link 
              to="/dermatologist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={handleLinkClick}
            >
              Dermatologist in Lahore
            </Link>
            <Link 
              to="/dermatologist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={handleLinkClick}
            >
              Dermatologist in Islamabad
            </Link>
            <Link 
              to="/dermatologist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={handleLinkClick}
            >
              Dermatologist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Gynecologist Dropdown Section */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('gynecologist')}
        >
          <span>Gynecologist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'gynecologist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'gynecologist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/gynecologist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gynecologist in Lahore
            </Link>
            <Link 
              to="/gynecologist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gynecologist in Islamabad
            </Link>
            <Link 
              to="/gynecologist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gynecologist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Urologist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('urologist')}
        >
          <span>Urologist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'urologist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'urologist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/urologist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gynecologist in Lahore
            </Link>
            <Link 
              to="/urologist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gynecologist in Islamabad
            </Link>
            <Link 
              to="/urologist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gynecologist in Karachi
            </Link>
          </div>
        )}
      </div>
        
      {/* Gastroenterologist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('gastroenterologist')}
        >
          <span>Gastroenterologist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'gastroenterologist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'gastroenterologist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/gastroenterologist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gastroenterologist in Lahore
            </Link>
            <Link 
              to="/gastroenterologist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gastroenterologist in Islamabad
            </Link>
            <Link 
              to="/gastroenterologist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Gastroenterologist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Neurologist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('neurologist')}
        >
          <span>Neurologist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'neurologist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'neurologist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/neurologist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Neurologist in Lahore
            </Link>
            <Link 
              to="/neurologist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Neurologist in Islamabad
            </Link>
            <Link 
              to="/neurologist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Neurologist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* ENT Specialist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('ENT')}
        >
          <span>ENT Specialist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'ENT' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'ENT' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/ENT/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              ENT Specialist in Lahore
            </Link>
            <Link 
              to="/ENT/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              ENT Specialist in Islamabad
            </Link>
            <Link 
              to="/ENT/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              ENT Specialist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Psychiatrist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('psychiatrist')}
        >
          <span>Psychiatrist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'psychiatrist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'psychiatrist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/psychiatrist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Psychiatrist in Lahore
            </Link>
            <Link 
              to="/psychiatrist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Psychiatrist in Islamabad
            </Link>
            <Link 
              to="/psychiatrist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Psychiatrist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Pediatrician with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('pediatrician')}
        >
          <span>Pediatrician</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'pediatrician' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'pediatrician' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/pediatrician/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Pediatrician in Lahore
            </Link>
            <Link 
              to="/pediatrician/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Pediatrician in Islamabad
            </Link>
            <Link 
              to="/pediatrician/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Pediatrician in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Dentist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('dentist')}
        >
          <span>Dentist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'dentist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'dentist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/dentist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Dentist in Lahore
            </Link>
            <Link 
              to="/dentist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Dentist in Islamabad
            </Link>
            <Link 
              to="/dentist/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Dentist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Sexologist with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('sexologist')}
        >
          <span>Sexologist</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'sexologist' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'sexologist' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/sexologist/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Sexologist in Lahore
            </Link>
            <Link 
              to="/sexologist/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Sexologist in Islamabad
            </Link>
            <Link 
              to="" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Sexologist in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* View All Specialties with dropdown */}
      <Link 
      to="/viewpage" 
        className="flex items-center px-4 py-2 text-gray-950 font-medium text-sm hover:bg-gray-100"
        onClick={handleLinkClick}
      >
        View All Specialties
      </Link>

      {/* Second item */}
      <Link 
        to="" 
        className="flex items-center px-4 py-2 text-gray-950 font-medium text-lg hover:bg-gray-100 top-0 bg-white z-20"
        onClick={handleLinkClick}
      >
        Find doctor by Treatment
      </Link>

      {/* Whitening Injections with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('whitening')}
        >
          <span>Whitening Injections</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'whitening' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'whitening' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/whitening/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Whitening Injections in Lahore
            </Link>
            <Link 
              to="/whitening/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Whitening Injections in Islamabad
            </Link>
            <Link 
              to="whitening/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Whitening Injections in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Laser Hair Removal with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('laser')}
        >
          <span>Laser Hair Removal</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'laser' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'laser' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/laser/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Laser Hair Removal in Lahore
            </Link>
            <Link 
              to="/laser/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Laser Hair Removal in Islamabad
            </Link>
            <Link 
              to="/laser/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Laser Hair Removal in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* Hydrafacial with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('hydrafacial')}
        >
          <span>Hydrafacial</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'hydrafacial' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'hydrafacial' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/hydrafacial/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Hydrafacial in Lahore
            </Link>
            <Link 
              to="/hydrafacial/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Hydrafacial in Islamabad
            </Link>
            <Link 
              to="/hydrafacial/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              Hydrafacial in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* MRI with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('MRI')}
        >
          <span>MRI</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'MRI' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'MRI' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/MRI/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              MRI in Lahore
            </Link>
            <Link 
              to="/MRI/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              MRI in Islamabad
            </Link>
            <Link 
              to="/MRI/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              MRI in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* CT Scan with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('scan')}
        >
          <span>CT Scan</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'scan' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'scan' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/scan/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              CT Scan in Lahore
            </Link>
            <Link 
              to="/scan/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              CT Scan in Islamabad
            </Link>
            <Link 
              to="/scan/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              CT Scan in Karachi
            </Link>
          </div>
        )}
      </div>

      {/* All Treatments with dropdown */}
      <div className="relative border-b-2 border-gray-200 last:border-b-0">
        <div
          className="flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-gray-100 cursor-pointer font-medium"
          onClick={() => toggleDropdown('treatments')}
        >
          <span>All Treatments</span>
          <svg 
            className={`w-4 h-4 text-black transition-transform ${activeDropdown === 'treatments' ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {activeDropdown === 'treatments' && (
          <div className="border-t border-gray-200 text-sm font-medium">
            <Link 
              to="/treatments/lahore" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              All Treatments in Lahore
            </Link>
            <Link 
              to="/treatments/islamabad" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              All Treatments in Islamabad
            </Link>
            <Link 
              to="/treatments/karachi" 
              className="block px-4 py-2 text-neutral-700 hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0"
              onClick={closeAllDropdowns}
            >
              All Treatments in Karachi
            </Link>
          </div>
        )}
      </div>

      </div>
    );
};

export default DoctorDropdown;