import { EventItem } from "@/types/events";

export default function TicketCard({ ev }: Readonly<{ ev: EventItem }>) {
  const poster = ev.poster || "/images/event-fallback.jpg";
  const date = new Date(ev.dateTime).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" });

  return (
    <article className="rounded-2xl overflow-hidden ring-1 ring-[rgba(212,175,55,0.25)] bg-black/80 backdrop-blur-[1px] group">
      {/* Постер */}
      <div
        className="aspect-[4/5] bg-center bg-cover"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden
      />
      {/* Бумажный блок */}
      <div className="relative bg-[var(--paper)] text-[var(--paper-text)] zigzag">
        <div className="px-5 pt-5 pb-4">
          <div className="text-sm tracking-wide opacity-80">{date}</div>
          <h3 className="mt-1 text-xl font-semibold leading-snug">
            {ev.title}
          </h3>
          <div className="opacity-80">{ev.city}{ev.venue ? ` — ${ev.venue}` : ""}</div>

          <div className="mt-5 flex items-center gap-4">
            {/* Цена — если есть; если нет, можно скрыть блок */}
            {ev.price !== undefined && (
              <div className="text-lg font-semibold">
                {Intl.NumberFormat("ru-RU").format(ev.price)} ₽
              </div>
            )}

            <a
              href={ev.ticketUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 rounded-full px-5 py-2 border border-[var(--paper-text)]/35 hover:border-[var(--paper-text)]/60 text-[var(--paper-text)] hover:bg-[var(--paper-text)]/6 transition"
            >
              Купить
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
