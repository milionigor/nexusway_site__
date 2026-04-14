import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function VideoTestimonial() {
  return (
    <section className="py-32 bg-brand-dark px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Veja o que nossos clientes estão dizendo</h2>
          <p className="text-brand-gray/60 uppercase tracking-widest text-xs font-bold">Resultados reais de empresas reais</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative aspect-video max-w-5xl mx-auto rounded-[40px] overflow-hidden border border-white/10 group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
            alt="Video Thumbnail"
            className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 rounded-full bg-brand-blue flex items-center justify-center shadow-[0_0_30px_rgba(82,113,255,0.5)]"
            >
              <Play className="w-10 h-10 text-white fill-current ml-1" />
            </motion.div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-white font-bold text-xl">"A NexusWay mudou nosso jogo."</p>
              <p className="text-white/60 text-sm">Empresa Local de Sucesso</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
