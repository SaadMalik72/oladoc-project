import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LabsDropdown = ({ closeAllDropdowns }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
        {/* Lahore Labs */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCategory('Lahore Labs')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Labore Labs</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCategory === 'Lahore Labs' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCategory === 'Lahore Labs' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/labs/blood/cbc" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Chughtai Lab</Link>
                <Link to="/labs/blood/lipid" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Al Razi HealthCare Lab</Link>
                <Link to="/labs/blood/glucose" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Dr. Essa lab</Link>
                <Link to="/labs/blood/hormones" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Islamabad Diagnostic Center (DIC)</Link>
            </div>
            )}
        </div>

        {/* Islamabad Labs */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCategory('Islamabad Labs')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Islamabad Labs</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCategory === 'Islamabad Labs' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCategory === 'Islamabad Labs' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/labs/imaging/xray" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Islamabad Diagnostic Center (IDC)</Link>
                <Link to="/labs/imaging/mri" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Advanced Diagnostic Center</Link>
                <Link to="/labs/imaging/ultrasound" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Metropole Lab</Link>
                <Link to="/labs/imaging/ctscan" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Chughtai Lab</Link>
                <Link to="/labs/imaging/ctscan" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Ali Medical Centre </Link>
            </div>
            )}
        </div>

        {/* Karachi labs */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCategory('Karachi labs')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Karachi Labs</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCategory === 'pathology' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCategory === 'Karachi labs' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/labs/pathology/biopsy" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Chughtai Lab</Link>
                <Link to="/labs/pathology/cytology" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Islamabad Diagnostic Center (IDC)</Link>
                <Link to="/labs/pathology/histology" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Darul Sehat Hospital Laboratory</Link>
                <Link to="/labs/pathology/microbiology" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Hashmanis Hospital Laboratory</Link>
                <Link to="/labs/pathology/microbiology" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>One Health Lab</Link>
            </div>
            )}
        </div>

        {/* Lab Tests */}
        <div className="relative border-b border-gray-200 last:border-b-0">
            <button
            onClick={() => toggleCategory('Lab Tests')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium text-left"
            >
            <span>Lab Tests</span>
            <svg 
                className={`w-4 h-4 transition-transform ${activeCategory === 'Lab Tests' ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
            {activeCategory === 'Lab Tests' && (
            <div className="ml-2 pl-2 border-l-2 border-gray-100 text-sm">
                <Link to="/labs/genetic/dna" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>CBC</Link>
                <Link to="/labs/genetic/carrier" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Lipid Profile</Link>
                <Link to="/labs/genetic/prenatal" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>LFT</Link>
                <Link to="/labs/genetic/pharmaco" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Semen Analysis</Link>
                <Link to="/labs/genetic/pharmaco" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>Thyroid Function Test</Link>
                <Link to="/labs/genetic/pharmaco" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={closeAllDropdowns}>All Test Labs</Link>
            </div>
            )}
        </div>
        </div>
    );
};

export default LabsDropdown;