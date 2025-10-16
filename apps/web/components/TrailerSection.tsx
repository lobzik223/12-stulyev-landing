"use client";
import Container from "./Container";
import { Trailer } from "@/types/trailer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TrailerSection({ data }: Readonly<{ data: Trailer }>) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="trailer" className="py-20 bg-[#0e0b09] text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold">Трейлер</h2>
          <p className="opacity-80 mt-2 max-w-2xl">{data.title}</p>
          
          <motion.div 
            className="mt-8 aspect-video rounded-2xl overflow-hidden ring-1 ring-[#D4AF37]/30 relative group"
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
            
            <iframe 
              className="w-full h-full" 
              src={isPlaying ? data.videoUrl : ""} 
              title="Трейлер" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </motion.div>

          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-2xl hover:bg-[#D4AF37]/90 transition-colors duration-300 shadow-[0_6px_20px_rgba(212,175,55,0.35)]"
              whileHover={{ scale: 1.05, shadow: "0 8px 26px rgba(212,175,55,0.5)" }}
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
