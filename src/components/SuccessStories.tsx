import { motion } from "motion/react";

export default function SuccessStories() {
  return (
    <section
      id="depoimentos"
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
          Histórias de <span className="text-brand-blue">Sucesso</span>
        </motion.h2>

        <p className="text-brand-gray text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Veja como estamos transformando a realidade de empresas locais com
          estratégias que realmente funcionam.
        </p>

        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(212, 175, 19, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-brand-gold text-black px-12 py-5 rounded-full font-bold text-xl transition-all"
        >
          Seja o próximo case
        </motion.a>
      </div>
    </section>
  );
}
