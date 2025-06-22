import React from 'react';

const BrandMarquee = () => {
  const brands = [
    'Medanta', 'Fortis', 'AIIMS', 'Apollo', 'Max Healthcare', 'Manipal', 'Narayana Health', 'Columbia Asia'
  ];

  return (
    <section className="py-8 bg-orange-200">
      <div className="overflow-hidden">
        <div className="animate-marquee flex items-center space-x-16">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;