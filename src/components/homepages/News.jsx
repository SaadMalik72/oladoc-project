import React, { useRef } from 'react';

const NewsSection = () => {
    const scrollRef = useRef(null);
    const newsItems = [
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/samaa.png',
        title: "Yango passengers, partner's drivers will have opportunity to subscribe to oladoc's healthcare services.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/pro-pakistani.png',
        title: "Mobilink Bank partners with oladoc, bringing premium healthcare to customers' doorstep.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/the-nation.png',
        title: "SIMOSA has partnered with oladoc to provide healthcare content to SIMOSA users and enhance their digital experience.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/business-recorder.png',
        title: "Jubilee Life partners with oladoc to enhance healthcare life through app",
        link: 'READ MORE'
        },
        // Add more items if needed for scrolling
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/pro-pakistani.png',
        title: "Jubilee Life collaborates with oladoc to expand healthcare (OPD) services.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/trade-chronicle.png',
        title: "inDrive and oladoc partner to promote health and wellbeing in Pakistan.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/zong.png',
        title: "Zong 4G and oladoc collaborate to revolutionize digital healthcare solutions.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/app.png',
        title: "Zong 4G users can now connect with leading healthcare specialists across Pakistan through oladoc.",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/dawn.png',
        title: "Finding a specialist doctor in Pakistan is a task more daunting than it is supposed to be: talking to relatives, digging up contacts, calling",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/express-tribune.gif',
        title: "Lahore-based online healthcare company MyDoctor.pk has announced that it has raised $1.1million in funding from an",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/daily-times.png',
        title: "MyDoctor.pk was founded in 2016 to make it easy for users to find the best doctors and specialists near them. Moreover,",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/pro-pakistani.png',
        title: "MyDoctor.pk, an online health platform, has announced that it has raised $1.1million in funding.The platform has also officially changed its name",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/pakistan-today.png',
        title: "MyDoctor.pk, Pakistan’s leading online health platform, has announced that it has officially changed its name to oladoc.com,",
        link: 'READ MORE'
        },
        {
        logo: 'https://d1t78adged64l7.cloudfront.net/frontend/assets/images/news/tech-juice.png',
        title: "MyDoctor.pk, one of Pakistan’s leading online health platform, has announced that it has officially",
        link: 'READ MORE'
        }
    ];

    const scrollRight = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-5 py-8 bg-white relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 ml-5 text-left">As seen in news</h2>
        
        <div className="relative">
            <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
            >
            {newsItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[320px] h-[430px] p-12 shadow-lg transition-shadow flex flex-col">
                <div className="mb-4 flex justify-center h-12">
                    <img 
                    src={item.logo} 
                    alt={item.title} 
                    className="h-full object-contain max-w-full"
                    />
                </div>
                <p className="text-black mt-8 text-xl flex-grow">{item.title}</p>
                <div className="text-center">
                    <a href="#" className="text-blue-600 text-sm font-medium hover:underline inline-block">
                    {item.link}
                    </a>
                </div>
                </div>
            ))}
            </div>
            
            {/* Greater than sign for scrolling */}
            <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 z-10"
            >
            <span className="text-3xl font-bold text-gray-600">{'>'}</span>
            </button>
        </div>

        <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
            display: none;
            }
        `}</style>
        </div>
    );
};

export default NewsSection;