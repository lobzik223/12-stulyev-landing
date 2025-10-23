"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function JourneySection() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [compassOffset, setCompassOffset] = useState(0);
  const [compassRotation, setCompassRotation] = useState(0);
  const [compassScale, setCompassScale] = useState(1);
  const [compassOpacity, setCompassOpacity] = useState(0);
  const [compassGlow, setCompassGlow] = useState(0);
  const [keyOffset, setKeyOffset] = useState(0);
  const [keyRotation, setKeyRotation] = useState(0);
  const [keyScale, setKeyScale] = useState(1);
  const [keyOpacity, setKeyOpacity] = useState(0);
  const [keyGlow, setKeyGlow] = useState(0);
  const [compassParallax, setCompassParallax] = useState(0);
  const [keyParallax, setKeyParallax] = useState(0);
  const [moneyOffset, setMoneyOffset] = useState(0);
  const [moneyRotation, setMoneyRotation] = useState(0);
  const [moneyScale, setMoneyScale] = useState(1);
  const [moneyOpacity, setMoneyOpacity] = useState(0);
  const [moneyGlow, setMoneyGlow] = useState(0);
  const [moneyParallax, setMoneyParallax] = useState(0);
  const [suitcaseOffset, setSuitcaseOffset] = useState(0);
  const [suitcaseRotation, setSuitcaseRotation] = useState(0);
  const [suitcaseScale, setSuitcaseScale] = useState(1);
  const [suitcaseOpacity, setSuitcaseOpacity] = useState(0);
  const [suitcaseGlow, setSuitcaseGlow] = useState(0);
  const [suitcaseParallax, setSuitcaseParallax] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const keyRef = useRef<HTMLDivElement>(null);
  const moneyRef = useRef<HTMLDivElement>(null);
  const suitcaseRef = useRef<HTMLDivElement>(null);
  const section0Ref = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Compass animation effect on scroll - similar to hlado.ru
  useEffect(() => {
    let animationFrameId: number;
    
    const handleCompassAnimation = () => {
      if (compassRef.current) {
        const compassRect = compassRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when compass is in viewport
        const isInViewport = compassRect.top < windowHeight && compassRect.bottom > 0;
        
        if (isInViewport) {
          // Calculate scroll progress within the viewport
          const viewportProgress = Math.max(0, Math.min(1, 
            (windowHeight - compassRect.top) / (windowHeight + compassRect.height)
          ));
          
          // Faster opacity transition - appears quicker
          const opacity = Math.max(0, Math.min(1, viewportProgress * 3));
          
          // No rotation animation - keep compass static
          const rotation = 0;
          
          // Scale animation - keep at full size when in viewport
          const scale = Math.max(0.8, 0.7 + Math.sin(viewportProgress * Math.PI) * 0.5);
          
          // Vertical floating motion
          const offset = Math.sin(viewportProgress * Math.PI * 3) * 15;
          
          // Glow effect based on scroll progress
          const glow = Math.sin(viewportProgress * Math.PI * 2) * 0.5 + 0.5;
          
          // Parallax effect - compass stays in place
          const parallaxOffset = 0;
          
          // Update states with smooth transitions
          setCompassOpacity(opacity);
          setCompassScale(scale);
          setCompassRotation(rotation);
          setCompassOffset(offset);
          setCompassGlow(glow);
          setCompassParallax(parallaxOffset);
        } else {
          // Reset when out of viewport
          setCompassOpacity(0);
          setCompassScale(0.7);
          setCompassRotation(0);
          setCompassOffset(0);
          setCompassGlow(0);
        }
      }
    };

    const throttledAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleCompassAnimation);
    };

    // Initial animation
    throttledAnimation();
    
    window.addEventListener('scroll', throttledAnimation, { passive: true });
    window.addEventListener('resize', throttledAnimation, { passive: true });
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', throttledAnimation);
      window.removeEventListener('resize', throttledAnimation);
    };
  }, []);

  // Key animation effect on scroll - similar to compass
  useEffect(() => {
    let animationFrameId: number;
    
    const handleKeyAnimation = () => {
      if (keyRef.current) {
        const keyRect = keyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when key is in viewport
        const isInViewport = keyRect.top < windowHeight && keyRect.bottom > 0;
        
        if (isInViewport) {
          // Calculate scroll progress within the viewport
          const viewportProgress = Math.max(0, Math.min(1, 
            (windowHeight - keyRect.top) / (windowHeight + keyRect.height)
          ));
          
          // Faster opacity transition - appears quicker
          const opacity = Math.max(0, Math.min(1, viewportProgress * 3));
          
          // No rotation animation - keep key static
          const rotation = 0;
          
          // Scale animation - keep at full size when in viewport
          const scale = Math.max(0.8, 0.7 + Math.sin(viewportProgress * Math.PI) * 0.5);
          
          // Vertical floating motion
          const offset = Math.sin(viewportProgress * Math.PI * 3) * 15;
          
          // Glow effect based on scroll progress
          const glow = Math.sin(viewportProgress * Math.PI * 2) * 0.5 + 0.5;
          
          // Parallax effect - key stays in place
          const parallaxOffset = 0;
          
          // Update states with smooth transitions
          setKeyOpacity(opacity);
          setKeyScale(scale);
          setKeyRotation(rotation);
          setKeyOffset(offset);
          setKeyGlow(glow);
          setKeyParallax(parallaxOffset);
        } else {
          // Reset when out of viewport
          setKeyOpacity(0);
          setKeyScale(0.7);
          setKeyRotation(0);
          setKeyOffset(0);
          setKeyGlow(0);
        }
      }
    };

    const throttledAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleKeyAnimation);
    };

    // Initial animation
    throttledAnimation();
    
    window.addEventListener('scroll', throttledAnimation, { passive: true });
    window.addEventListener('resize', throttledAnimation, { passive: true });
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', throttledAnimation);
      window.removeEventListener('resize', throttledAnimation);
    };
  }, []);

  // Money animation effect on scroll - similar to compass and key
  useEffect(() => {
    let animationFrameId: number;
    
    const handleMoneyAnimation = () => {
      if (moneyRef.current) {
        const moneyRect = moneyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when money is in viewport
        const isInViewport = moneyRect.top < windowHeight && moneyRect.bottom > 0;
        
        if (isInViewport) {
          // Calculate scroll progress within the viewport
          const viewportProgress = Math.max(0, Math.min(1, 
            (windowHeight - moneyRect.top) / (windowHeight + moneyRect.height)
          ));
          
          // Faster opacity transition - appears quicker
          const opacity = Math.max(0, Math.min(1, viewportProgress * 3));
          
          // No rotation animation - keep money static
          const rotation = 0;
          
          // Scale animation - keep at full size when in viewport
          const scale = Math.max(0.8, 0.7 + Math.sin(viewportProgress * Math.PI) * 0.5);
          
          // Vertical floating motion
          const offset = Math.sin(viewportProgress * Math.PI * 3) * 15;
          
          // Glow effect based on scroll progress
          const glow = Math.sin(viewportProgress * Math.PI * 2) * 0.5 + 0.5;
          
          // Parallax effect - money stays in place
          const parallaxOffset = 0;
          
          // Update states with smooth transitions
          setMoneyOpacity(opacity);
          setMoneyScale(scale);
          setMoneyRotation(rotation);
          setMoneyOffset(offset);
          setMoneyGlow(glow);
          setMoneyParallax(parallaxOffset);
        } else {
          // Reset when out of viewport
          setMoneyOpacity(0);
          setMoneyScale(0.7);
          setMoneyRotation(0);
          setMoneyOffset(0);
          setMoneyGlow(0);
          setMoneyParallax(0);
        }
      }
    };

    const throttledAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleMoneyAnimation);
    };

    // Initial animation
    throttledAnimation();
    
    window.addEventListener('scroll', throttledAnimation, { passive: true });
    window.addEventListener('resize', throttledAnimation, { passive: true });
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', throttledAnimation);
      window.removeEventListener('resize', throttledAnimation);
    };
  }, []);

  // Suitcase animation effect on scroll - similar to compass, key and money
  useEffect(() => {
    let animationFrameId: number;
    
    const handleSuitcaseAnimation = () => {
      if (suitcaseRef.current) {
        const suitcaseRect = suitcaseRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when suitcase is in viewport
        const isInViewport = suitcaseRect.top < windowHeight && suitcaseRect.bottom > 0;
        
        if (isInViewport) {
          // Calculate scroll progress within the viewport
          const viewportProgress = Math.max(0, Math.min(1, 
            (windowHeight - suitcaseRect.top) / (windowHeight + suitcaseRect.height)
          ));
          
          // Faster opacity transition - appears quicker
          const opacity = Math.max(0, Math.min(1, viewportProgress * 3));
          
          // Slight rotation to the side to avoid blocking text
          const rotation = 5;
          
          // Scale animation - keep at full size when in viewport
          const scale = Math.max(0.8, 0.7 + Math.sin(viewportProgress * Math.PI) * 0.5);
          
          // Vertical floating motion
          const offset = Math.sin(viewportProgress * Math.PI * 3) * 15;
          
          // Glow effect based on scroll progress
          const glow = Math.sin(viewportProgress * Math.PI * 2) * 0.5 + 0.5;
          
          // Parallax effect - suitcase stays in place
          const parallaxOffset = 0;
          
          // Update states with smooth transitions
          setSuitcaseOpacity(opacity);
          setSuitcaseScale(scale);
          setSuitcaseRotation(rotation);
          setSuitcaseOffset(offset);
          setSuitcaseGlow(glow);
          setSuitcaseParallax(parallaxOffset);
        } else {
          // Reset when out of viewport
          setSuitcaseOpacity(0);
          setSuitcaseScale(0.7);
          setSuitcaseRotation(0);
          setSuitcaseOffset(0);
          setSuitcaseGlow(0);
          setSuitcaseParallax(0);
        }
      }
    };

    const throttledAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleSuitcaseAnimation);
    };

    // Initial animation
    throttledAnimation();
    
    window.addEventListener('scroll', throttledAnimation, { passive: true });
    window.addEventListener('resize', throttledAnimation, { passive: true });
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', throttledAnimation);
      window.removeEventListener('resize', throttledAnimation);
    };
  }, []);

  // Sticky timeline effect - follows scroll and sticks to main header
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && timelineRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();
        
        // Main header height is approximately 70px
        const mainHeaderHeight = 70;
        
        // Timeline becomes sticky when:
        // 1. Timeline would touch the main header (top <= 70px)
        // 2. Section is still visible (bottom > 200px)
        // 3. Section has scrolled past its original position (top < 0)
        const shouldBeSticky = timelineRect.top <= mainHeaderHeight && 
                               sectionRect.bottom > 200 && 
                               sectionRect.top < 0; // Section has scrolled past its original position
        
        // Stop being sticky when section starts returning to view (earlier trigger)
        const shouldStopSticky = sectionRect.top >= -50; // Start returning when section is 50px above viewport
        
        const finalStickyState = shouldStopSticky ? false : shouldBeSticky;
        
        console.log('Timeline top:', timelineRect.top, 'Section top:', sectionRect.top, 'Section bottom:', sectionRect.bottom, 'Should be sticky:', finalStickyState);
        
        if (finalStickyState !== isSticky) {
          setIsSticky(finalStickyState);
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleSectionDetection = () => {
      const sections = [
        section0Ref.current,
        section1Ref.current,
        section2Ref.current,
        section3Ref.current
      ];

      // Get scroll position relative to viewport center
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      // Find which section is currently in the center of viewport
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + rect.height;

          // Check if viewport center is within this section
          if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
            if (activeSection !== i) {
              setActiveSection(i);
            }
            return;
          }
        }
      }
    };

    handleSectionDetection();
    window.addEventListener('scroll', handleSectionDetection, { passive: true });
    window.addEventListener('resize', handleSectionDetection, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleSectionDetection);
      window.removeEventListener('resize', handleSectionDetection);
    };
  }, [activeSection]);

  const timelineItems = [
    "Наследие «Двенадцати стульев»",
    "Искромётная комедия",
    "Современная «перезагрузка»",
    "Живая атмосфера"
  ];

  return (
    <>
      {/* Wave divider */}
      <div 
        className="relative w-full select-none pointer-events-none z-10"
               style={{
          height: 100,
          marginTop: '-24px',
          backgroundColor: '#f5f5dc'
        }}
      >
        {/* CSS Wave */}
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,0 L0,0 Z" 
            fill="#111827"
          />
             </svg>
      </div>
      
      <section 
        ref={sectionRef} 
        id="journey" 
        className="py-20 text-white relative overflow-hidden"
               style={{
          backgroundColor: '#f5f5dc'
        }}
      >
      <Container>
        <div className="text-center mb-16 relative">
          {/* Звездочки вокруг заголовка - хаотично */}
          <svg className="absolute -top-6 -left-12 w-3 h-3 text-amber-400 opacity-35 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.7s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -top-1 -right-16 w-5 h-5 text-amber-300 opacity-40 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.8s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-12 -left-8 w-4 h-4 text-amber-500 opacity-25 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '2.4s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-3 -right-10 w-3 h-3 text-amber-400 opacity-30 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.1s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -bottom-6 left-4 w-4 h-4 text-amber-300 opacity-45 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.2s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -bottom-1 right-6 w-5 h-5 text-amber-500 opacity-20 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.9s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          
          {/* Дополнительные звездочки вокруг заголовка */}
          <svg className="absolute -top-12 left-8 w-2 h-2 text-amber-400 opacity-30 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -top-8 right-12 w-3 h-3 text-amber-300 opacity-35 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.3s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-8 left-12 w-2 h-2 text-amber-500 opacity-25 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '2.1s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-6 right-8 w-4 h-4 text-amber-400 opacity-40 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.7s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -bottom-8 left-16 w-3 h-3 text-amber-300 opacity-30 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.6s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -bottom-12 right-16 w-2 h-2 text-amber-500 opacity-35 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '2.3s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-gray-900 -mt-8">О спектакле</h2>
        </div>
          
        {/* Timeline Navigation - follows scroll naturally */}
        <div 
          ref={timelineRef}
          className={`${isSticky ? 'fixed top-16 left-1/2 transform -translate-x-1/2 z-50' : 'relative'} w-full max-w-6xl mx-auto`}
        >
          {/* Звездочки вокруг шапки - хаотично */}
          <svg className="absolute -top-10 -left-14 w-3 h-3 text-amber-400 opacity-30 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.3s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -top-3 -right-18 w-5 h-5 text-amber-300 opacity-45 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.6s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -bottom-12 -left-10 w-4 h-4 text-amber-500 opacity-25 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '2.1s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute -bottom-4 -right-14 w-3 h-3 text-amber-400 opacity-35 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.8s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          {/* Larger rounded container */}
          <div className="relative w-full">
            {/* Vintage paper background */}
            <div 
              className="rounded-2xl border-4 border-amber-600/40 shadow-2xl px-16 py-6 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        style={{
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.3), inset 0 0 30px rgba(212, 175, 55, 0.1)'
              }}
            >
              {/* Декоративный узор */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.1) 10px, rgba(212, 175, 55, 0.1) 11px)'
              }}></div>
              
              <div className="relative">
                {/* Timeline line - only between circles */}
                <div className="absolute top-1/2 translate-y-4 left-2 right-2 h-1 bg-gradient-to-r from-amber-500/40 via-amber-400/60 to-amber-500/40 rounded-full shadow-lg" 
                     style={{ boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)' }}></div>
                
                {/* Timeline items */}
                <div className="relative flex justify-between">
                  {timelineItems.map((item, index) => (
                    <div
                      key={`timeline-${index}-${item}`}
                      className="flex flex-col items-center relative w-1/4 group"
                    >
                      {/* Text above */}
                      <div className="text-center mb-8 px-2">
                        <p className={`text-sm leading-tight font-semibold transition-all duration-300 ${
                          activeSection === index 
                            ? 'text-amber-300 font-bold' 
                            : 'text-amber-100 group-hover:text-amber-200'
                        }`} 
                        style={activeSection === index ? {
                          textShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
                        } : {}}>
                          {item}
                        </p>
                      </div>

                      {/* Circle on line */}
                      <div className="absolute top-1/2 translate-y-6">
                        <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                          activeSection === index 
                            ? 'bg-amber-500 border-3 border-amber-300 shadow-2xl' 
                            : 'bg-amber-600/60 border-3 border-amber-400/50 group-hover:bg-amber-500'
                        }`} 
                        style={activeSection === index ? {
                          boxShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)'
                        } : {
                          boxShadow: '0 0 10px rgba(245, 158, 11, 0.4)'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for sticky timeline - exact height match */}
        {isSticky && <div className="h-32"></div>}

        {/* Timeline Content Sections */}
        <div className="mt-32 md:mt-40 relative" ref={section0Ref}>
          {/* Звездочки по всему фону - хаотично */}
          <svg className="absolute top-8 left-16 w-4 h-4 text-amber-300 opacity-25 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.4s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-28 right-24 w-3 h-3 text-amber-400 opacity-30 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.7s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-44 left-1/4 w-5 h-5 text-amber-500 opacity-20 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '2.6s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-16 right-1/4 w-3 h-3 text-amber-300 opacity-40 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.9s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-52 left-20 w-4 h-4 text-amber-400 opacity-35 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.3s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-68 right-32 w-5 h-5 text-amber-500 opacity-15 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '2.8s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-36 left-1/2 w-3 h-3 text-amber-300 opacity-45 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.2s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          <svg className="absolute top-80 right-8 w-4 h-4 text-amber-400 opacity-25 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.9s' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
          {/* Section 1: Наследие «Двенадцати стульев» */}
          {activeSection === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative"
            >
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/images/Journeyimage/Fotoset-23.JPG"
                    alt="Наследие «Двенадцати стульев»"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      minHeight: '320px',
                      maxHeight: '500px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
                </div>
              </div>
              <div className="relative pr-8 lg:pr-16">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
                  textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
                }}>
                  Наследие «Двенадцати стульев»
                </h3>
                
                {/* Анимированный элемент компас - позиционирован за текстом */}
                <div
                  className="absolute top-8 -right-40 w-64 h-64 z-0"
                  ref={compassRef}
                >
                  {/* Декоративные кольца вокруг компаса */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-amber-400/20"
                    style={{
                      transform: `scale(${compassScale * 1.2})`,
                      opacity: compassOpacity * 0.2,
                      transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  <div 
                    className="absolute inset-2 rounded-full border border-amber-300/20"
                    style={{
                      transform: `scale(${compassScale * 1.1})`,
                      opacity: compassOpacity * 0.3,
                      transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  
                  {/* Основной компас */}
                  <img 
                    src="/images/elements/kompas1.png"
                    alt="Компас путешествий"
                    className="w-full h-full object-contain drop-shadow-2xl relative z-0"
                    style={{
                      filter: `drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 ${20 + compassGlow * 30}px rgba(245, 158, 11, ${0.3 + compassGlow * 0.4}))`,
                      transform: `translateY(${compassOffset}px) rotate(${compassRotation}deg) scale(${compassScale})`,
                      opacity: compassOpacity,
                      transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      willChange: 'transform, opacity, filter'
                    }}
                  />
                  
                  {/* Световые эффекты */}
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-radial from-amber-400/15 via-transparent to-transparent"
                    style={{
                      transform: `scale(${compassScale * 1.5})`,
                      opacity: compassOpacity * 0.3 * compassGlow,
                      transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  
                  {/* Дополнительный эффект свечения */}
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/20 via-transparent to-transparent"
                    style={{
                      transform: `scale(${compassScale * 2})`,
                      opacity: compassOpacity * 0.15 * compassGlow,
                      transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Роман Ильфа и Петрова «Двенадцать стульев» — это не просто литературное произведение, 
                    а целая эпоха в русской культуре. Написанный в 1928 году, он стал символом 
                    сатирического осмысления советской действительности.
                  </p>
                  <p>
                    Произведение рассказывает о приключениях Остапа Бендера и Кисы Воробьянинова 
                    в поисках сокровищ, спрятанных в одном из двенадцати стульев. Каждый стул — 
                    это новая глава в истории их авантюр.
                  </p>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
              </div>
                </motion.div>
          )}

          {/* Section 2: Искромётная комедия */}
          {activeSection === 1 && (
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16"
            >
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
                  textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
                }}>
                  Искромётная комедия
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Юмор Ильфа и Петрова — это особый вид комедии, который сочетает в себе 
                    остроту сатиры с теплотой человеческих отношений. Их герои не просто 
                    смешные персонажи, а живые люди со своими слабостями и достоинствами.
                  </p>
                  <p>
                    Каждая фраза, каждый диалог в романе — это маленький шедевр комедийного 
                    искусства. Авторы умели находить смешное в самом обыденном и превращать 
                    повседневность в источник радости.
                  </p>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
              </div>
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/images/Journeyimage/Fotoset-107.JPG"
                    alt="Искромётная комедия - актеры спектакля"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      minHeight: '320px',
                      maxHeight: '500px'
                    }}
                    onError={(e) => {
                      console.log('Ошибка загрузки изображения:', e);
                      e.currentTarget.src = '/images/Journeyimage/Fotoset-107.JPG?t=' + Date.now();
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
                </div>
              </div>
                </motion.div>
          )}

          {/* Section 3: Современная «перезагрузка» */}
          {activeSection === 2 && (
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
                  textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
                }}>
                  Современная «перезагрузка»
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Спектакль «12 стульев. Перезагрузка» даёт новую жизнь любимой классике. Владимир
                    Зайкин бережно хранит дух Ильфа и Петрова, но приправляет его свежими и современными
                    штрихами.
                  </p>
                  <p>
                    Знакомые мотивы — погоня за сокровищами, хитроумные афёры и остроумные
                    находки героев — здесь разворачиваются в необычном антураже: на фоне современных
                    декораций и гротескной музыки.
                  </p>
                  <p>
                    Каждый эпизод предстаёт как яркая сценка, а юмор остаётся
                    живым и энергичным: словно герои Бендера и Воробьянинова перенеслись в наш век с
                    мешком старых шуток.
                  </p>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
              </div>
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/images/Journeyimage/Fotoset-32.JPG"
                    alt="Современная перезагрузка"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      minHeight: '320px',
                      maxHeight: '500px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          )}
                
          {/* Section 4: Живая атмосфера */}
          {activeSection === 3 && (
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
                  textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
                }}>
                  Живая атмосфера
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Театральная постановка создаёт особую атмосферу, где зрители становятся 
                    свидетелями живого действия. Каждый спектакль — это уникальное событие, 
                    где актёры и зрители создают общее пространство эмоций.
                  </p>
                  <p>
                    Современные технологии и традиционные театральные приёмы объединяются, 
                    создавая неповторимый опыт. Зрители не просто смотрят спектакль, 
                    а становятся его частью.
                  </p>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
              </div>
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/images/Journeyimage/Fotoset-32.JPG"
                    alt="Современная перезагрузка"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      minHeight: '320px',
                      maxHeight: '500px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Wave divider between sections */}
        <div className="relative py-16 overflow-hidden -mx-40 lg:-mx-56">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 2000 120"
            preserveAspectRatio="none"
          >
            {/* Simple wave lines */}
            <path
              d="M0,60 Q500,20 1000,60 T2000,60"
              stroke="rgba(245, 158, 11, 0.6)"
              strokeWidth="3"
              fill="none"
            />
            
            <path
              d="M0,80 Q700,40 1400,80 T2000,80"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="2"
              fill="none"
            />
            
            <path
              d="M0,100 Q300,60 600,100 T1200,100 T2000,100"
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* New Section: Искромётная комедия */}
        <div className="mt-16" ref={section1Ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="relative pl-8 lg:pl-16">
              {/* Анимированный элемент ключ - позиционирован слева */}
              <div
                className="absolute top-0 -left-56 w-80 h-80 z-0"
                ref={keyRef}
              >
                {/* Декоративные кольца вокруг ключа */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-amber-400/20"
                  style={{
                    transform: `scale(${keyScale * 1.2})`,
                    opacity: keyOpacity * 0.2,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                <div 
                  className="absolute inset-2 rounded-full border border-amber-300/20"
                  style={{
                    transform: `scale(${keyScale * 1.1})`,
                    opacity: keyOpacity * 0.3,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                
                {/* Основной ключ */}
                <img 
                  src="/images/elements/kluch1.png"
                  alt="Ключ от сокровищ"
                  className="w-full h-full object-contain drop-shadow-2xl relative z-0"
                  style={{
                    filter: `drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 ${20 + keyGlow * 30}px rgba(245, 158, 11, ${0.3 + keyGlow * 0.4}))`,
                    transform: `translateY(${keyOffset}px) rotate(${keyRotation}deg) scale(${keyScale})`,
                    opacity: keyOpacity,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    willChange: 'transform, opacity, filter'
                  }}
                />
                
                {/* Световые эффекты */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-radial from-amber-400/15 via-transparent to-transparent"
                  style={{
                    transform: `scale(${keyScale * 1.5})`,
                    opacity: keyOpacity * 0.3 * keyGlow,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                
                {/* Дополнительный эффект свечения */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/20 via-transparent to-transparent"
                  style={{
                    transform: `scale(${keyScale * 2})`,
                    opacity: keyOpacity * 0.15 * keyGlow,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
                textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
              }}>
                Искромётная комедия
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Каждый кадр постановки — настоящий калейдоскоп комических ситуаций. Герои постоянно
                  оказываются в неожиданных обстоятельствах и щедро делятся с залом остроумными
                  комментариями. Настоящий взрыв юмора гарантирован: смех перескакивает от сцены к
                  зрительским рядам, а шутки — от лёгкой иронии до тонкой сатиры.
                </p>
                <p>
                  Лёгкий гротеск пронизывает всё представление: костюмы порой гипертрофированы, а абсурдные ситуации
                  только усиливают комический эффект. В итоге «Перезагрузка» выглядит как пиршество ума
                  и веселья, где ни один зритель не сможет усидеть на месте.
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
            </div>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/Journeyimage/Fotoset-107.JPG"
                  alt="Искромётная комедия - актеры спектакля"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{
                    minHeight: '320px',
                    maxHeight: '500px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider between sections */}
        <div className="relative py-16 overflow-hidden -mx-40 lg:-mx-56">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 2000 120"
            preserveAspectRatio="none"
          >
            {/* Simple wave lines */}
            <path
              d="M0,60 Q500,20 1000,60 T2000,60"
              stroke="rgba(245, 158, 11, 0.6)"
              strokeWidth="3"
              fill="none"
            />
            
            <path
              d="M0,80 Q700,40 1400,80 T2000,80"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="2"
              fill="none"
            />
            
            <path
              d="M0,100 Q300,60 600,100 T1200,100 T2000,100"
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* New Section: Современная «перезагрузка» */}
        <div className="mt-16" ref={section2Ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/Journeyimage/Fotoset-32.JPG"
                  alt="Современная перезагрузка"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{
                    minHeight: '320px',
                    maxHeight: '500px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
              </div>
            </div>
            <div className="relative pr-8 lg:pr-16">
              {/* Анимированный элемент монетки - позиционирован справа */}
              <div
                className="absolute -top-16 -right-56 w-80 h-80 z-0"
                ref={moneyRef}
              >
                {/* Декоративные кольца вокруг монеток */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-amber-400/20"
                  style={{
                    transform: `scale(${moneyScale * 1.2})`,
                    opacity: moneyOpacity * 0.2,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                <div 
                  className="absolute inset-2 rounded-full border border-amber-300/20"
                  style={{
                    transform: `scale(${moneyScale * 1.1})`,
                    opacity: moneyOpacity * 0.3,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                
                {/* Основные монетки */}
                <img 
                  src="/images/elements/money1.png"
                  alt="Монетки сокровищ"
                  className="w-full h-full object-contain drop-shadow-2xl relative z-0"
                  style={{
                    filter: `drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 ${20 + moneyGlow * 30}px rgba(245, 158, 11, ${0.3 + moneyGlow * 0.4}))`,
                    transform: `translateY(${moneyOffset}px) rotate(${moneyRotation}deg) scale(${moneyScale})`,
                    opacity: moneyOpacity,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    willChange: 'transform, opacity, filter'
                  }}
                />
                
                {/* Световые эффекты */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-radial from-amber-400/15 via-transparent to-transparent"
                  style={{
                    transform: `scale(${moneyScale * 1.5})`,
                    opacity: moneyOpacity * 0.3 * moneyGlow,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                
                {/* Дополнительный эффект свечения */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/20 via-transparent to-transparent"
                  style={{
                    transform: `scale(${moneyScale * 2})`,
                    opacity: moneyOpacity * 0.15 * moneyGlow,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
                textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
              }}>
                Современная «перезагрузка»
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Слово «Перезагрузка» здесь играет двойную роль: классический сюжет переверстывается
                  заново с явными современными акцентами. Герои будто вышли на сцену XXI века: в шляпах
                  двадцатых годов они легко ориентируются в мире лайков и хэштегов.
                </p>
                <p>
                  Быстрый темп постановки, стильные музыкальные вставки и смелая режиссура придают спектаклю ритм
                  нашего времени. И при всём этом остаются прежние вечные вопросы: сколько юмора
                  находится в погоне за большой удачей и какие парадоксы выходят за рамки эпох.
                </p>
                <p>
                  «Перезагрузка» доказывает: мир меняется, а сатира и кураж на сцене остаются прежними!
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
            </div>
                </motion.div>
        </div>

        {/* Wave divider between sections */}
        <div className="relative py-16 overflow-hidden -mx-40 lg:-mx-56">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 2000 120"
            preserveAspectRatio="none"
          >
            {/* Simple wave lines */}
            <path
              d="M0,60 Q500,20 1000,60 T2000,60"
              stroke="rgba(245, 158, 11, 0.6)"
              strokeWidth="3"
              fill="none"
            />
            
            <path
              d="M0,80 Q700,40 1400,80 T2000,80"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="2"
              fill="none"
            />
            
            <path
              d="M0,100 Q300,60 600,100 T1200,100 T2000,100"
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* New Section: Живая атмосфера */}
        <div className="mt-16" ref={section3Ref}>
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="relative pl-8 lg:pl-16">
              {/* Анимированный элемент чемодан - позиционирован слева */}
              <div
                className="absolute top-8 -left-56 w-80 h-80 z-0"
                ref={suitcaseRef}
              >
                {/* Декоративные кольца вокруг чемодана */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-amber-400/20"
                  style={{
                    transform: `scale(${suitcaseScale * 1.2})`,
                    opacity: suitcaseOpacity * 0.2,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                <div 
                  className="absolute inset-2 rounded-full border border-amber-300/20"
                  style={{
                    transform: `scale(${suitcaseScale * 1.1})`,
                    opacity: suitcaseOpacity * 0.3,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                
                {/* Основной чемодан */}
                <img 
                  src="/images/elements/chemodan2.png"
                  alt="Чемодан сокровищ"
                  className="w-full h-full object-contain drop-shadow-2xl relative z-0"
                  style={{
                    filter: `drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 ${20 + suitcaseGlow * 30}px rgba(245, 158, 11, ${0.3 + suitcaseGlow * 0.4}))`,
                    transform: `translateY(${suitcaseOffset}px) rotate(${suitcaseRotation}deg) scale(${suitcaseScale})`,
                    opacity: suitcaseOpacity,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    willChange: 'transform, opacity, filter'
                  }}
                />
                
                {/* Световые эффекты */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-radial from-amber-400/15 via-transparent to-transparent"
                  style={{
                    transform: `scale(${suitcaseScale * 1.5})`,
                    opacity: suitcaseOpacity * 0.3 * suitcaseGlow,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                
                {/* Дополнительный эффект свечения */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/20 via-transparent to-transparent"
                  style={{
                    transform: `scale(${suitcaseScale * 2})`,
                    opacity: suitcaseOpacity * 0.15 * suitcaseGlow,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 ml-8" style={{
                textShadow: '0 2px 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)'
              }}>
                Живая атмосфера
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed ml-8" style={{
                shapeOutside: 'circle(160px at 140px 160px)',
                shapeMargin: '20px'
              }}>
                <p>
                  С первых мгновений спектакль захватывает драйвом — зритель будто попадает на карнавал
                  абсурда и веселья. Сцена пульсирует яркими красками: детализированные костюмы и
                  неожиданные реквизиты работают на зрелищность, а музыка и танцы в духе популярных шоу
                  придают представлению особую динамику.
                </p>
                <p>
                  Актёры играют так, будто сцена – их маленький город: энергия артистов передаётся аудитории до последнего ряда. Здесь нет места
                  затягивающим паузам: каждая шутка – настоящий фейерверк, и зал неизменно отвечает
                  гомерическим хохотом.
                </p>
                <p>
                  А после финала тёплый смех зрителей ещё долго не утихнет —
                  «Перезагрузка» дарит заряд позитивного безумия надолго!
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
            </div>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/Journeyimage/photo_2025-10-23_01-18-35.jpg"
                  alt="Живая атмосфера"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{
                    minHeight: '320px',
                    maxHeight: '500px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg pointer-events-none"></div>
              </div>
            </div>
            </motion.div>
        </div>

      </Container>
    </section>

    {/* Wave divider before Trailer section */}
    <div className="relative h-40 overflow-hidden" style={{ backgroundColor: '#f5f5dc' }}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Beautiful wave shape filled with gray-900 color */}
        <path
          d="M0,160 C120,100 240,140 360,160 C480,180 600,140 720,120 C840,100 960,140 1080,160 C1200,180 1320,140 1440,120 L1440,320 L0,320 Z"
          fill="#111827"
          opacity="1"
        />
      </svg>
    </div>
    </>
  );
}