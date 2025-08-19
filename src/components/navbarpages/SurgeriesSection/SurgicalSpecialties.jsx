import React from 'react';

const SurgicalSpecialties = () => {
  // All surgery items with images
    const surgeryItems = [
        { name: "Liposuction", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/liposuction.png?v=1730291443112" },
        { name: "Rhinoplasty (Cosmetic Nose Surgery)", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/rhinoplasty-cosmetic-nose-surger.png?v=1730291443112" },
        { name: "LASIK Eye Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/lasik.png?v=1730291443112" },
        { name: "Hair Transplant", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/hair-transplant.png?v=1730291443112" },
        { name: "Caesarean (C-Section)", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/caesarean-c-section.png?v=1730291443112" },
        { name: "IVF", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/ivf.png?v=1730291443112" },

        { name: "Penile Implants", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/penile-implants.png?v=1730291443112" },
        { name: "Anal Fissure Treatment", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/anal-fissure-treatment.png?v=1730291443112" },
        { name: "Vasectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/vasectomy.png?v=1730291443112" },
        { name: "Hernia", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/hernia-surgery.png?v=1730291443112" },
        { name: "Circumcision", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/circumcision.png?v=1730291443112" },
        { name: "Fistula", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/fistula.png?v=1730291443112" },

        { name: "Cataract Eyes Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/cataract-eye-surgery.png?v=1730291443112" },
        { name: "Renal (Kidney) Transplant", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/renal-kidney-transplant.png?v=1730291443112" },
        { name: "Hysterectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/hysterectomy.png?v=1730291443112" },
        { name: "Double Chin Treatment", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/double-chin-treatment.png?v=1730291443112" },
        { name: "Mastectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/mastectomy.png?v=1730291443112" },
        { name: "Gynecomastia / Man boobs surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/male-breast-reduction.png?v=1730291443112" },

        { name: "Hymenoplasty", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/hymenoplasty.png?v=1730291443112" },
        { name: "Breast Augmentation", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/breast-augmentation.png?v=1730291443112" },
        { name: "IUI", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/iui.png?v=1730291443112" },
        { name: "Breast Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/breast-augmentation.png?v=1730291443112" },
        { name: "Percutaneous Nephrolithotomy (PCNL)", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/percutaneous-nephrolithotomy-pcn.png?v=1730291443112" },
        { name: "Root Canal", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/knee-replacement-surgery.png?v=1730291443112" },

        { name: "CO2 Fractional Laser", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/co2-fractional-laser.png?v=1730291443112" },
        { name: "Dental Implants", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/dental-implants.png?v=1730291443112" },
        { name: "Nephrectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/nephrectomy.png?v=1730291443112" },
        { name: "Varicocele Microsurgery (Varicocelectomy)", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/varicocele-microsurgery.png?v=1730291443112" },
        { name: "ACL Reconstruction Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/acl-reconstruction-surgery.png?v=1730291443112" },
        { name: "Knee Replacement Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/knee-replacement-surgery.png?v=1730291443112" },

        { name: "Piles Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/piles-surgery.png?v=1730291443112" },
        { name: "Hip Replacement Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/hip-replacement-surgery.png?v=1730291443112" },
        { name: "Spinal Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/spinal-surgery.png?v=1730291443112" },
        { name: "Tonsillectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/tonsillectomy.png?v=1730291443112" },
        { name: "Appendectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/appendectomy.png?v=1730291443112" },
        { name: "Cyst Removal Under Local Anesthesia", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/cyst-removal-under-local-anesthesia.png?v=1730291443112" },

        { name: "TURP", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/turp.png?v=1730291443112" },
        { name: "Hydrocele Surgery (Hydrocelectomy)", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/hydrocele-surgery.png?v=1730291443112" },
        { name: "Lithotripsy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/lithotripsy.png?v=1730291443112" },
        { name: "Open Heart Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/open-heart-surgery.png?v=1730291443112" },
        { name: "Tummy Tuck Surgery", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/tummy-tuck-surgery.png?v=1730291443112" },
        { name: "Liver Transplant", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/liver-transplant.png?v=1730291443112" },

        { name: "Operation Of Gall Bladder", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/operation-of-gall-bladder.png?v=1730291443112" },
        { name: "Heart Transplant", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/heart-transplant.png?v=1730291443112" },
        { name: "Prostatectomy", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/prostatectomy.png?v=1730291443112" },
        { name: "Laser Treatment for Urinary Stones (Laser Lithotripsy)", image: "https://d1t78adged64l7.cloudfront.net/dist/icons/services/v1/laser-treatment-for-urinary-stones.png?v=1730291443112" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <h1 className="text-2xl font-medium text-left mb-12 text-black ml-5">
            Specializing in surgical expertise for over 50 health issues.
        </h1>

            {/* Main Content - Side by Side Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Surgery Items */}
                <div className="lg:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {surgeryItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-2">
                        {/* Circular Image */}
                        <div className="rounded-full overflow-hidden mb- bg-gray-100">
                        <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 object-cover p-5"
                        />
                        </div>
                        
                        {/* Text */}
                        <p className="text-sm text-center font-medium text-gray-700">{item.name}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="lg:w-1/3">
                <div className="w-[340px] bg-gray-100 rounded-xl sticky p-6 top-4">
                    <h2 className="text-lg font-medium text-left mb-6 text-black">Plan your Surgery with oladoc !</h2>
                    
                    <form className="space-y-6">
                    <div>
                        <label className="block text-black font-normal mb-2">Patient Name*</label>
                        <input 
                        type="text" 
                        placeholder="Enter patient name" 
                        className="w-full text-xs font-normal px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-black font-normal mb-2">Phone No*</label>
                        <input 
                        type="tel" 
                        placeholder="Enter phone no" 
                        className="w-full text-xs font-normal px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-black font-normal mb-2">City*</label>
                        <input 
                        type="text" 
                        placeholder="Selsed City" 
                        className="w-full text-xs font-normal px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-black font-normal mb-2">Surgery*</label>
                        <input 
                        type="text" 
                        placeholder="Selsed Surgery" 
                        className="w-full text-xs font-normal px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-950 text-white font-bold py-3 px-4 rounded transition duration-200"
                    >
                        Request Surgery Booking
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SurgicalSpecialties;