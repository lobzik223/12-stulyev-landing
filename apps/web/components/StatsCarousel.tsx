"use client";
import Container from "./Container";
import ArrowButton from "./ArrowButton";
import { useRef } from "react";

type Stat = { id: number; value: string; label: string; };
export default function StatsCarousel({ items }: Readonly<{ items: Stat[] }>) {
  const row = useRef<HTMLDivElement>(null);
  const scroll = (d:"left"|"right")=>{
    const el = row.current; if(!el) return;
    const step = (el.clientWidth/2); el.scrollBy({left: d==="left" ? -step : step, behavior:"smooth"});
  };

  return (
    <section className="py-16 bg-[#15110E] text-white">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Эрмитаж в цифрах</h2>
          <div className="hidden md:flex gap-3">
            <ArrowButton dir="left" onClick={()=>scroll("left")} />
            <ArrowButton dir="right" onClick={()=>scroll("right")} />
          </div>
        </div>
        <div ref={row} className="mt-8 flex gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {items.map(s=>(
            <div key={s.id} className="min-w-[280px] snap-start">
              <div className="text-4xl md:text-5xl font-semibold">{s.value}</div>
              <div className="opacity-80 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:hidden flex justify-center gap-3">
          <ArrowButton dir="left" onClick={()=>scroll("left")} />
          <ArrowButton dir="right" onClick={()=>scroll("right")} />
        </div>
      </Container>
    </section>
  );
}
