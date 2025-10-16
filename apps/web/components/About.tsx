import Container from "./Container";
import Image from "next/image";

export default function About({ title, body, quote }: Readonly<{ title: string; body: string; quote?: string; }>) {
  return (
    <section id="about" className="py-20 bg-[#15110E] text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <div className="prose prose-invert max-w-none mt-4" dangerouslySetInnerHTML={{ __html: body }} />
            {quote && (
              <blockquote className="mt-6 border-l-4 border-[#D4AF37] pl-4 italic opacity-90">
                {quote}
              </blockquote>
            )}
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-[#D4AF37]/20">
            <Image
              src="/images/about-cast.jpg"
              alt="Сцена спектакля"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0e0b09]/40 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

