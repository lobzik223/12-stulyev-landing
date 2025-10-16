import Hero from "@/components/Hero";
import Events from "@/components/Events";
import SectionDivider from "@/components/SectionDivider";
import JourneySection from "@/components/JourneySection";
import TrailerSection from "@/components/TrailerSection";
import GallerySection from "@/components/GallerySection";
import ActorsSection from "@/components/ActorsSection";
import HistorySection from "@/components/HistorySection";
import ContactsSection from "@/components/ContactsSection";

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
      <Hero />
      <SectionDivider variant="light" height={96} />
      <Events items={events} />
      <SectionDivider variant="dark" height={96} />

      <JourneySection items={journey} />
      <SectionDivider variant="dark" flip height={96} />

      <TrailerSection data={trailer} />
      <SectionDivider variant="dark" height={96} />

      <GallerySection items={gallery} />
      <SectionDivider variant="dark" flip height={96} />

      <ActorsSection actors={actors} crew={crew} />
      <SectionDivider variant="dark" height={96} />

      <HistorySection data={history} />
      <SectionDivider variant="dark" flip height={96} />

      <ContactsSection data={contacts} />
    </>
  );
}
