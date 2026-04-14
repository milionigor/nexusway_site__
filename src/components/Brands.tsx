import { motion } from "motion/react";
import { Circle, Star, Box, Hexagon, Triangle, Shield, Zap } from "lucide-react";

const brands = [
  { name: "MONICA SILVA", icon: Circle },
  { name: "AUTO LUX", icon: Circle },
  { name: "GASTRO BISTRO", icon: Star },
  { name: "GRUPO ALPHA", icon: Box },
  { name: "TECH FLOW", icon: Hexagon },
  { name: "PRIME LOG", icon: Triangle },
  { name: "SECURE IT", icon: Shield },
  { name: "FAST TRACK", icon: Zap },
];

export default function Brands() {
  return (
    <section className="py-24 bg-brand-dark border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="relative z-10">
        <p className="text-center text-white font-bold uppercase tracking-[0.4em] mb-16 text-xs md:text-sm">
          Empresas que já cresceram com a NexusWay
        </p>
        
        {/* Infinite Marquee Container */}
        <div className="flex overflow-hidden select-none gap-16 group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-16 whitespace-nowrap min-w-full"
          >
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="flex items-center gap-4 group/item">
                <brand.icon className="w-5 h-5 text-brand-blue/60 group-hover/item:text-brand-blue transition-colors" />
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-white/60 group-hover/item:text-white transition-colors uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="flex items-center gap-4 group/item">
                <brand.icon className="w-5 h-5 text-brand-blue/60 group-hover/item:text-brand-blue transition-colors" />
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-white/60 group-hover/item:text-white transition-colors uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Fades for edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-20" />
    </section>
  );
}
