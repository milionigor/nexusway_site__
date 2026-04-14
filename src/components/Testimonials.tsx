import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois que começamos com a NexusWay, começamos a receber clientes todos os dias.",
    author: "Cliente Satisfeito",
    role: "Empresário Local",
    initials: "CS"
  },
  {
    text: "Nosso Instagram mudou completamente, agora parece uma empresa de verdade.",
    author: "Proprietária de Loja",
    role: "Varejo",
    initials: "PL"
  },
  {
    text: "O investimento se pagou muito rápido, valeu a pena demais.",
    author: "Gestor Comercial",
    role: "Serviços",
    initials: "GC"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-20 text-center text-white">
          O que nossos <span className="text-brand-blue">parceiros</span> dizem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-10 relative group hover:bg-white/10 transition-all"
            >
              <Quote className="w-12 h-12 text-brand-blue/20 mb-8" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-brand-gray italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{t.author}</h4>
                  <p className="text-brand-blue font-bold uppercase tracking-widest text-[10px]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
