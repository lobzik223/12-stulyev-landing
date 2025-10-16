"use client";

import Container from "./Container";
import { EventItem } from "@/types/events";
import { useRef } from "react";

export default function Events({ items }: Readonly<{ items: EventItem[] }>) {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section id="events" className="py-16 bg-[#0e0b09] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">Ближайшие даты</h2>

        {/* Мобильная карусель: scroll-snap */}
        <div
          ref={scroller}
          className="mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 md:hidden"
        >
          {items.map((ev) => (
            <EventCard key={ev.id} ev={ev} />
          ))}
        </div>

        {/* Десктоп-сетка */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((ev) => (
            <EventCard key={ev.id} ev={ev} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function EventCard({ ev }: Readonly<{ ev: EventItem }>) {
  // ожидаем ev.poster (URL) — если нет, фон будет бордо
  const bg = ev?.poster || "/images/event-fallback.jpg";
  return (
    <article
      className="snap-start min-w-[85%] md:min-w-0 rounded-2xl overflow-hidden relative group border border-[#D4AF37]/20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-[rgba(38,28,20,0.55)] group-hover:bg-[rgba(38,28,20,0.45)] transition" />
      <div className="relative p-5">
        <div className="text-sm/5 opacity-90">
          {new Date(ev.dateTime).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" })}
        </div>
        <h3 className="mt-1 text-xl font-semibold">{ev.title}</h3>
        <div className="opacity-90">{ev.city}{ev.venue ? ` — ${ev.venue}` : ""}</div>

        <div className="mt-5 flex gap-3">
          {ev.ticketUrl && (
            <a
              className="rounded-xl px-4 py-2 bg-[#D4AF37] text-black font-medium hover:brightness-110 transition shadow-[0_6px_20px_rgba(212,175,55,0.35)]"
              href={ev.ticketUrl}
              target="_blank"
              rel="noreferrer"
            >
              Купить билеты
            </a>
          )}
          <a
            className="rounded-xl px-4 py-2 border border-[#D4AF37]/70 hover:bg-[#D4AF37]/10 transition"
            href={`/event/${ev.slug}`}
          >
            Подробнее
          </a>
          {ev.status === "sold_out" && (
            <span className="ml-auto rounded-xl bg-black/70 px-3 py-2 text-xs tracking-wide border border-white/20">
              SOLD OUT
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

