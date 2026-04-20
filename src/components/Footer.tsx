import { motion } from "motion/react";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="py-20 bg-brand-dark border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Logo Oficial Atualizada & Info */}
          <div className="col-span-2">
            <a
              href="#inicio"
              className="flex items-center gap-2 mb-8 group cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="NexusWay"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-brand-gray/40 max-w-sm leading-relaxed">
              Ajudamos marcas a escalar através de estratégias de marketing
              digital baseadas em dados e design de alta performance
              tecnológica.
            </p>
          </div>

          {/* Links de Contato */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contato
            </h4>
            <ul className="space-y-4 text-brand-gray/60">
              <li>
                <a
                  href="https://wa.me/5519989609605?text=Ol%C3%A1%2C%20equipe%20NexusWay!%20Acessei%20o%20site%20e%20quero%20aplicar%20as%20estrat%C3%A9gias%20de%20voc%C3%AAs%20para%20atrair%20mais%20clientes%20e%20escalar%20meu%20neg%C3%B3cio%20local."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:nexuswayoficial@gmail.com"
                  className="hover:text-brand-blue transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
            </ul>
          </div>

          {/* Links de Navegação (Agora funcionais no rodapé também) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Agência
            </h4>
            <ul className="space-y-4 text-brand-gray/60">
              <li>
                <a
                  href="#sobre"
                  className="hover:text-brand-blue transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="hover:text-brand-blue transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  className="hover:text-brand-blue transition-colors"
                >
                  Resultados
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-brand-gray/20 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 NexusWay. Todos os direitos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
