import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state: cartState } = useCart();
  const { performSearch } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-purple-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">🏥 knya</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/men" className="hover:text-orange-300 transition-colors">Men</Link>
            <Link to="/women" className="hover:text-orange-300 transition-colors">Women</Link>
            <Link to="/ecoflex" className="hover:text-orange-300 transition-colors">Ecoflex</Link>
            <Link to="/stethoscope" className="hover:text-orange-300 transition-colors">Stethoscope</Link>
            <Link to="/track-order" className="hover:text-orange-300 transition-colors">Track Order</Link>
            <Link to="/bulk-order" className="hover:text-orange-300 transition-colors">Bulk Order</Link>
            <Link to="/blog" className="hover:text-orange-300 transition-colors">Blog</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-orange-300 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/account" className="hover:text-orange-300 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="hover:text-orange-300 transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="hover:text-orange-300 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for scrubs, stethoscopes, lab coats..."
                className="flex-1 px-4 py-3 text-gray-800 outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/men" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Men</Link>
              <Link to="/women" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Women</Link>
              <Link to="/ecoflex" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Ecoflex</Link>
              <Link to="/stethoscope" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Stethoscope</Link>
              <Link to="/track-order" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Track Order</Link>
              <Link to="/bulk-order" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Bulk Order</Link>
              <Link to="/blog" className="hover:text-orange-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;