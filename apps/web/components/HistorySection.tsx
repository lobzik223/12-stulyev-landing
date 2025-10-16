import Container from "./Container";
import { HistoryBlock } from "@/types/history";

export default function HistorySection({ data }: Readonly<{ data: HistoryBlock }>) {
  return (
    <section id="history" className="py-20 bg-[#15110E] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">{data.title}</h2>
        <div className="mt-4 space-y-3 max-w-3xl">
          {data.paragraphs.map((p,i)=>(<p key={`p-${i}`} className="opacity-90">{p}</p>))}
        </div>
        {data.facts && (
          <ul className="list-disc pl-6 mt-6 space-y-1 opacity-90">
            {data.facts.map((f,i)=>(<li key={`f-${i}`}>{f}</li>))}
          </ul>
        )}
        {data.quote && <blockquote className="mt-6 border-l-4 border-[#D4AF37] pl-4 italic opacity-90">"{data.quote}"</blockquote>}
      </Container>
    </section>
  );
}
