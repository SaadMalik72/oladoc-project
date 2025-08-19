import React from 'react';

const DownloadAppSection = () => {
    return (
        <div className="w-[1000px] mx-auto px-5 py-12 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Side - Text Content */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
                    <h2 className="text-5xl font-semibold text-black mb-4 whitespace-nowrap mt-20">Download the oladoc App</h2>
                    <p className="text-black text-lg mb-6 md:px-0 px-4 text-center ml-16">
                        Download oladoc app today and avail exclusive health discounts.
                    </p>
                    
                    <div className="mb-4 flex flex-col items-center md:items-start">
                        <p className="text-gray-500 text-sm mb-2"></p>
                        <div className="flex space-x-4 justify-center md:justify-start ml-20">
                            <a href="#" className="block">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                                    alt="Get it on Google Play"
                                    className="w-46 h-16"
                                />
                            </a>
                            <a href="#" className="block">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                                    alt="Download on the App Store"
                                    className="w-46 h-16"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - App Screenshot */}
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src="https://oladoc.com/dist/images/download-app-mob_compressed.webp?v=1748601204" 
                        alt="oladoc App"
                        className="w-[450px] h-[550px] object-contain ml-56"
                    />
                </div>
            </div>
        </div>
    );
};

export default DownloadAppSection;