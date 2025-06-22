import React from 'react';

const MarqueeStrip = ({ children, className = "", speed = "animate-marquee" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-block ${speed}`}>
        {children}
      </div>
    </div>
  );
};

export default MarqueeStrip;
