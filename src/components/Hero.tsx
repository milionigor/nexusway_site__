import { motion } from "motion/react";

export default function Hero() {
  // 💡 Substitua abaixo pelo número de WhatsApp real da agência (com código do país e DDD)
  const WHATSAPP_LINK = "https://wa.me/5511999999999";

  return (
    // 💡 ID "inicio" adicionado aqui para o menu funcionar
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden tech-grid pt-32 pb-20"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Tech Network"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 blue-glow opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-8"
        >
          Agência de Performance Digital
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1] text-white"
        >
          Você está <span className="text-brand-gold">perdendo dinheiro</span>{" "}
          todos os dias por estar invisível no digital.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-brand-gray mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Soluções digitais que fazem seu negócio{" "}
          <span className="text-white font-bold">crescer de verdade</span>. A
          NexusWay transforma empresas locais em máquinas de vendas atraindo
          clientes e aumentando o faturamento.
        </motion.p>

        {/* BOTOES ATUALIZADOS PARA LINKS (TAG 'A') */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(212, 175, 19, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gold text-black px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                👉
              </motion.span>
              Quero mais clientes agora
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
          </motion.a>

          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg transition-all flex items-center gap-2 group"
          >
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              👉
            </motion.span>
            Falar no WhatsApp
          </motion.a>
        </div>
      </div>

      {/* Animated Scanline Effect */}
      <motion.div
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-brand-blue/20 z-20 pointer-events-none"
      />

      {/* Bottom Icon */}
      <div className="absolute bottom-10 left-10 z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border border-brand-blue/30 flex items-center justify-center"
        >
          <div className="w-6 h-6 border border-brand-blue rounded-sm rotate-45" />
        </motion.div>
      </div>
    </section>
  );
}
