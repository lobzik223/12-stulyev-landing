import { EventItem } from "@/types/events";

export default function TicketCard({ ev }: Readonly<{ ev: EventItem }>) {
  const poster = ev.poster || "/images/event-fallback.jpg";
  const date = new Date(ev.dateTime).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" });

  return (
    <article className="w-[280px] h-[400px] rounded-2xl overflow-hidden bg-white group">
      {/* Постер */}
      <div
        className="w-full h-[240px] bg-center bg-cover"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden
      />
      
      {/* Бумажный блок с зигзагом */}
      <div className="relative bg-[var(--paper)] text-[var(--paper-text)] h-[160px] zigzag">
        <div className="px-4 pt-6 pb-4 h-full flex flex-col">
          <div className="text-xs text-gray-600 mb-1">{date}</div>
          <h3 className="text-lg font-bold leading-tight mb-2">
            {ev.title}
          </h3>
          <div className="text-sm text-gray-600 mb-4">{ev.city}{ev.venue ? ` — ${ev.venue}` : ""}</div>

          <div className="mt-auto flex items-center justify-between">
            {ev.price !== undefined && (
              <div className="text-xl font-bold text-[var(--paper-text)]">
                {Intl.NumberFormat("ru-RU").format(ev.price)} ₽
              </div>
            )}

            <a
              href={ev.ticketUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-[var(--paper-text)]/30 hover:border-[var(--paper-text)]/60 text-[var(--paper-text)] hover:bg-[var(--paper-text)]/5 transition text-sm font-medium"
            >
              Купить
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
