import { getWhatsappLink } from "@/config/whatsapp";

const specialties = [
  "Plantão 24h",
  "Inquérito Policial",
  "Defesas Criminais",
  "Progressão de Pena",
  "Pedido de Liberdade",
  "Revisão Criminal",
  "Prisão Domiciliar",
  "Remição de Pena",
];

export default function Specialties() {
  return (
    <section id="atuacao" className="bg-neutral-900 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Tipos de causas em que atuamos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 text-center"
            >
              <h3 className="text-[#c8a04d] font-semibold">{item}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={getWhatsappLink()}
            target="_blank"
            className="inline-flex h-[52px] px-10 items-center justify-center rounded-xl bg-[#c8a04d] text-black font-semibold"
          >
            Preciso de uma advogada criminal
          </a>
        </div>
      </div>
    </section>
  );
}
