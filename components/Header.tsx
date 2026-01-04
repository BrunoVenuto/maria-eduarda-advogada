import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-lg font-semibold text-[#c8a04d]">
          {siteConfig.name}
        </span>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#inicio" className="hover:text-white transition">Início</a>
          <a href="#atuacao" className="hover:text-white transition">Atuação</a>
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
