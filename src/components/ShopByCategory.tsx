import React from 'react';

const ShopByCategory = () => {
  const categories = [
    { name: 'Men' },
    { name: 'Women'},
    { name: 'Lab Coats'},
    { name: 'Accessories'},
    { name: 'Footwear'},
    { name: 'Surgical Caps'}
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">Shop by Category</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="border-2 border-purple-800 rounded-lg p-2 text-center hover:border-4 transition-all duration-300 bg-gray-50 hover:bg-gray-100 h-full">
               
                <h3 className="text-xl font-bold text-purple-800">{category.name}</h3>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;