'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'CCTV Hogar',
    note: 'Precio según cotización',
    features: [
      '2–4 cámaras HD/Full HD',
      'Grabador + app móvil',
      'Instalación y configuración',
      'Soporte técnico incluido',
    ],
  },
  {
    name: 'Instalación Eléctrica Residencial',
    note: 'Precio según cotización',
    features: [
      'Cableado y tableros eléctricos',
      'Tomacorrientes y luces',
      'Certificado de instalación',
      'Materiales certificados',
    ],
  },
  {
    name: 'Reparación y Mantenimiento',
    note: 'Precio según cotización',
    features: [
      'Reparaciones urgentes',
      'Mantenimiento preventivo',
      'Diagnóstico gratuito',
      'Atención en 24 horas',
    ],
  },
];

const Plans = () => {
  return (
    <section id="planes" className="relative min-h-dvh flex items-center py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative inline-block pb-2">
            <span className="relative z-10">Paquetes y soluciones</span>
            <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--primary-yellow)]/25"></span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-yellow)]/70"></span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">Todos los precios son según cotización.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-[var(--primary-blue)]/40 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.note}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--primary-blue)] mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;


