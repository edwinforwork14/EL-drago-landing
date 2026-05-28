import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Drago | Delicias que atrapan",
  description: "Variedad excepcional de productos embutidos hechos con pasión y tradición.",
  icons: {
    icon: "/hero-logo/logodrago.png",
    apple: "/hero-logo/logodrago.png",
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
      className="light"
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
