'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { trackLead } from '../lib/analytics/metaPixel';

const Contact = () => {
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Mapa de ubicación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Ubicación
              </h3>
              <p className="text-base lg:text-lg text-gray-600 mb-6">
                Encuéntranos en Chiclayo y zonas aledañas
              </p>
            </div>

            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.3499833014869!2d-79.81211968160585!3d-6.842564511998345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc9ae47ad6b92c13%3A0x556108bb4904944a!2sEl%C3%A9ctrica%20Electr%C3%B3nica!5e0!3m2!1sen!2spe!4v1768246834439!5m2!1sen!2spe"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Eléctrica Electrónica"
              />
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
                onClick={() => trackLead('WhatsApp Contacto')}
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
                onClick={() => trackLead('Llamada Contacto')}
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
                <span className="font-semibold text-gray-900">Respuesta inmediata:</span> Atendemos todos los días de 8:00 AM a 5:00 PM
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[var(--primary-blue)]" />
                <p className="text-sm lg:text-base font-semibold text-gray-900">
                  Chiclayo, Lambayeque, Perú
                </p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Servicio disponible en zonas aledañas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;