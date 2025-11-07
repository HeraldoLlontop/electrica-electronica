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
    category: "Mantenimiento y Reparación",
    title: "Reparación de letrero con luces",
    images: [
      "/images/projects/1762291236939-01.webp"
    ],
    tech: ["Iluminación LED", "Reparación eléctrica", "Letreros comerciales"],
    description: "Reparación y mantenimiento de letrero iluminado para grifo, incluyendo revisión de conexiones eléctricas y sistema de luces."
  },
  {
    id: 3,
    category: "Instalación Eléctrica",
    title: "Tableros eléctricos",
    images: [
      "/images/projects/1762295999454.webp"
    ],
    tech: ["Tablero principal", "Circuitos", "Protecciones"]
  },
  {
    id: 4,
    category: "Instalación Eléctrica",
    title: "Equipos de cocina industriales",
    images: [
      "/images/projects/1762312476546.webp"
    ],
    tech: ["Motor eléctrico", "Conexiones", "Protecciones"]
  },
  {
    id: 5,
    category: "Instalación Eléctrica",
    title: "Calentador solar de agua",
    images: [
      "/images/projects/Image_l670zal670zal670-01.webp"
    ],
    tech: ["Panel solar", "Tanque", "Conexiones"]
  },
  {
    id: 6,
    category: "Instalación Eléctrica",
    title: "Terma eléctrica",
    images: [
      "/images/projects/20251107_160451113.webp"
    ],
    tech: ["Terma eléctrica", "Tanque", "Conexiones eléctricas"],
    description: "Instalación de terma eléctrica para suministro de agua caliente, incluyendo conexiones eléctricas y montaje del tanque."
  },
  {
    id: 7,
    category: "Instalación Eléctrica",
    title: "Hornos industriales",
    images: [
      "/images/projects/1762312712398.webp"
    ],
    tech: ["Control eléctrico", "Conexiones", "Protecciones"]
  },
  {
    id: 8,
    category: "Instalación Eléctrica",
    title: "Equipos de bombeo y presurización",
    images: [
      "/images/projects/Image_vpj8qfvpj8qfvpj8.webp"
    ],
    tech: ["Bomba eléctrica", "Presurización", "Conexiones"],
    description: "Instalación eléctrica de sistema de bombeo y presurización, incluyendo conexiones eléctricas, tablero de control y protecciones para bomba eléctrica."
  }
];
