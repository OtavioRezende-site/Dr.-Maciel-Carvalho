import React from "react";
import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { CREDENTIALS } from "../types";
import { ShieldAlert, Landmark, Sparkles, Award, Scale, BookOpen, ShieldCheck } from "lucide-react";

interface PrerogativesPageProps {
  onNavigate: (path: string) => void;
  whatsappLink: string;
}

export default function PrerogativesPage({ onNavigate, whatsappLink }: PrerogativesPageProps) {
  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Page Header */}
      <PageHeader
        title="Prerrogativas da Defesa"
        subtitle="A observância rigorosa das regras constitucionais e o respeito inalienável aos direitos humanos são os pilares da nossa atuação."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: "Prerrogativas" }]}
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Copy Block */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> ATUAÇÃO INSTITUCIONAL
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight uppercase">
              Direitos Humanos e Garantias Constitucionais
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6" />
            
            <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-6">
              A proteção das garantias fundamentais é o sustentáculo do Estado Democrático de Direito. A atuação junto à <strong>Presidência da Comissão de Direitos Humanos da OAB/GO</strong> se traduz na fiscalização sobre os limites da repressão estatal, garantindo que o devido processo legal e as prerrogativas do cidadão sejam respeitados perante as instituições.
            </p>

            <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-8">
              Buscando sanar ilegalidades e garantir liberdades, atuamos em conformidade com as normas constitucionais em procedimentos investigatórios preliminares e no acompanhamento e fundamentação de remédios constitucionais perante tribunais estaduais e as cortes federais superiores em Brasília (STJ e STF).
            </p>

            <div className="bg-gold/5 border-l-2 border-gold/60 p-6 rounded-r-md backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.05)]">
              <p className="font-serif italic text-gold-light text-sm md:text-base leading-relaxed">
                &quot;A defesa dos Direitos Humanos e das garantias de liberdade é o esteio de proteção dos cidadãos em face do poder punitivo estatal. Assegurar as regras constitucionais do jogo é guarnecer a própria integridade jurídica.&quot;
              </p>
              <span className="block mt-3 font-mono text-[10px] md:text-xs text-gray-400 tracking-wider">
                — Dr. Maciel de Carvalho
              </span>
            </div>
          </div>

          {/* Bento Stats Board Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CREDENTIALS.map((cred, idx) => (
              <div
                key={cred.id}
                className="bg-obsidian-card border border-gold/15 p-8 rounded-lg backdrop-blur-md hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-300 group select-none"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-display text-4xl md:text-5xl font-black text-gold group-hover:scale-105 transition-transform duration-300">
                    {cred.number}
                  </span>
                  <span className="p-2 rounded-full bg-gold/5 text-gold/40 group-hover:text-gold/80 transition-colors duration-300">
                    {idx === 0 && <ShieldAlert className="w-5 h-5" />}
                    {idx === 1 && <Sparkles className="w-5 h-5" />}
                    {idx === 2 && <Award className="w-5 h-5" />}
                    {idx === 3 && <Landmark className="w-5 h-5" />}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
                  {cred.label}
                </h3>
                <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                  {cred.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Prerogatives Information (Statutory Citations) */}
        <div className="mt-16 pt-16 border-t border-gold/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-[10px] tracking-widest text-gold uppercase">ESTATUTO DA ADVOCACIA - LEI 8.906/94</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mt-2">Prerrogativas Profissionais Não São Privilégios</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-2">
              As prerrogativas asseguradas aos advogados são, na verdade, garantias instituídas pela lei para salvaguardar a plena defesa dos cidadãos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-obsidian-card border border-gold/5 p-6 rounded hover:border-gold/10 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">Inviolabilidade de Escritórios</h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                O arquivo, dados e comunicações entre advogado e cliente são estritamente invioláveis, garantindo sigilo absoluto na análise jurídica.
              </p>
            </div>

            <div className="bg-obsidian-card border border-gold/5 p-6 rounded hover:border-gold/10 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">Acesso Integral a Autos</h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                Direito de examinar em qualquer repartição policial ou judicial, mesmo sem procuração, autos de flagrantes, inquéritos ou processos.
              </p>
            </div>

            <div className="bg-obsidian-card border border-gold/5 p-6 rounded hover:border-gold/10 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">Comunicação Reservada</h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                Garantia de atendimento e comunicação pessoal e reservada com clientes custodiados, de forma presencial e sob absoluto sigilo.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
