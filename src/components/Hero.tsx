import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Animaciones para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  // Animaciones para los elementos hijos
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animación específica para el título principal
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Animación para el badge "EXPERIENCIA"
  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Animación para los botones
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Animación para la imagen de fondo
  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Animación para el overlay oscuro
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Fondo con animación */}
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <img
          src="/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro mejorado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"
          variants={overlayVariants}
        />
        {/* Overlay adicional para más contraste */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"
          variants={overlayVariants}
        />
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 py-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-sm text-white/90 italic mb-4"
          variants={itemVariants}
        >
          Reserva Natural Arroyo Isoró
        </motion.p>

        <motion.h1
          className="text-white font-bold leading-tight text-6xl md:text-7xl max-w-3xl"
          variants={titleVariants}
        >
          ISORÓ VIVÍ LA{" "}
          <motion.span
            className="bg-[#1c3e35] inline-block px-10 py-3 rounded-full -ml-6 mt-2 text-center"
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            EXPERIENCIA
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white/90 max-w-lg mt-6 text-lg"
          variants={itemVariants}
        >
          Descubrí la esencia natural de <strong>Goya</strong> a través de sus
          paisajes, su fauna y su gente. Navegá, explorá y conectá con uno de
          los <strong>rincones más valiosos del litoral</strong>.
        </motion.p>

        <motion.p
          className="text-white/90 max-w-lg mt-6 text-lg font-semibold"
          variants={itemVariants}
        >
          Más que un destino, el Isoró es una experiencia:{" "}
          <span className="font-bold">
            Trekking, kayak, avistaje y mucho más.
          </span>
        </motion.p>

        <motion.div className="mt-8 flex gap-4" variants={itemVariants}>
          <motion.button
            className="bg-[#af441d] text-white px-6 py-4 rounded-lg font-semibold text-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Reservá ahora
          </motion.button>
          <motion.button
            className="bg-white/10 text-white px-6 py-4 rounded-lg font-semibold text-lg border border-white/20 backdrop-blur-sm"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
              transition: { duration: 0.2 },
            }}
            whileTap="tap"
          >
            Ver actividades
          </motion.button>
        </motion.div>

        {/* Elemento decorativo animado */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.5,
              duration: 0.8,
            },
          }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white/80"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
