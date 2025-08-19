import React from 'react';

const PartnersSection = () => {
  const partners = [
    { 
      name: 'easypaisa', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1746265385_b268nLBy9v.webp?v=1748601204',
      text: '' 
    },
    { 
      name: 'ufone', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1746265365_ykpmOh2y4B.webp?v=1748601204',
      text: '' 
    },
    { 
      name: 'Bank Alfalah', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1746265677_z8PGfZ4iAP.webp?v=1748601204',
      text: '' 
    },
    { 
      name: 'Jubilee', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1722249302_pc0FRu0CLk.webp?v=1748601204',
      text: 'INSURANCE' 
    },
    { 
      name: 'faysalbank', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1721298500_XXw52qPcHo.webp?v=1748601204',
      text: '' 
    },
    { 
      name: 'ZONG 4G', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1722248287_bM7yZgnLDT.webp?v=1748601204',
      text: 'A NEW DREAM' 
    },
    { 
      name: 'LUMS', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1722247974_67C3zLOA8x.webp?v=1748601204',
      text: '' 
    },
    { 
      name: 'JAZZ', 
      logo: 'https://d1t78adged64l7.cloudfront.net/images/companies/1722249302_pc0FRu0CLk.webp?v=1748601204',
      text: '' 
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-5 bg-white my-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Esteemed Partners</h1>
        <p className="text-gray-600 mb-4">
          Avail Exclusive partnership benefits for your brand, clients and employees.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          Partner with oladoc
        </button>
      </div>

      {/* Top Row - 4 Partners */}
      <div className="grid grid-cols-4 gap-0 mb-0">
        {partners.slice(0, 4).map((partner, index) => (
          <PartnerCard key={`top-${index}`} partner={partner} />
        ))}
      </div>

      {/* Bottom Row - 4 Partners */}
      <div className="grid grid-cols-4 gap-0">
        {partners.slice(4, 8).map((partner, index) => (
          <PartnerCard key={`bottom-${index}`} partner={partner} />
        ))}
      </div>
    </div>
  );
};

const PartnerCard = ({ partner }) => (
  <div className="h-48 p-2 bg-gray-50 flex flex-col items-center justify-center border border-gray-100">
    <img 
      src={partner.logo} 
      alt={partner.name} 
      className="h-28 w-full object-contain mb-1"
    />
    <span className="text-sm font-medium text-gray-800">
      {partner.name}
    </span>
    {partner.text && (
      <span className="text-xs text-gray-500 mt-0">
        {partner.text}
      </span>
    )}
  </div>
);

export default PartnersSection;