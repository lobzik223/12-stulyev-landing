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
    slug: "moskva-2025-11-10",
    poster: "/images/journey/moscow.jpg",
    price: 2500
  },
  {
    id: 2,
    title: "«12 стульев» — Санкт-Петербург",
    dateTime: "2025-11-15T19:00:00+03:00",
    city: "Санкт-Петербург",
    venue: "Большой театр ...",
    ticketUrl: "https://example.com/tickets",
    status: "scheduled",
    slug: "spb-2025-11-15",
    poster: "/images/journey/stargorod.jpg",
    price: 2800
  },
  {
    id: 3,
    title: "«12 стульев» — Нижний Новгород",
    dateTime: "2025-11-20T19:00:00+03:00",
    city: "Нижний Новгород",
    venue: "Драматический театр",
    ticketUrl: "https://example.com/tickets",
    status: "scheduled",
    slug: "nnov-2025-11-20",
    poster: "/images/journey/nnov.jpg",
    price: 1800
  }
];

