
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-900 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-amber-200 rounded-full opacity-30" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-amber-300 rounded-full opacity-40" />
      
      <div className="mx-auto max-w-6xl relative z-10 pt-20 pb-16 px-2">
                 {/* Логотип */}
                 <div className="mb-8">
                   <div className="inline-flex items-center gap-2 text-sm font-medium text-amber-800">
                     <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                     МЫ ПЛЮС ВЫ
                   </div>
                   {/* Декоративная линия */}
                   <div className="mt-4 w-16 h-0.5 bg-amber-600"></div>
                 </div>
          
                 {/* Главный заголовок */}
                 <div className="mb-12">
                   <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                     <span className="block text-gray-900 font-serif">«12 СТУЛЬЕВ»</span>
                     <span className="block text-amber-700 font-script text-5xl md:text-6xl mt-2">театральное</span>
                     <span className="block text-gray-900 font-serif text-6xl md:text-8xl">ПУТЕШЕСТВИЕ</span>
                   </h1>
                 </div>
          
                 {/* Описание */}
                 <div className="max-w-3xl mb-16">
                   <p className="text-xl leading-relaxed text-gray-700 mb-6">
                     КЛАССИЧЕСКАЯ КОМЕДИЯ ИЛЬФА И ПЕТРОВА В СОВРЕМЕННОЙ ТЕАТРАЛЬНОЙ ИНТЕРПРЕТАЦИИ
                   </p>
                   <p className="text-lg text-gray-600">
                     Следуйте за Остапом Бендером в поисках сокровища, спрятанного в одном из двенадцати стульев
                   </p>
                 </div>
          
          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Посмотреть расписание
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              О спектакле
            </a>
          </div>
        </div>
      </div>
      
             {/* Рваный край с анимацией */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent overflow-hidden torn-edge-animated" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,60 Q30,45 60,65 Q90,85 120,70 Q150,50 180,75 Q210,90 240,60 Q270,30 300,55 Q330,80 360,65 Q390,40 420,70 Q450,95 480,65 Q510,35 540,70 Q570,90 600,60 Q630,30 660,55 Q690,80 720,65 Q750,40 780,70 Q810,95 840,65 Q870,35 900,70 Q930,90 960,60 Q990,30 1020,55 Q1050,80 1080,65 Q1110,40 1140,70 Q1170,95 1200,60 L1200,120 0,120 Z' fill='%23111827'/%3E%3C/svg%3E")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                  }}>
               {/* Анимированные частицы */}
               <div className="absolute inset-0">
                 <div className="absolute top-4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full particle-animated"></div>
                 <div className="absolute top-6 right-1/3 w-1 h-1 bg-amber-300/40 rounded-full particle-animated" style={{animationDelay: '1s'}}></div>
                 <div className="absolute top-8 left-1/2 w-1.5 h-1.5 bg-amber-500/20 rounded-full particle-animated" style={{animationDelay: '2s'}}></div>
                 <div className="absolute top-2 right-1/4 w-1 h-1 bg-amber-400/50 rounded-full particle-animated" style={{animationDelay: '3s'}}></div>
               </div>
             </div>
    </section>
  );
}

