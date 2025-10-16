"use client";
import Container from "./Container";
import { Trailer } from "@/types/trailer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TrailerSection({ data }: Readonly<{ data: Trailer }>) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
           <section id="trailer" className="py-20 bg-gray-900 text-white relative overflow-hidden">
             {/* Декоративные элементы */}
             <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/20 rounded-full" />
             <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/30 rounded-full" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
                   <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-4">
                     Видео
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Трейлер</h2>
                   <p className="text-lg text-gray-300 max-w-2xl mx-auto">{data.title}</p>
          </div>
          
          <motion.div 
            className="mt-8 aspect-video rounded-2xl overflow-hidden ring-1 ring-amber-400/30 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {!isPlaying && (
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer z-10"
                onClick={() => setIsPlaying(true)}
                initial={{ opacity: 1 }}
                animate={{ opacity: isPlaying ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-[#D4AF37] rounded-full p-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </motion.div>
            )}
            
            {isPlaying && (
              <iframe 
                className="w-full h-full" 
                src={data.videoUrl} 
                title="Трейлер" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            )}
          </motion.div>

          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white font-semibold rounded-2xl hover:bg-amber-700 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Посмотреть трейлер
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
