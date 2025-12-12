'use client';

import { useState, useEffect, type TouchEvent } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS_DATA, Project } from '../lib/constants/projects';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [viewportType, setViewportType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportType('mobile');
      } else if (width < 1024) {
        setViewportType('tablet');
      } else {
        setViewportType('desktop');
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Swipe gesture handlers
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
      nextCarousel();
    }
    if (isRightSwipe) {
      prevCarousel();
    }
  };


  const getItemsPerView = () => {
    switch (viewportType) {
      case 'mobile':
        return 1;
      case 'tablet':
        return 2;
      case 'desktop':
        return 3;
      default:
        return 3;
    }
  };

  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => {
      const itemsPerView = getItemsPerView();
      const maxIndex = Math.max(0, PROJECTS_DATA.length - itemsPerView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => {
      const itemsPerView = getItemsPerView();
      const maxIndex = Math.max(0, PROJECTS_DATA.length - itemsPerView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentCarouselIndex(index);
  };

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = PROJECTS_DATA.find((p: Project) => p.id === selectedProject);
    if (project?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    const project = PROJECTS_DATA.find((p: Project) => p.id === selectedProject);
    if (project?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };



  return (
    <section id="proyectos" className="relative min-h-dvh flex items-center pt-28 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 px-4 overflow-hidden bg-white">
      <div className="w-full max-w-none mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 relative inline-block pb-2">
            <span className="relative z-10">Trabajos</span>
            <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--primary-yellow)]/25"></span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-yellow)]/70"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto hidden md:block">
            Reemplazaremos estas imágenes por tus instalaciones reales más adelante
          </p>
        </motion.div>

        {/* Carrusel Container */}
        <div className="relative mb-8">
          {/* Carrusel */}
          <div 
            className="overflow-hidden rounded-2xl py-3"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{
                x: `-${currentCarouselIndex * (100 / getItemsPerView())}%`
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {PROJECTS_DATA.map((project: Project, index: number) => (
                <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-1">
                  <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer"
              onClick={() => openProjectModal(project.id)}
            >
              <div className="aspect-square relative overflow-hidden rounded-2xl max-w-[400px] max-h-[400px] mx-auto group/image">
                      <Image 
                  src={project.images[0]} 
                  alt={project.title}
                        fill
                        sizes="(max-width: 768px) 300px, 400px"
                        className="object-cover transition-transform duration-300 group-hover/image:scale-110"
                        loading="lazy"
                        quality={75}
                />
                {/* Overlay con información en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-[color:var(--primary-celeste)] font-semibold mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80">
                      {project.images.length} {project.images.length === 1 ? 'imagen' : 'imágenes'}
                    </p>
                  </div>
                </div>
              </div>
              
            </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controles de navegación */}
          <div className="flex justify-center items-center mt-6 gap-4">
            {/* Botón anterior */}
            <button
              onClick={prevCarousel}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[color:var(--primary-blue)] hover:bg-[color:var(--primary-celeste)]/10 transition-all duration-200 border border-gray-300 cursor-pointer"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Anterior</span>
            </button>

            {/* Indicadores de puntos */}
            <div className="flex gap-2">
              {Array.from({
                length: Math.max(1, PROJECTS_DATA.length - getItemsPerView() + 1)
              }, (_, index) => (
                <button
                  key={`carousel-dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    index === currentCarouselIndex 
                      ? 'bg-[color:var(--primary-blue)] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a la posición ${index + 1}`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextCarousel}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[color:var(--primary-blue)] hover:bg-[color:var(--primary-celeste)]/10 transition-all duration-200 border border-gray-300 cursor-pointer"
              aria-label="Siguiente proyecto"
            >
              <span className="text-sm font-medium">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Proyecto */}
      <ProjectModal
        selectedProject={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={closeProjectModal}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        onGoToImage={goToImage}
      />
    </section>
  );
};

export default Projects;
