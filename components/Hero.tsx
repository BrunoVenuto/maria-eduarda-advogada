import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getWhatsappLink } from "@/config/whatsapp";

export default function Hero() {
  return (
    <section id="inicio" className="bg-neutral-950 py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h1 className="text-[42px] md:text-[52px] font-bold leading-tight mb-6">
            <span className="text-[#d4b36b]">
              {siteConfig.name}
            </span>
            <br />
            <span className="text-[#c8a04d]">{siteConfig.role}</span>
          </h1>

          <p className="text-neutral-400 mb-10 max-w-xl">
            {siteConfig.hero.subtitle}
          </p>

          <a
            href={getWhatsappLink()}
            target="_blank"
            className="inline-flex h-[52px] px-10 items-center justify-center rounded-xl bg-[#c8a04d] text-black font-semibold"
          >
            {siteConfig.hero.cta}
          </a>
        </div>

        <Image
          src={siteConfig.images.hero}
          alt={siteConfig.name}
          width={520}
          height={640}
          className="rounded-2xl object-cover"
          priority
        />
      </div>
    </section>
  );
}
