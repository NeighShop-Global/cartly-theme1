import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-6 bg-purple-800 relative overflow-hidden mb-6 rounded-br-[15%]">

      {/* Curved top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Our emails are like our scrubs.
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-200">
              Focused on you!
            </h3>
            <p className="text-lg text-purple-200 mt-4 max-w-2xl mx-auto">
              Get exclusive updates on new arrivals, special offers, and medical fashion tips delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl p-2 shadow-2xl">
              <div className="flex-1 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none text-lg"
                />
              </div>
              <button className="w-full sm:w-auto bg-purple-800 hover:bg-purple-900 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg mt-2 sm:mt-0">
                <span className="font-semibold">Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 mt-6 text-purple-200 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>10,000+ subscribers</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
         
        </div>
      </div>
    </section>
  );
};

export default Newsletter;