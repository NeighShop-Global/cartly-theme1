import React from 'react';

const TrustSection = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)' 
        }}
      >
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by 10,000+ Doctors Across India
          </h2>
          <p className="text-xl mb-8">
            Join the growing community of medical professionals who trust Knya for their daily needs
          </p>
          <button className="bg-white text-purple-800 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors">
            Order in Bulk
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;