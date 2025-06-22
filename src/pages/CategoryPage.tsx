import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Filter, Grid, List } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    size: '',
    color: '',
    rating: 0
  });

  // Mock category data
  const categoryData = {
    'men': {
      title: "Men's Medical Apparel",
      description: "Professional scrubs, lab coats, and accessories designed for male healthcare professionals",
      products: [
        {
          id: '1',
          name: "Men's Classic Navy Scrub Set",
          price: 1899,
          originalPrice: 2499,
          image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          rating: 4.7,
          reviews: 156,
          colors: ['Navy', 'Black', 'Green'],
          sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
          id: '2',
          name: "Men's Professional Black Scrubs",
          price: 2199,
          originalPrice: 2899,
          image: 'https://images.pexels.com/photos/6749781/pexels-photo-6749781.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          rating: 4.8,
          reviews: 203,
          colors: ['Black', 'Gray', 'Navy'],
          sizes: ['S', 'M', 'L', 'XL', 'XXL']
        }
      ]
    },
    'women': {
      title: "Women's Medical Apparel",
      description: "Stylish and comfortable scrubs, lab coats, and accessories designed for female healthcare professionals",
      products: [
        {
          id: '3',
          name: "Women's Elegant Navy Scrub Set",
          price: 1999,
          originalPrice: 2599,
          image: 'https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          rating: 4.8,
          reviews: 189,
          colors: ['Navy', 'Pink', 'Purple'],
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        }
      ]
    },
    'stethoscope': {
      title: "Stethoscopes",
      description: "Professional-grade stethoscopes with superior acoustics and comfort",
      products: [
        {
          id: '4',
          name: "6sense (Black) Stethoscope",
          price: 2499,
          originalPrice: 3499,
          image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          rating: 4.8,
          reviews: 324,
          colors: ['Black', 'Navy', 'Wine'],
          sizes: ['One Size']
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/" className="text-purple-600 hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Category Hero */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{currentCategory.description}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link to="/" className="text-purple-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 capitalize">{category}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({ 
                    ...filters, 
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)] 
                  })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹0</span>
                  <span>₹{filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFilters({ ...filters, size: filters.size === size ? '' : size })}
                      className={`py-2 px-3 border rounded text-sm ${
                        filters.size === size 
                          ? 'border-purple-500 bg-purple-50 text-purple-800' 
                          : 'border-gray-300 hover:border-purple-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Color</h3>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'Black', class: 'bg-black' },
                    { name: 'Navy', class: 'bg-blue-900' },
                    { name: 'White', class: 'bg-white border' },
                    { name: 'Green', class: 'bg-green-700' },
                    { name: 'Pink', class: 'bg-pink-500' },
                    { name: 'Purple', class: 'bg-purple-700' }
                  ].map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setFilters({ ...filters, color: filters.color === color.name ? '' : color.name })}
                      className={`w-8 h-8 rounded-full ${color.class} ${
                        filters.color === color.name ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => setFilters({ priceRange: [0, 10000], size: '', color: '', rating: 0 })}
                className="w-full border border-purple-800 text-purple-800 hover:bg-purple-50 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{currentCategory.products.length} products</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-100 text-purple-800' : 'text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-100 text-purple-800' : 'text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
              {currentCategory.products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'list' ? 'w-48 h-48' : 'w-full h-64'
                      }`}
                    />
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold mb-2 text-gray-800">{product.name}</h3>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <span className="text-lg font-bold text-purple-800">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      
                      <div className="text-xs text-gray-600 mb-3">
                        Available in {product.colors.length} colors, {product.sizes.length} sizes
                      </div>
                      
                      <button className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;