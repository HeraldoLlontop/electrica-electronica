import { Inter } from "next/font/google";
import Script from "next/script";
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
        <link
          rel="preload"
          href="/images/logos/isologo-electrica-electronica.svg"
          as="image"
        />

        {/* Datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1365903201210881');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* eslint-disable @next/next/no-img-element */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1365903201210881&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* eslint-enable @next/next/no-img-element */}
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
