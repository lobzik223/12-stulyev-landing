import Container from "./Container";
import { Actor, Crew } from "@/types/people";

export default function ActorsSection({ actors, crew }: Readonly<{ actors: Actor[]; crew: Crew[]; }>) {
  return (
           <section 
             id="actors" 
             className="py-20 text-white relative overflow-hidden"
             style={{
               backgroundImage: 'url("/images/esk.png")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}
           >
             {/* Декоративные элементы */}
             <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/20 rounded-full" />
             <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/30 rounded-full" />
      
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-4">
            Команда
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Актёры</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Талантливые актёры, которые воплощают на сцене классических персонажей
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {actors.map(a=>(
            <article key={a.id} className="rounded-2xl overflow-hidden ring-1 ring-amber-400/30 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] bg-center bg-cover" style={{backgroundImage:`url(${a.photo})`}} />
              <div className="p-6">
                <div className="text-lg font-semibold text-gray-900">{a.name}</div>
                <div className="text-gray-600">{a.role}</div>
                       {a.quote && <blockquote className="mt-2 text-sm italic text-amber-400 border-l-2 border-amber-400 pl-3">&ldquo;{a.quote}&rdquo;</blockquote>}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold font-serif text-center mb-8">Команда</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {crew.map(c=>(
                     <li key={c.id} className="rounded-xl border border-amber-400/30 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="font-semibold text-gray-900 text-lg">{c.name}</div>
                <div className="text-amber-400 font-medium">{c.position}</div>
                {c.note && <p className="text-gray-600 mt-2 text-sm leading-relaxed">{c.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
