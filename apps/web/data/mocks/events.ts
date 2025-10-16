import { EventItem } from "@/types/events";

export const mockEvents: EventItem[] = [
  {
    id: 1,
    title: "«12 стульев» — Москва",
    dateTime: "2025-11-10T19:00:00+03:00",
    city: "Москва",
    venue: "Театр имени ...",
    ticketUrl: "https://example.com/tickets",
    status: "scheduled",
    slug: "moskva-2025-11-10"
  },
  {
    id: 2,
    title: "«12 стульев» — Санкт-Петербург",
    dateTime: "2025-11-15T19:00:00+03:00",
    city: "Санкт-Петербург",
    venue: "Большой театр ...",
    ticketUrl: "https://example.com/tickets",
    status: "scheduled",
    slug: "spb-2025-11-15"
  }
];

