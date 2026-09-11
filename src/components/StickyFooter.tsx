import { useState, useEffect } from "react";
import { Clock, ShieldAlert } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface StickyFooterProps {
  whatsappLink: string;
}

export default function StickyFooter({ whatsappLink }: StickyFooterProps) {
  const [timeStr, setTimeStr] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Calculate Brasília Time (UTC-3)
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const brasiliaOffset = -3;
      const bTime = new Date(utcTime + (3600000 * brasiliaOffset));

      const hrs = String(bTime.getHours()).padStart(2, "0");
      const mins = String(bTime.getMinutes()).padStart(2, "0");
      const secs = String(bTime.getSeconds()).padStart(2, "0");

      setTimeStr(`${hrs}:${mins}:${secs}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      // Show sticky footer after scrolling past 300px of the Hero section
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run to set correct visibility status

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-black/90 border-t border-gold/30 backdrop-blur-md py-4 px-4 m-0 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-5px_30px_rgba(0,0,0,0.8)] no-scraping transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"}`}>
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 self-stretch">
        
        {/* Real-time Brasília, Brazil clock */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-black animate-pulse" />
            <div className="p-2 rounded bg-gold/5 border border-gold/15 text-gold-light">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          
          <div className="text-left">
            <span className="block font-mono text-[10px] md:text-xs text-gold-light tracking-widest font-semibold uppercase">
              📅 ATENDIMENTO SOB AGENDAMENTO RÁPIDO
            </span>
            <span className="block font-sans text-xs text-gray-400 font-light mt-0.5">
              Horário de Brasília: <span className="font-mono text-white bg-black/50 px-1.5 py-0.5 rounded border border-gold/10 ml-1 font-bold">{timeStr || "Carregando..."}</span>
            </span>
          </div>
        </div>

        {/* Informative advice */}
        <div className="hidden lg:flex items-center gap-2 max-w-sm">
          <ShieldAlert className="w-5 h-5 text-gold shrink-0" />
          <p className="font-sans text-[10px] text-gray-400 font-light leading-snug">
            Para casos de flagrante ou intimações de urgência, solicite atendimento especializado com agendamento rápido.
          </p>
        </div>

        {/* Emergency WhatsApp Contact CTA */}
        <a
          href={`${whatsappLink}&text=Olá Dr. Maciel de Carvalho, necessito de atendimento com urgência de caráter penal sob agendamento rápido.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold uppercase tracking-wider px-6 py-2.5 rounded shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 w-full sm:w-auto"
          id="sticky-foot-whatsapp-cta"
        >
          {/* Internal pulsing visual anchor */}
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>

          <WhatsAppIcon className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-sans text-xs tracking-wider font-bold">
            Atendimento Criminal Urgente
          </span>
        </a>

      </div>
    </div>
  );
}
