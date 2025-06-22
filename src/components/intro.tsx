import React from 'react';
import { Plus } from 'lucide-react';

const KnyaIntroSection = () => {
  return (
    <section className="bg-[#f7e9c8] py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
          Knya: Stylish & Functional Medical Scrubs, Lab Coats, and Stethoscopes for Men & Women!
        </h1>

        <h2 className="text-xl font-semibold text-purple-800 mb-2">
          Introduction:
        </h2>

        <p className="text-base text-purple-800 mb-6 leading-relaxed">
          Knya is your one-stop shop for top-quality medical scrubs, lab coats, and underscrubs for men and women.
          We believe every medical professional deserves comfortable, flexible, and breathable apparel that also
          projects a highly professional image.
        </p>

        <button className="flex items-center gap-2 border border-purple-800 text-purple-800 px-5 py-2 hover:bg-purple-100 transition-colors rounded">
          <Plus className="w-4 h-4" />
          <span>Read More</span>
        </button>
      </div>
    </section>
  );
};

export default KnyaIntroSection;