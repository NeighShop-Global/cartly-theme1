import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';

// Main Pages
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Ecoflex from './pages/Ecoflex';
import Stethoscope from './pages/Stethoscope';
import TrackOrder from './pages/TrackOrder';
import BulkOrder from './pages/BulkOrder';
import Blog from './pages/Blog';
import BrandStory from './pages/BrandStory';
import Sitemap from './pages/Sitemap';
import FAQ from './pages/FAQ';
import ExchangesReturns from './pages/ExchangesReturns';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WarrantyRegistration from './pages/WarrantyRegistration';
import CommunityStories from './pages/CommunityStories';
import OurStores from './pages/OurStores';

// Product Pages
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import SearchResults from './pages/SearchResults';

// E-commerce Pages
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';

// Blog Child Pages
import BlogPost from './pages/BlogPost';
// import BlogCategory from './pages/BlogCategory';

// // Store Child Pages
// import StoreDetail from './pages/StoreDetail';
// import StoreLocator from './pages/StoreLocator';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/ecoflex" element={<Ecoflex />} />
              <Route path="/stethoscope" element={<Stethoscope />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/bulk-order" element={<BulkOrder />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/brand-story" element={<BrandStory />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/exchanges-returns" element={<ExchangesReturns />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/warranty-registration" element={<WarrantyRegistration />} />
              <Route path="/community-stories" element={<CommunityStories />} />
              <Route path="/our-stores" element={<OurStores />} />

              {/* Product & Category Pages */}
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/search" element={<SearchResults />} />

              {/* E-commerce Pages */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />

              {/* Blog Child Pages */}
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* <Route path="/blog/category/:category" element={<BlogCategory />} /> */}

              {/* Store Child Pages */}
              {/* <Route path="/stores/:id" element={<StoreDetail />} />
              <Route path="/store-locator" element={<StoreLocator />} /> */}
            </Routes>
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;