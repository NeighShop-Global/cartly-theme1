import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import MarqueeStrip from '../components/MarqueeStrip';
import ShopByCategory from '../components/ShopByCategory';
import ShopByColor from '../components/ShopByColor';
import CTA from '../components/intro';
import FeaturedProducts from '../components/FeaturedProducts';
import StethoscopeCollection from '../components/StethoscopeCollection';
import MensScrubsSection from '../components/MensScrubsSection';
import WomensScrubsSection from '../components/WomensScrubsSection';
import ScrubsCollection from '../components/ScrubsCollection';
import LabCoatsSection from '../components/LabCoatsSection';
import AccessoriesSection from '../components/AccessoriesSection';
import TrustSection from '../components/TrustSection';
import BrandMarquee from '../components/BrandMarquee';
import NewsSection from '../components/NewsSection';
import KnyaClub from '../components/KnyaClub';
import SeenInKnya from '../components/SeenInKnya';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      
      {/* Benefits Marquee */}
      <div className="bg-orange-200 py-2">
        <MarqueeStrip className="text-purple-800 font-medium">
          <span className="inline-block mx-8">✨ Free shipping on orders over ₹999</span>
          <span className="inline-block mx-8">🎯 7-day trial available</span>
          <span className="inline-block mx-8">👩‍⚕️ Worn by 10,000+ doctors</span>
          <span className="inline-block mx-8">🏥 Trusted by top hospitals</span>
          <span className="inline-block mx-8">✨ Free shipping on orders over ₹999</span>
          <span className="inline-block mx-8">🎯 7-day trial available</span>
          <span className="inline-block mx-8">👩‍⚕️ Worn by 10,000+ doctors</span>
          <span className="inline-block mx-8">🏥 Trusted by top hospitals</span>
        </MarqueeStrip>
      </div>

      <ShopByCategory />
      <ShopByColor />
      <FeaturedProducts />
      <StethoscopeCollection />
      <MensScrubsSection />
      <WomensScrubsSection />
      <ScrubsCollection />
      <LabCoatsSection />
      <AccessoriesSection />
      
      <TrustSection />
      <BrandMarquee />
      <NewsSection />
      <KnyaClub />
      <SeenInKnya />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;