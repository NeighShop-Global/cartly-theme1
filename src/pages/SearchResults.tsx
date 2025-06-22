import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Filter, Star, Grid, List } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchState, setFilters } = useSearch();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');

  // Mock search results
  const mockResults = [
    {
      id: '1',
      name: 'Navy Blue Scrub Set',
      price: 1899,
      originalPrice: 2499,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'scrubs',
      rating: 4.7,
      reviews: 156,
      colors: ['Navy', 'Black', 'Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '2',
      name: '6sense Stethoscope Black',
      price: 2499,
      originalPrice: 3499,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'stethoscope',
      rating: 4.8,
      reviews: 324,
      colors: ['Black', 'Navy', 'Wine'],
      sizes: ['One Size']
    },
    {
      id: '3',
      name: 'Premium Lab Coat',
      price: 1299,
      originalPrice: 1799,
      image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'lab-coats',
      rating: 4.6,
      reviews: 89,
      colors: ['White', 'Blue', 'Gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
  ];

  const [filteredResults, setFilteredResults] = useState(mockResults);

  useEffect(() => {
    // Apply filters and sorting
    let results = [...mockResults];
    
    // Filter by category
    if (searchState.filters.category) {
      results = results.filter(item => item.category === searchState.filters.category);
    }
    
    // Filter by price range
    results = results.filter(item => 
      item.price >= searchState.filters.priceRange[0] && 
      item.price <= searchState.filters.priceRange[1]
    );
    
    // Filter by rating
    if (searchState.filters.rating > 0) {
      results = results.filter(item => item.rating >= searchState.filters.rating);
    }
    
    // Sort results
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Keep original order for newest
        break;
      default:
        // Relevance - keep original order
        break;
    }
    
    setFilteredResults(results);
  }, [searchState.filters, sortBy]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-gray-600">
            {query ? `Showing results for "${query}"` : 'Browse all products'} 
            ({filteredResults.length} items found)
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {['scrubs', 'stethoscope', 'lab-coats', 'accessories'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={searchState.filters.category === category}
                        onChange={(e) => setFilters({ category: e.target.value })}
                        className="mr-2"
                      />
                      <span className="capitalize">{category.replace('-', ' ')}</span>
                    </label>
                  ))}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={searchState.filters.category === ''}
                      onChange={(e) => setFilters({ category: e.target.value })}
                      className="mr-2"
                    />
                    <span>All Categories</span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={searchState.filters.priceRange[1]}
                    onChange={(e) => setFilters({ 
                      priceRange: [searchState.filters.priceRange[0], parseInt(e.target.value)] 
                    })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span>₹{searchState.filters.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={searchState.filters.rating === rating}
                        onChange={(e) => setFilters({ rating: parseInt(e.target.value) })}
                        className="mr-2"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-1 text-sm">& up</span>
                      </div>
                    </label>
                  ))}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value="0"
                      checked={searchState.filters.rating === 0}
                      onChange={(e) => setFilters({ rating: parseInt(e.target.value) })}
                      className="mr-2"
                    />
                    <span className="text-sm">All Ratings</span>
                  </label>
                </div>
              </div>

              <button
                onClick={() => setFilters({ category: '', priceRange: [0, 10000], rating: 0, size: '', color: '' })}
                className="w-full border border-purple-800 text-purple-800 hover:bg-purple-50 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
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
              {filteredResults.map((product) => (
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
                        Colors: {product.colors.join(', ')}
                      </div>
                      
                      <button className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-4">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <Link 
                  to="/" 
                  className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;