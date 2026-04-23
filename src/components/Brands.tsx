import { motion } from "motion/react";

// Lembre-se de colocar os nomes exatos das imagens que estão na pasta public
const brands = [
  { name: "Cliente 1", src: "/cliente1.png" },
  { name: "Cliente 2", src: "/cliente2.png" },
  { name: "Cliente 3", src: "/cliente3.png" },
  { name: "Cliente 4", src: "/cliente4.png" },
  { name: "Cliente 5", src: "/cliente5.png" },
  { name: "Cliente 6", src: "/cliente6.png" },
  { name: "Cliente 7", src: "/cliente7.png" },
];

export default function Brands() {
  return (
    <section className="py-20 md:py-24 bg-brand-dark border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="relative z-10">
        <p className="text-center text-white font-bold uppercase tracking-[0.4em] mb-12 md:mb-16 text-[10px] md:text-sm px-4">
          Empresas que já cresceram com a NexusWay
        </p>

        {/* Container do Carrossel Infinito */}
        <div className="flex overflow-hidden select-none gap-10 md:gap-20 group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-10 md:gap-20 w-max"
          >
            {/* Primeiro set de logos */}
            {brands.map((brand, index) => (
              <div
                key={`brand-1-${index}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  // 👇 Filtros removidos! Agora as cores ficam 100% visíveis.
                  // Mantive apenas um pequeno "pulo" (scale-110) caso o usuário passe o mouse no PC.
                  className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            ))}

            {/* Segundo set clonado para o loop infinito não quebrar */}
            {brands.map((brand, index) => (
              <div
                key={`brand-2-${index}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradientes laterais */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
}
