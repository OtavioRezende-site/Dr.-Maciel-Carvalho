import React from "react";
import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Award, BookOpen, Clock, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

interface AboutPageProps {
  onNavigate: (path: string) => void;
  whatsappLink: string;
}

export default function AboutPage({ onNavigate, whatsappLink }: AboutPageProps) {
  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Page Header */}
      <PageHeader
        title="Sobre o Dr. Maciel"
        subtitle="Interlocução institucional, ética e excelência técnica dedicadas à defesa dos direitos fundamentais."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: "Dr. Maciel" }, { label: "Sobre" }]}
      />

      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Frame & Rapid Details */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:sticky lg:top-32">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark/20 to-transparent blur-2xl rounded-lg -z-10" />

            {/* Luxury Frame Container */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg border border-gold/30 overflow-hidden bg-obsidian flex flex-col justify-end shadow-[0_15px_50px_rgba(0,0,0,0.8)] group hover:border-gold transition-all duration-500">
              <img
                src="./dr_maciel_portrait.jpg"
                alt="Dr. Maciel de Carvalho | Advocacia Especializada"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top bg-[#111111] transition-transform duration-500 group-hover:scale-[1.01] z-0"
              />
              
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-10" />

              <div className="relative z-20 p-6 flex flex-col justify-end items-center text-center">
                <div className="w-12 h-[1px] bg-gold mb-3" />
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-base md:text-lg font-bold tracking-widest text-white uppercase drop-shadow-md">
                    Dr. Maciel de Carvalho
                  </span>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase font-medium">
                    Advogado Especialista
                  </span>
                  <span className="font-sans text-[10px] text-gray-400">
                    Inscrição OAB/GO Atuante Nacional
                  </span>
                </div>
                <div className="w-12 h-[1px] bg-gold mt-4" />
              </div>

              {/* Traditional luxury borders */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500 z-30" />
            </div>

            <p className="mt-6 font-serif italic text-sm text-gold-light text-center max-w-xs leading-relaxed">
              &quot;A liberdade e os direitos fundamentais são os pilares do Estado Democrático. Defendê-los com rigor técnico é nosso dever supremo.&quot;
            </p>
          </div>

          {/* Right Column: Complete biography with expanded sections */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-3 inline-block">
              TRAJETÓRIA PROFISSIONAL
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Presidente da Comissão de Direitos Humanos
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />

            <div className="space-y-6 font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light">
              <p>
                O <strong>Dr. Maciel de Carvalho</strong> é graduado em Direito com vasta experiência em atuação contenciosa estratégica e assessoria consultiva corporativa de alta complexidade. Sob estrito rigor ético e sigilo profissional inabalável, patrocina interesses de seus constituintes com presença destacada em todo o território nacional.
              </p>
              
              <p>
                Sua destacada interlocução perante os órgãos de Justiça é solidificada por seu cargo institucional como <strong>Presidente da Comissão de Direitos Humanos da OAB/GO</strong>. Nessa honrosa missão pública, dedica-se ativamente à salvaguarda das prerrogativas profissionais, fiscalização dos limites do poder estatal e observância escrupulosa dos mandamentos constitucionais.
              </p>

              <p>
                Com sólida atuação acadêmica e prática criminal/cível de ponta, destaca-se pela realização de sustentações orais perante o <strong>Tribunal do Júri</strong> de alta complexidade e impetração de remédios constitucionais de grande repercussão, bem como no acompanhamento minucioso de recursos perante o Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF).
              </p>
            </div>

            {/* Credentials / Bento Style Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 pt-8 border-t border-gold/15">
              <div className="bg-obsidian-card border border-gold/10 p-5 rounded hover:border-gold/30 transition-colors duration-300">
                <Award className="w-6 h-6 text-gold mb-3" />
                <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">
                  Liderança OAB/GO
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Lidera a comissão focada na preservação das prerrogativas legais e garantias fundamentais na OAB/GO.
                </p>
              </div>

              <div className="bg-obsidian-card border border-gold/10 p-5 rounded hover:border-gold/30 transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-gold mb-3" />
                <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">
                  Excelência Técnica
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Forte base jurisprudencial com elaboração técnica e defesas fundamentadas perante Cortes de Apelação e Tribunais Superiores.
                </p>
              </div>

              <div className="bg-obsidian-card border border-gold/10 p-5 rounded hover:border-gold/30 transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 text-gold mb-3" />
                <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">
                  Sigilo Absoluto
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Ambientes criptografados para reuniões e salvaguarda absoluta de documentos sob amparo do sigilo advogado-cliente.
                </p>
              </div>

              <div className="bg-obsidian-card border border-gold/10 p-5 rounded hover:border-gold/30 transition-colors duration-300">
                <Clock className="w-6 h-6 text-gold mb-3" />
                <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-2">
                  Atendimento de Urgência
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Estrutura de triagem dedicada para acompanhamento imediato sob agendamento prévio.
                </p>
              </div>
            </div>

            {/* Direct call to Action */}
            <div className="mt-12 bg-gold/5 border border-gold/20 p-6 rounded-lg text-center md:text-left md:flex md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-base font-bold text-white tracking-wider uppercase mb-1">
                  Necessita de orientação profissional imediata?
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Agende uma consulta ou acione nossa triagem pré-consultiva para uma análise preliminar.
                </p>
              </div>
              <button
                onClick={() => onNavigate("/agendamento")}
                className="mt-4 md:mt-0 px-6 py-2.5 bg-gold text-black hover:bg-gold-light transition-colors duration-300 text-xs font-mono tracking-widest uppercase font-bold rounded shrink-0 cursor-pointer"
              >
                Iniciar Agendamento
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
