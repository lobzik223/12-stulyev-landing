export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-900 overflow-hidden">
      {/* Декоративные элементы - Звезды */}
      {/* Существующие звезды */}
      <svg className="absolute top-20 right-20 w-10 h-10 text-amber-400 opacity-30 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      <svg className="absolute bottom-20 left-20 w-8 h-8 text-amber-400 opacity-40 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Дополнительные звезды */}
      {/* Верхний левый угол */}
      <svg className="absolute top-16 left-16 w-6 h-6 text-amber-400 opacity-25 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Над текстом "театральное" */}
      <svg className="absolute top-32 left-32 w-5 h-5 text-amber-400 opacity-35 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Справа от головы дамы */}
      <svg className="absolute top-24 right-32 w-7 h-7 text-amber-400 opacity-30 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Справа от груди дамы */}
      <svg className="absolute top-40 right-24 w-6 h-6 text-amber-400 opacity-35 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Под кнопкой "О спектакле" */}
      <svg className="absolute bottom-32 left-32 w-5 h-5 text-amber-400 opacity-40 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Снизу слева от дамы */}
      <svg className="absolute bottom-40 left-40 w-7 h-7 text-amber-400 opacity-30 z-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      
      {/* Нижний правый угол */}
      <svg className="absolute bottom-24 right-16 w-6 h-6 text-amber-400 opacity-35 z-20" fill="currentColor" viewBox="0 0 24 24">
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
              <img 
                src="/images/lady-Photoroom.png" 
                alt="Портрет дамы в театральном костюме" 
                className="w-full h-auto"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Рваный край */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent overflow-hidden z-30" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,60 Q30,45 60,65 Q90,85 120,70 Q150,50 180,75 Q210,90 240,60 Q270,30 300,55 Q330,80 360,65 Q390,40 420,70 Q450,95 480,65 Q510,35 540,70 Q570,90 600,60 Q630,30 660,55 Q690,80 720,65 Q750,40 780,70 Q810,95 840,65 Q870,35 900,70 Q930,90 960,60 Q990,30 1020,55 Q1050,80 1080,65 Q1110,40 1140,70 Q1170,95 1200,60 L1200,120 0,120 Z' fill='%23111827'/%3E%3C/svg%3E")`,
             backgroundSize: 'cover',
             backgroundPosition: 'top'
           }}>
      </div>
    </section>
  );
}