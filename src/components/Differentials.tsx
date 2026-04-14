import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Estratégias personalizadas para cada negócio",
  "Foco total em resultado (não só estética)",
  "Experiência com empresas locais",
  "Atendimento próximo e suporte real",
  "Atualização constante com o mercado digital"
];

export default function Differentials() {
  return (
    <section className="py-32 bg-brand-dark px-4 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-blue rounded-[40px] p-12 md:p-24 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Diferenciais</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Por que escolher a <span className="text-brand-gold">NexusWay?</span>
              </h2>
              <p className="text-white/70 text-xl font-light mb-12">
                Não somos só uma agência. Somos parceiros do seu crescimento.
              </p>
            </div>
            
            <div className="space-y-6">
              {differentials.map((diff, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 group hover:border-brand-gold/50 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                  <span className="text-white font-medium">{diff}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
