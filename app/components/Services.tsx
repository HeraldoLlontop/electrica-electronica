'use client';

import { motion } from 'framer-motion';
import { Camera, ShieldAlert, DoorOpen, Megaphone, Zap, Snowflake, Lightbulb, Plug } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Cámaras de videovigilancia",
      description: "Instalación y configuración de CCTV y cámaras IP con acceso remoto",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Alarmas antirrobo",
      description: "Sensores, sirenas y notificaciones para hogares y negocios",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <DoorOpen className="w-8 h-8" />,
      title: "Video portero y chapa eléctrica",
      description: "Control de accesos con cerraduras eléctricas y video portero",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Intercomunicadores",
      description: "Sistemas de comunicación interna para edificios y negocios",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: "Electrodomésticos y artefactos",
      description: "Instalación y reparación básica de artefactos eléctricos",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Refrigeración",
      description: "Mantenimiento y soluciones en sistemas de refrigeración",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Instalación de reflectores",
      description: "Iluminación LED para exteriores, seguridad y áreas de trabajo",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instalaciones eléctricas",
      description: "Cableado, tableros, tomacorrientes y mantenimiento general",
      color: "from-[var(--primary-blue)] to-[var(--primary-celeste)]"
    }
  ];

  return (
    <section id="servicios" className="relative min-h-dvh flex items-center pt-32 pb-16 md:pt-32 md:pb-24 lg:pt-32 lg:pb-16 xl:pt-40 xl:pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 relative inline-block pb-2">
            <span className="relative z-10">Servicios de Eléctrica Electrónica</span>
            <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--primary-yellow)]/25"></span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-yellow)]/70"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Instalación, mantenimiento y soluciones de seguridad y electricidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: services.indexOf(service) * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-2xl blur-xl`} />
              <div className="relative h-full p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[var(--primary-blue)]/50 hover:shadow-lg transition-all duration-200 flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className={`inline-block p-4 bg-gradient-to-r ${service.color} rounded-xl text-white`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 flex-1">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
