import React from 'react';

const Categories = () => {
    const categories = [
        { name: 'Dermatologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/skin-specialist.png' },
        { name: 'Gynecologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/gynecologist.png' },
        { name: 'Urologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/urologist.png' },
        { name: 'Gastroenterologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/gastroenterologist.png' },
        { name: 'Dentist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/dentist.png' },
        { name: 'Psychiatrist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/psychiatrist.png' },
        { name: 'ENT Specialist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/ent-specialist.png' },
        { name: 'Orthopedic Surgeon', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/orthopedic-surgeon.png?v=1748601204' },
        { name: 'Sexologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/psychiatrist.png?v=1748601204' },
        { name: 'Neurologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/neurologist.png' },
        { name: 'Child Specialist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/child-specialist.png' },
        { name: 'Pulmonologist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/general-physician.png?v=1748601204' },
        { name: 'Eye Specialist', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/eye-specialist.png' },
        { name: 'General Physician', image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/general-physician.png?v=1748601204' }
    ];

    return (
        <div className="px-4 py-8 max-w-7xl mx-auto">
            {/* Header section unchanged */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-800 ml-9">Consult best doctors online</h1>
                <button className="text-1xl text-blue-600 font-medium flex items-center mr-10">
                    View All
                </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className="p-3 transition-all cursor-pointer text-center flex flex-col items-center hover:scale-105"
                    >
                        <div className="w-28 h-28 mb-3 p-0 flex items-center justify-center rounded-full bg-slate-50 overflow-hidden">
                            <img 
                                src={category.image} 
                                alt={category.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.src = 'https://img.icons8.com/color/96/000000/doctor.png';
                                }}
                            />
                        </div>
                        <p className="text-black font-medium text-lg">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;