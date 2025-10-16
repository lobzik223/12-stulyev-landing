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
    const step = (card?.clientWidth || 320) + 24; // ширина карточки + gap
    root.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="events" className="relative py-16 bg-[#0e0b09] text-white">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold">Ближайшие даты</h2>
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
            <div key={ev.id} className="snap-start w-[320px] shrink-0">
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

