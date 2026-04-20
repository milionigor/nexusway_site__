import { motion } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  Instagram,
  Target,
  Layout,
  PenTool,
} from "lucide-react";

const services = [
  {
    title: "Google Meu Negócio",
    description:
      "Se sua empresa não aparece no Google, você simplesmente não existe. Nós colocamos seu negócio no topo, com um perfil otimizado e profissional.",
    icon: MapPin,
    benefit: "Mais ligações e mensagens",
  },
  {
    title: "Instagram Profissional",
    description:
      "Seu Instagram precisa vender. Transformamos seu perfil em uma vitrine estratégica que atrai, engaja e converte seguidores em clientes.",
    icon: Instagram,
    benefit: "Mais autoridade e desejo",
  },
  {
    title: "Tráfego Pago",
    description:
      "Criamos campanhas estratégicas (Meta & Google Ads) que colocam sua empresa na frente das pessoas certas, todos os dias.",
    icon: Target,
    benefit: "Clientes chegando todo dia",
  },
  {
    title: "Sites & Landing Pages",
    description:
      "Criamos páginas modernas, rápidas e pensadas para conversão — feitas para transformar visitantes em oportunidades reais.",
    icon: Layout,
    benefit: "Conversão em escala",
  },
  {
    title: "Conteúdo & Criativos",
    description:
      "Design não é só estética — é percepção de valor. Criamos conteúdos que geram autoridade e fazem sua empresa parecer muito maior.",
    icon: PenTool,
    benefit: "Imagem forte e profissional",
  },
];

export default function Services() {
  return (
    // 👇 ADICIONEI O id="solucoes" AQUI 👇
    <section id="solucoes" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="max-w-7xl mx-auto bg-brand-blue rounded-[40px] p-12 md:p-20 relative overflow-hidden border border-white/10">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              O que a NexusWay faz
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white">
              Serviços
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/40 transition-all">
              <ArrowUpRight className="w-7 h-7 text-white/40 rotate-[-90deg]" />
            </button>
            <button className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center hover:scale-110 transition-all gold-glow">
              <ArrowUpRight className="w-7 h-7 text-black" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col h-full group hover:bg-black/60 transition-all duration-500"
            >
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto relative">
                  <div className="absolute inset-0 border border-brand-blue/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-gold transition-colors duration-500" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-gray/60 text-xs mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  {service.benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
