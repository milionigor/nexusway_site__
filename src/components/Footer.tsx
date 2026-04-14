import { motion } from "motion/react";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <motion.div 
                whileHover={{ rotate: 180 }}
                className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center"
              >
                <div className="w-4 h-4 border-2 border-white rotate-45" />
              </motion.div>
              <span className="text-2xl font-bold tracking-tight text-white">Nexus<span className="text-brand-blue">Way</span></span>
            </div>
            <p className="text-brand-gray/40 max-w-sm leading-relaxed">
              Ajudamos marcas a escalar através de estratégias de marketing digital baseadas em dados e design de alta performance tecnológica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-brand-gray/60">
              <li>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="mailto:nexuswayoficial@gmail.com" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Agência</h4>
            <ul className="space-y-4 text-brand-gray/60">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Resultados</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-brand-gray/20 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 NexusWay. Todos os direitos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
