import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock product data - in real app, fetch from API
  const product = {
    id: id || '1',
    name: '6sense (Black) Stethoscope',
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviewCount: 324,
    description: 'Professional-grade stethoscope with superior acoustic performance. Designed for healthcare professionals who demand precision and comfort.',
    features: [
      'Superior acoustic clarity',
      'Comfortable earpieces',
      'Durable construction',
      'Lightweight design',
      '2-year warranty',
      '7-day free trial'
    ],
    images: [
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    colors: [
      { name: 'Black', value: 'black', class: 'bg-black' },
      { name: 'Navy', value: 'navy', class: 'bg-blue-900' },
      { name: 'Wine', value: 'wine', class: 'bg-red-900' }
    ],
    sizes: ['One Size'],
    category: 'stethoscope',
    inStock: true,
    specifications: {
      'Material': 'Stainless Steel',
      'Weight': '150g',
      'Tube Length': '22 inches',
      'Warranty': '2 years',
      'Certification': 'CE Marked'
    }
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${product.id}-${selectedColor}-${selectedSize}`,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        category: product.category
      }
    });
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Premium Lab Coat',
      price: 1299,
      originalPrice: 1799,
      image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.6
    },
    {
      id: '3',
      name: 'Navy Scrub Set',
      price: 1899,
      originalPrice: 2499,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link to="/" className="text-purple-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/stethoscope" className="text-purple-600 hover:underline">Stethoscopes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      activeImageIndex === index ? 'border-purple-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-purple-800">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through ml-3">₹{product.originalPrice.toLocaleString()}</span>
                )}
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded ml-3 text-sm">
                  Save ₹{((product.originalPrice || 0) - product.price).toLocaleString()}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Color:</h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-10 h-10 rounded-full border-2 ${color.class} ${
                          selectedColor === color.value ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-300'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Size:</h3>
                  <div className="flex space-x-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded ${
                          selectedSize === size 
                            ? 'border-purple-500 bg-purple-50 text-purple-800' 
                            : 'border-gray-300 hover:border-purple-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Quantity:</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="border border-purple-800 text-purple-800 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders over ₹999</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">2 Year Warranty</p>
                  <p className="text-xs text-gray-600">Manufacturer warranty</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <RotateCcw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">7-Day Trial</p>
                  <p className="text-xs text-gray-600">Risk-free trial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className="py-4 px-1 border-b-2 border-purple-500 font-medium text-purple-600">
                  Features
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                  Specifications
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                  Reviews
                </button>
              </nav>
            </div>
            
            <div className="py-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <dl className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex">
                        <dt className="font-medium w-1/3">{key}:</dt>
                        <dd className="text-gray-600">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-bold text-purple-800">₹{relatedProduct.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₹{relatedProduct.originalPrice}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;