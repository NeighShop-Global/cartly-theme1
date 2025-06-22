import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { dispatch } = useCart();

  // Mock wishlist data
  const wishlistItems = [
    {
      id: '1',
      name: '6sense (Black) Stethoscope',
      price: 2499,
      originalPrice: 3499,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'stethoscope',
      inStock: true
    },
    {
      id: '2',
      name: 'Navy Blue Scrub Set',
      price: 1899,
      originalPrice: 2499,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'scrubs',
      inStock: true
    },
    {
      id: '3',
      name: 'Premium Lab Coat',
      price: 1299,
      originalPrice: 1799,
      image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'lab-coats',
      inStock: false
    }
  ];

  const addToCart = (item: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        image: item.image,
        category: item.category
      }
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
          <Link 
            to="/" 
            className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <span className="text-gray-600">{wishlistItems.length} items</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group">
              {/* Remove from wishlist button */}
              <button className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <X className="w-4 h-4 text-gray-600 hover:text-red-600" />
              </button>
              
              <Link to={`/product/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              
              <div className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                    {item.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-purple-800">₹{item.price.toLocaleString()}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">₹{item.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                
                <div className="space-y-2">
                  {item.inStock ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 font-semibold py-2 px-4 rounded-lg cursor-not-allowed"
                    >
                      Out of Stock
                    </button>
                  )}
                  
                  <Link
                    to={`/product/${item.id}`}
                    className="w-full border border-purple-800 text-purple-800 hover:bg-purple-50 font-semibold py-2 px-4 rounded-lg transition-colors block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;