import { motion } from "motion/react";
import { Award, Scale, BookOpen, Clock, FileText, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-section" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      {/* Background elegant radial light */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] radial-glow opacity-40 pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Premium Cinematic Portrait Frame */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Decorative glowing backplate */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark/20 to-transparent blur-2xl rounded-lg -z-10" />

          {/* Luxury Frame Container */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg border border-gold/30 overflow-hidden bg-obsidian flex flex-col justify-end shadow-[0_15px_50px_rgba(0,0,0,0.8)] group hover:border-gold transition-all duration-500">
            {/* The clear, crisp and perfectly sized portrait of the lawyer with no blur filters */}
            <img
              src="./dr_maciel_portrait.jpg"
              alt="Dr. Maciel de Carvalho | Advocacia Criminal Especializada"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-top bg-[#111111] transition-transform duration-500 group-hover:scale-[1.01] z-0"
            />
            
            {/* Elegant luxury black gradient overlay on the lower part only to keep the lawyer perfectly sharp and bright */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-10" />

            {/* Content overlayed perfectly over the bottom gradient */}
            <div className="relative z-20 p-6 flex flex-col justify-end items-center text-center">
              {/* Top crest decorative line */}
              <div className="w-12 h-[1px] bg-gold mb-3" />

              {/* Frame text label */}
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-base md:text-lg font-bold tracking-widest text-white uppercase drop-shadow-md">
                  Dr. Maciel de Carvalho
                </span>
                <span className="font-mono text-[10px] text-gold tracking-widest uppercase font-medium">
                  Advogado Criminalista
                </span>
                <span className="font-sans text-[10px] text-gray-400">
                  Inscrição OAB/GO Atuante Nacional
                </span>
              </div>

              {/* Bottom decorative line */}
              <div className="w-12 h-[1px] bg-gold mt-4" />
            </div>

            {/* Corner traditional lawyer visual borders */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
          </div>

          {/* Testimonial/Signature phrase underneath card */}
          <p className="mt-6 font-serif italic text-sm text-gold-light text-center max-w-xs leading-relaxed">
            &quot;A liberdade é o bem mais precioso após a vida; defendê-la é uma prerrogativa constitucional inalienável.&quot;
          </p>
        </div>

        {/* Right Column: Narrative Biografia */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-4 inline-block">
            PERFIL PROFISSIONAL
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sobre o <span className="gold-gradient-text">Advogado</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-8" />

          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-6">
            O <strong>Dr. Maciel de Carvalho</strong> atua de forma dedicada na advocacia processual e estratégica, resguardando o mais absoluto sigilo profissional no patrocínio de interesses de seus constituintes criminais em todo o território nacional.
          </p>

          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-6">
            Sua interlocução e respeito técnico institucional são consolidados por sua atuação como <strong>Presidente da Comissão de Direitos Humanos da OAB/GO</strong>, função dedicada à observância rigorosa das prerrogativas legais e dos preceitos constitucionais.
          </p>

          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-8">
            Possui sólida formação acadêmica voltada à criminologia clínica e processual penal, com sólida atuação em sustentações orais perante o <strong>Tribunal do Júri</strong> e acompanhamento técnico de remédios constitucionais e recursos criminais perante o Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF).
          </p>

          {/* Executive Bullet points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gold/15 pt-8">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded bg-gold/5 border border-gold/15 text-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-white tracking-wider uppercase">
                  Presidente OAB
                </h4>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Comissão de Direitos Humanos OAB/GO
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 rounded bg-gold/5 border border-gold/15 text-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-white tracking-wider uppercase">
                  Atuação Nacional
                </h4>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Defesa processual e acompanhamento em diversos tribunais do país
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 rounded bg-gold/5 border border-gold/15 text-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-white tracking-wider uppercase">
                  Tribunal do Júri
                </h4>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Atuação qualificada no plenário sob os preceitos legais
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 rounded bg-gold/5 border border-gold/15 text-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-white tracking-wider uppercase">
                  Foco em Tribunais Superiores
                </h4>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Arguição técnica de nulidades e impetração de Habeas Corpus no STJ e STF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
