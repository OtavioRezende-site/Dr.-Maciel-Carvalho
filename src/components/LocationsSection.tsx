import { MapPin, Landmark, Building, Compass, Sparkles, Phone, ExternalLink } from "lucide-react";

interface LocationsSectionProps {
  whatsappLink: string;
}

export default function LocationsSection({ whatsappLink }: LocationsSectionProps) {
  const offices = [
    {
      city: "Brasília - DF",
      type: "Sede Principal",
      address: "SIG, Quadra 01, Edifício Barão do Rio Branco, Nº 153, Setor de Indústrias Gráficas.",
      detail: "Gabinete de crise estrategicamente posicionado próximo aos Tribunais Superiores (STF e STJ) para agilidade máxima e sustentações orais presenciais decisivas.",
      icon: Compass,
      gmapsQuery: "SIG Quadra 1 edificio Barao do Rio Branco 153 Brasilia",
    },
    {
      city: "Goiânia - GO",
      type: "Gabinete de Atendimento",
      address: "Edifício Orion Business & Health Complex, Sala 2503.",
      detail: "Instalada no edifício mais icônico e moderno da capital goiana, com facilidades premium, segurança privada corporativa e total privacidade para nossos constituintes.",
      icon: Landmark,
      gmapsQuery: "Edificio orion Business sala 2503 Goiania",
    },
    {
      city: "São Paulo - SP",
      type: "Gabinete Metropolitano",
      address: "Alphaville, Barueri - Região Metropolitana de São Paulo.",
      detail: "Gabinete de apoio executivo voltado ao atendimento empresarial, auditorias corporativas e reuniões com acionistas e investidores na região de negócios mais nobre de SP.",
      icon: Building,
      gmapsQuery: "Alphaville Barueri Sao Paulo",
    },
    {
      city: "Balneário Camboriú - SC",
      type: "Atendimento Sul",
      address: "Centro - Balneário Camboriú - Santa Catarina.",
      detail: "Estrutura dedicada ao atendimento ágil de empresários e preservação de patrimônio no polo marítimo e econômico de maior valorização imobiliária e privacidade do país.",
      icon: Sparkles,
      gmapsQuery: "Centro Balneario Camboriu",
    },
  ];

  return (
    <section id="locations-section" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
      {/* Background soft glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] radial-glow opacity-30 pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <span className="font-mono text-xs text-gold uppercase tracking-[0.25em] mb-4 inline-block">
          Presença Nacional Estratégica
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Nossos <span className="gold-gradient-text">Endereços</span> de Atendimento
        </h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
        <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Garantimos acolhimento e suporte pessoal de alta privacidade nas principais capitais e centros de negócios do Brasil, com ambientes reservados e sigilo rigoroso no tratamento das informações do cliente.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {offices.map((office, idx) => {
          const IconComponent = office.icon;
          return (
            <div 
              key={idx}
              className="border border-gold/15 bg-black/60 p-8 rounded-lg backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] group"
            >
              <div>
                {/* Header card info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded bg-gold/5 text-gold shrink-0 border border-gold/10 group-hover:bg-gold/10 transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-gold/80 px-2.5 py-1 bg-gold/5 rounded-full border border-gold/10 group-hover:border-gold/20 tracking-wider uppercase">
                    {office.type}
                  </span>
                </div>

                {/* City name */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {office.city}
                </h3>
                
                {/* Physical precise address */}
                <p className="font-sans text-sm text-gray-200 font-medium leading-relaxed mb-4 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span>{office.address}</span>
                </p>

                {/* Institutional description of the service and local scope */}
                <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-2 border-l border-gold/20 pl-4 py-1 italic">
                  {office.detail}
                </p>
              </div>

              {/* Botão de Rota Google Maps para facilitar e dar credibilidade real */}
              <div className="mt-8 pt-6 border-t border-gold/10 flex items-center justify-between">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.gmapsQuery)}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-medium text-gold/80 hover:text-gold flex items-center gap-1.5 uppercase tracking-wider transition-all duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Ver no mapa
                </a>
                <span className="font-mono text-[10px] text-gray-500">Gabinete Reservado</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Centralized scheduling banner */}
      <div className="mt-16 md:mt-24 border border-gold/15 bg-gradient-to-r from-black/80 via-gold/[0.02] to-black/80 p-8 md:p-12 rounded-lg backdrop-blur-md text-center max-w-4xl mx-auto">
        <h4 className="font-display text-lg md:text-2xl font-bold text-white mb-4">
          Agendamento sob Rigorosa Reserva
        </h4>
        <p className="font-sans text-xs md:text-sm text-gray-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Nossos encontros presenciais são realizados estritamente mediante agendamento prévio, garantindo intervalos discretos entre atendimentos para total integridade da privacidade dos nossos constituintes. No caso de urgência processual, nossa equipe se desloca de forma imediata até a sede de sua preferência.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`${whatsappLink}&text=Ol%C3%A1%20Dr.%20Carvalho%2C%20gostaria%20de%20agendar%20um%20atendimento%20presencial%20sob%20absoluta%20reserva.`}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold/100 to-gold/80 text-black font-sans text-xs md:text-sm font-semibold tracking-widest uppercase hover:from-white hover:to-white transition-all duration-300 rounded shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-none hover:scale-[1.02]"
          >
            Reservar Canal Presencial
          </a>
          <a
            href="tel:+556182773797"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white font-sans text-xs md:text-sm font-semibold tracking-widest uppercase border border-white/20 hover:border-gold hover:text-gold transition-all duration-300 rounded flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-gold shrink-0" /> Atendimento de Urgência
          </a>
        </div>
      </div>
    </section>
  );
}
