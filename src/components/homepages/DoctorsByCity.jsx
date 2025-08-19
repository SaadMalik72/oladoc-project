import React from 'react';

const DoctorsByCity = () => {
    const citiesData = [
        {
            name: "Lahore",
            specialties: [
                "Best Dermatologist",
                "Best Gynecologist",
                "Best Urologist",
                "Best Sexologist",
                "Best Internal Medicine Specialist",
                "Best Child Specialist",
                "Best Orthopedic Surgeon",
                "Best Eye Specialist",
                "Best ENT Specialist",
                "Best Cardiologist",
                "Best Neurologist",
                "Best Nephrologist",
                "Best Psychiatrist",
                "Best Psychologist",
                "Best Dentist",
                "Best Pulmonologist",
                "Best Gastroenterologist"
            ]
        },
        {
            name: "Karachi",
            specialties: [
                "Best Dermatologist",
                "Best Gynecologist",
                "Best Urologist",
                "Best Sexologist",
                "Best Internal Medicine Specialist",
                "Best Child Specialist",
                "Best Orthopedic Surgeon",
                "Best Eye Specialist",
                "Best ENT Specialist",
                "Best Cardiologist",
                "Best Neurologist",
                "Best Nephrologist",
                "Best Psychiatrist",
                "Best Psychologist",
                "Best Dentist",
                "Best Pulmonologist",
                "Best Gastroenterologist"
            ]
        },
        {
            name: "Islamabad",
            specialties: [
                "Best Dermatologist",
                "Best Gynecologist",
                "Best Urologist",
                "Best Sexologist",
                "Best Internal Medicine Specialist",
                "Best Child Specialist",
                "Best Orthopedic Surgeon",
                "Best Eye Specialist",
                "Best ENT Specialist",
                "Best Cardiologist",
                "Best Neurologist",
                "Best Nephrologist",
                "Best Psychiatrist",
                "Best Psychologist",
                "Best Dentist",
                "Best Pulmonologist",
                "Best Gastroenterologist"
            ]
        },
        {
            name: "Other Cities",
            specialties: [
                "Best Nephrologist in Multan",
                "Best Pulmonologist in Multan",
                "Best Cardiologist in Multan",
                "Best Neuro Physician in Multan",
                "Best Gynecologist in Peshawar",
                "Best Urologist in Faisalabad",
                "Best Dentist in Faisalabad",
                "Best Dermatologist in Faisalabad",
                "Best Gynecologist in Gujranwala",
                "Best Neurologist in Multan",
                "Best Psychiatrist in Faisalabad",
                "Best Dermatologist in Gujranwala",
                "Best Cardiologist in Faisalabad",
                "Best Nutritionist in Faisalabad",
                "Best Urologist in Peshawar",
                "Best Physiotherapist in Gujranwala",
                "Best Gynecologist in Quetta"
            ]
        }
    ];

    return (
        <div className="w-[1585px] bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12 text-blue-800"></h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {citiesData.map((city, index) => (
                        <div key={index} className="bg-gray-100">
                            <h2 className="text-xl font-semibold mb-4 text-black ml-2">Doctors in {city.name}</h2>
                            <ul className="space-y-2">
                                {city.specialties.map((specialty, idx) => (
                                    <li key={idx} className="text-slate-600">
                                        <a href="#" className="w-80 py-1.5 px-2 text-sm flex items-start">
                                            <span className="text-slate-600 mr-2">›</span>
                                            {specialty.includes(" in ") ? specialty : `${specialty} in ${city.name}`}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorsByCity;