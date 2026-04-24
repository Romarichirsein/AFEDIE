import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
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
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-poppins), sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
