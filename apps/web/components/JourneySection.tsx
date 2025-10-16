"use client";
import { CityScene } from "@/types/journey";
import Container from "./Container";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function JourneySection({ items }: Readonly<{ items: CityScene[] }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = 320 + 24; // width + gap
    const scrollAmount = cardWidth;

    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
           <section id="journey" className="py-20 bg-gray-900 text-white relative overflow-hidden" onMouseMove={handleMouseMove}>
             {/* Декоративные элементы - Звезды с эффектом отталкивания */}
             {/* Верхний левый угол */}
             <svg 
               className="absolute top-16 left-16 w-6 h-6 text-amber-400 opacity-30 z-20 animate-star-float-1 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - 100) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - 100) * 0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Верхний правый угол */}
             <svg 
               className="absolute top-20 right-20 w-8 h-8 text-amber-400 opacity-35 z-20 animate-star-float-2 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 100) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - 100) * 0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Нижний левый угол */}
             <svg 
               className="absolute bottom-20 left-20 w-7 h-7 text-amber-400 opacity-40 z-20 animate-star-float-3 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - 100) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) + 100) * -0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Нижний правый угол */}
             <svg 
               className="absolute bottom-16 right-16 w-5 h-5 text-amber-400 opacity-25 z-20 animate-star-float-4 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 100) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) + 100) * 0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Центр слева */}
             <svg 
               className="absolute top-1/2 left-12 w-4 h-4 text-amber-400 opacity-30 z-20 animate-star-float-5 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - 80) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800)/2) * 0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Центр справа */}
             <svg 
               className="absolute top-1/2 right-12 w-6 h-6 text-amber-400 opacity-35 z-20 animate-star-float-6 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 80) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800)/2) * 0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Верхний центр */}
             <svg 
               className="absolute top-12 left-1/2 w-5 h-5 text-amber-400 opacity-40 z-20 animate-star-float-7 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200)/2) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - 80) * 0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Нижний центр */}
             <svg 
               className="absolute bottom-12 left-1/2 w-4 h-4 text-amber-400 opacity-25 z-20 animate-star-float-8 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200)/2) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) + 80) * -0.02))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
             
             {/* Центр экрана */}
             <svg 
               className="absolute top-1/2 left-1/2 w-3 h-3 text-amber-400 opacity-20 z-20 animate-star-float-9 transition-transform duration-300" 
               fill="currentColor" 
               viewBox="0 0 24 24"
               style={{
                 transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200)/2) * 0.01))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800)/2) * 0.01))}px)`
               }}
             >
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
      
      <Container>
        <div className="text-center mb-16">
                 <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-4">
                   Маршрут
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">«12 стульев — театральное путешествие по России Ильфа и Петрова»</h2>
                 <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            От Старгорода до Москвы. Следуй за Бендером!
          </p>
        </div>
          
        {/* Навигационные кнопки */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => handleScroll('left')}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full border border-amber-400/30 transition-all ${
              currentIndex === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-amber-400/10 hover:border-amber-400/60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => handleScroll('right')}
            disabled={currentIndex === items.length - 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full border border-amber-400/30 transition-all ${
              currentIndex === items.length - 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-amber-400/10 hover:border-amber-400/60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </Container>

      <div className="mt-8 overflow-x-auto scrollbar-hide px-4 md:px-8" ref={containerRef}>
        <div className="flex gap-6 min-w-[700px] snap-x snap-mandatory journey-section">
          {items.map((c, index) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="snap-start w-[320px] shrink-0 rounded-2xl overflow-hidden relative border border-amber-200 bg-white shadow-xl journey-card group hover:shadow-2xl transition-all duration-300"
            >
              {/* Декоративные элементы */}
              <motion.div
                className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                {index % 3 === 0 && <img src="/decors/train.svg" alt="Поезд" className="w-8 h-8" />}
                {index % 3 === 1 && <img src="/decors/suitcase.svg" alt="Чемодан" className="w-8 h-8" />}
                {index % 3 === 2 && <img src="/decors/chess.svg" alt="Шахматы" className="w-8 h-8" />}
              </motion.div>
              {/* Анимированный градиент при наведении */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              <div
                className="h-44 w-full bg-center bg-cover relative overflow-hidden"
                style={{ backgroundImage: `url(${c.image})` }}
              >
                {/* Анимированное затемнение */}
                <motion.div
                  className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"
                  initial={false}
                />

                {/* Анимированный заголовок */}
                <motion.h3
                  className="absolute bottom-4 left-4 text-xl font-semibold text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.title}
                </motion.h3>
              </div>
              
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">{c.summary}</p>
                {c.quote && (
                         <motion.blockquote
                           className="mt-3 text-sm italic text-amber-700 border-l-2 border-amber-300 pl-3"
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.5 + index * 0.1 }}
                         >
                           &ldquo;{c.quote}&rdquo;
                         </motion.blockquote>
                )}
              </motion.div>

              {/* Анимированная рамка */}
              <motion.div
                className="absolute inset-0 border-2 border-amber-200/0 group-hover:border-amber-300/40 rounded-2xl transition-colors duration-300"
                initial={false}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}