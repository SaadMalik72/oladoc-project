import React from 'react';

const DermatologistInfo = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Main Heading */}
        <h1 className="text-lg font-semibold text-blue-950 mb-6">Best Dermatologist in Lahore</h1>
        
        {/* Introduction Paragraph */}
        <p className="text-neutral-700 mb-8 leading-relaxed text-[15px]">
            With oladoc, you can consult the <span className='text-neutral-900 font-medium'>best dermatologists in Lahore</span> by booking in-person appointments or online video consultations. 
            You can select a top dermatologist near you from our list at the top of the page while checking patient reviews, 
            doctor qualifications, and ratings.
        </p>

        {/* Who is a Dermatologist Section */}
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">Who is a Dermatologist?</h2>
            <p className="text-neutral-700 leading-relaxed text-[15px]">
            A <span className='text-neutral-900 font-medium'>dermatologist</span> or <span className='text-neutral-900 font-medium'>skin specialist</span> is a doctor who specializes in the treatment of conditions that affect the skin, hair, and nails. 
            Dermatologists are trained to diagnose and treat over <span className='text-neutral-900 font-medium'>3000 conditions</span> like <span className='text-neutral-900 font-medium'>acne, eczema, psoriasis,</span> etc., 
            and can also perform certain cosmetic procedures.
            </p>
        </div>

        {/* What is Dermatology Section */}
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">What is Dermatology?</h2>
            <p className="text-neutral-700 leading-relaxed text-[15px]">
            Dermatology is the field of medicine dealing with the diagnosis, research, study, management, 
            and treatment of conditions related to the skin, hair, and nails.
            </p>
        </div>

        {/* When to See a Dermatologist Section */}
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">When should you see a Dermatologist?</h2>
            <p className="text-neutral-700 leading-relaxed mb-4 text-[15px]">
            If you have acne, scars, stretch marks, excess cellulite, dark discolorations, hyperpigmentation, 
            itches, rashes, or abnormally blushing skin, booking an appointment with the <span className='text-neutral-900 font-medium'>best dermatologist 
            in Lahore</span>  is a good idea.
            </p>
            <p className="text-neutral-700 leading-relaxed text-[15px]">
            Moreover, if you're facing one of the following symptoms of the skin, nails, or hair, 
            you should visit a dermatologist:
            </p>
        </div>

        {/* Symptoms Section */}
        <div className="mb-8">

            {/* Symptoms List */}
            <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-700 text-[15px]">
            <li>Dry, itchy skin or scalp</li>
            <li>Skin growths like warts, moles, or cysts</li>
            <li>Hair damage or hair loss</li>
            <li>Skin allergies</li>
            <li>Skin discoloration</li>
            <li>Nail abnormalities</li>
            <li>Frequent acne</li>
            <li>Excessive dandruff</li>
            <li>Unusual bumps or lumps</li>
            <li>Burns or scars</li>
            </ul>

            {/* Recommendation Paragraph */}
            <p className="text-neutral-700 leading-relaxed mb-4 text-[15px]">
            If you are experiencing one or more of these symptoms, you should consult an <span className='text-neutral-900 font-medium'>expert 
            dermatologist</span>  rather than ignore the problem or attempt to treat it yourself. Moreover, 
            if you are looking for cosmetic treatments to improve the texture, look, and tone of 
            your skin, hair, and nails, a <span className='text-neutral-900 font-medium'>skin doctor in Lahore</span> can help you.
            </p>

            {/* Cosmetic Procedures Paragraph */}
            <p className="text-neutral-700 leading-relaxed text-[15px]">
            Dermatologists can perform cosmetic procedures for skin whitening, skin tightening, 
            hair removal, etc., to enhance your look and personality. People who are conscious 
            of their appearance may opt for such treatments.
            </p>
        </div>

        {/* Main Areas of Concern */}
        <div className="mb-10">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
            What are the main areas of concern for a Dermatologist?
            </h2>
            
            <p className="text-neutral-700 mb-4 text-[15px]">
            The three main areas of concern for a dermatologist include:
            </p>
            
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-neutral-700 text-[15px]">
            <li className="pl-2">
                Treating various skin conditions, including acne, eczema, dermatitis, etc.
            </li>
            <li className="pl-2">
                Making cosmetic improvements to a patient's skin through various procedures like dermabrasion, chemical peels, etc.
            </li>
            <li className="pl-2">
                Diagnosing certain skin, hair, and nail problems such as skin cancer through biopsies, patch tests, skin swabs, nail clippings, etc.
            </li>
            </ol>
            
            <p className="text-neutral-700 text-[15px]">
            A skin specialist in Lahore mainly deals with skin problems, but hair and nail-related problems also make up a large chunk of their work.
            </p>
        </div>

        {/* Conditions Treated */}
        <div>
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
            What conditions do Dermatologists treat?
            </h2>
            
            <p className="text-neutral-700 mb-4 text-[15px]">
            Dermatologists are capable of treating hundreds of different skin problems like:
            </p>
            
            {/* Conditions Table */}
            <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-neutral-800 border-b border-gray-200">
                    Condition
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-neutral-800 border-b border-gray-200">
                    Description
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Acne
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    A common skin condition that causes an outbreak of pimples or zits on the skin. It is caused by hair follicles being blocked by dead skin cells or sebum (A natural oil produced by the sebaceous glands that protects the skin from drying out).
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Psoriasis
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    Psoriasis is an autoimmune condition that causes red, itchy patches on the skin. Although this disease is not curable, dermatologists can recommend medications, injections, and therapies to help manage your symptoms.
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Hair Loss
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    It is a common issue, especially in older adults. Your dermatologist can treat hair loss in several ways through medications, injections, or laser therapy.
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Nail Abnormalities
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    They include clubbing, discoloration, changes in thickness, etc.
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Dermatitis
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    Dermatitis refers to a group of conditions that cause itching and inflammation of the skin.
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Athlete's Foot
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    A common fungal infection that causes white patches between the toes. Dermatologists can treat athlete's foot by prescribing ointments, creams, or tablets.
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Eczema
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    A common skin condition, also known as atopic dermatitis, that causes red, dry, and itchy skin.
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Moles
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                    Are brown to black growths on the skin that commonly form in childhood and adolescence. Your dermatologist can recommend surgical excision to remove mole as well as other treatments that best suit your case.
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Additional Conditions Section */}
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">What procedures are performed by Dermatologists?</h2>
            <p className="text-neutral-700 mb-4 text-[15px]">
            Dermatologists can carry out several different procedures to diagnose, manage, or treat a skin condition. Here are some common procedures carried out by dermatologists:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-neutral-700 text-[15px]">
            <li>
                <span className="font-medium text-neutral-900">Chemical Peels:</span> Involves the removal of the top layer of the skin to improve its appearance and reduce fine lines, wrinkles, and acne. It is usually done on the hands, face or neck.
            </li>
            <li>
                <span className="font-medium text-neutral-900">HydraFacial:</span> A procedure used to cleanse, exfoliate, and hydrate the skin using a patented device.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Laser Hair Removal:</span> A procedure that uses concentrated laser light to remove unwanted hair from the body.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Microneedling:</span> A minimally invasive cosmetic procedure that uses tiny needles to puncture the skin in order to promote collagen production. Microneedling can help improve skin texture and appearance.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Microdermabrasion:</span> A small hand-held device is used to remove the outermost layer of skin to improve skin tone and texture.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Mohs Surgery:</span> A surgical technique used by the best skin specialist in Lahore to treat skin cancer by cutting away thin layers of the skin one at a time.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Skin Whitening:</span> Skin whitening procedures are carried out by dermatologists with the aim to lighten or brighten skin tone or texture. Various methods, such as creams, laser therapy, or injections, can be used to achieve this goal.
            </li>
            </ul>
        </div>

        <div className=''>
            <p className='mb-5 text-neutral-700 text-[15px]'>
                Early detection of skin diseases can significantly affect patient outcomes especially in severe conditions such as skin cancer.
            </p>
            <p className='mb-8 text-neutral-700 text-[15px]'>
                Examining your skin for bumps, lumps, scars, or spots, can help in early skin disease detection. As Dr. Olivia Arballo, board-certified dermatologist states, “Everyone should be looking at all the skin on their body regularly. She notes, “I have had many skin cancer patients for whom early detection made a significant difference in their outcome.”
            </p>
        </div>

        {/* Types of Dermatologists */}
        <div className="mb-10">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
            What kinds of Dermatologists are there?
            </h2>
            
            <p className="text-neutral-700 mb-4 text-[15px]">
            Following are the different types of the best dermatologist in Lahore:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 text-neutral-700 mb-6 text-[15px]">
            <li>
                <span className="font-medium text-neutral-900">Cosmetic Dermatologists:</span> These are specialists who are experts in cosmetic procedures that are majorly surgical.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Dermatopathologists:</span> These specialists can diagnose dermatological diseases through a microscopic study of skin samples. It's a lab-based specialization.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Surgical Dermatologists:</span> As the name suggests, these are dermatologists who are experts in surgical procedures related to dermatological issues.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Pediatric Dermatologists:</span> Treat genetic, congenital, and acquired dermatological diseases affecting children, including newborns and toddlers.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Medical Dermatologists:</span> A dermatologist with expertise in diagnosing, treating, and preventing hair, nail, and skin diseases.
            </li>
            <li>
                <span className="font-medium text-neutral-900">Mohs Surgeons:</span> These are specialists in skin cancer treatment and surgery. If you have an odd mole, this is the dermatologist you should consult.
            </li>
            </ul>
        </div>

        {/* Dermatologist Training */}
        <div className='mb-8'>
            <h2 className="text-lg font-semibold text-blue-950 mb-4 text-[15px]">
            What training do dermatologists receive?
            </h2>
            
            <p className="text-neutral-800 mb-4 text-[15px]">
            Dermatologists go through an extensive period of training of 10 years or more before beginning their practice. 
            This training is divided into four parts:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 text-neutral-800 mb-6 text-[15px]">
            <li>
                <span className="">4 years</span> for a bachelor's degree at a college.
            </li>
            <li>
                <span className="">4 years</span> to become a doctor at a medical school.
            </li>
            <li>
                <span className="">1 year</span> internship.
            </li>
            <li>
                <span className="">3 years</span> of residency in dermatology that consists of 12,000 to 16,000 hours of practice in treating real patients.
            </li>
            </ul>
            
            <p className="text-neutral-800 text-[15px]">
            After this training, dermatologists also have the option to become a board-certified dermatologist for which they need to clear a board exam.
            </p>
        </div>

        {/* Top Dermatology Clinics */}
        <div className="mb-10">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
            What are the top Dermatology clinics in Lahore?
            </h2>
            
            <p className="text-neutral-700 mb-4 text-[15px]">
            Here are the top 5 dermatology clinics in Lahore:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2 text-blue-950 mb-6 text-[15px]">
            <li className="font-medium">Enhance Derma & Laser Clinic</li>
            <li className="font-medium">Skin Life Clinic</li>
            <li className="font-medium">The Derma Clinic</li>
            <li className="font-medium">Rosmatic Skin Clinic</li>
            <li className="font-medium">Experts Skin and Laser Clinic</li>
            </ol>
        </div>

        {/* Alternative Names */}
        <div className="mb-10">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
            Alternative names for a Dermatologist in Lahore
            </h2>
            
            <p className="text-neutral-700 mb-4 text-[15px]">
            There are many names for a <span className='text-neutral-900 font-medium'>dermatologist in Lahore</span>  . They are:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 text-[15px]">
            <li>Skin Specialist</li>
            <li>Cosmetologist</li>
            <li>Skin Doctor</li>
            <li>Aesthetic Physician</li>
            </ul>
        </div>

        {/* Appointment Booking */}
        <div className='mb-8'>
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
                How can I find and book an appointment with a Dermatologist near me?
            </h2>
        
            <p className="text-neutral-700 mb-6 text-[15px]">
                You can easily find and book an appointment with a dermatologist near you using oladoc.com. To do that, click or tap the "Doctors Near Me" filter at the top of the page. A list of the <span className='text-neutral-900 font-medium'>best dermatologists in Lahore</span>  near you will show up. Choose any dermatologist from the list and click or tap the "Book Appointment" button to confirm your appointment.
            </p>
            
            {/* Main Heading */}
            <h1 className="text-lg font-semibold text-blue-950 mb-6">
                Why choose oladoc to book your appointments with the Best Dermatologist in Lahore?
            </h1>
            
            <p className="text-[15px] text-neutral-700 mb-6 leading-relaxed">
                oladoc makes it simple and convenient to book your appointments with verified dermatologists in Lahore. 
                Here's why you should choose oladoc to book your dermatologist appointments:
            </p>

            {/* Benefits List */}
            <ul className="list-disc pl-6 mb-8 space-y-3 text-neutral-700 text-[15px]">
                <li>
                <span className="font-semibold text-neutral-900">Experienced dermatologists:</span> Our platform lists the most experienced, qualified and <span className='text-neutral-900 font-medium'>top skin specialists in Lahore</span> who can offer highly accurate diagnoses and treatment for your skin conditions.
                </li>
                <li>
                <span className="font-semibold text-neutral-900">Safe and reliable appointments:</span> Before booking an appointment, you can check the doctor's qualifications, education, experience, and certifications. We offer detailed information about the doctors on our platform to make the experience more reliable, safe, and authentic.
                </li>
                <li>
                <span className="font-semibold text-neutral-900">View patient reviews and doctor ratings:</span> You can also check dermatologists' ratings and reviews before booking an appointment. We only show real patient reviews to paint an accurate picture of what feedback a dermatologist has received for their services.
                </li>
                <li>
                <span className="font-semibold text-neutral-900">Convenient filters:</span> Oladoc provides easy and convenient appointment booking services. Simply choose your desired dermatologist by narrowing down your choices with the help of filters. You can narrow down your search with the help of "doctors near me", "lowest fee", "most experienced", "female doctors", and other filters.
                </li>
                <li>
                <span className="font-semibold text-neutral-900">Book in minutes:</span> Stop waiting in long queues. Now, you can book appointments with the <span className='text-neutral-900 font-medium'>best dermatologist in Lahore</span> within minutes. To book your appointments, you can visit oladoc.com, use the oladoc app, or call our helpline number.
                </li>
            </ul>
        </div>

        {/* Main Heading */}
        <h1 className="text-lg font-semibold text-blue-950 mb-6">
            Find the Best Skin Specialist in Lahore through oladoc
        </h1>

        {/* Introduction Paragraph */}
        <p className="text-neutral-700 mb-6 leading-relaxed text-[15px]">
            Looking for a skin specialist? Find <span className='text-neutral-900 font-medium'>skin doctors in Lahore</span> with oladoc.com - Pakistan's biggest and most trusted healthcare platform and save your precious time and money.
            Our dermatologists are <span className='text-neutral-900 font-medium'>PMC verified </span> and <span className='text-neutral-900 font-medium'>highly trained</span>  in diagnosing and treating a vast range of skin conditions.
        </p>

        {/* Platform Statistics */}
        <div className="mb-6">
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
                oladoc is the largest digital healthcare platform in Pakistan with over <span className='text-neutral-900 font-medium'>25000+ verified doctors</span>  in 10+ major cities including Lahore, Karachi, and Islamabad.
                oladoc is <span className='text-neutral-900 font-medium'>trusted by millions</span>  of people in Pakistan and we are happy to have served over <span className='text-neutral-900 font-medium'> 15 million+ users</span>  and counting. 
                With over <span className='text-neutral-900 font-medium'>300,000+ patient reviews</span>  and convenient filters to sort doctors by location, gender, and near me, it's incredibly easy to narrow down your search and book a confirmed appointment with oladoc. 
                We take pride in being the #1 doctor booking platform in Pakistan having won numerous awards like getting a top place at Startup Istanbul Scaleup Finals.
            </p>
        </div>

        {/* Media Recognition */}
        <div className="mb-6">
            <p className="text-neutral-700 leading-relaxed text-[15px]">
                An accessible, transparent and affordable healthcare platform, oladoc has been acknowledged by several famous media and news agencies of Pakistan.
                These include <span className='text-blue-950 '>Dawn, The Express Tribune, Daily Times, Techjuice, ProPakistani,</span>  and more.
            </p>
        </div>

        {/* Call to Action */}
        <div className="mb-8">
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
            To book your appointment with the <span className='text-neutral-900 font-medium'>best dermatologist in Lahore</span>  right now with no additional charges,
            click the book appointment button, download the app, or call <span className='text-blue-950'>04238900939</span> to confirm your booking.
            </p>
        </div>

        {/* Reviewers Table */}
        <div className="mb-9 overflow-x-auto">
            <table className="min-w-full border border-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                <td className="px-4 py-3 text-sm font-medium text-neutral-900 bg-slate-100 ">Reviewed by: Dr. Nosheeba Salman</td>
                <td className="px-4 py-3 text-sm font-medium text-neutral-900 bg-slate-100 ml-2">Authored by: Dr. Hira Tanveer</td>
                </tr>
            </tbody>
            </table>
        </div>

        {/* Rating Section */}
        <div className="mb-9">
        <span className="text-neutral-700 flex items-center text-[15px]">
            <span className='text-neutral-900 font-medium'>Average rating of our Dermatologists in Lahore:</span> 
            <div className="flex items-center mx-2">
            {[...Array(5)].map((_, i) => (
                i < 4 ? (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ) : (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                )
            ))}
            </div>
            4.9/5 based on 70,609 verified patient reviews.
        </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-lg font-semibold mb-8">
            Frequently Asked Questions
        </h1>

        {/* FAQ Item */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950">
            Who is the best Dermatologist in Lahore?
            </h2>
            
            <h3 className="text-lg font-medium text-blue-950 mb-4">
            10 best Dermatologists in Lahore are:
            </h3>
            
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 text-[15px]">
            <li>Dr. Ali Kazmi</li>
            <li>Dr. Adnan Mehmood</li>
            <li>Dr. Quratul Ain Sajida</li>
            <li>Dr. Saira Hameed</li>
            <li>Prof. Dr. Azam Bukhari</li>
            <li>Dr. Sania Javald</li>
            <li>Assist. Prof. Dr. Sana Younas</li>
            <li>Prof. Dr. Faria Asad</li>
            <li>LL. Col. (R). Prof. Dr. Habib ur Rehman</li>
            <li>Dr. Meraj Saadat</li>
            </ul>
        </div>

        {/* Most Experienced Dermatologists */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-blue-950">
            Who are the most experienced Dermatologists in Lahore?
            </h2>
            
            <p className="text-lg font-medium text-blue-950 mb-4">
            10 most experienced Dermatologists in Lahore are:
            </p>
            
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 mb-6 text-[15px]">
            <li>Prof. Dr. Tariq Zaman</li>
            <li>Dr. Farooq Tajammal Khan</li>
            <li>Prof. Dr. Azam Bukhari</li>
            <li>Dr. Ali Kazmi</li>
            <li>Dr. Mansoor Haider</li>
            <li>Dr. Quratul Ain Sajida</li>
            <li>Dr. Chaudhary Muhammad Tahir</li>
            <li>Dr. Tauqir Haider</li>
            <li>Brig.(R) Dr. Rehan Uddin</li>
            <li>Dr. Tahir Kamal</li>
            </ul>
        </div>

        {/* Appointment Booking */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-1">
            How can I book an appointment with a Dermatologist in Lahore?
            </h2>
            
            <p className="text-neutral-700 mb-4 text-[15px]">
            Click here to book an appointment with a top Dermatologist in Lahore. Or, you can also call at <span className="text-blue-950">04238900939</span> from <span className="text-blue-950">9AM to 11PM</span> to book your appointment.
            </p>
        </div>

        {/* Fee Range */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-1">
            What is the fee range of the best Dermatologists in Lahore?
            </h2>
            
            <p className="text-neutral-700 text-[15px]">
            The fee for the top Dermatologists in Lahore ranges from Rs. 1,000 to 5,000. You can pay at reception when you visit the doctor.
            </p>
        </div>

        {/* Additional Charges */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-1">
            Are there any additional charges to book an appointment with a Dermatologist in Lahore through oladoc?
            </h2>
            
            <p className="text-gray-700 text-[15px]">
            There are no additional charges when you book through oladoc.
            </p>
        </div>

        {/* What Dermatologists Do */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">
            What does a Dermatologist do?
            </h2>
            
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
            A dermatologist or skin specialist is not only capable of treating a vast number of skin-related illnesses but can also offer beauty advice and help patients achieve skin goals via medical and lifestyle advice.
            </p>
            
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
            This means that you don't have to be sick to meet the <span className='font-medium text-neutral-900'>best dermatologist in Lahore</span> and that they can help you make your skin look even healthier. The range of treatments and advice a skin specialist can give has been growing every year for decades now as our understanding of medicine grows and new technologies become widely available.
            </p>
            
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
            The <span className='font-medium text-neutral-900'>best dermatologists in Lahore</span>  usually treat skin conditions but are also adept at treating a range of conditions pertaining to nails and hair as well.
            </p>
            
            <p className="text-neutral-700 text-[15px]">
            You can book an appointment with the <span className='font-medium text-neutral-900'>best dermatologists in Lahore</span>  through oladoc.com
            </p>
        </div>
        

        {/* Top Hospitals */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-0">
            Which hospital is the best for Dermatologist in Lahore?
            </h2>
            
            <p className="text-lg font-semibold text-blue-950 mb-4">
            Top 5 Dermatology Hospitals in Lahore are:
            </p>
            
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 text-[15px]">
            <li>Laser Looks</li>
            <li>Farooq Hospital (DHA)</li>
            <li>Roots Hair & Skin Cosmetic Clinic, Surgimed Hospital</li>
            <li>Masood Hospital</li>
            <li>Bahria International Hospital</li>
            </ul>
        </div>

        {/* How to Choose Section */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-1">
            How do I choose a Dermatologist?
            </h2>
            
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
            Finding a good doctor is vital for proper diagnosis & treatment of your underlying concern. 
            Before you make the decision of picking out a Dermatologist, consider the following:
            </p>
            
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 mb-6 text-[15px]">
            <li>Make sure they are experienced</li>
            <li>Make sure your doctor has good reviews</li>
            <li>Make sure they offer the services you are looking for</li>
            <li>Verify if they are certified from PMDC or have any other professional memberships</li>
            <li>Check if they are affiliated with a hospital you trust</li>
            </ul>
        </div>

        {/* Find Nearby Dermatologists */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg ">
            <h2 className="text-lg font-semibold text-blue-950 mb-2">
            Who are the best Dermatologists near me in Lahore?
            </h2>
            
            <p className="text-neutral-700 text-[15px]">
            To find the best Dermatologist near you select the Doctors Near me filter at the top of the page.
            </p>
        </div>

        {/* Low Fee Dermatologists */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-0">
            Which Dermatologists in Lahore charge the lowest fee?
            </h2>
            
            <p className="text-lg font-semibold text-blue-950 mb-4">
            5 Dermatologists in Lahore which charge the lowest fee are:
            </p>
            
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 text-[15px]">
            <li>Dr. Saira Hameed</li>
            <li>Assist. Prof. Dr. Rabia Ishfaq</li>
            <li>Dr. Shumaila Waqas</li>
            <li>Dr. Muneeza Qamar</li>
            <li>LL Col. (R) Dr. Muhammad Amjad</li>
            </ul>
        </div>

        {/* Female Dermatologists */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-0">
            Who are the best female Dermatologists in Lahore?
            </h2>
            
            <p className="text-lg font-semibold text-blue-950 mb-4">
            10 best female Dermatologists in Lahore are:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 text-[15px]">
                <li>Dr. Quratul Ain Sajida</li>
                <li>Dr. Saira Hameed</li>
                <li>Dr. Sania Javaid</li>
                <li>Assist. Prof. Dr. Sana Younas</li>
                <li>Prof. Dr. Faria Asad</li>
                <li>Dr. Ayesha Rehman</li>
                <li>Dr. Wajieha Saeed</li>
                <li>Assist. Prof. Dr. Rabla Ishfaq</li>
                <li>Dr. Asma Kanwal Jawad</li>
                <li>Dr. Ashba Nasir Cheema</li>
            </ul>
            </div>
        </div>

        {/* Online Consultation Dermatologists */}
        <div className="mb-3 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-0">
            Which Dermatologists in Lahore are available for online video consultation?
            </h2>
            
            <p className="text-lg font-semibold text-blue-950 mb-4">
            10 best Dermatologists in Lahore for online video consultation are:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 space-y-0 text-neutral-700 text-[15px]">
                <li>Dr. Saira Hameed</li>
                <li>Dr. Sania Javaid</li>
                <li>Assist. Prof. Dr. Sana Younas</li>
                <li>Lt. Col. (R). Prof. Dr. Habib ur Rehman</li>
                <li>Dr. Ayesha Rehman</li>
                <li>Dr. Wajieha Saeed</li>
                <li>Assist. Prof. Dr. Rabla Ishfaq</li>
                <li>Dr. Asma Kanwal Jawad</li>
                <li>Dr. Ashba Nasir Cheema</li>
                <li>Dr. Farhana Nazir</li>
            </ul>
            </div>
        </div>

        {/* Online Now Section */}
        <div className="mb-10 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-950 mb-1">
            Which Dermatologists in Lahore are online now?
            </h2>
            
            <p className="text-neutral-700 text-[15px] mb-1">
            Click here to get a list of Dermatologists in Lahore that are online now/available for appointment booking.
            </p>
        </div>

        {/* Related Conditions */}
        <div className='mt-8'>
        <hr className="border-neutral-300 mb-8" />
        <hr className="border-neutral-300 mb-8" />
        <h1 className="text-lg font-semibold text-blue-950 mb-3">
            Related Conditions
        </h1>

            {/* Hospitals List - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap text-[14px]">
                {/* Left Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">Ingrown Toe nail</p>
                    <p className="underline">Vitiligo</p>
                    <p className="underline">Scabies</p>
                    <p className="underline">Skin Fungal Infections</p>
                    <p className="underline">Moles</p>
                    <p className="underline">Acne</p>
                    <p className="underline">Skin Allergy</p>
                    <p className="underline">Itching</p>
                </div>

                {/* Right Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">Benign And Malignant Skin Tumors</p>
                    <p className="underline">Herpes</p>
                    <p className="underline">Psoriasis</p>
                    <p className="underline">Acne Scars</p>
                    <p className="underline">Warts</p>
                    <p className="underline">Skin Diseases </p>
                    <p className="underline">Eczema</p>
                    <p className="underline">Skin Rashes</p>
                </div>
            </div>
        </div>

        {/*Related Treatments */}
        <div className='mt-8'>
        <hr className="border-neutral-300 mb-8" />
        <hr className="border-neutral-300 mb-8" />
        <h1 className="text-lg font-semibold text-blue-950 mb-3">
            Related Treatments
        </h1>

            {/* Hospitals List - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap text-[14px]">
                {/* Left Column */}
                <div className="space-y-3 text-neutral-700 underline">
                    <p className="text-gray-700">PRP</p>
                    <p className="text-gray-700">Laser Hair Removal</p>
                    <p className="text-gray-700">Cryotherapy & Electrocautery For Removal Of Warts</p>
                    <p className="text-gray-700">Chemical Peel</p>
                    <p className="text-gray-700">Dermatology</p>
                    <p className="text-gray-700">Meso Therapy</p>
                    <p className="text-gray-700">Pimples</p>
                    <p className="text-gray-700">Skin Peeling</p>
                    <p className="text-gray-700">Skin Toning</p>
                    <p className="text-gray-700">Facial Treatments</p>
                </div>

                {/* Right Column */}
                <div className="space-y-3 text-neutral-700 underline">
                    <p className="text-gray-700">Phototherapy</p>
                    <p className="text-gray-700">Alopecia</p>
                    <p className="text-gray-700">Cosmetology</p>
                    <p className="text-gray-700">Boil</p>
                    <p className="text-gray-700">Melasma</p>
                    <p className="text-gray-700">Microdermabrasion</p>
                    <p className="text-gray-700">Skin Care Consultation</p>
                    <p className="text-gray-700">Skin Tightening</p>
                    <p className="text-gray-700">Body Contouring</p>
                    <p className="text-gray-700">Skin Rejuvenation and Tightening</p>
                </div>
            </div>
        </div>

        {/* Main Heading */}
        <div className='mt-8'>
        <hr className="border-neutral-300 mb-8" />
        <hr className="border-neutral-300 mb-8" />
        <h1 className="text-lg font-semibold text-blue-950 mb-3">
            Dermatologists in hospitals near you
        </h1>

            {/* Hospitals List - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap text-[14px]">
                {/* Left Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">EVERCARE Hospital, Lahore</p>
                    <p className="underline">Farooq Hospital (DHA), Lahore</p>
                    <p className="underline">Saleem Memorial Hospital, Lahore</p>
                    <p className="underline">Hameed Latif Hospital, Lahore</p>
                    <p className="underline">The Derma Clinic, Lahore</p>
                    <p className="underline">AMT Medical and Dental Centre, Lahore</p>
                    <p className="underline">Skin Sculpt, Lahore</p>
                </div>

                {/* Right Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">Holistic Care Clinic, Lahore</p>
                    <p className="underline">Integrated Medical Hospital, Lahore</p>
                    <p className="underline">Doctors Hospital, Lahore</p>
                    <p className="underline">Ihsan Mumtaz Hospital, Lahore</p>
                    <p className="underline">Hameedah Memorial Hospital, Lahore</p>
                    <p className="underline">Elegance by Anees Skin & Aesthetics, Lahore</p>
                </div>
            </div>
        </div>

        {/* Dermatologists in areas near you */}
        <div className='mt-8'>
        <hr className="border-neutral-300 mb-8" />
        <hr className="border-neutral-300 mb-8" />
        <h1 className="text-lg font-semibold text-blue-950 mb-3">
            Dermatologists in areas near you
        </h1>

            {/* Hospitals List - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap text-[14px]">
                {/* Left Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">DHA</p>
                    <p className="underline">Gulberg</p>
                    <p className="underline">Wapda Town</p>
                    <p className="underline">NESPAK Society</p>
                    <p className="underline">Model Town</p>
                    <p className="underline">Faisal Town</p>
                    <p className="underline">Thokar Niaz Baig</p>
                    <p className="underline">Canal Road</p>
                    <p className="underline">Cantt.</p>
                    <p className="underline">Lahore Cantt</p>
                </div>

                {/* Right Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">Johar Town</p>
                    <p className="underline">Bahria Town</p>
                    <p className="underline">Valencia Town</p>
                    <p className="underline">New Garden Town</p>
                    <p className="underline">Allama Iqbal Town</p>
                    <p className="underline">Cavalry Ground</p>
                    <p className="underline">Ghazi Road</p>
                    <p className="underline">Jail Road</p>
                    <p className="underline">Shahjamal</p>
                    <p className="underline">Nasheman-e-Iqbal</p>
                </div>
            </div>
        </div>

        {/* Dermatologists in areas near you */}
        <div className='mt-8'>
        <hr className="border-neutral-300 mb-8" />
        <hr className="border-neutral-300 mb-8" />
        <h1 className="text-lg font-semibold text-blue-950 mb-3">
            Dermatologists in areas near you
        </h1>

            {/* Hospitals List - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap text-[14px]">
                {/* Left Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">Best Dermatologists in Karachi</p>
                    <p className="underline">Best Dermatologists in Faisalabad</p>
                    <p className="underline">Best Dermatologists in Multan</p>
                    <p className="underline">Best Dermatologists in Hyderabad</p>
                    <p className="underline">Best Dermatologists in Sialkot</p>
                </div>

                {/* Right Column */}
                <div className="space-y-3 text-neutral-700">
                    <p className="underline">Best Dermatologists in Islamabad</p>
                    <p className="underline">Best Dermatologists in Rawalpindi</p>
                    <p className="underline">Best Dermatologists in Peshawar</p>
                    <p className="underline">Best Dermatologists in Sargodha</p>
                    <p className="underline">Best Dermatologists in Mardan</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default DermatologistInfo;