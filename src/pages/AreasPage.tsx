import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageHeader from "../components/PageHeader";
import { LEGAL_SERVICES, OTHER_SERVICES, LegalService } from "../types";
import { ShieldAlert, Gavel, Scale, FileCheck, Users, Clock, Search, ChevronRight, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";

interface AreasPageProps {
  onNavigate: (path: string) => void;
  whatsappLink: string;
  subRoute?: string; // e.g. "criminal", "empresarial"
}

export default function AreasPage({ onNavigate, whatsappLink, subRoute }: AreasPageProps) {
  const [selectedService, setSelectedService] = useState<LegalService | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Combine both arrays to offer absolute parity of services
  const allServices: LegalService[] = [
    ...OTHER_SERVICES,
    ...LEGAL_SERVICES
  ];

  // Map icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5" />;
      case "Gavel": return <Gavel className="w-5 h-5" />;
      case "Scale": return <Scale className="w-5 h-5" />;
      case "FileCheck": return <FileCheck className="w-5 h-5" />;
      case "Users": return <Users className="w-5 h-5" />;
      case "Clock": return <Clock className="w-5 h-5" />;
      default: return <Scale className="w-5 h-5" />;
    }
  };

  // Auto-select or scroll to subRoute if matched
  useEffect(() => {
    if (subRoute) {
      const match = allServices.find(s => 
        s.id.toLowerCase().includes(subRoute.toLowerCase()) || 
        s.title.toLowerCase().includes(subRoute.toLowerCase())
      );
      if (match) {
        setSelectedService(match);
        // Scroll to details or card
        const cardElement = document.getElementById(match.id);
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [subRoute]);

  // Filter services based on search query
  const filteredServices = allServices.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Page Header */}
      <PageHeader
        title="Áreas de Atuação"
        subtitle="Patrocínio e assessoria jurídica especializada estruturada com base na mais alta técnica e rigor jurisprudencial."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: "Áreas de Atuação" }]}
      />

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        
        {/* Search bar & visual details */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-gold/10 pb-8">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-2">
              Assessoria Jurídica Multidisciplinar
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light">
              Todas as disciplinas jurídicas conduzidas sob o mesmo padrão de excelência, sigilo e rigor.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar especialidade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-obsidian-card border border-gold/20 focus:border-gold outline-none text-white text-xs px-4 py-3 pl-10 rounded font-sans tracking-wide transition-colors duration-300"
            />
            <Search className="w-4 h-4 text-gold/60 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Unified Bento Grid of Services (Perfect parity) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isHighlighted = selectedService?.id === service.id;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                layout
                className={`bg-obsidian-card rounded border transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer ${
                  isHighlighted 
                    ? "border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] ring-1 ring-gold/40" 
                    : "border-gold/15 hover:border-gold/40 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-gold/5 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">
                      ESPECIALIDADE
                    </span>
                  </div>

                  <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 uppercase mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-gold-light tracking-wide font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="font-sans text-xs text-gray-400 font-light leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gold/10 pt-4 mt-auto">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-gold font-semibold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                    Detalhes Técnicos <ChevronRight className="w-3 h-3" />
                  </span>
                  <span className="font-mono text-[9px] text-gray-600 uppercase">
                    OAB Ativo
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* If search query has no results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-obsidian-card/40 border border-gold/5 rounded p-8">
            <Scale className="w-12 h-12 text-gold/30 mx-auto mb-4" />
            <p className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Nenhuma especialidade localizada
            </p>
            <p className="font-sans text-xs text-gray-500 mt-1">
              Refine os termos de busca ou entre em contato direto para analisar seu caso.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-xs font-mono text-gold border border-gold/20 py-1.5 px-4 rounded hover:bg-gold/5"
            >
              Limpar Filtro
            </button>
          </div>
        )}

        {/* Expandable Overlay Panel / Drawer for detailed specifications */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-obsidian-card border border-gold/30 rounded-lg p-6 md:p-8 max-w-2xl w-full shadow-[0_0_50px_rgba(212,175,55,0.25)] relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 border border-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded bg-gold/10 border border-gold/30 text-gold">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase">
                      Especificação de Atuação
                    </span>
                    <h3 className="font-display text-lg sm:text-2xl font-bold text-white uppercase mt-0.5">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="border-t border-b border-gold/10 py-6 mb-6">
                  <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-3">
                    Escopo de Atuação e Diretrizes:
                  </h4>
                  <p className="font-sans text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {selectedService.description}
                  </p>

                  <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-3">
                    Ações de Excelência:
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedService.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-8">
                  <div className="text-left">
                    <p className="font-display text-[10px] tracking-[0.2em] font-bold text-gold uppercase">
                      Dr. Maciel de Carvalho
                    </p>
                    <p className="font-sans text-[9px] text-gray-500 uppercase mt-0.5">
                      Atendimento Sob Sigilo Constitucional
                    </p>
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onNavigate("/agendamento");
                      }}
                      className="flex-1 sm:flex-none text-center bg-obsidian border border-gold/20 hover:border-gold text-white text-xs font-mono tracking-widest uppercase py-2.5 px-5 rounded transition-all cursor-pointer"
                    >
                      Agendar Consulta
                    </button>
                    <a
                      href={`${whatsappLink}&text=Olá Dr. Maciel de Carvalho, necessito de consultoria e acompanhamento na área de ${selectedService.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black text-xs font-mono tracking-widest uppercase py-2.5 px-5 rounded font-bold transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  );
}
