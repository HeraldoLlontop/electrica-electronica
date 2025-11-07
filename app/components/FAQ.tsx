'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: '¿Cómo funcionan los precios y formas de pago?', 
    a: 'Todos los precios son según cotización personalizada gratuita y sin compromiso. Evaluamos el alcance del proyecto, materiales necesarios y complejidad. Aceptamos efectivo, transferencia bancaria y otras formas de pago acordadas según tu comodidad.' 
  },
  { 
    q: '¿Cuánto tarda una instalación?', 
    a: 'Depende del servicio: instalaciones de cámaras/alarmas (1-2 días para hogares), instalaciones eléctricas residenciales incluyen certificado (2-4 días), reparaciones urgentes (mismo día según disponibilidad). Proyectos mayores se cotizan con cronograma detallado.' 
  },
  { 
    q: '¿Atienden emergencias y cuáles son los horarios?', 
    a: 'Sí, atendemos reparaciones y emergencias urgentes. Horario regular: lunes a domingo de 8:00 AM a 8:00 PM. Para emergencias fuera de estos horarios, contáctanos por WhatsApp o teléfono y evaluamos la urgencia.' 
  },
  { 
    q: '¿Ofrecen garantía?', 
    a: 'Sí. Ofrecemos garantía por la instalación realizada. Además, según el equipo o material, aplica la garantía del fabricante. Todos los detalles de cobertura y duración se especifican en la cotización.' 
  },
  { 
    q: '¿Qué zonas cubren?', 
    a: 'Atendemos en Chiclayo, Lambayeque y zonas aledañas (Reque, Monsefú, entre otras). Para proyectos fuera de estas zonas, se cotiza según ubicación y distancia.' 
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative min-h-dvh flex items-center py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative inline-block pb-2">
            <span className="relative z-10">Preguntas frecuentes</span>
            <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--primary-yellow)]/25"></span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-yellow)]/70"></span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <motion.div
              key={f.q}
              initial={false}
              className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:border-[var(--primary-blue)]/50 hover:shadow-md transition-all duration-200"
            >
              <button
                className="w-full text-left px-6 py-5 md:px-8 md:py-6 font-semibold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors duration-200"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-base md:text-lg pr-4">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 text-[color:var(--primary-blue)]"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 md:px-8 md:pb-6 text-gray-700 text-base md:text-lg leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


