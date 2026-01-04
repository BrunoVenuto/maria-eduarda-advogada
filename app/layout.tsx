import "./globals.css";
import WhatsappFloating from "@/components/WhatsappFloating";

export const metadata = {
  title: "Helena Almeida | Advocacia Criminal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-white">
        {children}
        <WhatsappFloating />
      </body>
    </html>
  );
}
