import { Inter } from "next/font/google";
import "./globals.css";
import { structuredData } from "./lib/seo/structured-data";

export { metadata } from "./lib/seo/metadata";

// Configuración optimizada de fuente
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Mejor rendimiento
  variable: "--font-inter",
  preload: true, // Precarga para LCP
  fallback: ["system-ui", "arial"], // Fallback mientras carga
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preload crítico para LCP - Logo */}
        <link rel="preload" href="/images/logos/isologo-electrica-electronica.svg" as="image" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
