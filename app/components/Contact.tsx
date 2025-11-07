'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+51 978 073 454",
      description: "Lun-Dom 8:00-20:00",
      link: "tel:+51978073454"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Chiclayo, Lambayeque, Perú",
      description: "Servicio en zonas aledañas"
    }
  ];

  return (
    <section id="contacto" className="relative min-h-dvh flex items-center pt-28 pb-28 md:pt-28 md:pb-28 lg:pt-28 lg:pb-28 xl:pt-40 xl:pb-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 relative inline-block pb-2">
            <span className="relative z-10">Contacto</span>
            <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--primary-yellow)]/25"></span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-yellow)]/70"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contáctanos directamente por WhatsApp o llámanos. Te atenderemos de inmediato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Información de contacto
              </h3>
              <p className="text-base lg:text-lg text-gray-600 mb-6">
                Estamos listos para ayudarte con tus instalaciones eléctricas y de seguridad
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const content = (
                <motion.div
                  key={item.title}
                    whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[var(--primary-blue)]/50 hover:shadow-lg transition-all duration-200 text-center ${item.link ? 'cursor-pointer' : ''}`}
                >
                    <div className="inline-block p-3 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-celeste)] rounded-xl mb-3 text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-base lg:text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-sm lg:text-base text-[color:var(--primary-blue)] font-medium mb-1">{item.info}</p>
                  <p className="text-xs lg:text-sm text-gray-600">{item.description}</p>
                </motion.div>
                );

                return item.link ? (
                  <a key={item.title} href={item.link} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </motion.div>

          {/* Botones de acción principal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Contáctanos ahora
              </h3>
              <p className="text-base lg:text-lg text-gray-600 mb-6">
                Elige la forma más conveniente para ti
              </p>
            </div>

            <div className="space-y-4">
              {/* Botón WhatsApp */}
              <motion.a
                href="https://wa.me/51978073454?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20servicios%20de%20el%C3%A9ctrica%20y%20electr%C3%B3nica."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chatear por WhatsApp</span>
              </motion.a>

              {/* Botón Llamar */}
              <motion.a
                  href="tel:+51978073454"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full flex items-center justify-center gap-4 p-6 bg-[color:var(--primary-yellow)] text-black rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-200"
                >
                <Phone className="w-6 h-6" />
                <span>Llamar ahora</span>
              </motion.a>
              </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Respuesta inmediata:</span> Atendemos todos los días de 8:00 AM a 8:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
