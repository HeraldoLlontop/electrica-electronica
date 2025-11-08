'use client';

import { Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabajos', href: '#proyectos' },
    { name: 'Paquetes', href: '#planes' },
    { name: 'Preguntas frecuentes', href: '#faqs' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="relative py-16 px-6 bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Image 
              src="/images/logos/isologo-electrica-electronica.svg" 
              alt="Eléctrica Electrónica Logo"
              width={150}
              height={150}
              className="w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-600 text-sm max-w-xs mx-auto md:mx-0 mb-4">
              Soluciones en electricidad y electrónica para tu hogar y negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-gray-600 hover:text-[var(--primary-blue)] transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="tel:+51978073454" 
                  className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-blue)] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>+51 978 073 454</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Chiclayo, Perú</span>
              </li>
              <li className="text-gray-500 text-xs pt-2">
                Lun-Dom 8:00 AM - 8:00 PM
              </li>
              <li className="text-gray-500 text-xs">
                Atención a domicilio y empresarial
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 Eléctrica Electrónica. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-400">Electricidad y seguridad confiable para tu hogar y negocio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
