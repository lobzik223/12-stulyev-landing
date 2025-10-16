import Container from "./Container";
import { Contacts } from "@/types/contacts";

export default function ContactsSection({ data }: Readonly<{ data: Contacts }>) {
  return (
           <section id="contacts" className="py-20 bg-gray-900 text-white relative overflow-hidden">
             {/* Декоративные элементы */}
             <div className="absolute top-20 right-20 w-32 h-32 border border-amber-400/20 rounded-full" />
             <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/30 rounded-full" />
      
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-400 mb-4">
            Связь
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Контакты и партнёры</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для получения дополнительной информации
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">{data.theater}</h3>
              {data.email && <div className="mb-3"><span className="text-gray-300">Email:</span> <a href={`mailto:${data.email}`} className="text-amber-400 hover:text-amber-300 font-medium">{data.email}</a></div>}
              {data.phone && <div className="mb-6"><span className="text-gray-300">Телефон:</span> <a href={`tel:${data.phone}`} className="text-amber-400 hover:text-amber-300 font-medium">{data.phone}</a></div>}
              {data.socials && (
                <div className="flex gap-4">
                  {data.socials.map(s=>(
                    <a key={s.label} href={s.url} className="text-amber-400 hover:text-amber-300 font-medium underline">{s.label}</a>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">Партнёры</h3>
              <div className="grid grid-cols-1 gap-4">
                {(data.partners||[]).map(p=>(
                         <a 
                           key={p.id} 
                           href={p.url||"#"} 
                           className="flex items-center gap-3 rounded-xl border border-amber-400/30 px-4 py-3 hover:border-amber-400/60 hover:bg-amber-400/10 transition-all duration-300 group"
                         >
                    {p.logo && (
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-700">{p.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
