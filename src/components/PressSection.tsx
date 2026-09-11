import React from "react";
import { motion } from "motion/react";
import { Newspaper, ExternalLink, ArrowRight, Quote, BookOpen, Award, Instagram, ShieldCheck, Sparkles } from "lucide-react";
import { PRESS_ARTICLES } from "../data/pressData";

interface PressSectionProps {
  onNavigate: (path: string) => void;
}

export default function PressSection({ onNavigate }: PressSectionProps) {
  const capaArticle = PRESS_ARTICLES[0];
  const tributarioArticle = PRESS_ARTICLES[1];
  const inmagazineArticle = PRESS_ARTICLES[2];

  return (
    <section id="press-section" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow opacity-30 pointer-events-none -z-10" />

      {/* Header Badge & Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          <Newspaper className="w-3.5 h-3.5 text-gold" />
          <span>Imprensa & Mídia Nacional de Prestígio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Dr. Maciel de Carvalho na <span className="gold-gradient-text">Revista Lorena & InMagazine iG</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-gray-300 font-sans text-sm md:text-base leading-relaxed"
        >
          Entrevistas de capa, análises de jurisprudência e artigos de governança publicados nos principais veículos de negócios e comunicação do país.
        </motion.p>
      </div>

      {/* Main Editorial Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Magazine Cover Hero Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-gradient-to-b from-obsidian via-black to-obsidian border border-gold/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group hover:border-gold/60 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Magazine Header Badge */}
            <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-gold/15">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold tracking-widest text-gold uppercase">LORENA</span>
                <span className="text-[10px] font-mono uppercase bg-gold/20 text-gold-light px-2.5 py-0.5 rounded border border-gold/30 font-bold">MAGAZINE</span>
              </div>
              <span className="text-xs font-mono text-gray-400">Edição de Capa • Jul/2026</span>
            </div>

            {/* Pristine Magazine Cover Frame */}
            <div className="relative rounded-xl overflow-hidden border border-gold/30 mb-6 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.9)] group-hover:border-gold/60 transition-all duration-500">
              <img
                src={capaArticle.coverImage}
                alt="Dr. Maciel de Carvalho - Revista Lorena Magazine"
                className="w-full h-auto object-contain filter brightness-100 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Clean Editorial Title & Subtitle */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-gold font-semibold">
                <Award className="w-3.5 h-3.5 text-gold" />
                Matéria de Capa &bull; Destaque Nacional
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-gold-light transition-colors leading-snug">
                Edição Especial: Trajetória, Governança e Inteligência Jurídica
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans pt-1">
                A história de liderança do Dr. Maciel de Carvalho, unindo visão estratégica de negócios, formação multidisciplinar e atuação nacional em causas de grande repercussão.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gold/15 flex items-center justify-between gap-3">
            <button
              onClick={() => onNavigate(`/imprensa?article=${capaArticle.id}`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-black font-bold text-xs md:text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-black" />
              <span>Ler Matéria na Íntegra</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <a
              href={capaArticle.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-gold hover:border-gold/40 transition-colors"
              title="Acessar publicação original no Portal iG / Revista Lorena"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Editorial Feature Briefings (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Feature 1: InMagazine iG - Engenharia Tributária & BNDES/FCO */}
          {inmagazineArticle && (
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 bg-obsidian/90 border border-gold/20 rounded-2xl p-6 relative hover:border-gold/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gold/10 border border-gold/20 text-gold font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3 h-3 text-gold" />
                  Engenharia Tributária & Gestão de Passivos
                </span>
                <span className="text-xs font-mono text-gray-400">InMagazine / Portal iG</span>
              </div>

              <h3 className="font-display text-base md:text-lg font-bold text-white mb-2 leading-snug">
                {inmagazineArticle.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans mb-3">
                {inmagazineArticle.summary}
              </p>

              <div className="p-3 rounded-xl bg-gold/5 border border-gold/15 flex items-start gap-2.5 my-1">
                <Quote className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p className="font-serif italic text-xs text-gold-light/90 leading-relaxed">
                  &ldquo;{inmagazineArticle.quote}&rdquo;
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-gold/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate(`/imprensa?article=${inmagazineArticle.id}`)}
                  className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 cursor-pointer group"
                >
                  <span>Ver Matéria do InMagazine iG</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={inmagazineArticle.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-gold"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Link InMagazine</span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Feature 2: Tax Law & Administrative Revolution (iG M.A.G) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-obsidian/90 border border-gold/20 rounded-2xl p-6 relative hover:border-gold/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gold/10 border border-gold/20 text-gold font-mono text-[11px] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-3 h-3 text-gold" />
                Análise Tributária Especializada
              </span>
              <span className="text-xs font-mono text-gray-400">Portal iG / M.A.G</span>
            </div>

            <h3 className="font-display text-base md:text-lg font-bold text-white mb-2 leading-snug">
              Soluções Administrativas Preventivas & Desconstrução de Autos de Infração
            </h3>

            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans mb-3">
              Atuação técnica perante a Receita Federal e CARF para anular cobranças indevidas, preservar o caixa corporativo e afastar litígios judiciais morosos.
            </p>

            <div className="p-3 rounded-xl bg-gold/5 border border-gold/15 flex items-start gap-2.5 my-1">
              <Quote className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p className="font-serif italic text-xs text-gold-light/90 leading-relaxed">
                &ldquo;{tributarioArticle.quote}&rdquo;
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-gold/10 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate(`/imprensa?article=${tributarioArticle.id}`)}
                className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 cursor-pointer group"
              >
                <span>Ver Análise de Defesa Tributária</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={tributarioArticle.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-gold"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Matéria no iG</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Bottom Hub Banner CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-obsidian via-black to-obsidian border border-gold/30 text-center relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
      >
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gold mb-2 font-bold">
            Caderno Editorial & Imprensa
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
            Acesse a Página Exclusiva de Imprensa
          </h3>
          <p className="text-gray-300 text-xs md:text-sm mb-6 leading-relaxed">
            Navegue pelas matérias completas, pontos fundamentais da defesa fiscal administrativa e o acervo de imprensa sobre o Dr. Maciel de Carvalho.
          </p>

          <button
            onClick={() => onNavigate("/imprensa")}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-black font-bold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Acessar Portal de Imprensa Completo</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

