import { EventItem } from "@/types/events";

export default function TicketCard({ ev }: Readonly<{ ev: EventItem }>) {
  const poster = ev.poster || "/images/event-fallback.jpg";
  const date = new Date(ev.dateTime).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" });

  return (
    <article className="w-[300px] h-[420px] rounded-2xl overflow-hidden bg-white shadow-xl group hover:shadow-2xl transition-all duration-300">
      {/* Постер */}
      <div
        className="w-full h-[250px] bg-center bg-cover relative"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {/* Бумажный блок с зигзагом */}
      <div className="relative bg-amber-50 text-gray-800 h-[170px] zigzag">
        <div className="px-6 pt-6 pb-6 h-full flex flex-col">
          <div className="text-xs text-gray-500 mb-2 font-medium">{date}</div>
          <h3 className="text-xl font-bold leading-tight mb-2 font-serif">
            {ev.title}
          </h3>
          <div className="text-sm text-gray-600 mb-4">{ev.city}{ev.venue ? ` — ${ev.venue}` : ""}</div>

          <div className="mt-auto flex items-center justify-between">
            {ev.price !== undefined && (
              <div className="text-2xl font-bold text-amber-700">
                {Intl.NumberFormat("ru-RU").format(ev.price)} ₽
              </div>
            )}

            <a
              href={ev.ticketUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm font-semibold"
            >
              Купить
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
