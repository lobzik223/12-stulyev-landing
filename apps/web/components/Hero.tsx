import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-900 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-amber-200 rounded-full opacity-30" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-amber-300 rounded-full opacity-40" />
      
      <Container>
        <div className="relative z-10 pt-20 pb-16">
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
              <span className="block text-gray-900 font-serif">ТЕАТР</span>
              <span className="block text-amber-700 font-script text-5xl md:text-6xl mt-2">живых</span>
              <span className="block text-gray-900 font-serif text-6xl md:text-8xl">ИСТОРИЙ</span>
            </h1>
          </div>
          
          {/* Описание */}
          <div className="max-w-3xl mb-16">
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              ЗДЕСЬ МЫ ОДНОВРЕМЕННО ЗРИТЕЛИ, УЧАСТНИКИ И РЕЖИССЁРЫ СОБСТВЕННОГО ВНУТРЕННЕГО СПЕКТАКЛЯ
            </p>
            <p className="text-lg text-gray-600">
              Первый в России театр, где психологи-актеры разыгрывают истории зрителей в формате живой психодрамы
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
      </Container>
      
             {/* Рваный край */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,60 L80,70 160,50 220,80 300,40 360,85 430,55 500,90 570,45 640,80 720,52 800,88 880,50 960,78 1040,58 1120,82 1200,60 1200,120 0,120 Z' fill='%23111827'/%3E%3C/svg%3E")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                  }} />
    </section>
  );
}

