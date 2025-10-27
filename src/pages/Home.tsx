import { FaPhoneVolume } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Hero from "../components/Hero";
import Activities from "../components/Activities";
import Reservations from "../components/Reservations";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="bg-[#e4d8cb] border-b border-black/10 w-full z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo2.png" alt="Isoró" className="w-40 mr-20" />
            <nav className="hidden md:flex gap-12 text-[#1c3e35] font-bold">
              <a href="#" className="hover:opacity-80">
                Inicio
              </a>
              <a href="#reservas" className="hover:opacity-80">
                Reservas
              </a>
              <a href="#actividades" className="hover:opacity-80">
                Actividades
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white rounded-full px-3 py-3 font-semibold border border-black/5">
              <FiSearch className="text-gray-700 text-2xl mr-2" />
              <input
                placeholder="Busca aquí"
                className="outline-none text-sm flex-1"
              />
              c
            </div>
            <button className="flex gap-3 bg-[#1c3e35] text-white font-semibold px-4 py-3 rounded-full">
              <FaPhoneVolume className="mt-1.5" /> Contacto
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Activities />
        <Reservations />
      </main>

      <Footer />
    </div>
  );
}
