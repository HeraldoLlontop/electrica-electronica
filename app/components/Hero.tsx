'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Camera, ShieldAlert, DoorOpen, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { useScrollToSection } from '../lib/hooks/useScrollToSection';
import { trackLead, trackViewContent } from '../lib/analytics/metaPixel';

const Hero = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <section id="inicio" className="relative min-h-dvh flex items-center pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Columna de texto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Electricidad y Seguridad para tu hogar y negocio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-lg md:text-xl text-gray-700 max-w-xl"
          >
            Instalaciones y reparaciones eléctricas para hogares y negocios, además de mantenimiento de cámaras de seguridad, alarmas, video portero, intercomunicadores, reflectores y sistemas eléctricos en general.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800"
          >
            <li className="flex items-center gap-2"><Camera className="w-5 h-5 text-[color:var(--primary-blue)]"/> Cámaras y CCTV</li>
            <li className="flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-[color:var(--primary-blue)]"/> Alarmas antirrobo</li>
            <li className="flex items-center gap-2"><DoorOpen className="w-5 h-5 text-[color:var(--primary-blue)]"/> Video portero y chapas</li>
            <li className="flex items-center gap-2"><Lightbulb className="w-5 h-5 text-[color:var(--primary-blue)]"/> Iluminación y reflectores</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => {
                trackViewContent('Sección Servicios');
                scrollToSection('#servicios');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-celeste)] rounded-full font-semibold text-white flex items-center gap-2 shadow"
            >
              Ver servicios <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="https://wa.me/51978073454?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20servicios%20de%20el%C3%A9ctrica%20y%20electr%C3%B3nica."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead('WhatsApp Hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-200"
            >
              WhatsApp
            </motion.a>
            <motion.a
              href="tel:+51978073454"
              onClick={() => trackLead('Llamada Hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-black bg-[color:var(--primary-yellow)] hover:brightness-95"
            >
              Llamar ahora
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Columna visual */}
        <div className="relative overflow-visible">
          {/* Elementos decorativos - siempre visibles después de animar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="absolute -top-8 -left-6 w-40 h-40 rounded-2xl bg-[color:var(--primary-celeste)]/25 pointer-events-none"
            style={{ zIndex: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-8 -right-6 w-56 h-56 rounded-2xl bg-[color:var(--primary-blue)]/15 pointer-events-none"
            style={{ zIndex: 1 }}
          />
          {/* Contenedor principal con animación */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-lg relative"
            style={{ zIndex: 2, position: 'relative' }}
          >
            <Image
              src="/images/hero/mark-kats-oj1zW_PNI4k-unsplash.webp"
              alt="Instalaciones eléctricas y de seguridad"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
              </motion.div>
            </div>
      </div>
    </section>
  );
};

export default Hero;
