import Container from "./Container";
import { Trailer } from "@/types/trailer";

export default function TrailerSection({ data }: Readonly<{ data: Trailer }>) {
  return (
    <section id="trailer" className="py-20 bg-[#0e0b09] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">Трейлер</h2>
        <p className="opacity-80 mt-2">{data.title}</p>
        <div className="mt-6 aspect-video rounded-2xl overflow-hidden ring-1 ring-[#D4AF37]/30">
          <iframe className="w-full h-full" src={data.videoUrl} title="Трейлер" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </Container>
    </section>
  );
}
