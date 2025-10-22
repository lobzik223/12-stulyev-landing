"use client";
import { motion } from "framer-motion";
import Container from "./Container";
import { useState, useEffect, useRef } from "react";

export default function EventsPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const previewEvents = [
    {
      id: 1,
      city: "Курск",
      date: "22 октября",
      time: "19:00",
      status: "scheduled",
      buttonText: "Купить билеты",
      buttonStyle: "bg-orange-500 hover:bg-orange-600 text-white",
      secondaryButton: "Подробнее",
      secondaryButtonStyle: "border-2 border-white text-white hover:bg-white hover:text-gray-900"
    },
    {
      id: 2,
      city: "Брянск", 
      date: "24 октября",
      time: "19:00",
      status: "sold_out",
      buttonText: "Все билеты проданы",
      buttonStyle: "bg-red-600 text-white cursor-not-allowed",
      secondaryButton: null,
      secondaryButtonStyle: null,
      badge: "SOLD OUT"
    },
    {
      id: 3,
      city: "Белгород",
      date: "26 октября", 
      time: "19:00",
      status: "plentiful",
      buttonText: "Купить билеты",
      buttonStyle: "bg-orange-500 hover:bg-orange-600 text-white",
      secondaryButton: "Подробнее",
      secondaryButtonStyle: "border-2 border-white text-white hover:bg-white hover:text-gray-900"
    }
  ];

  return (
    <section ref={sectionRef} data-section="events-preview" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Декоративные волны сверху */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 64" preserveAspectRatio="none">
          <path 
            d="M0,32 Q150,8 300,32 T600,32 T900,32 T1200,32 L1200,64 L0,64 Z" 
            fill="#111827"
          />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {previewEvents.map((event, index) => (
            <motion.div
              key={`${event.id}-${isVisible}`}
              className="relative text-black overflow-hidden shadow-xl transition-all duration-300 border-2 border-stone-800 w-full h-56 flex flex-col"
              style={{
                backgroundImage: 'url("/images/fonkartoc.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                fontFamily: 'serif',
                position: 'relative'
              }}
              initial={{ 
                opacity: 0, 
                x: 100
              }}
              animate={isVisible ? { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }
              } : { 
                opacity: 0, 
                x: 100 
              }}
              whileHover={{ 
                transition: { duration: 0.2 }
              }}
            >
              {/* Полупрозрачный слой для читаемости текста */}
              <div className="absolute inset-0 bg-white/10 z-0"></div>
              
              {/* SOLD OUT бейдж */}
              {event.badge && (
                <div className="absolute top-2 right-2 z-20">
                  <div className="bg-red-800 text-white px-2 py-1 text-xs font-bold transform rotate-12 border border-red-900">
                    ПРОДАНО
                  </div>
                </div>
              )}
              
              {/* Декоративные элементы старой газеты */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full z-20"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full z-20"></div>

              {/* Основной контент в стиле старой газеты */}
              <div className="p-4 flex-1 flex flex-col justify-center items-center z-10">
                 <div className="text-center mb-3">
                   <div className="text-sm text-stone-700 mb-1 font-semibold">
                     {event.date} {new Date().getFullYear()} • {event.time}
                   </div>
                   <h3 className="text-xl font-black text-black leading-tight mb-1" style={{ fontFamily: 'serif' }}>
                     12 СТУЛЬЕВ
                   </h3>
                   <p className="text-sm text-stone-800 font-bold mb-2">
                     {event.id === 1 && "Премьера в Курске"}
                     {event.id === 2 && "Спектакль в Брянске"}
                     {event.id === 3 && "Театральная постановка в Белгороде"}
                   </p>
                   <div className="text-xs text-stone-700 font-bold">
                     {event.status === "scheduled" && (
                       <span>Осталось <span className="text-red-600 font-bold">15</span> билетов</span>
                     )}
                     {event.status === "sold_out" && (
                       <span>Осталось <span className="text-red-600 font-bold">0</span> билетов</span>
                     )}
                     {event.status === "plentiful" && (
                       <span>Осталось <span className="text-red-600 font-bold">45</span> билетов</span>
                     )}
                   </div>
                 </div>
                
                <div className="mt-2">
                  <div className="flex gap-2">
                    {event.status === "scheduled" && (
                      <>
                        <button
                          className="bg-amber-500 text-black text-center py-1.5 px-3 font-bold text-xs hover:bg-amber-600 transition-colors border border-amber-600 shadow rounded"
                        >
                          КУПИТЬ БИЛЕТЫ
                        </button>
                        <button
                          className="border border-black text-black text-center py-1.5 px-3 font-bold text-xs hover:bg-black hover:text-white transition-colors shadow rounded bg-white"
                        >
                          ПОДРОБНЕЕ
                        </button>
                      </>
                    )}
                    {event.status === "sold_out" && (
                      <button
                        disabled
                        className="flex-1 bg-gray-600 text-white text-center py-1.5 px-3 font-bold text-xs opacity-70 cursor-not-allowed border-2 border-gray-700 shadow rounded-sm"
                      >
                        ПРОДАНО
                      </button>
                    )}
                    {event.status === "plentiful" && (
                      <>
                        <button
                          className="bg-amber-500 text-black text-center py-1.5 px-3 font-bold text-xs hover:bg-amber-600 transition-colors border border-amber-600 shadow rounded"
                        >
                          КУПИТЬ БИЛЕТЫ
                        </button>
                        <button
                          className="border border-black text-black text-center py-1.5 px-3 font-bold text-xs hover:bg-black hover:text-white transition-colors shadow rounded bg-white"
                        >
                          ПОДРОБНЕЕ
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </Container>

      {/* Декоративные волны снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 64" preserveAspectRatio="none">
          <path 
            d="M0,0 Q150,24 300,0 T600,0 T900,0 T1200,0 L1200,64 L0,64 Z" 
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  );
}
