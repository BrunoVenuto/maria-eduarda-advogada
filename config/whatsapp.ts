import { siteConfig } from "./site";

export function getWhatsappLink() {
  return `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
}
