// Reservations.tsx
import React from "react";

const Reservations: React.FC = () => {
  return (
    <section id="reservas" className="bg-[#e4d8cb] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Contenido de texto */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-[#1D3B32]/10 text-[#1D3B32] text-sm font-semibold rounded-full mb-3">
              Planificá tu aventura
            </span>
            <h3 className="text-4xl font-extrabold text-[#1D3B32] leading-tight">
              Reservas
            </h3>
          </div>

          <p className="text-lg text-gray-800 leading-relaxed">
            Organizá tu visita con anticipación. Ofrecemos paquetes
            personalizados para grupos, familias y aventureros solitarios.
          </p>

          <div className="space-y-3">
            {[
              "Kayak guiado",
              "Trekking interpretativo",
              "Avistaje de aves",
            ].map((actividad) => (
              <div
                key={actividad}
                className="flex items-center space-x-3 text-gray-800"
              >
                <div className="w-2 h-2 bg-[#1D3B32] rounded-full" />
                <span className="font-medium">{actividad}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="bg-[#1D3B32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a554a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
            >
              <span>Reservá tu lugar</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button
              type="button"
              className="border-2 border-[#1D3B32] text-[#1D3B32] px-8 py-4 rounded-lg font-semibold hover:bg-[#1D3B32] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <span>Consultar disponibilidad</span>
            </button>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://www.goyasurubi.com/index/images/2023/isoro_3.jpg"
              alt="Reserva natural"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1D3B32]/10 to-transparent" />
          </div>

          {/* Elementos decorativos */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1D3B32]/10 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1D3B32]/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Reservations;
