export type EventItem = {
  id: number;
  title: string;
  dateTime: string; // ISO
  city: string;
  venue?: string;
  ticketUrl?: string;
  status?: "scheduled" | "sold_out" | "cancelled";
  slug: string;
  poster?: string;
};

