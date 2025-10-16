"use client";
import Container from "./Container";
import { EventItem } from "@/types/events";
import { useRef } from "react";
import TicketCard from "./TicketCard";
import ArrowButton from "./ArrowButton";

export default function Events({ items }: Readonly<{ items: EventItem[] }>) {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const root = scroller.current;
    if (!root) return;
    const card = root.querySelector("article");
    const step = (card?.clientWidth || 280) + 24; // ширина карточки + gap
    root.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="events" className="relative py-20 bg-gradient-to-b from-[#0e0b09] to-[#15110E] text-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-[#D4AF37]/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#D4AF37]/20 rounded-full" />
      
      <Container>
        <div className="flex items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-sm font-medium text-[#D4AF37] mb-3">
              Расписание
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Ближайшие даты</h2>
            <p className="mt-3 text-lg opacity-80">Выберите город и купите билеты</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <ArrowButton dir="left" onClick={() => scrollBy("left")} />
            <ArrowButton dir="right" onClick={() => scrollBy("right")} />
          </div>
        </div>

        {/* Горизонтальная лента */}
        <div
          ref={scroller}
          className="mt-8 flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1"
        >
          {items.map((ev) => (
            <div key={ev.id} className="snap-start shrink-0">
              <TicketCard ev={ev} />
            </div>
          ))}
        </div>

        {/* Стрелки на мобилке фиксируем снизу ленты */}
        <div className="mt-6 flex md:hidden justify-center gap-4">
          <ArrowButton dir="left" onClick={() => scrollBy("left")} />
          <ArrowButton dir="right" onClick={() => scrollBy("right")} />
        </div>
      </Container>
    </section>
  );
}

