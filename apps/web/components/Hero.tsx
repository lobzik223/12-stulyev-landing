"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Вычисляем прогресс скролла относительно Hero секции
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - heroRect.top) / (heroHeight + windowHeight)
        ));
        
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Инициализация

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section 
      ref={heroRef}
      className="relative text-gray-900 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/esk.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      {/* Полупрозрачный слой для читаемости текста */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px] z-5"></div>
      
      <div className="mx-auto max-w-7xl relative z-10 pl-4 pr-4 pt-20 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center min-h-screen">
          {/* Левая колонка - первое изображение */}
          <div className="order-2 md:order-1 hidden md:flex items-start justify-center">
            <div 
              className="relative -mt-48 mb-0 md:-mt-48 md:mb-6 transition-transform duration-300 ease-out w-full max-w-3xl md:max-w-4xl"
              style={{
                transform: `translateY(${scrollY * 400}px)`,
                zIndex: scrollY > 0.3 ? 5 : 10
              }}
            >
              <img 
                src="/images/stul11.png" 
                alt="Персонаж спектакля 12 стульев" 
                className="w-full h-auto scale-100"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
          
          {/* Центральная колонка - контент */}
          <div className="order-1 md:order-2 text-center">
            {/* Главный заголовок */}
            <motion.div 
              className="mb-4 mt-8 md:mt-10 md:-mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <motion.span 
                  className="inline text-amber-700 font-serif text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap -ml-16 md:-ml-32 -mt-2 md:-mt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  «<span className="text-4xl sm:text-5xl md:text-6xl font-black">12</span> СТУЛЬЕВ» <span className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">100 лет спустя</span>
                </motion.span>
                <motion.span 
                  className="block text-amber-700 font-script text-xl sm:text-2xl md:text-3xl mt-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  театральное
                </motion.span>
                <motion.span 
                  className="block text-gray-900 font-serif text-3xl sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  ПУТЕШЕСТВИЕ
                </motion.span>
              </h1>
            </motion.div>
            
            {/* Описание */}
            <motion.div 
              className="max-w-2xl mb-4 md:mb-6 mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-xl leading-relaxed text-amber-700 mb-3 md:mb-6 font-script px-4 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Классическая комедия Ильфа и Петрова в современной театральной интерпретации
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg md:text-lg text-gray-900 leading-relaxed font-script px-4 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                Следуйте за Остапом Бендером в поисках сокровища, спрятанного в одном из двенадцати стульев
              </motion.p>
            </motion.div>
            
            {/* Кнопки */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#events"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-amber-600 text-white font-semibold text-sm md:text-base rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mx-2 md:mx-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="whitespace-nowrap">Посмотреть расписание</span>
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 border-2 border-amber-600 text-amber-700 font-semibold text-sm md:text-base rounded-lg hover:bg-amber-50 hover:border-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mx-2 md:mx-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="whitespace-nowrap">О спектакле</span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Правая колонка - второе изображение */}
          <div className="order-2 md:order-3 flex items-center justify-center md:items-start md:justify-end">
            <div 
              className="relative -mt-8 mb-0 md:-mt-48 md:mb-6 transition-transform duration-300 ease-out w-full max-w-sm md:max-w-4xl"
              style={{
                transform: `translateY(${scrollY * 400}px)`,
                zIndex: scrollY > 0.3 ? 5 : 10
              }}
            >
              <img 
                src="/images/stul13.png" 
                alt="Персонаж спектакля 12 стульев" 
                className="w-full h-auto scale-100"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Статичная волнистая волна */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-30">
        <svg className="w-full h-full" viewBox="0 0 1200 96" preserveAspectRatio="none">
          <path 
            d="M0,48 Q150,24 300,48 T600,48 T900,48 T1200,48 L1200,96 L0,96 Z" 
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  );
}