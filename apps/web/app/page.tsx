import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import { mockEvents } from "@/data/mocks/events";
import { mockAbout } from "@/data/mocks/about";

export const revalidate = 60; // ISR на будущее

export default async function Page() {
  // На Этапе 1 всегда рендерим моки.
  const events = mockEvents;
  const about = mockAbout;

  return (
    <>
      <Hero />
      <Events items={events} />
      <About title={about.title} body={about.body} quote={about.highlightQuote} />
    </>
  );
}
