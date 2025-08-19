// components/ReviewSlider.jsx
import React, { useState, useEffect } from 'react';

const ReviewSlider = ({ items }) => {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem((prev) => (prev + 1) % items.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="inline-flex items-center h-8 px-4 py-1 rounded-md overflow-visible" 
                style={{ backgroundColor: '#905937' }}>
            <span className="flex-shrink-0 mr-3 flex items-center justify-center bg-green-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </span>
            <div className="flex-grow min-w-[30px] overflow-visible">
                <span className="font-semibold text-sm whitespace-nowrap text-white">
                    {items[currentItem]}
                </span>
            </div>
        </div>
    );
};

export default ReviewSlider;