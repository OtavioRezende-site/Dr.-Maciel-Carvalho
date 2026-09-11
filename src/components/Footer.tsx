import React from "react";
import { Scale, MapPin, Phone, Mail, ShieldCheck, HeartHandshake, EyeOff, Lock, Landmark } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface FooterProps {
  whatsappLink: string;
}

export default function Footer({ whatsappLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black/95 border-t border-gold/15 pt-20 pb-28 md:py-20 relative select-none">
      {/* Decorative luxury absolute lights */}
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] radial-glow opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        {/* Brand/Credentials block column (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Maciel de Carvalho"
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain select-none brightness-[1.15] drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
            />
            <span className="font-display text-md font-bold tracking-[0.15em] text-white uppercase leading-tight">
              MACIEL <br className="sm:hidden" /> DE CARVALHO
            </span>
          </div>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed">
            Advocacia criminal de alta complexidade. Com sede estratégica e atuação proativa em instâncias locais, tribunais de justiça estaduais, Superior Tribunal de Justiça (STJ) e no Supremo Tribunal Federal (STF).
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold/5 border border-gold/15 rounded font-mono text-[9px] text-gold uppercase tracking-widest font-semibold">
              OAB/GO • Atuação Nacional
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold/5 border border-gold/15 rounded font-mono text-[9px] text-gold uppercase tracking-widest font-semibold">
              ⚖️ Plantão 24H
            </span>
          </div>
        </div>

        {/* Dynamic anchor links column (3 cols) */}
        <div className="md:col-span-3 space-y-5">
          <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase border-b border-gold/10 pb-2.5">
            Navegação Institucional
          </h4>
          <ul className="space-y-3 font-sans text-xs font-light text-gray-400">
            <li>
              <a
                href="#hero-section"
                onClick={(e) => handleLinkClick(e, "root")}
                className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
              >
                ➔ Início
              </a>
            </li>
            <li>
              <a
                href="#about-section"
                onClick={(e) => handleLinkClick(e, "about-section")}
                className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
              >
                ➔ Sobre o Advogado
              </a>
            </li>
            <li>
              <a
                href="#credentials-section"
                onClick={(e) => handleLinkClick(e, "credentials-section")}
                className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
              >
                ➔ Prerrogativas e Direitos
              </a>
            </li>
            <li>
              <a
                href="#services-section"
                onClick={(e) => handleLinkClick(e, "services-section")}
                className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
              >
                ➔ Áreas de Atuação
              </a>
            </li>
            <li>
              <a
                href="#triage-section"
                onClick={(e) => handleLinkClick(e, "triage-section")}
                className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
              >
                ➔ Triagem de Atendimento
              </a>
            </li>
          </ul>
        </div>

        {/* Contact credentials (5 cols) */}
        <div className="md:col-span-5 space-y-5">
          <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase border-b border-gold/10 pb-2.5">
            Gabinete de Atendimento e Sede
          </h4>
          
          <div className="space-y-4 font-sans text-xs text-gray-400 font-light">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Goiânia - GO</span>
                <span className="text-[11px] block text-gray-500 leading-normal mt-0.5">
                  Edifício Orion Business & Health Complex, Sala 2503. Atendimento e reuniões estratégicas reservadas.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Brasília - DF</span>
                <span className="text-[11px] block text-gray-500 leading-normal mt-0.5">
                  SIG, Quadra 01, Edifício Barão do Rio Branco, Nº 153. Próximo aos Tribunais Superiores (STF e STJ).
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Atendimento Urgente: (61) 8277-3797</span>
                <span className="text-[11px] block text-gray-500 leading-normal mt-0.5">
                  Linha de contato disponível para situações urgentes e agendamentos criminais rápidos.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">drmacielcarvalho@gmail.com</span>
                <span className="text-[11px] block text-gray-500 leading-normal">
                  Comunicação institucional direta e sigilosa.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate compliance legal rules and copyright block */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gold/10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-mono text-[9px] text-gold tracking-widest block uppercase font-medium">
              ⚖️ CODEX E ÉTICA • CONSELHO FEDERAL DA OAB
            </span>
            <p className="font-sans text-[10px] text-gray-500 font-light leading-relaxed">
              Este canal de comunicação obedece escrupulosamente às diretrizes éticas de transparência, publicidade informativa e dignidade da advocacia capituladas no Provimento 205/2021 e no Código de Ética e Disciplina da OAB. Todas as informações submetidas pelo formulário de contato ou canais de atendimento reservados encontram-se abrigadas sob dever inviolável de sigilo profissional com amparo do artigo 7º, II, da Lei Federal n. 8.906/1994.
            </p>
          </div>
          
          <div className="shrink-0 text-center lg:text-right font-mono text-[10px] text-gray-600">
            <span>© {currentYear} Maciel de Carvalho Law.</span>
            <span className="block text-[9px] text-gray-700 mt-1 uppercase tracking-wider">
              Desenvolvido de Acordo com a Constituição Federal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
