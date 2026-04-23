import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <div className="flex items-center justify-between w-full max-w-7xl bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-3xl md:rounded-full">
        {/* Logo Personalizada - TAMANHO CORRIGIDO E LINK ATIVO */}
        <a
          href="#inicio"
          className="flex items-center cursor-pointer transition-transform duration-300"
        >
          <img
            src="/logo.png"
            alt="NexusWay"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain scale-110 md:scale-125 origin-left"
          />
        </a>

        {/* Desktop Navigation Links - LINKS ATIVOS PARA ROLAGEM */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink label="Início" href="#inicio" />
          <NavLink label="Sobre" href="#sobre" />
          <NavLink label="Serviços" href="#solucoes" />
          <NavLink label="Resultados" href="#resultados" />
          <NavLink label="Depoimentos" href="#depoimentos" />
          <NavLink label="Contato" href="#contato" />
        </div>

        {/* Desktop CTA Button - LINK PARA WHATSAPP */}
        <motion.a
          href="https://wa.me/5519989609605?text=Ol%C3%A1%2C%20equipe%20NexusWay!%20Acessei%20o%20site%20e%20quero%20aplicar%20as%20estrat%C3%A9gias%20de%20voc%C3%AAs%20para%20atrair%20mais%20clientes%20e%20escalar%20meu%20neg%C3%B3cio%20local."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(212, 175, 19, 0.5)",
            backgroundColor: "#e5bc15",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center justify-center bg-brand-gold text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors"
        >
          Torne-se um cliente
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-brand-dark/95 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:hidden z-40"
          >
            <div className="flex flex-col gap-6">
              {/* Mobile Links - LINKS ATIVOS PARA ROLAGEM */}
              <MobileNavLink
                label="Início"
                href="#inicio"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Sobre"
                href="#sobre"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Serviços"
                href="#solucoes"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Resultados"
                href="#resultados"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Depoimentos"
                href="#depoimentos"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Contato"
                href="#contato"
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile CTA Button - LINK PARA WHATSAPP */}
              <motion.a
                href="https://wa.me/5519989609605?text=Ol%C3%A1%2C%20equipe%20NexusWay!%20Acessei%20o%20site%20e%20quero%20aplicar%20as%20estrat%C3%A9gias%20de%20voc%C3%AAs%20para%20atrair%20mais%20clientes%20e%20escalar%20meu%20neg%C3%B3cio%20local."
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="bg-brand-gold text-black w-full py-4 rounded-2xl font-bold text-lg mt-4 text-center block"
              >
                Torne-se um cliente
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ==========================================
// COMPONENTES DE LINK REFEITOS PARA FUNCIONAR
// ==========================================

function NavLink({
  label,
  href,
  hasDropdown,
}: {
  label: string;
  href: string;
  hasDropdown?: boolean;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-brand-gray hover:text-brand-blue transition-all rounded-full hover:bg-white/5"
    >
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
    </a>
  );
}

function MobileNavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-bold text-white text-left hover:text-brand-blue transition-colors block"
    >
      {label}
    </a>
  );
}