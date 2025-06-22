import React from 'react';
import { Phone, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-16 relative overflow-hidden rounded-tr-[13%]">
      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold mb-6 block">🏥 knya</Link>
            <div className="text-sm text-gray-300 mb-4">
              <div className="font-semibold">Corporate Office</div>
              <div>Knya Enterprise Pvt. Ltd. 401, Todi Building,</div>
              <div>Mathuradas Mill Compound, Lower Parel</div>
              <div>Mumbai 400013, MH, India</div>
            </div>
            <Link to="/our-stores" className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded flex items-center text-sm transition-colors w-fit">
              Find a Store
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/brand-story" className="hover:text-white transition-colors">Brand Story</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
              <li><Link to="/community-stories" className="hover:text-white transition-colors">Community Stories</Link></li>
              <li><Link to="/our-stores" className="hover:text-white transition-colors">Our Stores</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/exchanges-returns" className="hover:text-white transition-colors">Exchanges & Returns</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/warranty-registration" className="hover:text-white transition-colors">Warranty Registration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li><Link to="/men" className="hover:text-white transition-colors">Scrubs</Link></li>
              <li><Link to="/ecoflex" className="hover:text-white transition-colors">Ecoflex</Link></li>
              <li><Link to="/stethoscope" className="hover:text-white transition-colors">6sense Stethoscope</Link></li>
              <li><Link to="/women" className="hover:text-white transition-colors">Lab Coat Apron</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Gifting</a></li>
            </ul>
            
            <div className="text-sm text-gray-300">
              <div className="flex items-center mb-2">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9987200005</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Sat (10am-6pm)</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Mon-Sun (8am-8pm)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> / Copyright 2024. All Rights Reserved.
            </div>
            <div className="flex space-x-4">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-4">
            We've received reports of suspicious calls and messages asking for payments related to offers. Please remember that Knya only communicates through our official channels. If you receive any such calls or messages requesting payments, report them to our support team.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;