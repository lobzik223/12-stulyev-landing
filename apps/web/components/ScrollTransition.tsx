"use client";
import { useEffect, useState } from "react";

export default function ScrollTransition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Определяем направление скролла
      if (currentScrollY > prevScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Вычисляем прогресс анимации (от 0 до 1)
  // Начинается когда Hero секция на 70% прокручена, заканчивается когда Events секция на 30% видна
  const getAnimationProgress = () => {
    const heroSection = document.getElementById('hero') || { offsetHeight: 800 };
    const heroHeight = heroSection.offsetHeight;
    const transitionStart = heroHeight * 0.7;
    const transitionEnd = heroHeight + 200; // 200px на плавность
    
    const progress = Math.max(0, Math.min(1, (scrollY - transitionStart) / (transitionEnd - transitionStart)));
    return progress;
  };

  const progress = getAnimationProgress();

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Анимированная темная маска */}
      <div 
        className="absolute top-0 left-0 right-0 transition-all duration-1000 ease-out"
        style={{
          height: `${progress * 100}vh`,
          background: 'linear-gradient(to bottom, #0e0b09 0%, #0e0b09 100%)',
          transform: `translateY(${isScrollingDown ? -20 : 20}px)`,
          opacity: progress * 0.95,
        }}
      />
      
      {/* Волны */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        {/* Волна 1 */}
        <svg 
          className="absolute w-full h-full transition-all duration-1000 ease-out"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{
            transform: `translateY(${progress * 60 + (isScrollingDown ? -10 : 10)}px)`,
            opacity: progress,
          }}
        >
          <path 
            d="M0,60 Q150,30 300,60 T600,60 T900,60 T1200,60 L1200,120 0,120 Z" 
            fill="#0e0b09" 
            className="transition-all duration-1000"
            style={{
              transform: `scaleY(${0.8 + progress * 0.4})`,
            }}
          />
        </svg>
        
        {/* Волна 2 */}
        <svg 
          className="absolute w-full h-full transition-all duration-1200 ease-out"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{
            transform: `translateY(${progress * 40 + (isScrollingDown ? -15 : 15)}px)`,
            opacity: progress * 0.8,
          }}
        >
          <path 
            d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 0,120 Z" 
            fill="#0e0b09" 
            className="transition-all duration-1200"
            style={{
              transform: `scaleY(${0.6 + progress * 0.6})`,
            }}
          />
        </svg>
        
        {/* Волна 3 - декоративная */}
        <svg 
          className="absolute w-full h-full transition-all duration-800 ease-out"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{
            transform: `translateY(${progress * 80 + (isScrollingDown ? -5 : 5)}px)`,
            opacity: progress * 0.6,
          }}
        >
          <path 
            d="M0,100 Q300,60 600,100 T1200,100 L1200,120 0,120 Z" 
            fill="#1a1a1a" 
            className="transition-all duration-800"
          />
        </svg>
      </div>
      
      {/* Плавающие частицы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full transition-all duration-1000 ease-out"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 15}%`,
              transform: `translateY(${progress * 50 + Math.sin(Date.now() / 1000 + i) * 10}px) translateX(${Math.cos(Date.now() / 1500 + i) * 20}px)`,
              opacity: progress * 0.4,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
