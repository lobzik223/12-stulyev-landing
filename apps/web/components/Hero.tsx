import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-900 overflow-hidden">
      {/* Декоративные элементы - Звезды */}
      {/* Существующие звезды */}
      <svg className="absolute top-20 right-20 w-10 h-10 text-amber-400 opacity-30 z-20 animate-star-float-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      <svg className="absolute bottom-20 left-20 w-8 h-8 text-amber-400 opacity-40 z-20 animate-star-float-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Дополнительные звезды */}
      {/* Верхний левый угол */}
      <svg className="absolute top-16 left-16 w-6 h-6 text-amber-400 opacity-25 z-20 animate-star-float-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Над текстом "театральное" */}
      <svg className="absolute top-32 left-32 w-5 h-5 text-amber-400 opacity-35 z-20 animate-star-float-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Справа от головы дамы */}
      <svg className="absolute top-24 right-32 w-7 h-7 text-amber-400 opacity-30 z-20 animate-star-float-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Справа от груди дамы */}
      <svg className="absolute top-40 right-24 w-6 h-6 text-amber-400 opacity-35 z-20 animate-star-float-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Под кнопкой "О спектакле" */}
      <svg className="absolute bottom-32 left-32 w-5 h-5 text-amber-400 opacity-40 z-20 animate-star-float-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Снизу слева от дамы */}
      <svg className="absolute bottom-40 left-40 w-7 h-7 text-amber-400 opacity-30 z-20 animate-star-float-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Нижний правый угол */}
      <svg className="absolute bottom-24 right-16 w-6 h-6 text-amber-400 opacity-35 z-20 animate-star-float-9" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      <div className="mx-auto max-w-6xl relative z-10 pt-4 pl-4 pr-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mt-4">
          {/* Левая колонка - контент */}
          <div className="order-1 md:order-1">
            {/* Главный заголовок */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 font-serif">«<span className="text-7xl md:text-8xl">12</span> СТУЛЬЕВ»</span>
                <span className="block text-amber-700 font-script text-4xl md:text-5xl mt-2">театральное</span>
                <span className="block text-gray-900 font-serif text-5xl md:text-7xl">ПУТЕШЕСТВИЕ</span>
              </h1>
            </div>
            
            {/* Описание */}
            <div className="max-w-3xl mb-8">
              <p className="text-xl leading-relaxed text-gray-700 mb-6 font-medium">
                КЛАССИЧЕСКАЯ КОМЕДИЯ ИЛЬФА И ПЕТРОВА В СОВРЕМЕННОЙ ТЕАТРАЛЬНОЙ ИНТЕРПРЕТАЦИИ
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Следуйте за Остапом Бендером в поисках сокровища, спрятанного в одном из двенадцати стульев
              </p>
            </div>
            
            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Посмотреть расписание
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 hover:border-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                О спектакле
              </a>
            </div>
          </div>
          
          {/* Правая колонка - изображение */}
          <div className="order-2 md:order-2">
            <div className="relative">
              <Image 
                src="/images/lady-Photoroom.png" 
                alt="Портрет дамы в театральном костюме" 
                width={600}
                height={800}
                className="w-full h-auto"
                style={{ background: 'transparent' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Рваный край - улучшенный для плавного перехода */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent overflow-hidden z-30"> 
        <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tornGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(14, 11, 9, 0.3)" />
              <stop offset="70%" stopColor="rgba(14, 11, 9, 0.8)" />
              <stop offset="100%" stopColor="#0e0b09" />
            </linearGradient>
          </defs>
          <path 
            d="M0,64 Q75,32 150,64 Q225,96 300,64 Q375,32 450,64 Q525,96 600,64 Q675,32 750,64 Q825,96 900,64 Q975,32 1050,64 Q1125,96 1200,64 L1200,128 L0,128 Z" 
            fill="url(#tornGradient)"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
      </div>
    </section>
  );
}