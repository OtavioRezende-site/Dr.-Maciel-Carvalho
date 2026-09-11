import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LEGAL_SERVICES, OTHER_SERVICES, LegalService } from "../types";
import { Clock, Gavel, Scale, ShieldAlert, X, CheckSquare, ShieldCheck, PhoneCall, Users, FileCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { asset } from "../utils/assets";

interface ServicesSectionProps {
  whatsappLink: string;
}

export default function ServicesSection({ whatsappLink }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<LegalService | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-6 h-6 text-gold" />;
      case "Gavel":
        return <Gavel className="w-6 h-6 text-gold" />;
      case "Scale":
        return <Scale className="w-6 h-6 text-gold" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-gold" />;
      case "Users":
        return <Users className="w-6 h-6 text-gold" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6 text-gold" />;
      default:
        return <Gavel className="w-6 h-6 text-gold" />;
    }
  };

  // Lock behind-the-scenes scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section id="services-section" className="py-24 md:py-32 bg-black/40 border-t border-b border-gold/10 relative">
      <div className="absolute top-0 right-10 w-[300px] h-[300px] radial-glow opacity-60 pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-4 inline-block">
            ÁREAS DE DESTAQUE TÉCNICO
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Nossos Pilares de <span className="gold-gradient-text">Atendimento Criminal</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed">
            Intervenções estratégicas desenhadas de maneira cirúrgica para garantir sua liberdade e defesa constitucional. 
            Selecione uma especialidade abaixo para acessar os detalhes processuais do atendimento.
          </p>
        </div>

        {/* Dynamic & Premium grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {LEGAL_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="text-left bg-obsidian-light/50 border border-gold/10 hover:border-gold/45 rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_4px_25px_rgba(212,175,55,0.08)] backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-md bg-gold/5 border border-gold/15 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="inline-block py-1 px-2.5 text-[9px] md:text-xs font-mono rounded tracking-widest bg-gold/10 text-gold-light group-hover:bg-gold group-hover:text-black group-hover:font-semibold transition-all duration-300 uppercase">
                    DETALHES
                  </span>
                </div>
                
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 tracking-wide group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-sans text-xs text-gold/80 italic mb-4 font-medium">
                  {service.tagline}
                </p>

                <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-gray-500 tracking-wider">
                  CLIQUE PARA VER LINHAS DE DEFESA
                </span>
                <span className="text-gold text-xs font-bold group-hover:translate-x-1 transition-transform duration-300">
                  ➔
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multidisciplinary Areas Subsection */}
        <div className="mt-28 border-t border-gold/15 pt-20 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-4 inline-block font-semibold">
              ATUAÇÃO MULTIDISCIPLINAR
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
              Outras Áreas de <span className="gold-gradient-text">Excelência Jurídica</span>
            </h3>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
            <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed">
              Além do foco de destaque em Direito Penal e Processual Penal, prestamos assessoria altamente técnica e preventiva para resguardar os interesses corporativos, fiscais, civis e familiares de nossos constituintes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="text-left bg-obsidian-light/35 border border-gold/10 hover:border-gold/45 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_4px_25px_rgba(212,175,55,0.08)] backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-md bg-gold/5 border border-gold/15 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="inline-block py-0.5 px-2 text-[9px] font-mono rounded tracking-widest bg-gold/10 text-gold-light group-hover:bg-gold group-hover:text-black group-hover:font-semibold transition-all duration-300 uppercase">
                      DETALHES
                    </span>
                  </div>
                  
                  <h4 className="font-display text-base md:text-lg font-bold text-white mb-1.5 tracking-wide group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="font-sans text-[11px] text-gold/80 italic mb-3 font-medium">
                    {service.tagline}
                  </p>

                  <p className="font-sans text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gold/5 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">
                    CONSULTAR DIRETRIZES
                  </span>
                  <span className="text-gold text-xs font-bold group-hover:translate-x-1 transition-transform duration-300">
                    ➔
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personalized Floating/Modal detail layout for criminal specialties */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[100] p-4 bg-black/90 backdrop-blur-xl">
              {/* Backplate Click Handler to close */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-auto" 
                onClick={() => setSelectedService(null)} 
              />

              {/* Central Premium Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-obsidian border border-gold/30 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(212,175,55,0.25)] relative pointer-events-auto z-10 flex flex-col no-scraping"
              >
                {/* Fixed popup Header styling inside modal frame */}
                <div className="p-6 md:p-8 border-b border-gold/15 flex items-start justify-between bg-black/40 pr-12 relative">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gold/10 rounded border border-gold/30">
                      {getIcon(selectedService.iconName)}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                        Pilar de Especialidade Técnica
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-wide mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Absolute X close indicator button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 p-1.5 rounded-full border border-gold/20 text-gray-400 hover:text-gold hover:border-gold transition-colors duration-300 pointer-events-auto"
                    aria-label="Minimizar detalhes"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content Section: Scrolling area inside modal */}
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-gold/90 uppercase tracking-widest mb-2 font-mono">
                      Diretriz e Entendimento do Dr. Maciel:
                    </h4>
                    <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Custom Strategy Bullets */}
                  <div className="bg-black/40 border border-gold/10 p-5 rounded-md space-y-4">
                    <h5 className="font-sans text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                      Protocolos Ativos de Defesa:
                    </h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckSquare className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="font-sans text-xs md:text-sm text-gray-400 leading-normal font-light">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Personalized assurance banner featuring our lawyer's actual uploaded avatar */}
                  <div className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-gold/5 border border-gold/15 rounded-md">
                    {/* Circle avatar from law image file */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-gold/40 shrink-0 self-center shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                      <img
                        src={asset("dr_maciel_portrait.jpg")}
                        alt="Avatar Dr. Maciel de Carvalho"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top scale-105"
                      />
                    </div>

                    <div className="text-center sm:text-left flex-1">
                      <span className="font-display text-xs text-white font-bold tracking-widest uppercase block">
                        Garantia de Atuação Direta e Foco
                      </span>
                      <p className="font-sans text-xs text-gray-400 font-light leading-relaxed mt-1">
                        Sua causa não será repassada para advogados em início de carreira. O preâmbulo estratégico é inteiramente traçado, executado e sustentado pelo <strong>Dr. Maciel de Carvalho</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer buttons of details layout */}
                <div className="p-6 bg-black/50 border-t border-gold/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="font-mono text-[10px] md:text-xs text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    Atendimento de Urgência sob Agendamento
                  </span>

                  <div className="flex gap-3 w-full sm:w-auto">
                    {/* Return button */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 sm:flex-none border border-gray-700 hover:border-gold/30 text-gray-400 hover:text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer"
                    >
                      Fechar
                    </button>

                    {/* WhatsApp forwarder button */}
                    <a
                      href={`${whatsappLink}&text=${encodeURIComponent(
                        `Olá Dr. Maciel de Carvalho, estive lendo os detalhes de sua atuação especializada em "${selectedService.title}" e necessito de uma consultoria direcionada ao meu caso.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-black font-bold uppercase tracking-wider px-6 py-2.5 rounded text-xs shadow-md transition-transform duration-300 hover:scale-105"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Falar com o Advogado</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Interactive Advisory banner */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-obsidian-light via-gold/5 to-obsidian-light border border-gold/15 p-8 rounded-lg max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display text-lg font-bold text-white mb-2">
              Dúvidas sobre mandados ou procedimentos sob sigilo?
            </h4>
            <p className="font-sans text-xs md:text-sm text-gray-400 leading-normal font-light">
              Nossa banca criminalista atua com extrema discrição e rigorosos padrões éticos de sigilo profissional para análise de procedimentos preventivos contra restrições de liberdade ou intimações em andamento.
            </p>
          </div>
          <a
            href={`${whatsappLink}&text=Olá Dr. Maciel de Carvalho, preciso de uma consulta preventiva sobre inquérito ou mandado em andamento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold uppercase tracking-wider px-6 py-3.5 rounded text-xs hover:scale-105 transition-all duration-300 w-full md:w-auto shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Consultar Banca</span>
          </a>
        </div>
      </div>
    </section>
  );
}
