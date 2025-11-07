'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { trackNavigationClick } from '../lib/analytics';

const Navigation = () => {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabajos', href: '#proyectos' },
    { name: 'Planes', href: '#planes' },
    { name: 'Preguntas', href: '#faqs' },
    { name: 'Contacto', href: '#contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Detectar sección actual
      const sections = ['inicio', 'servicios', 'proyectos', 'planes', 'faqs', 'contacto'];
      let currentSectionTemp = 'inicio';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop - 200) {
          currentSectionTemp = sections[i];
          break;
        }
      }

      setCurrentSection(currentSectionTemp);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sección oscura: Hero
  // Héroe ahora es claro, así que no aplicamos estilos oscuros
  const isDarkSection = false;
  const logoSrc = "/images/logos/isologo-electrica-electronica.svg";

  const getNavStyles = () => {
    if (isMenuOpen) return 'bg-white border-b border-gray-200 shadow-sm';
    return 'backdrop-blur-lg border-b border-gray-200/60 bg-white/70';
  };

  const getMenuButtonStyles = () => {
    if (isMenuOpen) return 'text-gray-900 hover:bg-gray-100 border border-gray-300';
    return 'text-gray-900 hover:bg-gray-100 border border-gray-300';
  };

  const getMenuIcon = () => {
    return isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />;
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 ${getNavStyles()}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        <Link href="/">
          <div className="cursor-pointer w-[200px] h-20 flex items-center justify-center">
            <Image 
              src={logoSrc}
              alt="Eléctrica Electrónica Logo"
              width={200}
              height={96}
              priority
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </Link>
        <div className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = currentSection === item.href.substring(1);
            return (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    trackNavigationClick(item.name.toLowerCase());
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`text-lg font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[var(--primary-blue)] border-b-2 border-[var(--primary-blue)] pb-1'
                      : isDarkSection 
                        ? 'text-white hover:text-[var(--primary-celeste)]' 
                        : 'text-gray-700 hover:text-[var(--primary-blue)]'
                  }`}
                >
                  {item.name}
                </a>
              </motion.div>
            );
          })}
        </div>
        {/* Botón menú móvil */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors relative z-50 ${getMenuButtonStyles()}`}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {getMenuIcon()}
        </button>
      </div>
      {/* Overlay menú móvil */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 top-[72px] bg-white text-gray-900 lg:hidden z-40 border-t border-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-w-7xl mx-auto px-6 pt-8 pb-12 flex flex-col gap-2"
          >
            {navItems.map((item, index) => {
              const isActive = currentSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.1 + (index * 0.03) }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-semibold py-4 border-b border-gray-100 transition-colors ${
                    isActive 
                      ? 'text-[var(--primary-blue)]' 
                      : 'hover:text-[var(--primary-blue)]'
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
