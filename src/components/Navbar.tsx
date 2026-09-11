import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Phone, Menu, X, ChevronDown, ShieldAlert, Award } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface NavbarProps {
  whatsappLink: string;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ whatsappLink, currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    setShowDropdown(false);
    onNavigate(path);
  };

  const areasOfActuation = [
    { name: "Defesa Criminal", id: "criminal" },
    { name: "Direito Empresarial", id: "empresarial" },
    { name: "Direito Tributário", id: "tributario" },
    { name: "Direito Cível", id: "civel" },
    { name: "Direito Bancário", id: "bancario" },
    { name: "Família e Sucessões", id: "familia" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 border-b border-gold/15 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-black/40 border-b border-gold/5 backdrop-blur-sm"
      }`}
    >
      {/* 24H Emergency Alert Top Bar directly inside the fixed header */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gold/10 border-b border-gold/20 py-2.5 px-4 text-center overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[9px] sm:text-[11px] font-mono tracking-wider text-gold-light">
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-bold uppercase text-gold">Atendimento de Urgência:</span>
              <span className="hidden xs:inline">Seu caso analisado sob estrito sigilo constitucional</span>
              <span className="xs:hidden">Atendimento Sob Agendamento</span>
              <span className="opacity-40 hidden sm:inline">|</span>
              <span className="hidden sm:inline font-semibold">Consulte o Dr. Maciel</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ${isScrolled ? "py-3" : "py-4"}`}>
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="flex items-center gap-2.5 group"
        >
          <img
            src="/logo.png"
            alt="Logo Maciel de Carvalho"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 w-auto object-contain brightness-[1.15] drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-left">
            <span className="block font-display text-xs font-bold tracking-[0.18em] text-white uppercase leading-none">
              MACIEL
            </span>
            <span className="block font-sans text-[8px] text-gold tracking-[0.25em] uppercase font-semibold mt-1">
              DE CARVALHO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Início
          </a>

          <a
            href="/sobre"
            onClick={(e) => handleLinkClick(e, "/sobre")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/sobre") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Sobre
          </a>

          <a
            href="/areas-de-atuacao"
            onClick={(e) => handleLinkClick(e, "/areas-de-atuacao")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/areas-de-atuacao") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Áreas de Atuação
          </a>

          <a
            href="/prerrogativas"
            onClick={(e) => handleLinkClick(e, "/prerrogativas")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/prerrogativas") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Prerrogativas
          </a>

          <a
            href="/imprensa"
            onClick={(e) => handleLinkClick(e, "/imprensa")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/imprensa") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Imprensa
          </a>

          <a
            href="/enderecos"
            onClick={(e) => handleLinkClick(e, "/enderecos")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/enderecos") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Endereços
          </a>

          <a
            href="/agendamento"
            onClick={(e) => handleLinkClick(e, "/agendamento")}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
              isActive("/agendamento") ? "text-gold font-semibold" : "text-gray-300 hover:text-gold"
            }`}
          >
            Agendamento
          </a>
        </nav>

        {/* Urgent Contact Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`${whatsappLink}&text=Olá Dr. Maciel de Carvalho, necessito de atendimento com urgência ou consultoria jurídica especializada.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gold/30 hover:border-gold bg-gold/5 text-gold hover:text-black hover:bg-gold transition-all duration-300 px-4 py-2 rounded text-[11px] font-mono tracking-widest uppercase font-semibold shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Consultar</span>
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-gold transition-colors duration-300 focus:outline-none p-1"
          aria-label="Alternar Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-black/95 border-b border-gold/15 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, "/")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Início
              </a>

              <a
                href="/sobre"
                onClick={(e) => handleLinkClick(e, "/sobre")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/sobre") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Sobre
              </a>

              <a
                href="/areas-de-atuacao"
                onClick={(e) => handleLinkClick(e, "/areas-de-atuacao")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/areas-de-atuacao") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Áreas de Atuação
              </a>

              <a
                href="/prerrogativas"
                onClick={(e) => handleLinkClick(e, "/prerrogativas")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/prerrogativas") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Prerrogativas
              </a>

              <a
                href="/imprensa"
                onClick={(e) => handleLinkClick(e, "/imprensa")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/imprensa") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Imprensa
              </a>

              <a
                href="/enderecos"
                onClick={(e) => handleLinkClick(e, "/enderecos")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/enderecos") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Endereços
              </a>

              <a
                href="/agendamento"
                onClick={(e) => handleLinkClick(e, "/agendamento")}
                className={`font-sans text-xs tracking-widest uppercase font-semibold ${
                  isActive("/agendamento") ? "text-gold" : "text-gray-300 hover:text-gold"
                }`}
              >
                Agendamento
              </a>

              <a
                href={`${whatsappLink}&text=Olá Dr. Maciel de Carvalho, necessito de atendimento com urgência ou consultoria jurídica especializada.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gold/40 bg-gold/10 text-gold py-3 px-4 rounded text-xs font-semibold uppercase tracking-widest font-sans"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Atendimento de Urgência</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
