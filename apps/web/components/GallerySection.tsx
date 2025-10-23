"use client";
import Container from "./Container";
import { GalleryItem } from "@/types/gallery";
import { useState } from "react";

export default function GallerySection({ items }: Readonly<{ items: GalleryItem[] }>) {
  const [open, setOpen] = useState<GalleryItem|null>(null);
  return (
           <section 
             id="gallery" 
             className="py-20 text-white relative overflow-hidden"
             style={{
               backgroundImage: 'url("/images/esk.png")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}
           >
             {/* Декоративные элементы */}
             <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/20 rounded-full" />
             <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/30 rounded-full" />
      
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-4">
            Фотографии
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Галерея</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Сцены из спектакля, костюмы, декорации и моменты за кулисами
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {items.map(img => (
            <button key={img.id} onClick={()=>setOpen(img)} onKeyDown={(e)=>e.key==='Enter'&&setOpen(img)} className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-amber-400/30 focus:outline-none group shadow-lg hover:shadow-xl transition-all duration-300" tabIndex={0}>
              <img src={img.src} alt={img.alt||"Фото спектакля"} className="w-full h-full object-cover hover:scale-[1.03] transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-sm font-medium">{img.alt}</div>
                {img.tag && (
                  <div className="inline-block mt-1 px-2 py-1 bg-amber-400 text-white text-xs font-semibold rounded-full">
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
