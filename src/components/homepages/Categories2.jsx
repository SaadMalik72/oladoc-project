import React from 'react';

const Categories2 = () => {
    const categories = [
        { name: 'Fever', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/fever.png?v=1748601204' },
        { name: 'Heart Attack', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/heart-attack.png?v=1748601204' },
        { name: 'Pregnancy', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/pregnancy.png?v=1748601204' },
        { name: 'High Blood Pressure', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/high-blood-pressure.png?v=1748601204' },
        { name: 'Piles', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/piles.png?v=1748601204' },
        { name: 'Diarrhea', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/diarrhea.png?v=1748601204' },
        { name: 'Acne', image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/acne.png?v=1748601204' }
    ];

    return (
        <div className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-samibold text-black">Search doctor by condition</h1>
            <button className="text-blue-600 font-medium hover:underline flex items-center">
            View All
            </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {categories.map((category, index) => (
            <div 
                key={index}
                className="p-3 transition-all cursor-pointer text-center flex flex-col items-center hover:scale-105"
            >
                <div className="w-28 h-28 mb-3 p-8 flex items-center justify-center rounded-full bg-gray-50 overflow-hidden">
                <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                    e.target.src = 'https://img.icons8.com/color/96/000000/medical-doctor.png';
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

export default Categories2;