import Container from "./Container";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url(/images/hero-map.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Градиентные оверлеи */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0b09]/80 via-[#0e0b09]/60 to-[#0e0b09]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09] via-transparent to-transparent" />
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-[#D4AF37]/20 rounded-full" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-[#D4AF37]/30 rounded-full" />
      
      <Container>
        <div className="relative z-10 max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-sm font-medium text-[#D4AF37]">
              Театральный спектакль
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="block text-white">«12 стульев»</span>
            <span className="block text-[#D4AF37] mt-2">театральное путешествие</span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-xl leading-relaxed opacity-90">
            От Старгорода до Москвы. Следуй за Бендером — города, сцены, охота за сокровищем. 
            Классика русской литературы в современной постановке.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-semibold bg-[#D4AF37] text-black shadow-[0_8px_32px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Посмотреть расписание
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-semibold border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              О спектакле
            </a>
          </div>
          
          {/* Статистика */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">6</div>
              <div className="text-sm opacity-80">городов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">12</div>
              <div className="text-sm opacity-80">стульев</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">1</div>
              <div className="text-sm opacity-80">сокровище</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

