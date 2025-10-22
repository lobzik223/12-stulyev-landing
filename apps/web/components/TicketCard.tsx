import { EventItem } from "@/types/events";
import { motion } from 'framer-motion';

export default function TicketCard({ ev, index = 0 }: Readonly<{ ev: EventItem; index?: number }>) {
  const date = new Date(ev.dateTime).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" });

  return (
    <motion.article 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ 
        opacity: 1, 
        x: 0
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2 }
      }}
      className="w-[240px] sm:w-[280px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-gray-700 shadow-xl group hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col"
      style={{
        backgroundImage: 'url("/images/esk.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Информационный блок - фиксированная высота */}
      <div className="relative text-black h-[280px] sm:h-[320px] p-4 sm:p-6 flex flex-col flex-shrink-0">
        
        
        {/* Контент с ограниченной высотой */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="text-xs text-gray-700 mb-2 font-medium">{date}</div>
          
          {/* Заголовок с ограничением строк */}
          <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2 font-serif text-black line-clamp-2 h-[3rem] sm:h-[3.5rem] overflow-hidden">
            <span className="text-amber-600 font-black">«12 стульев»</span> — {ev.city}
          </h3>
          
          {/* Информация о месте */}
          <div className="text-sm text-gray-800 mb-4 flex-shrink-0">
            {ev.venue && (
              <div className="text-xs text-gray-600 truncate">{ev.venue}</div>
            )}
          </div>

          {/* Описание события */}
          <p className="text-xs text-gray-600 mb-4">
            Театральное представление по роману И. Ильфа и Е. Петрова.
          </p>
        </div>

        {/* Фиксированный блок с ценой и кнопками */}
        <div className="mt-auto pt-4 border-t border-gray-400 flex-shrink-0">
          {ev.price !== undefined && (
            <div className="text-gray-900 text-lg sm:text-xl font-bold mb-3">
              {Intl.NumberFormat("ru-RU").format(ev.price)} ₽
            </div>
          )}

          <div className="flex gap-2">
            <a
              href={ev.ticketUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-sm transition-all duration-300 whitespace-nowrap"
            >
              Купить билет
            </a>
            <a
              href="#about"
              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 font-bold text-sm transition-all duration-300 whitespace-nowrap"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
