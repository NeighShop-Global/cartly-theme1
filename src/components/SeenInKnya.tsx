import React from 'react';

const SeenInKnya = () => {
  const images = [
    { src: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop', height: 'h-96' },
    { src: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', height: 'h-64' },
    { src: 'https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', height: 'h-64' },
    { src: 'https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop', height: 'h-80' },
    { src: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', height: 'h-72' },
    { src: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=350&fit=crop', height: 'h-68' },
    { src: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=450&fit=crop', height: 'h-76' },
    { src: 'https://images.pexels.com/photos/6749781/pexels-photo-6749781.jpeg?auto=compress&cs=tinysrgb&w=400&h=320&fit=crop', height: 'h-60' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Seen in Knya</h2>
        <div className="overflow-x-auto">
          <div className="animate-marquee flex space-x-4 w-max">
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-96 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[0].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-44 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[1].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-64 h-48 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[2].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-64 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[3].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-64 h-28 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[4].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-76 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[5].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-64 h-16 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[6].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-96 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[0].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="w-64 h-44 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[1].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-64 h-48 overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={images[2].src} 
                  alt="Knya user"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeenInKnya;