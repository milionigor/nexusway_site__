import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Seu produto preenche um mercado-alvo?",
    description: "A Adspace ajuda as marcas a encontrar o ajuste de mercado certo usando dados e criatividade para atingir o público ideal, garantindo que os produtos se conectem com as pessoas certas."
  },
  {
    id: "02",
    title: "Quão bem seu site opera?",
    description: "Analisamos e otimizamos a experiência do usuário, velocidade de carregamento e taxas de conversão para garantir que seu site seja uma máquina de vendas eficiente."
  },
  {
    id: "03",
    title: "Como você está adquirindo clientes?",
    description: "Desenvolvemos estratégias de aquisição multicanal focadas em ROI, utilizando tráfego pago, SEO e marketing de conteúdo para atrair leads qualificados."
  },
  {
    id: "04",
    title: "Como você está re-engajando clientes?",
    description: "Implementamos estratégias de retenção e LTV, como e-mail marketing e retargeting, para transformar compradores de uma vez em clientes fiéis."
  },
  {
    id: "05",
    title: "Como você usa dados para estratégias futuras?",
    description: "Utilizamos análises avançadas e relatórios detalhados para tomar decisões baseadas em dados que impulsionam o crescimento sustentável a longo prazo."
  }
];

export default function GrowthFramework() {
  const [activePillar, setActivePillar] = useState("01");

  return (
    <section className="py-32 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Side: Accordion */}
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-tight">
            Nosso framework de crescimento ajuda marcas a escalar metodicamente
          </h2>
          
          <div className="space-y-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`border-b border-white/10 transition-all duration-500 ${activePillar === pillar.id ? 'pb-8' : 'pb-4'}`}
              >
                <button
                  onClick={() => setActivePillar(pillar.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-bold ${activePillar === pillar.id ? 'text-brand-gold' : 'text-white/40'}`}>
                      {pillar.id}
                    </span>
                    <span className={`text-xl font-medium transition-colors ${activePillar === pillar.id ? 'text-brand-gold' : 'text-white hover:text-white/80'}`}>
                      {pillar.title}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activePillar === pillar.id ? 'bg-brand-gold text-black' : 'bg-white/5 text-white/40'}`}>
                    {activePillar === pillar.id ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activePillar === pillar.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-brand-gray text-lg leading-relaxed pl-12">
                        {pillar.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Radar Chart Visualization */}
        <div className="relative flex items-center justify-center aspect-square max-w-lg mx-auto">
          {/* Background Circles */}
          <div className="absolute inset-0 border border-white/5 rounded-full" />
          <div className="absolute inset-[15%] border border-white/5 rounded-full" />
          <div className="absolute inset-[30%] border border-white/5 rounded-full" />
          
          {/* Radar Lines */}
          <svg className="absolute inset-0 w-full h-full rotate-[-18deg]" viewBox="0 0 100 100">
            {[0, 72, 144, 216, 288].map((angle) => (
              <line
                key={angle}
                x1="50" y1="50"
                x2={50 + 45 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 45 * Math.sin((angle * Math.PI) / 180)}
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="0.5"
              />
            ))}
            
            {/* Active Highlight Line */}
            <motion.line
              animate={{
                x2: 50 + 45 * Math.cos(((parseInt(activePillar) - 1) * 72 - 90) * Math.PI / 180),
                y2: 50 + 45 * Math.sin(((parseInt(activePillar) - 1) * 72 - 90) * Math.PI / 180)
              }}
              x1="50" y1="50"
              stroke="#5271ff"
              strokeWidth="1"
            />
          </svg>

          {/* Center Glow */}
          <div className="absolute w-32 h-32 bg-brand-blue/20 blur-3xl rounded-full" />
          <div className="relative z-10 text-center">
            <span className="text-brand-blue font-bold text-xl block mb-1">Os 5 Pilares</span>
            <span className="text-white/40 text-sm uppercase tracking-widest">de Crescimento</span>
          </div>

          {/* Labels */}
          <PillarLabel angle={-90} label="Ajuste de Mercado" active={activePillar === "01"} num="01" />
          <PillarLabel angle={-18} label="Experiência do Site" active={activePillar === "02"} num="02" />
          <PillarLabel angle={54} label="Aquisição" active={activePillar === "03"} num="03" />
          <PillarLabel angle={126} label="Retenção" active={activePillar === "04"} num="04" />
          <PillarLabel angle={198} label="Análise de Dados" active={activePillar === "05"} num="05" />
        </div>
      </div>
    </section>
  );
}

function PillarLabel({ angle, label, active, num }: { angle: number; label: string; active: boolean; num: string }) {
  const x = 50 + 55 * Math.cos((angle * Math.PI) / 180);
  const y = 50 + 55 * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="absolute transition-all duration-500 flex flex-col items-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 transition-all ${active ? 'bg-brand-blue text-white scale-110 shadow-[0_0_15px_rgba(82,113,255,0.5)]' : 'bg-white/10 text-white/40'}`}>
        {num}
      </div>
      <span className={`text-[10px] uppercase tracking-widest whitespace-nowrap transition-colors ${active ? 'text-white' : 'text-white/20'}`}>
        {label}
      </span>
    </div>
  );
}
