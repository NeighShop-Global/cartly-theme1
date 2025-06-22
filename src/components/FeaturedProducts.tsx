import React from 'react';
import { Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: '6sense (Black) Stethoscope',
      price: '₹ 2,499',
      originalPrice: '₹ 3,499',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-black', 'bg-blue-900', 'bg-red-900'],
      badge: '7-day free trial'
    },
    {
      id: 2,
      name: '6sense (Navy) Stethoscope',
      price: '₹ 2,499',
      originalPrice: '₹ 3,499',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-blue-900', 'bg-black', 'bg-red-900'],
      badge: '7-day free trial'
    },
    {
      id: 3,
      name: '6sense (Wine) Stethoscope',
      price: '₹ 2,499',
      originalPrice: '₹ 3,499',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-red-900', 'bg-black', 'bg-blue-900'],
      badge: '7-day free trial'
    },
    {
      id: 4,
      name: 'Premium Lab Coat',
      price: '₹ 1,299',
      originalPrice: '₹ 1,799',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      colors: ['bg-white', 'bg-blue-100', 'bg-gray-100'],
      badge: 'Best Seller'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-6 text-purple-800">Featured Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white  overflow-hidden  transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-purple-800">{product.price}</span>
                  <span className="text-gray-500 line-through ml-2 text-sm">{product.originalPrice}</span>
                </div>
                <div className="text-xs text-gray-600 mb-3">(*Incl of taxes)</div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
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

export default FeaturedProducts;