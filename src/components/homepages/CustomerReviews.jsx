import React, { useRef } from 'react';

const CustomerReviews = () => {
  const scrollRef = useRef(null);
  const reviews = [
    {
      rating: '★★★★★',
      text: "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.",
      author: "Zainab Tariq",
      image: "https://lh4.googleusercontent.com/-9L2hcs4NNlw/AAAAAAAAAAI/AAAAAAAAAAA/dQUldbckr7Y/w75-h75-p-rp-mo-br100/photo.jpg"
    },
    {
      rating: '★★★★★',
      text: "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all",
      author: "Umer Fayyaz",
      image: "https://lh4.googleusercontent.com/-SYF-hj44qb0/AAAAAAAAAAI/AAAAAAAAAAA/fYTlWUNFa8U/w75-h75-p-rp-mo-ba2-br100/photo.jpg"
    },
    {
      rating: '★★★★★',
      text: "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now.",
      author: "Anceb Ryan",
      image: "https://lh5.googleusercontent.com/-BUqersuAfco/AAAAAAAAAAI/AAAAAAAAAAA/h6ORDN1IEUM/w75-h75-p-rp-mo-br100/photo.jpg"
    },
    // Additional reviews for scrolling
    {
      rating: '★★★★★',
      text: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
      author: "Moin Umar",
      image: "https://lh3.googleusercontent.com/-DMxpEyWd5hc/AAAAAAAAAAI/AAAAAAAAAAA/1w8zOrkvkTQ/w75-h75-p-rp-mo-br100/photo.jpg"
    },
    {
      rating: '★★★★★',
      text: "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through oladoc now. Thanks a bunch",
      author: "Riffat Afzaal",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
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
    <div className="max-w-7xl mx-auto px-5 py-12 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Customers love us</h1>
        <p className="text-gray-600 text-lg">
          Check out the reviews from our satisfied customers
        </p>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-80 p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center">
              <div className="text-orange-500 text-2xl mb-4 p-2 bg-orange-100 rounded-lg">{review.rating}</div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">"{review.text}"</p>
              <div className="mb-4 w-14 h-14 rounded-full overflow-hidden border-4 border-orange-200">
                <img 
                  src={review.image} 
                  alt={review.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 font-medium">{review.author}</p>
            </div>
          ))}
        </div>
        
        {/* Greater than sign for scrolling */}
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
        >
          <span className="text-2xl font-bold text-black">{'>'}</span>
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

export default CustomerReviews;