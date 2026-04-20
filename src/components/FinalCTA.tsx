import { motion } from "motion/react";

export default function FinalCTA() {
  // 💡 Seu número oficial do WhatsApp já configurado!
  const WHATSAPP_LINK =
    "https://wa.me/5519989609605?text=Ol%C3%A1%2C%20equipe%20NexusWay!%20Acessei%20o%20site%20e%20quero%20aplicar%20as%20estrat%C3%A9gias%20de%20voc%C3%AAs%20para%20atrair%20mais%20clientes%20e%20escalar%20meu%20neg%C3%B3cio%20local.";

  return (
    // 👇 Adicionado id="contato" para a rolagem do menu parar exatamente aqui!
    <section
      id="contato"
      className="py-32 bg-brand-dark px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tight"
        >
          Quantos clientes você já{" "}
          <span className="text-brand-gold">perdeu hoje</span> por não estar bem
          posicionado?
        </motion.h2>

        <p className="text-brand-gray text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Enquanto você decide, seus concorrentes estão investindo e crescendo.
          A pergunta é simples:{" "}
          <span className="text-white font-bold">
            você vai continuar invisível ou vai começar a crescer agora?
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* 👇 Transformado em Link (a) para abrir o WhatsApp 👇 */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(212, 175, 19, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gold text-black px-10 py-5 rounded-full font-bold text-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2 relative overflow-hidden group"
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

          {/* 👇 Transformado em Link (a) para abrir o WhatsApp 👇 */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2"
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
    </section>
  );
}
