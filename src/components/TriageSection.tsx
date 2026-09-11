import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, FormInput, Send, Lock, CalendarRange } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface TriageSectionProps {
  whatsappLink: string;
}

export default function TriageSection({ whatsappLink }: TriageSectionProps) {
  // Contact Form state
  const [clientName, setClientName] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [briefDetails, setBriefDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Service options
  const serviceOptions = [
    { title: "Assistência em Procedimentos Urgentes", desc: "Acompanhamento preliminar em delegacia ou custódia." },
    { title: "Sustentação no Tribunal do Júri", desc: "Defesa técnica fundamentada em crimes dolosos contra a vida." },
    { title: "Recursos nos Tribunais Superiores", desc: "Interposição e acompanhamento de recursos no STJ e STF." },
    { title: "Defesa em Lei Maria da Penha", desc: "Patrocínio no contraditório e em medidas protetivas." },
    { title: "Consultoria Preventiva / Geral", desc: "Consultas técnicas e procedimentos preventivos." }
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
    const msg = `Olá Dr. Maciel de Carvalho, gostaria de solicitar um agendamento para atendimento técnico especializado:

📋 *AGENDAMENTO DE CONSULTA*
----------------------------------------
*1. Interessado:* ${clientName}
*2. Localidade:* ${location}
*3. Assunto de Interesse:* ${serviceType}
*4. Breve Descrição:* ${briefDetails ? briefDetails : "Não informado inicialmente."}
----------------------------------------
🔒 _Esta solicitação e suas informações estão resguardadas sob o absoluto sigilo e segredo profissional estabelecidos por lei._`;

    const encodedMessage = encodeURIComponent(msg);
    const destinationUrl = `${whatsappLink}&text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(destinationUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="triage-section" className="py-24 md:py-32 px-4 md:px-8 max-w-5xl mx-auto w-full relative">
      {/* Absolute Decorative ambient background elements */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] radial-glow opacity-30 pointer-events-none -z-10" />

      {/* Title block */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-4 inline-block font-semibold">
          SOLICITAÇÃO DE AGENDAMENTO
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
          Atendimento e <span className="gold-gradient-text">Consulta Especializada</span>
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
        <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed">
          Preencha o formulário abaixo para direcionar sua solicitação de consulta. Suas informações estão abrigadas sob dever inviolável de sigilo profissional com amparo legal.
        </p>
      </div>

      {/* Main card box containing contact form */}
      <div id="dynamic-triage-container" className="bg-obsidian-light/45 border border-gold/15 rounded-lg overflow-hidden backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col min-h-[480px]">
        {/* Status Head indicator */}
        <div className="bg-black/40 border-b border-gold/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarRange className="w-4 h-4 text-gold" />
            <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
              {isSubmitted ? "Solicitação Registrada" : "Formulário de Agendamento"}
            </span>
          </div>
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
                        Cidade / Estado da Ocorrência
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
                      Assunto de Interesse Principal
                    </label>
                    <select
                      required
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-black/50 border border-gold/15 focus:border-gold rounded p-3 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                    >
                      <option value="" disabled className="text-gray-500">Selecione o assunto...</option>
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt.title} className="bg-obsidian text-white">
                          {opt.title} ({opt.desc})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5 flex flex-col">
                    <label className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                      Breve Descrição do Interesse (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Forneça elementos necessários para direcionamento (ex: 'Intimação recebida', 'Acompanhamento preventivo', etc.)."
                      value={briefDetails}
                      onChange={(e) => setBriefDetails(e.target.value)}
                      className="w-full bg-black/50 border border-gold/15 focus:border-gold rounded p-3 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 font-sans resize-none"
                    />
                  </div>
                </div>

                {/* Submitting Actions */}
                <div className="mt-8 pt-6 border-t border-gold/10 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={!clientName || !location || !serviceType}
                    className={`flex items-center gap-2 text-xs font-mono font-bold py-3 px-6 rounded tracking-wide cursor-pointer transition-all duration-350 shadow-md ${
                      (clientName && location && serviceType)
                        ? "bg-gradient-to-r from-gold to-gold-dark text-black hover:scale-105"
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
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold mb-2 shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Solicitação Processada!
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    Sua mensagem de agendamento foi gerada com sucesso. Você será redirecionado para o WhatsApp para enviá-la diretamente ao <strong>Dr. Maciel de Carvalho</strong>.
                  </p>
                </div>

                {/* Compiled visual resume receipt */}
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
                    <span className="text-gray-500 font-mono text-[10px] uppercase">Assunto</span>
                    <span className="text-gold font-medium">{serviceType}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button
                    onClick={resetForm}
                    className="flex-1 border border-gray-700 hover:border-gold/30 text-gray-400 hover:text-white px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Novo Agendamento
                  </button>

                  <a
                    href={`${whatsappLink}&text=${encodeURIComponent(
                      `Olá Dr. Maciel de Carvalho, gostaria de iniciar o atendimento para:\n*Serviço:* ${serviceType}\n*Nome:* ${clientName}\n*Localidade:* ${location}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-black font-bold uppercase tracking-wider px-6 py-3 rounded text-xs shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Enviar no WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Security / Confidentiality bar */}
        <div className="bg-gold/5 border-t border-gold/10 px-6 py-4 flex items-center justify-center gap-2 text-[10px] font-sans md:text-xs text-gold/80 italic text-center font-light">
          <Lock className="w-3.5 h-3.5 shrink-0" />
          <span>Informações processadas sob o dever inviolável de sigilo profissional com amparo do Estatuto da Advocacia.</span>
        </div>
      </div>
    </section>
  );
}
