import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#f4e5db] overflow-hidden">
      {/* Imagen de fondo centrada */}
      <img
        src="/fondo.png" // asegúrate de que esté en /public
        alt="Isoró"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Capa semitransparente opcional para mejorar contraste del botón */}
      <div className="absolute inset-0 bg-[#f4e5db]/20" />

      {/* Botón sobre la imagen */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#ff9335" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="absolute bottom-[15vh] bg-[#EF811A] text-white font-semibold px-10 py-4 rounded-full text-xl shadow-md transition-all duration-300"
      >
        Comenzar
      </motion.button>
    </div>
  );
}
