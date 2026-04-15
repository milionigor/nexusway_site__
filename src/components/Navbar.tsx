import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <div className="flex items-center justify-between w-full max-w-7xl bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-3xl md:rounded-full">
        {/* Logo Personalizada e Responsiva */}
        <a
          href="/"
          className="flex items-center cursor-pointer transition-transform hover:scale-105 duration-300"
        >
          <img
            src="/logo.png"
            alt="NexusWay"
            // Aqui está a magia do tamanho responsivo:
            // h-8 para mobile, md:h-10 para tablets, lg:h-12 para computadores
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink label="Início" />
          <NavLink label="Sobre" />
          <NavLink label="Serviços" />
          <NavLink label="Resultados" />
          <NavLink label="Depoimentos" />
          <NavLink label="Contato" />
        </div>

        {/* Desktop CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(212, 175, 19, 0.5)",
            backgroundColor: "#e5bc15",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-brand-gold text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors"
        >
          Torne-se um cliente
        </motion.button>

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
              <MobileNavLink label="Início" onClick={() => setIsOpen(false)} />
              <MobileNavLink label="Sobre" onClick={() => setIsOpen(false)} />
              <MobileNavLink
                label="Serviços"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Resultados"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                label="Depoimentos"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink label="Contato" onClick={() => setIsOpen(false)} />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-brand-gold text-black w-full py-4 rounded-2xl font-bold text-lg mt-4"
              >
                Torne-se um cliente
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-brand-gray hover:text-brand-blue transition-all rounded-full hover:bg-white/5">
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
    </button>
  );
}

function MobileNavLink({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold text-white text-left hover:text-brand-blue transition-colors"
    >
      {label}
    </button>
  );
}
