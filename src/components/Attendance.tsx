import { motion } from "motion/react";
import { Globe2 } from "lucide-react";

export default function Attendance() {
  return (
    <section className="py-32 bg-brand-dark px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blue-glow opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-12 border border-brand-blue/30"
        >
          <Globe2 className="w-12 h-12 text-brand-blue animate-pulse" />
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Atendimento Global</h2>
        <p className="text-brand-gray text-xl md:text-2xl font-light leading-relaxed mb-12">
          Atendemos empresas em todo o <span className="text-white font-bold">Brasil</span> e também no <span className="text-white font-bold">mundo</span>.
        </p>
        <p className="text-brand-gray/60 text-lg">
          Não importa onde você esteja, se você quer crescer, podemos te ajudar.
        </p>
      </div>
    </section>
  );
}
