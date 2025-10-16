import Container from "./Container";
import { HistoryBlock } from "@/types/history";

export default function HistorySection({ data }: Readonly<{ data: HistoryBlock }>) {
  return (
           <section id="history" className="py-20 bg-gray-900 text-white relative overflow-hidden">
             {/* Декоративные элементы */}
             <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/20 rounded-full" />
             <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/30 rounded-full" />
      
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-4">
            История
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">{data.title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Классика русской литературы в современной интерпретации
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {data.paragraphs.map((p,i)=>(<p key={`p-${i}`} className="text-lg">{p}</p>))}
            </div>
            {data.facts && (
              <ul className="list-disc pl-6 mt-6 space-y-2 text-gray-600">
                {data.facts.map((f,i)=>(<li key={`f-${i}`}>{f}</li>))}
              </ul>
            )}
                   {data.quote && <blockquote className="mt-6 border-l-4 border-amber-400 pl-4 italic text-amber-400 text-lg">&ldquo;{data.quote}&rdquo;</blockquote>}
          </div>
        </div>
      </Container>
    </section>
  );
}
