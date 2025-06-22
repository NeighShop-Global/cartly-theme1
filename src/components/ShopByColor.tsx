import React from 'react';

const ShopByColor = () => {
  const colors = [
    { name: 'Shop Navy', color: 'bg-blue-900', image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop' },
    { name: 'Shop Wine', color: 'bg-red-900', image: 'https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop' },
    { name: 'Shop Black', color: 'bg-black', image: 'https://images.pexels.com/photos/6749781/pexels-photo-6749781.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop' },
    { name: 'Shop Green', color: 'bg-green-700', image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">Shop by Color</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colors.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-48  overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className={`${item.color} text-white px-4 py-2 font-semibold`}>
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByColor;