import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contato" className="bg-neutral-900 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Outras formas de contato
        </h2>

        <p className="text-neutral-400">
          WhatsApp: {siteConfig.whatsapp}<br />
          Instagram: {siteConfig.instagram}
        </p>
      </div>
    </section>
  );
}
