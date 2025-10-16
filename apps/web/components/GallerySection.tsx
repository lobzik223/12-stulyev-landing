"use client";
import Container from "./Container";
import { GalleryItem } from "@/types/gallery";
import { useState } from "react";

export default function GallerySection({ items }: Readonly<{ items: GalleryItem[] }>) {
  const [open, setOpen] = useState<GalleryItem|null>(null);
  return (
    <section id="gallery" className="py-20 bg-[#15110E] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">Галерея</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {items.map(img => (
            <button key={img.id} onClick={()=>setOpen(img)} onKeyDown={(e)=>e.key==='Enter'&&setOpen(img)} className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-[#D4AF37]/20 focus:outline-none group" tabIndex={0}>
              <img src={img.src} alt={img.alt||"Фото спектакля"} className="w-full h-full object-cover hover:scale-[1.03] transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-sm font-medium">{img.alt}</div>
                {img.tag && (
                  <div className="inline-block mt-1 px-2 py-1 bg-[#D4AF37] text-black text-xs font-semibold rounded-full">
                    {img.tag}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </Container>
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={()=>setOpen(null)} onKeyDown={(e)=>e.key==='Escape'&&setOpen(null)} role="dialog" aria-modal="true" tabIndex={-1}>
          <img src={open.src} alt={open.alt||""} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </section>
  );
}
