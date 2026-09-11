import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Send, Lock, CalendarRange, Clock, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import WhatsAppIcon from "../components/WhatsAppIcon";

interface SchedulingPageProps {
  onNavigate: (path: string) => void;
  whatsappLink: string;
}

export default function SchedulingPage({ onNavigate, whatsappLink }: SchedulingPageProps) {
  // Contact Form state
  const [clientName, setClientName] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [briefDetails, setBriefDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Service options
  const serviceOptions = [
    { title: "Direito Empresarial & Blindagem", desc: "Consultoria preventiva, compliance e mitigação tributária." },
    { title: "Defesa e Recursos Criminais", desc: "Acompanhamento urgente ou recursos nos Tribunais Superiores (STJ/STF)." },
    { title: "Direito Tributário Estratégico", desc: "Mitigação de passivos e planejamento fiscal." },
    { title: "Direito Cível e Relações Contratuais", desc: "Ações indenizatórias, posse imobiliária e disputas civis." },
    { title: "Direito Bancário e Financiamentos", desc: "Ações revisionais de juros e proteção patrimonial." },
    { title: "Família e Sucessões de Alta Expressão", desc: "Inventários complexos, holdings e partilha de bens." }
  ];

  const resetForm = () => {
    setClientName("");
    setLocation("");
    setServiceType("");
    setBriefDetails("");
    setIsSubmitted(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !location || !serviceType) return;

    // Generate WhatsApp Message formatted beautifully and ethically
    const msg = `Olá Dr. Maciel de Carvalho, gostaria de solicitar um agendamento para atendimento especializado:

📋 *AGENDAMENTO DE CONSULTA*
----------------------------------------
*1. Interessado:* ${clientName}
*2. Localidade:* ${location}
*3. Assunto de Interesse:* ${serviceType}
*4. Breve Descrição:* ${briefDetails ? briefDetails : "Não informado inicialmente."}
----------------------------------------
🔒 _Esta solicitação e suas informações estão resguardadas sob o absoluto sigilo profissional estabelecidos por lei._`;

    const encodedMessage = encodeURIComponent(msg);
    const destinationUrl = `${whatsappLink}&text=${encodedMessage}`;
    
    // Redirect
    window.location.href = destinationUrl;
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Page Header */}
      <PageHeader
        title="Agendamento"
        subtitle="Agende seu atendimento sob estrita reserva e confidencialidade profissional."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: "Agendamento" }]}
      />

      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto w-full relative">
        <div className="bg-obsidian-card border border-gold/15 rounded-lg overflow-hidden backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col min-h-[480px]">
          {/* Status Head indicator */}
          <div className="bg-black/40 border-b border-gold/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarRange className="w-4 h-4 text-gold" />
              <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                {isSubmitted ? "Solicitação de Triagem Registrada" : "Formulário de Triagem Pré-Consultiva"}
              </span>
            </div>
            <span className="font-mono text-[9px] text-gold uppercase tracking-wider bg-gold/5 border border-gold/10 px-2.5 py-1 rounded-full">
              Sigilo Absoluto
            </span>
          </div>

          {/* Form elements with motion animations */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleContactSubmit}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 flex flex-col">
                        <label className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                          Nome do Interessado / Representado
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Carlos Augusto Silva"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full bg-black/50 border border-gold/15 focus:border-gold rounded p-3 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                        />
                      </div>

                      <div className="space-y-1.5 flex flex-col">
                        <label className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                          Cidade / Estado da Demanda
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Goiânia - GO"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full bg-black/50 border border-gold/15 focus:border-gold rounded p-3 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 flex flex-col text-left">
                      <label className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                        Área de Interesse Principal
                      </label>
                      <select
                        required
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-black/50 border border-gold/15 focus:border-gold rounded p-3 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                      >
                        <option value="" disabled className="text-gray-500">Selecione uma especialidade...</option>
                        {serviceOptions.map((opt, idx) => (
                          <option key={idx} value={opt.title} className="bg-obsidian text-white">
                            {opt.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                        Breve Descrição (Opcional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Forneça elementos necessários para direcionamento de forma resumida."
                        value={briefDetails}
                        onChange={(e) => setBriefDetails(e.target.value)}
                        className="w-full bg-black/50 border border-gold/15 focus:border-gold rounded p-3 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* Submitting Actions */}
                  <div className="mt-8 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Clock className="w-4 h-4 text-gold shrink-0 animate-pulse" />
                      <span>Retorno em até 1 hora para casos de urgência.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={!clientName || !location || !serviceType}
                      className={`w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-mono font-bold py-3 px-6 rounded tracking-wide cursor-pointer transition-all duration-350 shadow-md ${
                        (clientName && location && serviceType)
                          ? "bg-gold text-black hover:bg-gold-light hover:scale-[1.02]"
                          : "bg-gold/5 border border-gold/15 text-gold/40 cursor-not-allowed"
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" /> SOLICITAR ATENDIMENTO NO WHATSAPP
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-6 text-center space-y-6 max-w-xl mx-auto flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold mb-2 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">
                      Solicitação Registrada!
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                      Seus dados de pré-agendamento foram formatados. Você será direcionado para o canal seguro do WhatsApp do <strong>Dr. Maciel de Carvalho</strong>.
                    </p>
                  </div>

                  {/* Receipt overview */}
                  <div className="w-full bg-black/60 border border-gold/10 rounded p-5 text-left space-y-3.5 font-sans text-xs font-light">
                    <div className="flex justify-between border-b border-gold/5 pb-2">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Interessado</span>
                      <span className="text-white font-semibold">{clientName}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold/5 pb-2">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Localidade</span>
                      <span className="text-white font-semibold">{location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Área Requerida</span>
                      <span className="text-gold font-medium">{serviceType}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <button
                      onClick={resetForm}
                      className="flex-1 border border-gray-700 hover:border-gold/30 text-gray-400 hover:text-white px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer animate-pulse"
                    >
                      Novo Agendamento
                    </button>

                    <a
                      href={`${whatsappLink}&text=${encodeURIComponent(
                        `Olá Dr. Maciel de Carvalho, gostaria de iniciar o atendimento para:\n*Serviço:* ${serviceType}\n*Nome:* ${clientName}\n*Localidade:* ${location}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gold text-black font-bold uppercase tracking-wider px-6 py-3 rounded text-xs shadow-md transition-transform duration-300 hover:scale-105"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Re-enviar WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Security details footer */}
          <div className="bg-gold/5 border-t border-gold/10 px-6 py-4 flex items-center justify-center gap-2 text-[10px] font-sans md:text-xs text-gold/80 italic text-center font-light">
            <Lock className="w-3.5 h-3.5 shrink-0" />
            <span>As informações enviadas são sigilosas e estão protegidas pelo amparo legal do segredo profissional.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
