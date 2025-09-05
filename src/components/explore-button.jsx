'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function ExploreButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Magnetic strength - adjust these values to control the effect
    const strength = 0.3;
    
    setPosition({
      x: deltaX * strength,
      y: deltaY * strength
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link href="/destination" className="group">
      <div 
        ref={buttonRef}
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isHovering ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {/* Outer ring with hover effect */}
        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500 ease-out scale-100 group-hover:scale-110"></div>
        
        {/* Main button */}
        <div className="relative bg-white rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px] flex items-center justify-center cursor-pointer transition-all duration-500 ease-out group-hover:scale-105">
          {/* Inner glow effect */}
          <div className="absolute inset-2 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-all duration-500"></div>
          
          {/* Text */}
          <span className="relative text-preset-4 text-[#0B0D17] tracking-[2px] group-hover:tracking-[6px] transition-all duration-500 ease-out">
            EXPLORE
          </span>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-500 ease-out"></div>
        </div>
        
        {/* Additional glow effect on hover */}
        <div className="absolute inset-0 bg-white/0 rounded-full blur-2xl group-hover:bg-white/5 transition-all duration-700 ease-out scale-100 group-hover:scale-125"></div>
      </div>
    </Link>
  );
}
