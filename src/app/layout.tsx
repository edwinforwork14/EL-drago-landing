import type { Metadata } from "next";
import { Bricolage_Grotesque, Be_Vietnam_Pro, Luckiest_Guy, Mr_Dafoe, Playfair_Display, Manrope, Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: "400",
});

const mrDafoe = Mr_Dafoe({
  variable: "--font-mr-dafoe",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic", "normal"],
});

const manrope = Manrope({
  variable: "--font-sans-modern",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "El Drago | Delicias que atrapan",
  description: "Variedad excepcional de productos embutidos hechos con pasión y tradición.",
  icons: {
    icon: "/images/logodrago.png",
    apple: "/images/logodrago.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${bricolageGrotesque.variable} ${beVietnamPro.variable} ${luckiestGuy.variable} ${mrDafoe.variable} ${playfairDisplay.variable} ${manrope.variable} light`}
    >
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning className="bg-background font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  );
}
