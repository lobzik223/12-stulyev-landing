"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Скрываем header при скролле вниз (после Hero секции)
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible 
          ? "bg-transparent" 
          : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#about"
              className="text-gray-900 hover:text-amber-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              О спектакле
            </motion.a>
            <motion.a
              href="#actors"
              className="text-gray-900 hover:text-amber-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              Артисты
            </motion.a>
            <motion.a
              href="#gallery"
              className="text-gray-900 hover:text-amber-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              Загляни за кулисы
            </motion.a>
            <motion.a
              href="#trailer"
              className="text-gray-900 hover:text-amber-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              Видео
            </motion.a>
            <motion.a
              href="#gallery"
              className="text-gray-900 hover:text-amber-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              Фото
            </motion.a>
            <motion.a
              href="#events"
              className="text-gray-900 hover:text-amber-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              Билеты
            </motion.a>
          </nav>

          {/* Контакты и соцсети */}
          <div className="flex items-center space-x-4">
            {/* Телефон */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <a 
                href="tel:+79045329444" 
                className="text-gray-900 font-medium hover:text-amber-400 transition-colors"
              >
                +7 (904) 532-94-44
              </a>
            </motion.div>

            {/* Соцсети */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Telegram */}
              <motion.a
                href="#"
                className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.46-2.128 4.692-1.232 1.232-2.834 1.959-4.692 2.128-1.858.169-3.46-.896-4.692-2.128-1.232-1.232-1.959-2.834-2.128-4.692-.169-1.858.896-3.46 2.128-4.692 1.232-1.232 2.834-1.959 4.692-2.128 1.858-.169 3.46.896 4.692 2.128 1.232 1.232 1.959 2.834 2.128 4.692z"/>
                </svg>
              </motion.a>
              
              {/* Viber */}
              <motion.a
                href="#"
                className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.46-2.128 4.692-1.232 1.232-2.834 1.959-4.692 2.128-1.858.169-3.46-.896-4.692-2.128-1.232-1.232-1.959-2.834-2.128-4.692-.169-1.858.896-3.46 2.128-4.692 1.232-1.232 2.834-1.959 4.692-2.128 1.858-.169 3.46.896 4.692 2.128 1.232 1.232 1.959 2.834 2.128 4.692z"/>
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="#"
                className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.a>

              {/* VK */}
              <motion.a
                href="#"
                className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-xs">VK</span>
              </motion.a>
            </div>

            {/* Мобильное меню */}
            <motion.button
              className="md:hidden w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
