'use client';

import { useState, useEffect, type TouchEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS_DATA, Project } from '../lib/constants/projects';

interface ProjectModalProps {
  selectedProject: number | null;
  currentImageIndex: number;
  onClose: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
  onGoToImage: (index: number) => void;
}

const ProjectModal = ({ 
  selectedProject, 
  currentImageIndex, 
  onClose, 
  onNextImage, 
  onPrevImage, 
  onGoToImage 
}: ProjectModalProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      // Guardar el scroll actual
      const scrollY = window.scrollY;
      
      // Bloquear scroll con múltiples métodos
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // También bloquear en el html
      document.documentElement.style.overflow = 'hidden';
      
      // Cleanup: restaurar scroll
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedProject]);

  // Swipe gesture handlers para el modal
  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onNextImage();
    }
    if (isRightSwipe) {
      onPrevImage();
    }
  };
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = PROJECTS_DATA.find((p: Project) => p.id === selectedProject);
              if (!project) return null;

              return (
                <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                  {/* Imagen - Izquierda (Desktop) o Arriba (Móvil) */}
                  <div className="relative w-full lg:w-1/2 flex-shrink-0 bg-gray-900">
                    <div 
                      className="aspect-square relative overflow-hidden"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {/* Superposición de imágenes - Siempre una visible */}
                      {project.images.map((image: string, index: number) => (
                        <motion.div
                          key={`${project.id}-${index}`}
                          initial={{ opacity: index === currentImageIndex ? 1 : 0 }}
                          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - Imagen ${index + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority={index === currentImageIndex && index === 0}
                            quality={90}
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Botón de cerrar */}
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 z-20 p-2 bg-black/70 text-white rounded-full hover:bg-black/90 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    
                    {/* Botones de navegación - Solo si hay más de una imagen */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={onPrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 text-white rounded-full hover:bg-black/90 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        
                        <button
                          onClick={onNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 text-white rounded-full hover:bg-black/90 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    
                    {/* Indicadores - Solo si hay más de una imagen */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {project.images.map((_: string, idx: number) => (
                          <button
                            key={`${project.id}-dot-${idx}`}
                            onClick={() => onGoToImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                              idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Ir a la imagen ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Información - Derecha (Desktop) o Abajo (Móvil) */}
                  <div className="w-full lg:w-1/2 flex-shrink-0 p-6 lg:p-8 overflow-y-auto bg-white">
                    <div className="mb-4">
                      <span className="text-sm text-[color:var(--primary-celeste)] font-semibold bg-[color:var(--primary-celeste)]/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    {/* Descripción o información adicional */}
                    {project.description && (
                      <div className="mb-6">
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    )}
                    
                    {/* Tecnologías/Equipos */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Equipos y servicios:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Galería de miniaturas - Solo si hay más de una imagen */}
                    {project.images.length > 1 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Galería ({currentImageIndex + 1} de {project.images.length})
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                          {project.images.map((image: string, idx: number) => (
                            <button
                              key={`thumb-${idx}`}
                              onClick={() => onGoToImage(idx)}
                              className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                                idx === currentImageIndex 
                                  ? 'border-[color:var(--primary-blue)] scale-105' 
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <Image
                                src={image}
                                alt={`Miniatura ${idx + 1}`}
                                fill
                                sizes="80px"
                                className="object-cover"
                                quality={60}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
