"use client";

import { FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/config/whatsapp";

export default function WhatsappFloating() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
