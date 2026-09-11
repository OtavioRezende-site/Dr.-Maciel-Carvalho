import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Shield, ChevronDown } from "lucide-react";
import { asset } from "../utils/assets";

interface HeroSectionProps {
  onExploreClick: () => void;
  whatsappLink: string;
}

export default function HeroSection({ onExploreClick, whatsappLink }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force and play video programmatically to bypass iframe restriction policies
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Auto-play was prevented by browser engine, retrying programmatically on gesture", err);
      });
    }
  }, []);

  return (
    <section className="isolate relative z-10 h-[100dvh] min-h-[480px] sm:min-h-[550px] md:min-h-[640px] w-full flex flex-col justify-between overflow-hidden">
      {/* Absolute Cinematic Video Background with higher visibility */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.55] opacity-80"
      >
        <source src={asset("Criminal_defense_law_video_loop_202606171641.mp4")} type="video/mp4" />
      </video>

      {/* Luxury Gradient Dark Overlay for ensuring premium contrasts */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-obsidian -z-10" />

      {/* Main Luxury Header Logos & Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 max-w-5xl mx-auto text-center z-10 w-full pt-20 sm:pt-24 md:pt-26 pb-2 sm:pb-4 md:pb-6 space-y-2.5 sm:space-y-3.5 md:space-y-4.5">
        {/* Lawyer Crest/Logo Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src={asset("logo.png")}
            alt="Brasão Dr. Maciel de Carvalho"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain select-none mb-1.5 md:mb-2 brightness-[1.15] drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
          />
          <span className="font-display text-[9px] sm:text-xs tracking-[0.25em] text-gold font-medium uppercase">
            A d v o c a c i a &nbsp; C r i m i n a l
          </span>
          <h2 className="font-display text-sm sm:text-base md:text-lg text-white tracking-[0.1em] font-semibold mt-0.5">
            MACIEL DE CARVALHO
          </h2>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-1.5" />
        </motion.div>

        {/* Masterful Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl"
        >
          Defesa Criminal Técnica Especializada. <br />
          <span className="gold-gradient-text">Atuação Jurídica Sob Sigilo Profissional.</span>
        </motion.h1>

        {/* Dynamic & Informative Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-xs sm:text-xs md:text-sm lg:text-base text-gray-300 max-w-2xl leading-relaxed font-light px-2"
        >
          Presidente de Direitos Humanos da OAB/GO com atuação especializada em todo o país. Especialista em <span className="text-gold font-medium">Tribunal do Júri</span>, <span className="text-gold font-medium font-serif italic">Habeas Corpus</span> e Habeas Data no STJ e STF.
        </motion.p>

        {/* Massive Pulsing WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-2 sm:gap-2.5 w-full sm:w-auto"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold uppercase tracking-wider px-5 py-3 sm:px-7 sm:py-3.5 md:py-4 rounded-md shadow-[0_4px_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_35px_rgba(212,175,55,0.5)] z-20"
            id="hero-whatsapp-cta"
          >
            {/* Pulsing Light inside button */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-dark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
            </span>
            
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-4 group-hover:-rotate-12 transition-transform duration-300" />
            <span className="font-sans text-[10px] sm:text-xs md:text-sm font-bold tracking-widest pl-1">
              Atendimento de Urgência sob Agendamento
            </span>
          </a>
          
          <p className="text-gray-400 font-mono text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase">
            🛡️ Atendimento com Discrição e Sigilo Absoluto
          </p>
        </motion.div>
      </div>

      {/* Floating Explore link and interactive hints */}
      <div className="w-full flex flex-col items-center py-3 sm:py-4 md:py-6 z-20 text-center">
        <button
          onClick={onExploreClick}
          className="font-sans text-[9px] sm:text-xs uppercase tracking-[0.3em] text-gold/80 hover:text-gold transition-colors duration-300 flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
        >
          <span>Conhecer Nossas Teses</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
