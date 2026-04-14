import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import type { ReactNode } from "react";

export default function Transformation() {
  return (
    <section className="py-32 bg-brand-dark px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            A transformação que seu <span className="text-brand-blue">negócio precisa</span>
          </h2>
          <p className="text-brand-gray text-xl max-w-2xl mx-auto font-light">
            A diferença entre crescer ou ficar para trás está no posicionamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <X className="w-32 h-32 text-red-500" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-10">Antes da NexusWay:</h3>
            <ul className="space-y-6">
              <TransformationItem icon={<X className="text-red-500" />} text="Empresa invisível no digital" />
              <TransformationItem icon={<X className="text-red-500" />} text="Poucos clientes e vendas instáveis" />
              <TransformationItem icon={<X className="text-red-500" />} text="Falta de posicionamento e autoridade" />
              <TransformationItem icon={<X className="text-red-500" />} text="Dependência de indicação" />
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-brand-blue/10 border border-brand-blue/30 rounded-[40px] p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Check className="w-32 h-32 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-10">Depois da NexusWay:</h3>
            <ul className="space-y-6">
              <TransformationItem icon={<Check className="text-brand-blue" />} text="Presença forte no Google e redes sociais" />
              <TransformationItem icon={<Check className="text-brand-blue" />} text="Clientes entrando em contato todos os dias" />
              <TransformationItem icon={<Check className="text-brand-blue" />} text="Marca valorizada, profissional e desejada" />
              <TransformationItem icon={<Check className="text-brand-blue" />} text="Crescimento previsível e escalável" />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TransformationItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-4 text-brand-gray text-lg">
      <div className="w-6 h-6 flex-shrink-0">{icon}</div>
      <span>{text}</span>
    </li>
  );
}
