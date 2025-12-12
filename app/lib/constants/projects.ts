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
    id: 9,
    category: "Infraestructura",
    title: "Canalización eléctrica para iluminación.",
    images: [
      "/images/projects/20251211_192245292.webp"
    ],
    tech: [
      "Tuberías conduit",
      "Cajas octogonales y rectangulares",
      "Rutas de iluminación",
      "Preparación para luminarias y efectos"
    ],
    description: "Canalización eléctrica instalada en las vigas de un centro de recepciones en Chosica del Norte, utilizando tuberías conduit y cajas para la futura implementación de reflectores, iluminación decorativa, arañas y sistemas de luces móviles, garantizando una distribución segura y ordenada."
  },
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
      "/images/projects/20251212_092545250.webp"
    ],
    tech: ["Iluminación LED", "Reparación eléctrica", "Letreros comerciales"],
    description: "Reparación y mantenimiento de letrero iluminado para grifo, incluyendo revisión de conexiones eléctricas y sistema de luces."
  },
  {
    id: 3,
    category: "Instalación Eléctrica",
    title: "Tableros eléctricos",
    images: [
      "/images/projects/20251212_093109528.webp"
    ],
    tech: ["Tablero principal", "Circuitos", "Protecciones"]
  },
  {
    id: 4,
    category: "Instalación Eléctrica",
    title: "Equipos de cocina industriales",
    images: [
      "/images/projects/20251211_192549837.webp"
    ],
    tech: ["Motor eléctrico", "Conexiones", "Protecciones"]
  },
  {
    id: 5,
    category: "Instalación Eléctrica",
    title: "Calentador solar de agua",
    images: [
      "/images/projects/20251212_092509501.webp"
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
      "/images/projects/20251212_101242072.webp"
    ],
    tech: ["Control eléctrico", "Conexiones", "Protecciones"]
  },
  {
    id: 8,
    category: "Instalación Eléctrica",
    title: "Equipos de bombeo y presurización",
    images: [
      "/images/projects/Image_vpj8qfvpj8qfvpj8-01.webp"
    ],
    tech: ["Bomba eléctrica", "Presurización", "Conexiones"],
    description: "Instalación eléctrica de sistema de bombeo y presurización, incluyendo conexiones eléctricas, tablero de control y protecciones para bomba eléctrica."
  }
];
