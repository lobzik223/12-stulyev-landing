"use client";
import Container from "./Container";
import { EventItem } from "@/types/events";
import { useRef, useState } from "react";
import TicketCard from "./TicketCard";
import ArrowButton from "./ArrowButton";

export default function Events({ items }: Readonly<{ items: EventItem[] }>) {
  const scroller = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollBy = (dir: "left" | "right") => {
    const root = scroller.current;
    if (!root) return;
    const card = root.querySelector("article");
    const isMobile = globalThis.window ? globalThis.window.innerWidth < 640 : false; // sm breakpoint
    const gap = isMobile ? 16 : 24; // gap-4 = 16px, gap-6 = 24px
    const step = (card?.clientWidth || (isMobile ? 280 : 320)) + gap;
    root.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="events" className="relative py-20 bg-gray-900 text-white overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Декоративные элементы - Звезды с эффектом отталкивания */}
      {/* Верхний правый угол */}
      <svg 
        className="absolute top-12 right-12 w-8 h-8 text-amber-400 opacity-30 z-20 animate-star-float-1 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 80) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - 80) * 0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Нижний левый угол */}
      <svg 
        className="absolute bottom-12 left-12 w-6 h-6 text-amber-400 opacity-40 z-20 animate-star-float-2 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - 80) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) + 80) * -0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Центр слева */}
      <svg 
        className="absolute top-1/2 left-8 w-5 h-5 text-amber-400 opacity-25 z-20 animate-star-float-3 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - 60) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800)/2) * 0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Центр справа */}
      <svg 
        className="absolute top-1/2 right-8 w-7 h-7 text-amber-400 opacity-35 z-20 animate-star-float-4 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 60) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800)/2) * 0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Верхний центр */}
      <svg 
        className="absolute top-8 left-1/2 w-6 h-6 text-amber-400 opacity-30 z-20 animate-star-float-5 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200)/2) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - 60) * 0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Нижний центр */}
      <svg 
        className="absolute bottom-8 left-1/2 w-5 h-5 text-amber-400 opacity-35 z-20 animate-star-float-6 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200)/2) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) + 60) * -0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Левый верхний угол */}
      <svg 
        className="absolute top-16 left-16 w-4 h-4 text-amber-400 opacity-40 z-20 animate-star-float-7 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - 120) * -0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - 120) * -0.02))}px)`
        }}
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Правый нижний угол */}
      <svg 
        className="absolute bottom-16 right-16 w-6 h-6 text-amber-400 opacity-30 z-20 animate-star-float-8 transition-transform duration-300" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        style={{
          transform: `translate(${Math.max(-20, Math.min(20, (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 120) * 0.02))}px, ${Math.max(-20, Math.min(20, (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) + 120) * 0.02))}px)`
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
        <div className="flex items-center justify-between gap-4 mb-12">
                 <div>
                   <div className="inline-block px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-3">
                     Расписание
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold font-serif">Ближайшие даты</h2>
                   <p className="mt-3 text-lg text-gray-300">Выберите город и купите билеты</p>
                 </div>
          <div className="hidden md:flex items-center gap-3">
            <ArrowButton dir="left" onClick={() => scrollBy("left")} />
            <ArrowButton dir="right" onClick={() => scrollBy("right")} />
          </div>
        </div>

        {/* Горизонтальная лента */}
        <div
          ref={scroller}
          className="mt-8 flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-1"
        >
          {items.map((ev) => (
            <div key={ev.id} className="snap-start shrink-0">
              <TicketCard ev={ev} />
            </div>
          ))}
        </div>

        {/* Стрелки на мобилке фиксируем снизу ленты */}
        <div className="mt-6 flex md:hidden justify-center gap-4">
          <ArrowButton dir="left" onClick={() => scrollBy("left")} />
          <ArrowButton dir="right" onClick={() => scrollBy("right")} />
        </div>
      </Container>
    </section>
  );
}

