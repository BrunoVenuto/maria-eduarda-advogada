import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getWhatsappLink } from "@/config/whatsapp";

export default function About() {
  return (
    <section id="sobre" className="bg-neutral-900 py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <Image
          src={siteConfig.images.hero}
          alt={siteConfig.name}
          width={480}
          height={580}
          className="rounded-2xl object-cover"
        />

        <div className="bg-neutral-800 p-10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            {siteConfig.name}
          </h3>

          <p className="text-neutral-400 mb-8 leading-relaxed">
            {siteConfig.about.description}
          </p>

          <a
            href={getWhatsappLink()}
            target="_blank"
            className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-[#c8a04d] text-black font-semibold"
          >
            Falar agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
