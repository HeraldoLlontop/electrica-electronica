import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://electrica-electronica.example.com'),
  title: {
    default: "Eléctrica Electrónica - Instalaciones y Seguridad",
    template: "%s | Eléctrica Electrónica"
  },
  description: "Servicios de electricidad y electrónica: cámaras de videovigilancia, alarmas antirrobo, video portero y chapa eléctrica, intercomunicadores, instalación y reparación de electrodomésticos, refrigeración y reflectores. Atención profesional.",
  keywords: [
    "cámaras de seguridad",
    "videovigilancia",
    "alarmas antirrobo",
    "video portero",
    "chapa eléctrica",
    "intercomunicadores",
    "instalaciones eléctricas",
    "electrodomésticos",
    "refrigeración",
    "reflectores LED",
    "servicios eléctricos",
    "servicios electrónicos",
    "Chiclayo",
    "Reque",
    "Monsefú",
    "servicios eléctricos Chiclayo",
    "instalaciones eléctricas Chiclayo"
  ],
  authors: [{ name: "Eléctrica Electrónica" }],
  creator: "Eléctrica Electrónica",
  publisher: "Eléctrica Electrónica",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://electrica-electronica.example.com',
    siteName: 'Eléctrica Electrónica',
    title: 'Eléctrica Electrónica - Instalaciones y Seguridad',
    description: 'Instalaciones eléctricas, cámaras de seguridad, alarmas y soluciones electrónicas.',
    images: [
      {
        url: '/images/logos/isologo-electrica-electronica.svg',
        width: 1200,
        height: 630,
        alt: 'Eléctrica Electrónica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eléctrica Electrónica - Instalaciones y Seguridad',
    description: 'Instalaciones eléctricas, cámaras de seguridad, alarmas y más.',
    images: ['/images/logos/isologo-electrica-electronica.svg'],
  },
  alternates: {
    canonical: 'https://electrica-electronica.example.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
};
