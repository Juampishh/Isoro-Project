import React from "react";

function Card({ img, title, desc }) {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1D3B32] mb-3 group-hover:text-[#2a554a] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
        <div className="mt-4 flex items-center text-[#1D3B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Descubrir más</span>
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Activities() {
  return (
    <section id="actividades" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#1D3B32] mb-4">
          Actividades
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre experiencias únicas en contacto con la naturaleza
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          img="/kayaks.jpg"
          title="Kayak"
          desc="Navegaciones guiadas para todos los niveles. Explora paisajes increíbles con instructores certificados."
        />
        <Card
          img="/single_kayak.jpg"
          title="Trekking y Senderos"
          desc="Caminatas interpretativas por la reserva. Conoce la flora y fauna local con guías especializados."
        />
        <Card
          img="/birdwatch.jpg"
          title="Avistaje"
          desc="Observación de aves y fauna local. Equipos especializados y guías expertos en biodiversidad."
        />
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#1D3B32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2a554a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
          Ver todas las actividades
        </button>
      </div>
    </section>
  );
}
