import Hero from "@/components/Hero";
import Events from "@/components/Events";
import JourneySection from "@/components/JourneySection";
import TrailerSection from "@/components/TrailerSection";
import GallerySection from "@/components/GallerySection";
import ActorsSection from "@/components/ActorsSection";
import HistorySection from "@/components/HistorySection";
import ContactsSection from "@/components/ContactsSection";
import ScrollTransition from "@/components/ScrollTransition";

import { mockEvents } from "@/data/mocks/events";
import { journey } from "@/data/mocks/journey";
import { trailer } from "@/data/mocks/trailer";
import { gallery } from "@/data/mocks/gallery";
import { actors, crew } from "@/data/mocks/actors";
import { history } from "@/data/mocks/history";
import { contacts } from "@/data/mocks/contacts";

export const revalidate = 60; // ISR на будущее

export default async function Page() {
  // На Этапе 1 всегда рендерим моки.
  const events = mockEvents;

  return (
    <>
      <ScrollTransition />
      <Hero />
      <Events items={events} />

      <JourneySection items={journey} />

      <TrailerSection data={trailer} />

      <GallerySection items={gallery} />

      <ActorsSection actors={actors} crew={crew} />

      <HistorySection data={history} />

      <ContactsSection data={contacts} />
    </>
  );
}
