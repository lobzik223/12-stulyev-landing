import Container from "./Container";

export default function Hero() {
  return (
    <section
      className="relative py-28 text-white"
      style={{
        backgroundImage: "url(/images/hero-map.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-[#0e0b09]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0b09]/40 to-[#0e0b09]" />
      <Container>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            «12 стульев» — театральное путешествие
          </h1>
          <p className="mt-5 max-w-2xl text-lg/7 opacity-90">
            От Старгорода до Москвы. Следуй за Бендером — города, сцены, охота за сокровищем.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#events"
              className="inline-block rounded-2xl px-7 py-3 font-medium bg-[#D4AF37] text-black shadow-[0_6px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_26px_rgba(212,175,55,0.5)] transition"
            >
              Посмотреть расписание
            </a>
            <a
              href="#about"
              className="inline-block rounded-2xl px-7 py-3 font-medium border border-[#D4AF37]/70 hover:bg-[#D4AF37]/10"
            >
              О спектакле
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

