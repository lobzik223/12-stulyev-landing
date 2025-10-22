"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function JourneySection() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Sticky timeline effect - only when timeline touches main header
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        
        // Show sticky only when timeline would touch main header (80px from top)
        // and section is still visible
        if (sectionRect.top <= 80 && sectionRect.bottom > 200) {
          setIsSticky(true);
    } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    "Наследие «Двенадцати стульев»",
    "Искромётная комедия",
    "Современная «перезагрузка»",
    "Живая атмосфера"
  ];

  return (
    <section ref={sectionRef} id="journey" className="py-20 bg-gray-900 text-white relative overflow-hidden">
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
          
        {/* Fixed Size Timeline Navigation */}
        <div 
          ref={timelineRef}
          className={`${isSticky ? 'fixed top-20 left-1/2 transform -translate-x-1/2 z-50' : 'relative'} transition-all duration-200 ease-out`}
        >
          {/* Larger rounded container */}
          <div className="relative">
            {/* Vintage paper background */}
            <div 
              className="backdrop-blur-md rounded-2xl border border-amber-200/20 shadow-lg shadow-black/30 px-8 py-6 relative overflow-hidden"
              style={{
                backgroundImage: 'url("/images/esk.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Vintage overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-amber-100/60 to-amber-200/40 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-300/20 via-transparent to-amber-200/30 rounded-2xl"></div>
              <div className="relative">
                {/* Vintage timeline line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600/60 via-amber-500/80 to-amber-600/60 transform -translate-y-1/2 rounded-full"></div>
                
                {/* Timeline items */}
                <div className="relative flex justify-between">
                  {timelineItems.map((item, index) => (
                    <button
                      key={`timeline-${index}-${item}`}
                      className="flex flex-col items-center relative w-1/4 group cursor-pointer"
                      onClick={() => setActiveSection(index)}
                    >
                      {/* Enhanced text above */}
                      <div className="text-center mb-8 px-3">
                        <p className={`text-sm leading-tight font-semibold transition-all duration-300 ${
                          activeSection === index 
                            ? 'text-amber-800 drop-shadow-md' 
                            : 'text-amber-600 group-hover:text-amber-700'
                        }`}>
                          {item}
                        </p>
        </div>

                      {/* Enhanced circle */}
                      <div className="absolute top-1/2 -translate-y-1/2">
                        <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          activeSection === index 
                            ? 'bg-amber-600 border-2 border-amber-500 shadow-lg shadow-amber-600/30' 
                            : 'bg-amber-400 group-hover:bg-amber-500 border-2 border-amber-300'
                        }`}></div>
                      </div>
                      
                      {/* Enhanced number below */}
                      <div className="absolute top-1/2 translate-y-6">
                        <span className={`text-sm font-bold transition-all duration-300 ${
                          activeSection === index 
                            ? 'text-amber-800 drop-shadow-md' 
                            : 'text-amber-600 group-hover:text-amber-700'
                        }`}>
                          {index + 1}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for sticky timeline - exact height match */}
        {isSticky && <div className="h-32"></div>}

        {/* Timeline Content Sections */}
        <div className="mt-16">
          {/* Section 1: Наследие «Двенадцати стульев» */}
          {activeSection === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Наследие «Двенадцати стульев»
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
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
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div 
                    className="w-full h-80 bg-gradient-to-br from-amber-900/20 to-gray-800/40 flex items-center justify-center"
                    style={{
                      backgroundImage: 'url("/images/stul11.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
                    <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
                </motion.div>
          )}

          {/* Section 2: Искромётная комедия */}
          {activeSection === 1 && (
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Искромётная комедия
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
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
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div 
                    className="w-full h-80 bg-gradient-to-br from-amber-900/20 to-gray-800/40 flex items-center justify-center"
                    style={{
                      backgroundImage: 'url("/images/stul13.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
                    <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg"></div>
                  </div>
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
                <h3 className="text-2xl font-bold text-white mb-6">
                  Современная «перезагрузка»
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
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
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div 
                    className="w-full h-80 bg-gradient-to-br from-amber-900/20 to-gray-800/40 flex items-center justify-center"
                    style={{
                      backgroundImage: 'url("/images/stul11.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
                    <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg"></div>
                  </div>
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
                <h3 className="text-2xl font-bold text-white mb-6">
                  Живая атмосфера
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
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
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div 
                    className="w-full h-80 bg-gradient-to-br from-amber-900/20 to-gray-800/40 flex items-center justify-center"
                    style={{
                      backgroundImage: 'url("/images/stul13.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
                    <div className="absolute inset-0 border-4 border-amber-400/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </Container>
    </section>
  );
}