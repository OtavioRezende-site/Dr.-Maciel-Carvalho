import { ShieldCheck, EyeOff, Lock, Landmark, Scale, Shield, Landmark as CourtIcon, Milestone } from "lucide-react";

export default function TrustSection() {
  return (
    <section id="trust-section" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] radial-glow opacity-50 pointer-events-none -z-10" />

      {/* Main Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-4 inline-block">
          CULTURA DE SIGILO E COMPROMISSO
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Confidencialidade Absoluta e <span className="gold-gradient-text">Garantia Constitucional</span>
        </h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
        <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Para nós, discrição não é opcional — é o fundamento ético inestimável do nosso gabinete. 
          Preservamos dados comerciais, reputação de indústrias, executivos e cidadãos sob as mais restritas blindagens constitucionais do ordenamento jurídico brasileiro.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Compliance & Secrecy features */}
        <div className="lg:col-span-6 flex">
          <div className="border border-gold/15 bg-black/60 p-8 rounded-lg backdrop-blur-md flex flex-col justify-between w-full">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-8 tracking-wide flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1.5} /> Nosso Pacto de Defesa
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-gold/5 text-gold shrink-0">
                    <EyeOff className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                      Discrição Absoluta e Segredo Profissional
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1.5">
                      Cada detalhe do caso permanece sob sigilo profissional estrito, amparado constitucionalmente e pelo Estatuto da OAB. Uso de ferramentas seguras e restritas para arquivamento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-gold/5 text-gold shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                      Segurança e Proteção de Dados
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1.5">
                      As informações processuais são tratadas sob o mais estrito sigilo profissional por nossa equipe coordenada pelo Dr. Maciel de Carvalho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-gold/5 text-gold shrink-0">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                      Respeito Estrito à Paridade de Armas
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1.5">
                      Enfrentamento altivo de teses contra abusos processuais, quebra de custódia e ilegalidades nos inquéritos, garantindo equidade total em juízo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gold/10 pt-6 mt-8">
              <span className="font-sans text-[11px] text-gold/80 font-mono tracking-widest block uppercase">
                🛡️ Prerrogativas da Advocacia Criminal
              </span>
            </div>
          </div>
        </div>

        {/* Institutional Pillars instead of Feedback Cards */}
        <div className="lg:col-span-6 flex">
          <div className="border border-gold/15 bg-black/40 p-8 rounded-lg backdrop-blur-md flex flex-col justify-between w-full">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-8 tracking-wide flex items-center gap-3">
                <Scale className="w-6 h-6 text-gold" strokeWidth={1.5} /> Princípios Processuais Inegociáveis
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-gold/5 text-gold shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                      Luta Contra o Abuso de Poder
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1.5">
                      Como atuante na defesa dos Direitos Humanos, o Dr. Maciel de Carvalho fiscaliza duramente prisões arbitrárias, buscas domésticas ilegais e intimidações sem lastro comprobatório.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-gold/5 text-gold shrink-0">
                    <CourtIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                      Excelência na Argumentação Superior
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1.5">
                      Foco refinado na detecção de nulidades absolutas e relativas que comumente anulam ações penais inteiras nas instâncias superiores em Brasília.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-gold/5 text-gold shrink-0">
                    <Milestone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase">
                      Acompanhamento Estratégico em Tempo Real
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1.5">
                      Disponibilidade imediata e posicionamento célere. O cliente é mantido atualizado por canais reservados e seguros com clareza conceitual de cada ato processual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gold/10 pt-6 mt-8">
              <span className="font-sans text-[11px] text-gold/80 font-mono tracking-widest block uppercase">
                📜 Constituição Federal • Artigo 5º, LV
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
