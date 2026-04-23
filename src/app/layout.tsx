import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="fr" className={`${playfair.variable} ${cormorant.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-raleway), sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
