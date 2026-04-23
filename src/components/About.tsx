import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-32 bg-brand-dark px-4 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full blue-glow opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-white">
            A maioria das empresas locais tem um grande problema: <br />
            <span className="text-brand-blue">
              elas existem… mas ninguém encontra.
            </span>
          </h2>

          <div className="space-y-6 text-brand-gray text-lg md:text-xl font-light leading-relaxed">
            <p>
              A <span className="text-white font-bold">NexusWay</span> nasceu
              para resolver isso.
            </p>
            <p>
              Nós ajudamos empresas a saírem do anonimato e se tornarem
              referências no digital, atraindo clientes todos os dias de forma
              previsível.
            </p>
            <p>
              Não trabalhamos com achismo. Trabalhamos com estratégia,
              posicionamento e resultado.
            </p>
            <p className="text-brand-gold font-medium">
              Se o seu negócio não está crescendo no online, alguém está
              ocupando o seu lugar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10"
        >
          {/* 👇 AQUI ESTÁ O SEU VÍDEO NOVO 👇 */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            {/* O arquivo precisa estar na pasta 'public' com esse exato nome! */}
            <source src="/video-sobre.mp4" type="video/mp4" />
          </video>
          {/* 👆 FIM DO VÍDEO 👆 */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
           

          </div>
        </motion.div>
      </div>
    </section>
  );
}
