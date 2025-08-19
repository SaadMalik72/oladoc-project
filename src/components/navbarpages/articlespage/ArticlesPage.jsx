import React from 'react';

const ArticlesPage = () => {
  const articles = [
    {
      title: "Top 5 Dermatologist-Approved Skincare Ingredients in 2025",
      excerpt: "In this article we will discuss the top 5 best dermatologist-approved skincare ingredients in 2025. Keep reading to know more! Key takeaways Why use...",
      date: "Jun 4, 2025",
      readTime: "2 min read",
      image: "https://d5xz95ax6mbg9.cloudfront.net/images/2025/06/Top-5-Dermatologist-Approved-Skincare-Ingredients-in-2025-825x468.webp"
    },
    {
      title: "Toddler Tantrums: A Pediatrician's Guide",
      excerpt: "Learn how to handle your child's tantrums with expert advice. Discover techniques to manage emotional outbursts and promote healthy emotional development in toddlers.",
      date: "Jun 3, 2025",
      readTime: "2 min read",
      image: "https://d5xz95ax6mbg9.cloudfront.net/images/2025/06/toddler-tantrums-825x468.webp"
    },
    {
      title: "6 Amazing Chakotra (Grapefruit) Benefits",
      excerpt: "Explore the health benefits and side effects of grapefruit. Learn how this citrus fruit can boost your immunity, aid in weight loss, and improve heart health.",
      date: "May 30, 2025",
      readTime: "3 min read",
      image: "https://d5xz95ax6mbg9.cloudfront.net/images/2025/05/Chakotra-Fruit-Benefits-825x468.webp"
    },
    {
      title: "The Importance of Physical Therapy in Stroke Rehabilitation",
      excerpt: "Stroke affects millions of people around the world, making it the leading cause of physical disability. After the stroke, it takes months to recover...",
      date: "May 29, 2025",
      readTime: "2 min read",
      image: "https://d5xz95ax6mbg9.cloudfront.net/images/2025/05/The-Importance-of-Physical-Therapy-in-Stroke-Rehabilitation-825x468.webp"
    },
    {
      title: "سائیکاٹرسٹ کیا ہوتا ہے؟ Psychiatrist Meaning in Urdu",
      excerpt: "Learn about the surprising sexual health benefits of plain yogurt for women. Yogurt contains probiotics that support vaginal health and may boost immunity.",
      date: "May 27, 2025",
      readTime: "1 min read",
      image: "https://d5xz95ax6mbg9.cloudfront.net/images/2025/05/Psychiatrist-Meaning-in-Urdu-825x468.webp"
    },
    {
      title: "Best Kidney Pain Medicine in Pakistan",
      excerpt: "Kidney pain can be caused by kidney infection, urinary tract infection (UTI), kidney stones, or other kidney illnesses. This article will explore the best...",
      date: "May 26, 2025",
      readTime: "3 min read",
      image: "https://d5xz95ax6mbg9.cloudfront.net/images/2025/05/Best-Kidney-Pain-Medicine-in-Pakistan-825x468.webp"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Page Header */}
      <h1 className="text-[45px] font-semibold text-black mb-8">All Articles</h1>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <article key={index} className="bg-white border border-gray-200 overflow-hidden transition-shadow duration-300 flex flex-col h-[420px]">
            {/* Article Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Article Content */}
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mt-3">
                <span>{article.date}</span>
                <span className="mx-2">-</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Full-width horizontal line */}
      <div className="w-full h-px bg-gray-300 my-8"></div>

      {/* Number Scroll - Exactly like the image */}
      <div className="flex justify-center items-center space-x-2 py-4">
        <button className="px-3 py-1 text-gray-700">First</button>
        <button className="px-3 py-1 text-gray-700">&laquo;</button>
        <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
        <button className="px-3 py-1 text-gray-700">2</button>
        <button className="px-3 py-1 text-gray-700">3</button>
        <button className="px-3 py-1 text-gray-700">4</button>
        <button className="px-3 py-1 text-gray-700">&raquo;</button>
        <button className="px-3 py-1 text-gray-700">Last</button>
      </div>
    </div>
  );
};

export default ArticlesPage;