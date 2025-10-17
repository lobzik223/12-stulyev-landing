"use client";
import { useEffect, useState } from "react";

export default function ScrollWaves() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Очищаем предыдущий таймер
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Устанавливаем новый таймер для остановки анимации
      const newTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Анимация останавливается через 150мс после окончания скролла
      
      setScrollTimeout(newTimeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <div className="relative w-full h-32 overflow-hidden">
      {/* Волна 1 - движется влево с легким подъемом */}
      <svg 
        className={`absolute w-full h-full transition-all duration-300 ${isScrolling ? 'animate-wave-slow-1' : ''}`}
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{ 
          top: '0px',
          opacity: 0.8
        }}
      >
        <path 
          d="M0,60 Q150,30 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" 
          fill="#0e0b09"
        />
      </svg>
      
      {/* Волна 2 - движется вправо с небольшими колебаниями */}
      <svg 
        className={`absolute w-full h-full transition-all duration-300 ${isScrolling ? 'animate-wave-slow-2' : ''}`}
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{ 
          top: '20px',
          opacity: 0.6
        }}
      >
        <path 
          d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z" 
          fill="#0e0b09"
        />
      </svg>
      
      {/* Волна 3 - медленно движется влево с минимальными колебаниями */}
      <svg 
        className={`absolute w-full h-full transition-all duration-300 ${isScrolling ? 'animate-wave-slow-3' : ''}`}
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{ 
          top: '40px',
          opacity: 0.4
        }}
      >
        <path 
          d="M0,100 Q300,60 600,100 T1200,100 L1200,120 L0,120 Z" 
          fill="#0e0b09"
        />
      </svg>
    </div>
  );
}
