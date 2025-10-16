import Container from "./Container";
import { Contacts } from "@/types/contacts";

export default function ContactsSection({ data }: Readonly<{ data: Contacts }>) {
  return (
    <section id="contacts" className="py-20 bg-[#0e0b09] text-white">
      <Container>
        <h2 className="text-3xl font-semibold">Контакты и партнёры</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-xl font-medium">{data.theater}</div>
            {data.email && <div className="opacity-90 mt-2">Email: <a href={`mailto:${data.email}`} className="underline">{data.email}</a></div>}
            {data.phone && <div className="opacity-90">Телефон: <a href={`tel:${data.phone}`} className="underline">{data.phone}</a></div>}
            {data.socials && (
              <div className="mt-3 flex gap-4">
                {data.socials.map(s=>(
                  <a key={s.label} href={s.url} className="underline opacity-90 hover:opacity-100">{s.label}</a>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="opacity-90 mb-3">Партнёры:</div>
            <div className="flex flex-wrap gap-3">
              {(data.partners||[]).map(p=>(
                <a key={p.id} href={p.url||"#"} className="rounded-xl border border-[#D4AF37]/30 px-4 py-2 opacity-90 hover:opacity-100">{p.name}</a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
