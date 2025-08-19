import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-[1585px] bg-neutral-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* oladoc logo with paragraph and company name */}
            <div className='ml-10'>
                <h2 className="text-5xl font-bold mb-4"><span className='text-orange-400'>ola</span>doc</h2>
                <p className="w-64 text-sm mb-4 text-gray-400">
                    Book appointments with the best Doctors and Specialists such as Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc.
                    Avail test services such as MRI, CT scan, Ultrasound, X-Ray, etc. and Online Doctor Video Consultations all across Pakistan conveniently.
                </p>
                <div className="flex flex-col">
                    <span className="text-base text-white font-light p-3">Company</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Privacy policy</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Delivery Policy</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Refund Policy</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Payment Term</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Contact Us</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Term of Use</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Cancelation Policy</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">FAQs</span>
                    <span className="text-sm text-gray-400 ml-3 mb-2">Process</span>
                </div>
            </div>

            {/* Major Cities - moved left with ml-6 */}
            <div className="ml-20">
                <h3 className="text-base mb-4">Major Cities</h3>
                <div>
                    <ul className="space-y-2">
                        {[
                            'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 
                            'Multan', 'Peshawar', 'Gujranwala', 'Faisalabad',
                            'Sargodha', 'Bahawalpur', 'Quetta', 'Sialkot', 
                            'Hyderabad', 'Sukkur', 'Abbottabad', 'Mardan'
                        ].map((city) => (
                            <li key={city}>
                                <a href={`/doctors/${city.toLowerCase()}`} className="text-sm hover:text-blue-600">
                                    {city}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Rest of your footer code remains the same... */}
            {/* Hospitals */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Hospitals</h3>
                <ul className="space-y-2">
                {[
                    'Doctors Hospital',
                    'Shifa International Hospital',
                    'Aga Khan Hospital',
                    'Fatima Memorial Hospital',
                    'Liaquat National Hospital',
                    'Pakistan Institute of Medical Sciences',
                    'Combined Military Hospital',
                    'Jinnah Hospital'
                ].map((hospital) => (
                    <li key={hospital}>
                    <a href={`/hospitals/${hospital.toLowerCase().replace(/ /g, '-')}`} className="text-sm hover:text-blue-600">
                        {hospital}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li>
                    <a href="/lab-tests" className="text-sm hover:text-blue-600">
                    Lab Tests
                    </a>
                </li>
                <li>
                    <a href="/health-blog" className="text-sm hover:text-blue-600">
                    Health Blog
                    </a>
                </li>
                <li>
                    <a href="/forum" className="text-sm hover:text-blue-600">
                    Forum
                    </a>
                </li>
                <li>
                    <a href="/pharmacy" className="text-sm hover:text-blue-600">
                    Pharmacy
                    </a>
                </li>
                <li>
                    <a href="/labs" className="text-sm hover:text-blue-600">
                    Labs
                    </a>
                </li>
                <li>
                    <a href="/updates" className="text-sm hover:text-blue-600">
                    For Updates
                    </a>
                </li>
                </ul>
            </div>
            </div>

            {/* Verified Doctors and Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-700 mb-2">PLUS Verified Doctors</h4>
                <p className="text-sm">Authentic & updated information</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-700 mb-2">Reliable Customer Support</h4>
                <p className="text-sm">7 days a week</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-700 mb-2">Secure Online Payment</h4>
                <p className="text-sm">Secure checkout using SSL Certificate</p>
            </div>
            </div>

            {/* Copyright and Legal with Social Icons */}
            <div className="border-t border-gray-300 pt-6 flex justify-between items-center">
                <div>
                    <p className="text-sm">
                        Copyright © 2015 - {new Date().getFullYear()} MedicConnect Services, a subsidiary of MyDoctor Inc. All Rights Reserved
                    </p>
                    <p className="text-xs mt-2">
                        Reproduction of material from any oladoc.com pages without permission is strictly prohibited.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-800">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-800">
                        <FaYoutube size={20} />
                    </a>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;