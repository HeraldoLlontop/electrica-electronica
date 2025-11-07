Proyecto [Next.js](https://nextjs.org) inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Nombre de la marca: Eléctrica Electrónica

## Requisitos

- Node.js >= 18.x (recomendado 20.x)
- npm (o pnpm/yarn)

## Instalación

Instala dependencias (requerido antes de iniciar):

```bash
npm install
```

Si ves el error "next is not recognized" o similar, es porque faltó este paso.

## Variables de entorno

1. **Copia el archivo de ejemplo a `.env.local`:**
   ```bash
   # Windows
   copy .env.example .env.local
   
   # Linux/Mac
   cp .env.example .env.local
   ```

2. **Edita `.env.local`** y configura las variables:

   - **`NEXT_PUBLIC_SITE_URL`** (requerida):
     - Dominio: `https://electrica-electronica.com`
     - Desarrollo local: `http://localhost:3000`

   - **`NEXT_PUBLIC_GOOGLE_VERIFICATION`** (opcional):
     - Solo necesario si usas verificación por **meta tag** en Google Search Console
     - Obtén el código en: https://search.google.com/search-console

**Nota:** El archivo `.env.local` no se sube a git. En Vercel, configura estas variables en **Settings > Environment Variables**.

## Inicio rápido

Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la app.

## Scripts

- `dev`: Next dev con Turbopack
- `build`: Next build
- `start`: Next start
- `lint`: ESLint

## Build y despliegue

Para generar build de producción:

```bash
npm run build
npm start
```

Despliegue recomendado: Vercel. Configura variables en el panel del proyecto.

## Tecnologías principales

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

Consulta versiones exactas en `package.json`.
