// WelcomeScreen.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#f4e5db] overflow-hidden">
      {/* Imagen de fondo centrada */}
      <img
        src="/fondo.png" // debe estar en /public
        alt="Isoró"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Capa semitransparente para contraste */}
      <div className="absolute inset-0 bg-[#f4e5db]/20" />

      {/* Botón principal animado */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05, backgroundColor: "#ff9335" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="absolute bottom-[15vh] bg-[#EF811A] text-white font-semibold px-10 py-4 rounded-full text-xl shadow-md transition-all duration-300"
      >
        Comenzar
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
