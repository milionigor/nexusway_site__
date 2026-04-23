import { motion } from "motion/react";

export default function VideoTestimonial() {
  return (
    <section className="py-20 md:py-32 bg-brand-dark px-4 relative overflow-hidden">
      {/* Luz de fundo suave e moderna */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blue-glow opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Veja o que nossos clientes estão dizendo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-gray/60 text-xs md:text-sm font-bold uppercase tracking-[0.3em]"
          >
            Resultados Reais de Empresas Reais
          </motion.p>
        </div>

        {/* Grade: 1 coluna no celular (embaixo do outro), 2 no computador (lado a lado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          {/* VÍDEO 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-[#0a0a0a]"
          >
            {/* Tag de vídeo real para você colocar o seu */}
            <video controls playsInline className="w-full h-full object-cover">
              {/* Lembre-se: O arquivo 'depoimento1.mp4' deve estar na pasta 'public' */}
              <source src="/depoimento1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>

            {/* Legenda de Vidro flutuante */}
            <div className="absolute bottom-16 left-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 pointer-events-none">
              <p className="text-white font-bold text-sm md:text-base leading-tight">
                "O faturamento dobrou no primeiro mês!"
              </p>
              <p className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mt-2">
              </p>
            </div>
          </motion.div>

          {/* VÍDEO 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-[#0a0a0a]"
          >
            <video controls playsInline className="w-full h-full object-cover">
              {/* Lembre-se: O arquivo 'depoimento2.mp4' deve estar na pasta 'public' */}
              <source src="/depoimento2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>

            {/* Legenda de Vidro flutuante */}
            <div className="absolute bottom-16 left-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 pointer-events-none">
              <p className="text-white font-bold text-sm md:text-base leading-tight">
                "Trabalho rápido, profissional e que traz resultado real."
              </p>
              <p className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mt-2">
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
