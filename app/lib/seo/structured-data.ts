export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eléctrica Electrónica",
  "description": "Servicios eléctricos y electrónicos: cámaras de videovigilancia, alarmas, video portero, intercomunicadores, electrodomésticos, refrigeración y reflectores.",
  "url": "https://electrica-electronica.example.com",
  "logo": "https://electrica-electronica.example.com/images/logos/isologo-electrica-electronica.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+51-978-073-454",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PE",
    "addressRegion": "Lambayeque",
    "addressLocality": "Chiclayo"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Chiclayo"
    },
    {
      "@type": "City",
      "name": "Reque"
    },
    {
      "@type": "City",
      "name": "Monsefú"
    }
  ],
  "sameAs": [
    "https://wa.me/51978073454"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Cámaras de videovigilancia",
      "description": "Instalación, configuración y mantenimiento de CCTV y soluciones IP"
    },
    {
      "@type": "Service", 
      "name": "Alarmas antirrobo",
      "description": "Sistemas de detección y alerta para hogares y negocios"
    },
    {
      "@type": "Service",
      "name": "Video portero y chapa eléctrica",
      "description": "Control de accesos con video portero y cerraduras eléctricas"
    },
    {
      "@type": "Service",
      "name": "Instalaciones eléctricas",
      "description": "Instalaciones, mejoras y mantenimiento eléctrico en general"
    }
  ]
};
