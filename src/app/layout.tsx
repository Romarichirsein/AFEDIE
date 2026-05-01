import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { translations } from "@/translations";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "AFEDIE | Association des Femmes de la Dignité et de l'Excellence",
  description: "Unir, élever et autonomiser les femmes à travers la solidarité, l'engagement humanitaire et le développement communautaire au Cameroun.",
  keywords: "AFEDIE, Association femmes Cameroun, Dignité, Excellence, Autonomisation femme, Humanitaire Yaoundé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-poppins), sans-serif" }} suppressHydrationWarning>
        <LanguageProvider translations={translations}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
