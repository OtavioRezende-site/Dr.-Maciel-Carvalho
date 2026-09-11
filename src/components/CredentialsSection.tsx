import { motion } from "motion/react";
import { CREDENTIALS } from "../types";
import { ShieldAlert, Landmark, Sparkles, Award } from "lucide-react";

export default function CredentialsSection() {
  return (
    <section id="credentials-section" className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow -z-[5]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Absolute Authority & Presidency Copy Block */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" /> ATUAÇÃO INSTITUCIONAL
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Comissão de Direitos Humanos e <span className="gold-gradient-text italic font-serif">Defesa das Garantias</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          
          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-6">
            A proteção das garantias fundamentais é o sustentáculo do Estado Democrático de Direito. A atuação junto à <strong>Presidência da Comissão de Direitos Humanos da OAB/GO</strong> se traduz na fiscalização sobre os limites da repressão estatal, garantindo que o devido processo legal e as prerrogativas do cidadão sejam respeitados perante as instituições.
          </p>

          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed font-light mb-8">
            Buscando sanar ilegalidades e garantir liberdades, a equipe atua em conformidade com as normas legais em procedimentos investigatórios preliminares e no acompanhamento e fundamentação de remédios constitucionais perante tribunais estaduais e as cortes federais superiores em Brasília (STJ e STF).
          </p>

          <div className="bg-gold/5 border-l-2 border-gold/60 p-6 rounded-r-md backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.05)]">
            <p className="font-serif italic text-gold-light text-base md:text-lg leading-relaxed">
              &quot;A defesa dos Direitos Humanos e das garantias de liberdade é o esteio de proteção dos cidadãos em face do poder punitivo estatal. Assegurar as regras constitucionais do jogo é guarnecer a própria integridade jurídica.&quot;
            </p>
            <span className="block mt-3 font-mono text-[10px] md:text-xs text-gray-400 tracking-wider">
              — Dr. Maciel de Carvalho
            </span>
          </div>
        </div>

        {/* Bento Board Stats Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CREDENTIALS.map((cred, idx) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-black/60 border border-gold/15 p-8 rounded-lg backdrop-blur-md hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-300 group select-none"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
