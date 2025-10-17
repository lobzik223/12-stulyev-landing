import { EventItem } from "@/types/events";

export default function TicketCard({ ev }: Readonly<{ ev: EventItem }>) {
  const poster = ev.poster || "/images/event-fallback.jpg";
  const date = new Date(ev.dateTime).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" });

  return (
    <article className="w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-xl group hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300">
      {/* Постер */}
      <div
        className="w-full h-[180px] sm:h-[220px] bg-center bg-cover relative"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        {/* Статус события */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-500/90 text-gray-900">
            {ev.status === 'sold_out' ? 'Распродано' : 'Доступно'}
          </span>
        </div>
      </div>
      
      {/* Информационный блок */}
      <div className="relative bg-gray-800 text-white h-[200px] sm:h-[200px] p-4 sm:p-6 flex flex-col">
        <div className="text-xs text-gray-400 mb-2 font-medium">{date}</div>
        <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2 font-serif text-white">
          {ev.title}
        </h3>
        <div className="text-sm text-gray-300 mb-4 flex-1">
          <div className="mb-1">{ev.city}</div>
          {ev.venue && (
            <div className="text-xs text-gray-400">{ev.venue}</div>
          )}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {ev.price !== undefined && (
            <div className="text-xl sm:text-2xl font-bold text-amber-400">
              {Intl.NumberFormat("ru-RU").format(ev.price)} ₽
            </div>
          )}

          <a
            href={ev.ticketUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
          >
            Купить билет
          </a>
        </div>
      </div>
    </article>
  );
}
