import { motion } from "motion/react";

export default function Results() {
  return (
    // 👇 O ID "resultados" está aqui!
    <section
      id="resultados"
      className="py-32 bg-brand-dark text-center px-4 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blue-glow opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-white"
        >
          Resultados <span className="text-brand-blue">excepcionais</span> para
          cada parceiro
        </motion.h2>

        <p className="text-brand-gray text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Dedicados a superar expectativas, entregamos consistentemente
          resultados excepcionais através de expertise técnica e soluções
          inovadoras.
        </p>

        <motion.a
          href="https://wa.me/5519989609605?text=Ol%C3%A1%2C%20equipe%20NexusWay!%20Acessei%20o%20site%20e%20quero%20aplicar%20as%20estrat%C3%A9gias%20de%20voc%C3%AAs%20para%20atrair%20mais%20clientes%20e%20escalar%20meu%20neg%C3%B3cio%20local."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(212, 175, 19, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-brand-gold text-black px-12 py-5 rounded-full font-bold text-xl transition-all"
        >
          Torne-se um cliente
        </motion.a>
      </div>
    </section>
  );
}
