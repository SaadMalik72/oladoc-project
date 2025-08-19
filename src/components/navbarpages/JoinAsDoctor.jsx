import React from 'react';

const JoinAsDoctor = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-amber-600 mb-6">Join Our Platform as a Doctor</h1>
            
            <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Join Us?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Connect with thousands of patients</li>
                <li>Manage your appointments efficiently</li>
                <li>Grow your practice with our platform</li>
                <li>Get verified profile for better visibility</li>
            </ul>
            </div>

            <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Dr. John Doe"
                />
                </div>
                
                <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                <select 
                    id="specialization" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                >
                    <option value="">Select your specialization</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Neurology">Neurology</option>
                </select>
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="+92 300 1234567"
                />
            </div>

            <div>
                <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
                <textarea 
                id="qualifications" 
                rows="3" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="MBBS, FCPS, etc."
                ></textarea>
            </div>

            <div className="flex items-center">
                <input 
                type="checkbox" 
                id="terms" 
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-amber-600 hover:underline">Terms and Conditions</a>
                </label>
            </div>

            <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition duration-300"
            >
                Submit Application
            </button>
            </form>
        </div>
        </div>
    );
};

export default JoinAsDoctor;