export interface Project {
  id: number;
  category: string;
  title: string;
  images: string[];
  tech: string[];
  location?: string;
  description?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    category: "Infraestructura",
    title: "Tendido eléctrico",
    images: [
      "/images/projects/20251107_135925303.webp"
    ],
    tech: ["Postes y estructuras", "Cableado aéreo", "Distribución", "Normativas"],
    description: "Instalación completa de tendido eléctrico aéreo en la Urbanización Reque Mar, incluyendo postes, estructuras de soporte y cableado de distribución según normativas vigentes."
  },
  {
    id: 2,
    category: "Instalación Eléctrica",
    title: "Tableros eléctricos",
    images: [
      "/images/projects/1762295999454.webp"
    ],
    tech: ["Tablero principal", "Circuitos", "Protecciones"]
  },
  {
    id: 3,
    category: "Instalación Eléctrica",
    title: "Equipos de cocina industriales",
    images: [
      "/images/projects/1762312476546.webp"
    ],
    tech: ["Motor eléctrico", "Conexiones", "Protecciones"]
  },
  {
    id: 4,
    category: "Instalación Eléctrica",
    title: "Calentador solar de agua",
    images: [
      "/images/projects/Image_l670zal670zal670-01.webp"
    ],
    tech: ["Panel solar", "Tanque", "Conexiones"]
  },
  {
    id: 5,
    category: "Instalación Eléctrica",
    title: "Hornos industriales",
    images: [
      "/images/projects/1762312712398.webp"
    ],
    tech: ["Control eléctrico", "Conexiones", "Protecciones"]
  },
  {
    id: 6,
    category: "Instalación Eléctrica",
    title: "Equipos de bombeo y presurización",
    images: [
      "/images/projects/Image_vpj8qfvpj8qfvpj8.webp"
    ],
    tech: ["Bomba eléctrica", "Presurización", "Conexiones"]
  }
];
