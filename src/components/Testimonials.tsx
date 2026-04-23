import { motion } from "motion/react";
import { Quote } from "lucide-react";

// Aqui estão os seus depoimentos reais!
const testimonials = [
  {
    text: '"Oi, quero agradecer de coração, Igor, por todo o trabalho e dedicação sua em arrumar a minha página no Google, montar e cuidar das minhas redes sociais. O seu profissionalismo, sua paciência e a criatividade fizeram toda a diferença, desde o visual até as estratégias que ajudaram muito aqui nas minhas vendas. Muito obrigada."',
    author: "CetraNet",
    role: "TECNOLOGIA E SERVIÇOS",
    initials: "CN",
  },
  {
    text: '"Quero agradecer ao Igor, da Nexusway, pelo excelente trabalho na criação do perfil da Casa da Make no Google! Foi super atencioso, profissional e rápido em resolver tudo. Agora nossa loja está muito mais visível e bem apresentada. Recomendo demais o serviço! 💖✨"',
    author: "Casa da Make",
    role: "VAREJO E BELEZA",
    initials: "CM",
  },
  {
    text: '"O trabalho da NexusWay fez muita diferença aqui pra gente. Tínhamos várias dúvidas e, com a orientação deles, passamos a enxergar o digital de uma forma totalmente diferente, o que impactou diretamente no nosso dia a dia e nos resultados. Desde a organização das redes até as estratégias aplicadas, tudo foi feito com muito profissionalismo, paciência e clareza. Ainda estou devendo um vídeo de agradecimento, porque realmente merece. Ficamos tão satisfeitos que já estamos nos organizando para fechar um contrato mensal, para continuar com a divulgação da empresa. Recomendo com confiança, é um trabalho que realmente entrega resultado."',
    author: "Kiki Festas",
    role: "EVENTOS E DECORAÇÃO",
    initials: "KF",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-brand-dark px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              // Flex-col e h-full garantem que os cartões fiquem do mesmo tamanho
              className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col h-full hover:border-brand-blue/30 transition-colors duration-500"
            >
              {/* Ícone de Aspas Duplas */}
              <Quote className="w-12 h-12 text-brand-blue/30 mb-6 shrink-0 fill-brand-blue/20" />

              {/* Texto do Depoimento */}
              <p className="text-brand-gray/90 text-lg md:text-xl font-light italic leading-relaxed mb-10 flex-grow">
                {testimonial.text}
              </p>

              {/* Rodapé do Cartão (Autor) */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold tracking-wider shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
