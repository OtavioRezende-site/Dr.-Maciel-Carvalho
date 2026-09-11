import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("dr_maciel_cookies_consent");
    if (!consent) {
      // Show banner with a slight delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dr_maciel_cookies_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("dr_maciel_cookies_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-24 right-4 max-w-sm w-[92%] sm:w-full bg-obsidian-card md:right-8 border border-gold/20 p-6 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl z-[90] no-scraping select-none text-left"
        >
          {/* Close indicator */}
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 text-gray-500 hover:text-gold transition-colors duration-300 pointer-events-auto"
            aria-label="Fecar banner"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded bg-gold/10 text-gold mt-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                Conformidade LGPD
              </h4>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed mt-1.5">
                Utilizamos cookies de segurança para autenticar requisições de atendimento e proteger os canais de contato institucionais em congruência com o regulamento brasileiro nº 13.709/2018 (Lei Geral de Proteção de Dados).
              </p>
              
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={handleAccept}
                  className="bg-gold hover:bg-gold-dark text-black font-semibold text-[10px] md:text-xs font-sans px-4 py-2.5 rounded tracking-wider uppercase transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  Aceitar Diretriz
                </button>
                <button
                  onClick={handleDecline}
                  className="bg-transparent hover:bg-gold/10 text-gray-400 hover:text-white border border-gray-700 hover:border-gold font-sans text-[10px] md:text-xs px-4 py-2.5 rounded tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Recusar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
