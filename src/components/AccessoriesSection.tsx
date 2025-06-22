import React from 'react';
import { Star } from 'lucide-react';

const AccessoriesSection = () => {
  const accessories = [
    {
      id: 1,
      name: 'Medical Badge Holder',
      price: '₹ 299',
      originalPrice: '₹ 499',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-black', 'bg-blue-900', 'bg-red-900'],
      badge: 'Essential'
    },
    {
      id: 2,
      name: 'Surgical Cap Set',
      price: '₹ 399',
      originalPrice: '₹ 599',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-pink-500'],
      badge: 'Disposable'
    },
    {
      id: 3,
      name: 'Medical Pen Light',
      price: '₹ 599',
      originalPrice: '₹ 899',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-silver', 'bg-black', 'bg-blue-800'],
      badge: 'LED'
    },
    {
      id: 4,
      name: 'Medical Scissors',
      price: '₹ 799',
      originalPrice: '₹ 1,199',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-silver', 'bg-gold', 'bg-black'],
      badge: 'Surgical Grade'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Medical Accessories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={accessory.image} 
                  alt={accessory.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {accessory.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{accessory.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{accessory.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-purple-800">{accessory.price}</span>
                  <span className="text-gray-500 line-through ml-2 text-sm">{accessory.originalPrice}</span>
                </div>
                <div className="text-xs text-gray-600 mb-3">(*Incl of taxes)</div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {accessory.colors.map((color, index) => (
                      <div key={index} className={`w-5 h-5 rounded-full ${color} border-2 border-gray-300`}></div>
                    ))}
                  </div>
                  <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-3 rounded transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;