import React from 'react';

const NewsSection = () => {
  const news = [
    {
      publication: 'THE TIMES OF INDIA',
      logo: 'TOI',
      title: 'How technology is democratising healthcare',
      link: '#',
      bgColor: 'bg-red-600'
    },
    {
      publication: 'ECONOMIC TIMES',
      logo: 'ET',
      title: 'The Evolution of Medical Apparel in India',
      link: '#',
      bgColor: 'bg-red-600'
    },
    {
      publication: 'HINDUSTAN TIMES',
      logo: 'HT',
      title: 'Medical Fashion Revolution in Indian Healthcare',
      link: '#',
      bgColor: 'bg-blue-600'
    },
    {
      publication: 'BUSINESS STANDARD',
      logo: 'BS',
      title: 'Startup Success: Medical Apparel Industry Growth',
      link: '#',
      bgColor: 'bg-green-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Curved top edge */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-orange-200"></path>
        </svg>
      </div> */}
      
      <div className="container mx-auto px-4 relative z-10 mt-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">In the News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <div key={index} className="bg-cream-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative" style={{ backgroundColor: '#F5F5DC' }}>
              {/* Curved accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-t-lg"></div>
              
              <div className="mb-4 mt-2">
                <div className={`${item.bgColor} text-white px-3 py-1 rounded text-xs font-bold inline-block`}>
                  {item.logo}
                </div>
                <div className="text-xs text-gray-600 mt-1">{item.publication}</div>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 leading-relaxed">
                {item.title}
              </h3>
              <a 
                href={item.link} 
                className="text-purple-800 font-semibold hover:underline inline-flex items-center text-sm"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;