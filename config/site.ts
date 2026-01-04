export interface SiteConfig {
  name: string;
  role: string;

  whatsapp: string;
  whatsappMessage: string;

  instagram: string;

  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };

  about: {
    description: string;
  };

  images: {
    hero: string;
    about: string;
    logo: string;
  };

  colors: {
    primary: string;
    background: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Maria Eduarda",
  role: "Advogada Criminalista",

  whatsapp: "5531971223632",
  whatsappMessage:
    "Olá, Dra. Maria Eduarda. Preciso de atendimento jurídico criminal.",

  instagram: "@mariaedu.adv",

  hero: {
    title: "Sua liberdade deve ser tratada com seriedade.",
    subtitle:
      "Atendimento estratégico, técnico e responsável em todo o Brasil.",
    cta: "Converse agora com uma criminalista",
  },

  about: {
    description:
      "Advogada Criminalista com atuação estratégica, ética e responsável, acompanhando o cliente desde o início da investigação até a decisão final.",
  },

  images: {
    hero: "/images/hero.png",
    about: "/images/about.png",
    logo: "/images/logo.png",
  },

  colors: {
    primary: "#c8a04d",
    background: "#0a0a0a",
  },
};
