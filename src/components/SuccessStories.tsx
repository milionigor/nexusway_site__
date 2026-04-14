import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const stories = [
  {
    title: "Camelbak",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
    logo: "CAMELBAK"
  },
  {
    title: "Everyday Dose",
    image: "https://images.unsplash.com/photo-1544787210-2827448b303c?auto=format&fit=crop&q=80&w=800",
    logo: "EVERYDAY DOSE"
  },
  {
    title: "Ruggable",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    logo: "Ruggable",
    active: true
  },
  {
    title: "Black Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    logo: "BLACK COFFEE"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex items-end justify-between">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white">Projetos <span className="text-brand-blue">em destaque</span></h2>
        
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-all">
            <ArrowLeft className="w-5 h-5 text-white/40" />
          </button>
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-all">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex gap-8 overflow-x-auto px-4 md:px-[calc((100vw-1280px)/2)] hide-scrollbar pb-10">
        {stories.map((story, index) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[320px] md:min-w-[500px] group cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 border border-white/5 group-hover:border-brand-blue/30 transition-all duration-500">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-7xl font-bold tracking-tighter text-white/90 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-brand-blue">
                  {story.logo}
                </span>
              </div>
              
              <div className={`absolute bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${story.active ? 'bg-brand-gold text-black gold-glow' : 'bg-black/60 text-white/60 backdrop-blur-md border border-white/10 group-hover:bg-brand-blue group-hover:text-white'}`}>
                <ArrowUpRight className="w-7 h-7" />
              </div>
            </div>
            
            <div className="flex items-center justify-between px-2">
              <h3 className={`text-2xl font-bold transition-colors duration-500 ${story.active ? 'text-brand-gold' : 'text-brand-gray group-hover:text-white'}`}>
                {story.title}
              </h3>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver Estudo</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
