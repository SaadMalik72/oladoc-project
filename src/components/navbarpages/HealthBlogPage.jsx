import React, { useState, useEffect } from 'react';
import ArticlesPage from './articlespage/ArticlesPage';

const HealthBlogPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const images = [
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/06/Benefits-of-Eating-Grapes-at-Night.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/02/Gynaecosid-Tablet-Uses-in-Urdu.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/02/How-to-Become-a-Dermatologist-in-Pakistan.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/02/Tadalafil-in-Pakistan.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/01/Benefits-Of-Plain-Yogurt-For-Females-Sexually.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/01/Tretinoin-Cream-Price-in-Pakistan.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/01/Best-Medicine-for-Stomach-Pain-in-Pakistan.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/01/HMPV.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/01/Betawis-G-Cream-Uses.webp",
        "https://d5xz95ax6mbg9.cloudfront.net/images/2025/01/Surbex-Z-Tablet-Uses-in-Urdu.webp",
    ];

    // Auto-scroll effect - move one image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl w-full relative overflow-hidden" style={{ height: '80vh' }}>
            {/* Previous Button (<) */}
            <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10  bg-opacity-50 text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
            <span className="text-3xl font-bold">&lt;</span>
            </button>
            
            {/* Image container with sliding animation */}
            <div className="relative w-full h-full">
            {images.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Health tip ${index + 1}`}
                className={`absolute top-0 w-full h-full object-cover transition-transform duration-1000 ${
                    index === currentImage
                    ? 'translate-x-0'
                    : index < currentImage
                        ? '-translate-x-full'
                        : 'translate-x-full'
                }`}
                />
            ))}
            </div>

            {/* Next Button (>) */}
            <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
            <span className="text-3xl font-bold">&gt;</span>
            </button>
        </div>

        <ArticlesPage/>
        </div>
    );
};

export default HealthBlogPage;