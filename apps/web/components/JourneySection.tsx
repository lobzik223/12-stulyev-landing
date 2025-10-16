"use client";
import { CityScene } from "@/types/journey";
import Container from "./Container";
import { motion } from "framer-motion";

export default function JourneySection({ items }: Readonly<{ items: CityScene[] }>) {
  return (
    <section id="journey" className="py-20 bg-[#15110E] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">Путешествие по городам</h2>
      </Container>

      <div className="mt-8 overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-6 min-w-[700px] snap-x snap-mandatory journey-section">
          {items.map((c) => (
            <motion.article
              key={c.id}
              whileHover={{ y: -4 }}
              className="snap-start w-[320px] shrink-0 rounded-2xl overflow-hidden relative border border-[#D4AF37]/20 bg-black journey-card"
            >
              <div
                className="h-44 w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="opacity-90 mt-1 text-sm">{c.summary}</p>
                {c.quote && <blockquote className="mt-3 text-sm italic opacity-80">"{c.quote}"</blockquote>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
