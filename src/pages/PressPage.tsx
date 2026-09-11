import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Newspaper,
  ArrowLeft,
  ExternalLink,
  Instagram,
  Share2,
  Printer,
  Award,
  Quote,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Building2,
  BrainCircuit,
  BookmarkCheck,
  BookOpen,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Coins
} from "lucide-react";
import { PRESS_ARTICLES } from "../data/pressData";

interface PressPageProps {
  whatsappLink: string;
  onNavigate: (path: string) => void;
}

export default function PressPage({ whatsappLink, onNavigate }: PressPageProps) {
  const capaArticle = PRESS_ARTICLES[0];
  const tributarioArticle = PRESS_ARTICLES[1];
  const inmagazineArticle = PRESS_ARTICLES[2];

  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const getTextClass = () => {
    if (fontSize === "large") return "text-base md:text-lg leading-relaxed";
    if (fontSize === "xlarge") return "text-lg md:text-xl leading-relaxed";
    return "text-sm md:text-base leading-relaxed";
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-28 pb-20 px-4 md:px-8 relative selection:bg-gold selection:text-black">
      {/* Background radial ambient glow */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] radial-glow opacity-20 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Navigation Breadcrumb & Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gold/20">
          <button
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-gold hover:text-gold-light transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Página Inicial</span>
          </button>

          <div className="flex items-center gap-3 bg-black/80 border border-gold/20 px-3 py-1.5 rounded-xl text-xs text-gray-300 shadow-md">
            <span className="text-[10px] uppercase font-mono text-gray-400 hidden sm:inline">Acessibilidade:</span>
            <button
              onClick={() => setFontSize("normal")}
              className={`px-2 py-0.5 rounded font-mono ${fontSize === "normal" ? "text-gold font-bold bg-gold/20" : "hover:text-white"}`}
              title="Tamanho de Fonte Normal"
            >
              A
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={`px-2 py-0.5 rounded font-mono text-sm ${fontSize === "large" ? "text-gold font-bold bg-gold/20" : "hover:text-white"}`}
              title="Tamanho de Fonte Grande"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize("xlarge")}
              className={`px-2 py-0.5 rounded font-mono text-base ${fontSize === "xlarge" ? "text-gold font-bold bg-gold/20" : "hover:text-white"}`}
              title="Tamanho Extra Grande"
            >
              A++
            </button>
            <span className="w-[1px] h-4 bg-gold/20 mx-1" />
            <button onClick={handlePrint} className="hover:text-gold transition-colors p-1" title="Imprimir Caderno de Imprensa">
              <Printer className="w-4 h-4" />
            </button>
            <button onClick={handleCopyLink} className="hover:text-gold transition-colors p-1 relative" title="Copiar Link da Página">
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gold text-black font-bold text-[9px] rounded whitespace-nowrap shadow-lg">
                  Link Copiado!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* HERO SECTION: Editorial Magazine Header */}
        <header className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-mono font-semibold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Acervo Editorial & Publicações de Prestígio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Cobertura de Imprensa & <span className="gold-gradient-text">Publicações de Destaque</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto"
          >
            Confira a síntese editorial da entrevista de capa na <strong>Revista Lorena Magazine</strong>, a matéria no <strong>InMagazine iG</strong> sobre engenharia tributária e desendividamento, e as análises sobre defesa administrativa no <strong>Portal iG (M.A.G)</strong>.
          </motion.p>

          {/* Quick Jump Bar for the 3 Articles */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <a
              href="#artigo-lorena-capa"
              className="px-3.5 py-2 rounded-xl bg-obsidian border border-gold/30 text-gold hover:text-white hover:border-gold transition-colors"
            >
              1. Lorena Magazine (Capa)
            </a>
            <a
              href="#artigo-inmagazine-tributario"
              className="px-3.5 py-2 rounded-xl bg-obsidian border border-gold/30 text-gold hover:text-white hover:border-gold transition-colors"
            >
              2. InMagazine iG (Engenharia & BNDES)
            </a>
            <a
              href="#artigo-ig-tributario"
              className="px-3.5 py-2 rounded-xl bg-obsidian border border-gold/30 text-gold hover:text-white hover:border-gold transition-colors"
            >
              3. Portal iG (Defesa Tributária)
            </a>
          </div>
        </header>

        {/* ARTICLE 1: LORENA MAGAZINE COVER STORY SPREAD */}
        <section id="artigo-lorena-capa" className="bg-gradient-to-b from-obsidian via-black to-obsidian border border-gold/30 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          {/* Section Header Banner */}
          <div className="p-6 md:p-10 bg-gradient-to-r from-black via-obsidian to-black border-b border-gold/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                  Lorena Magazine &bull; Edição Especial de Capa
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                {capaArticle.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {capaArticle.instagramUrl && (
                <a
                  href={capaArticle.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-200 hover:text-white transition-colors text-xs font-mono"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Ver no Instagram</span>
                </a>
              )}
              <a
                href={capaArticle.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/15 border border-gold/40 text-gold hover:text-gold-light transition-colors text-xs font-mono font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Portal iG</span>
              </a>
            </div>
          </div>

          {/* Magazine Cover Layout Grid */}
          <div className="p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual Magazine Cover Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.8)] group hover:border-gold transition-all duration-500">
                <img
                  src={capaArticle.coverImage}
                  alt="Dr. Maciel de Carvalho - Capa Revista Lorena Magazine"
                  className="w-full h-auto object-contain filter brightness-100 group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Caption under cover */}
              <div className="bg-black/60 border border-gold/20 p-4 rounded-xl text-center">
                <p className="font-serif italic text-xs md:text-sm text-gold-light">
                  &ldquo;{capaArticle.quote}&rdquo;
                </p>
                <span className="block mt-1 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  Por André Pontes &bull; Revista Lorena Magazine &bull; Julho 2026
                </span>
              </div>
            </div>

            {/* Right: Narrative Intro & Multidisciplinary Pillars (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <p className={`${getTextClass()} text-gray-200 font-sans leading-relaxed`}>
                  {capaArticle.content[0]}
                </p>
                <p className={`${getTextClass()} text-gray-200 font-sans leading-relaxed`}>
                  {capaArticle.content[1]}
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="pt-4 border-t border-gold/15">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-4 font-bold flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-gold" />
                  <span>A Matriz de Conhecimento Multidisciplinar</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/60 border border-gold/20 space-y-1">
                    <span className="font-display font-bold text-gold text-sm">1. Filosofia</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Desenvolveu o pensamento crítico e a capacidade de analisar cenários complexos sob múltiplas perspectivas.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/60 border border-gold/20 space-y-1">
                    <span className="font-display font-bold text-gold text-sm">2. Teologia</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Fortaleceu os princípios éticos inabaláveis, o respeito às pessoas e a vocação para a defesa dos Direitos Humanos.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/60 border border-gold/20 space-y-1">
                    <span className="font-display font-bold text-gold text-sm">3. Direito</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Fornece os instrumentos técnicos e jurídicos de alta precisão para a resolução de conflitos corporativos.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/60 border border-gold/20 space-y-1">
                    <span className="font-display font-bold text-gold text-sm">4. Administração</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Concede a inteligência de negócios, governança e visão estratégica para compreender a realidade empresarial do cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THEMATIC EDITORIAL SECTIONS (Chapters of Lorena Feature) */}
        <section className="space-y-10">
          <div className="pb-4 border-b border-gold/20">
            <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Destaques da Reportagem de Capa (Lorena Magazine)</span>
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-1">
              Pilares Fundamentais & Visão de Gestão do Dr. Maciel de Carvalho
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chapter 1: Origens e Ética de Trabalho */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-obsidian/90 border border-gold/20 rounded-2xl p-6 md:p-8 space-y-4 hover:border-gold/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider font-semibold">
                  <Briefcase className="w-4 h-4 text-gold" />
                  <span>Origem & Ética de Trabalho</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Dos Canteiros de Obras à Liderança da Banca
                </h3>
                <p className={`${getTextClass()} text-gray-300 font-sans leading-relaxed`}>
                  Iniciando sua jornada aos 16 anos como ajudante de pedreiro, Dr. Maciel consolidou uma ética de trabalho inquebrável pautada em disciplina e respeito. Passando pela tecnologia e consultoria financeira até tornar-se o primeiro advogado de sua família, fundamentou sua carreira em um lema pessoal:
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 flex items-start gap-3 mt-2">
                <Quote className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="font-serif italic text-sm text-gold-light font-semibold">
                  &ldquo;O talento abre portas. O trabalho derruba barreiras.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Chapter 2: Inovação em Gestão Jurídica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-obsidian/90 border border-gold/20 rounded-2xl p-6 md:p-8 space-y-4 hover:border-gold/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider font-semibold">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>Inovação em Gestão Corporativa</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  &ldquo;Compreender o Negócio Antes do Processo&rdquo;
                </h3>
                <p className={`${getTextClass()} text-gray-300 font-sans leading-relaxed`}>
                  Nascida durante seus anos como consultor financeiro, a visão do Dr. Maciel estabelece que o Direito não pode caminhar separado da gestão empresarial. Seu escritório opera com indicadores de desempenho, processos definidos e governança preventiva para evitar que divergências virem litígios dispendiosos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 flex items-start gap-3 mt-2">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="font-mono text-xs text-gray-200">
                  Advocacia consultiva próxima dos empresários para mitigar riscos antes de a demanda surgir no Judiciário.
                </p>
              </div>
            </motion.div>

            {/* Chapter 3: Atuação Institucional e Direitos Humanos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-obsidian/90 border border-gold/20 rounded-2xl p-6 md:p-8 space-y-4 hover:border-gold/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider font-semibold">
                  <HeartHandshake className="w-4 h-4 text-gold" />
                  <span>Cidadania & Obra Autoral</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Comissão de Direitos Humanos & Obras Literárias
                </h3>
                <p className={`${getTextClass()} text-gray-300 font-sans leading-relaxed`}>
                  Atuante na Comissão de Direitos Humanos da OAB/SP, Dr. Maciel dedica-se à defesa das garantias fundamentais e cidadania. Atualmente constrói seu livro autoral <em>&ldquo;A Pena Além dos Muros&rdquo;</em>, provocando reflexões sobre o sistema penal brasileiro e a dignidade humana.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-gold/20">
                <span className="block font-mono text-[10px] text-gold uppercase font-bold mb-1">
                  Obra Autoral em Produção:
                </span>
                <span className="font-serif italic text-sm text-gray-200">
                  &ldquo;A Pena Além dos Muros&rdquo; &mdash; Reflexões sobre o sistema penal e reabilitação social.
                </span>
              </div>
            </motion.div>

            {/* Chapter 4: Liderança, Segurança e Legado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-obsidian/90 border border-gold/20 rounded-2xl p-6 md:p-8 space-y-4 hover:border-gold/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider font-semibold">
                  <GraduationCap className="w-4 h-4 text-gold" />
                  <span>Filosofia de Liderança</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Desenvolvimento de Pessoas & Legado Corporativo
                </h3>
                <p className={`${getTextClass()} text-gray-300 font-sans leading-relaxed`}>
                  Para Dr. Maciel, nenhuma organização cresce se o conhecimento se concentrar em uma única pessoa. Sua liderança baseia-se na formação contínua de equipes altamente qualificadas e na convicção de que o trabalho consistente é o único caminho para a excelência duradoura.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 flex items-start gap-3 mt-2">
                <Quote className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="font-serif italic text-sm text-gold-light font-semibold">
                  &ldquo;Nada resiste ao trabalho.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ARTICLE 2: INMAGAZINE iG FEATURE SECTION */}
        {inmagazineArticle && (
          <section id="artigo-inmagazine-tributario" className="bg-gradient-to-b from-obsidian via-black to-obsidian border border-gold/30 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 md:p-10 lg:p-12 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gold/20">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-5 h-5 text-gold" />
                  <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                    InMagazine / Portal iG &bull; Empreendedorismo & Reestruturação
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                  {inmagazineArticle.title}
                </h2>
              </div>

              <a
                href={inmagazineArticle.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/15 border border-gold/40 text-gold hover:text-gold-light transition-colors text-xs font-mono font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Publicação no InMagazine iG</span>
              </a>
            </div>

            <div className="space-y-4">
              {inmagazineArticle.content.map((paragraph, idx) => (
                <p key={idx} className={`${getTextClass()} text-gray-200 font-sans leading-relaxed`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* InMagazine Highlights Breakdown Grid */}
            <div className="space-y-8">
              {inmagazineArticle.highlights?.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-2xl bg-black/80 border border-gold/20 space-y-4 shadow-md"
                >
                  <div className="flex items-center gap-2 text-gold font-display font-bold text-lg md:text-xl">
                    <Landmark className="w-5 h-5 text-gold shrink-0" />
                    <span>{highlight.title}</span>
                  </div>

                  {highlight.text && (
                    <p className={`${getTextClass()} text-gray-300 font-sans leading-relaxed`}>
                      {highlight.text}
                    </p>
                  )}

                  {highlight.points && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      {highlight.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3.5 rounded-xl bg-obsidian border border-gold/15 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-200">{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quote Callout */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gold/15 via-gold/5 to-transparent border border-gold/30 flex items-start gap-4">
              <Quote className="w-8 h-8 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-serif italic text-base md:text-lg text-gold-light leading-relaxed">
                  &ldquo;{inmagazineArticle.quote}&rdquo;
                </p>
                <span className="block mt-2 font-mono text-xs text-gray-400 uppercase tracking-widest">
                  &mdash; Reportagem do Portal InMagazine iG
                </span>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLE 3: TAX STRATEGY WHITEPAPER SECTION (Portal iG / M.A.G) */}
        <section id="artigo-ig-tributario" className="bg-gradient-to-b from-obsidian via-black to-obsidian border border-gold/30 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 md:p-10 lg:p-12 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gold/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                  Caderno de Direito Tributário & Governance Fiscal (Portal iG / M.A.G)
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                {tributarioArticle.title}
              </h2>
            </div>

            <a
              href={tributarioArticle.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/15 border border-gold/40 text-gold hover:text-gold-light transition-colors text-xs font-mono font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Publicação no Portal iG</span>
            </a>
          </div>

          <div className="space-y-4">
            {tributarioArticle.content.map((paragraph, idx) => (
              <p key={idx} className={`${getTextClass()} text-gray-200 font-sans leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights Breakdown Grid */}
          <div className="space-y-8">
            {tributarioArticle.highlights?.map((highlight, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-black/80 border border-gold/20 space-y-4 shadow-md"
              >
                <div className="flex items-center gap-2 text-gold font-display font-bold text-lg md:text-xl">
                  <BookmarkCheck className="w-5 h-5 text-gold shrink-0" />
                  <span>{highlight.title}</span>
                </div>

                {highlight.text && (
                  <p className={`${getTextClass()} text-gray-300 font-sans leading-relaxed`}>
                    {highlight.text}
                  </p>
                )}

                {highlight.points && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {highlight.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-xl bg-obsidian border border-gold/15 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-gray-200">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quote Callout */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gold/15 via-gold/5 to-transparent border border-gold/30 flex items-start gap-4">
            <Quote className="w-8 h-8 text-gold shrink-0 mt-1" />
            <div>
              <p className="font-serif italic text-base md:text-lg text-gold-light leading-relaxed">
                &ldquo;{tributarioArticle.quote}&rdquo;
              </p>
              <span className="block mt-2 font-mono text-xs text-gray-400 uppercase tracking-widest">
                &mdash; Dr. Maciel de Carvalho, especialista em Direito Tributário e Gestão Preventiva
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER CTA & EXECUTIVE CONSULTATION */}
        <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-obsidian via-black to-obsidian border border-gold/30 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Atendimento Jurídico Reservado & Confidencial
            </span>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Agende uma Consulta Estratégica com o Dr. Maciel de Carvalho
            </h2>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Trate de demandas corporativas, tributárias, bancárias ou contencioso penal de alta complexidade diretamente com quem lidera uma banca jurídica nacional.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-black font-bold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-black" />
                <span>Agendar Consulta Direta (WhatsApp)</span>
              </a>

              <button
                onClick={() => onNavigate("/agendamento")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-gold/30 text-gold hover:text-white hover:border-gold font-semibold text-sm transition-all duration-300 cursor-pointer"
              >
                <span>Saber Mais Sobre o Agendamento</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
