import Container from "./Container";
import { Actor, Crew } from "@/types/people";

export default function ActorsSection({ actors, crew }: Readonly<{ actors: Actor[]; crew: Crew[]; }>) {
  return (
    <section id="actors" className="py-20 bg-[#0e0b09] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">Актёры</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {actors.map(a=>(
            <article key={a.id} className="rounded-2xl overflow-hidden ring-1 ring-[#D4AF37]/20">
              <div className="aspect-[4/5] bg-center bg-cover" style={{backgroundImage:`url(${a.photo})`}} />
              <div className="p-4">
                <div className="text-lg font-semibold">{a.name}</div>
                <div className="opacity-80">{a.role}</div>
                {a.quote && <blockquote className="mt-2 text-sm italic opacity-80">"{a.quote}"</blockquote>}
              </div>
            </article>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-12">Команда</h3>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {crew.map(c=>(
            <li key={c.id} className="rounded-xl border border-[#D4AF37]/20 p-4">
              <div className="font-medium">{c.name}</div>
              <div className="opacity-80">{c.position}</div>
              {c.note && <p className="opacity-80 mt-1 text-sm">{c.note}</p>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
