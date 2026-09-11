/**
 * Types representing criminal defense services and testimonials for Dr. Maciel de Carvalho
 */

export interface LegalService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "ShieldAlert" | "Gavel" | "Scale" | "FileCheck" | "Users" | "Clock";
  bullets: string[];
}

export interface Testimonial {
  id: string;
  clientInitials: string;
  roleOrLocation: string;
  caseType: string;
  outcome: string;
  text: string;
}

export interface CredentialCard {
  id: string;
  number: string;
  label: string;
  sublabel: string;
}

export const CREDENTIALS: CredentialCard[] = [
  {
    id: "cred-1",
    number: "Urg.",
    label: "Atendimento de Urgência",
    sublabel: "Atendimento a situações urgentes mediante agendamento prévio",
  },
  {
    id: "cred-2",
    number: "+15",
    label: "Anos de Carreira Jurídica",
    sublabel: "Atuação criminal fundamentada e pautada na ética profissional",
  },
  {
    id: "cred-3",
    number: "OAB",
    label: "Presidente da Comissão",
    sublabel: "Presidente da Comissão de Direitos Humanos da OAB/GO",
  },
  {
    id: "cred-4",
    number: "DF",
    label: "Tribunais Superiores",
    sublabel: "Acompanhamento e sustentação em recursos perante o STJ e STF",
  },
];

export const LEGAL_SERVICES: LegalService[] = [
  {
    id: "service-flagrante",
    title: "Assistência em Procedimentos Urgentes",
    tagline: "Atendimento técnico criminal sob agendamento",
    description: "Acompanhamento especializado em procedimentos preliminares, flagrantes e realização de Audiência de Custódia técnica, visando resguardar as garantias constitucionais do representado.",
    iconName: "Clock",
    bullets: [
      "Acompanhamento especializado em sede policial sob agendamento direto",
      "Fiscalização técnica e estrita observância das garantias fundamentais",
      "Apresentação de medidas cabíveis em audiência de custódia",
      "Atuação focada na análise da legalidade de restrições de liberdade",
    ],
  },
  {
    id: "service-juri",
    title: "Atuação Especializada no Tribunal do Júri",
    tagline: "Sustentação oral técnica e fundamentada no plenário",
    description: "Atuação em plenário para sustentação técnica e defesa das garantias constitucionais nos crimes dolosos contra a vida, com foco na correta valoração das provas.",
    iconName: "Gavel",
    bullets: [
      "Estudo exaustivo das provas, perícias e laudos constantes dos autos",
      "Sustentação baseada na argumentação estritamente técnica e jurisprudencial",
      "Inquirição fundamentada de testemunhas e assistentes técnicos",
      "Defesa do devido processo legal e presunção constitucional de inocência",
    ],
  },
  {
    id: "service-tribunais",
    title: "Recursos nos Tribunais Superiores (STJ & STF)",
    tagline: "Atuação em recursos aos Tribunais Superiores com foco na correta aplicação da lei e arguição de nulidades",
    description: "Elaboração técnica e interposição de Recursos Especiais ao STJ e Recursos Extraordinários ao STF. Sustentação oral baseada na jurisprudência qualificada das Cortes Superiores.",
    iconName: "Scale",
    bullets: [
      "Elaboração de Recursos Especiais ao STJ e Recursos Extraordinários ao STF",
      "Arguição técnica de nulidades baseada nas normas processuais e legais",
      "Impetração técnica de Habeas Corpus contra ilegalidades patentes",
      "Análise minuciosa de acórdãos para adequação às teses consolidadas",
    ],
  },
  {
    id: "service-maria-penha",
    title: "Defesa Técnica na Lei Maria da Penha",
    tagline: "Defesa técnica em procedimentos de violência doméstica e familiar, com observância do contraditório e da ampla defesa",
    description: "Atuação especializada em inquéritos policiais e processos judiciais decorrentes de violência doméstica. Defesa pautada na legalidade, sigilo absoluto e busca do equilíbrio processual.",
    iconName: "ShieldAlert",
    bullets: [
      "Análise técnica de cabimento de medidas protetivas e pleito de revogação",
      "Defesa técnica em inquéritos policiais e ações penais correlatas",
      "Atuação pautada pelo decoro, urbanidade e sigilo profissional rígido",
      "Preservação de garantias individuais ao longo do trâmite processual",
    ],
  },
];

export const OTHER_SERVICES: LegalService[] = [
  {
    id: "service-empresarial",
    title: "Direito Empresarial",
    tagline: "Segurança jurídica e mitigação de riscos corporativos",
    description: "Assessoria consultiva e contenciosa especializada para empresas. Atuação em conformidade legal (compliance), blindagem patrimonial, estruturação de contratos complexos e resolução de disputas societárias.",
    iconName: "Users",
    bullets: [
      "Blindagem jurídica de sócios e patrimônio empresarial",
      "Elaboração e revisão de contratos corporativos de alta complexidade",
      "Defesa estratégica em litígios societários e comerciais",
      "Assessoria preventiva e programas de integridade (compliance)"
    ]
  },
  {
    id: "service-tributario",
    title: "Direito Tributário",
    tagline: "Defesa e planejamento fiscal estratégico",
    description: "Atuação focada na mitigação de passivos tributários e defesa contra execuções fiscais. Planejamento tributário estratégico para redução legal da carga tributária e recuperação de créditos.",
    iconName: "Scale",
    bullets: [
      "Defesa administrativa e judicial contra autos de infração e execuções fiscais",
      "Planejamento tributário estratégico para otimização fiscal de empresas",
      "Ações judiciais para recuperação de tributos pagos indevidamente",
      "Consultoria especializada sobre regimes fiscais e benefícios tributários"
    ]
  },
  {
    id: "service-civel",
    title: "Direito Cível",
    tagline: "Soluções estratégicas para litígios civis complexos",
    description: "Patrocínio de interesses em disputas cíveis de alta complexidade. Atuação especializada em direito de propriedade, responsabilidade civil, obrigações, contratos e indenizações de grande porte.",
    iconName: "FileCheck",
    bullets: [
      "Ações indenizatórias de alta complexidade e responsabilidade civil",
      "Resolução de conflitos de propriedade e posse imobiliária",
      "Execução de títulos de crédito e recuperação de ativos",
      "Consultoria em direito das obrigações e relações contratuais"
    ]
  },
  {
    id: "service-bancario",
    title: "Direito Bancário",
    tagline: "Equilíbrio em relações financeiras e contratuais",
    description: "Defesa de pessoas físicas e jurídicas contra práticas abusivas de instituições financeiras. Análise minuciosa de contratos de financiamento, juros e renegociação estratégica de dívidas bancárias.",
    iconName: "Clock",
    bullets: [
      "Ações revisionais de juros e cláusulas contratuais abusivas",
      "Defesa em execuções de contratos de financiamento e mútuos bancários",
      "Renegociação extrajudicial e judicial de grandes passivos financeiros",
      "Proteção de ativos e garantias contra constrições bancárias ilegais"
    ]
  },
  {
    id: "service-familia",
    title: "Família e Sucessões",
    tagline: "Mediação e planejamento patrimonial familiar com absoluto sigilo",
    description: "Atuação humanizada e estritamente reservada na resolução de conflitos familiares e sucessórios. Especialista em inventários complexos, planejamento sucessório e proteção de bens familiares.",
    iconName: "Users",
    bullets: [
      "Planejamento sucessório, testamentos e estruturação de holdings familiares",
      "Inventários judiciais e extrajudiciais de alta expressão patrimonial",
      "Divórcios consensuais e litigiosos com partilha estratégica de bens",
      "Ações de alimentos, guarda e proteção de direitos de herdeiros"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientInitials: "R. M.",
    roleOrLocation: "Empresário - Goiânia / DF",
    caseType: "Operação Policial",
    outcome: "Ordem Concedida para Reconhecimento de Nulidade",
    text: "O Dr. Maciel atuou de forma estritamente técnica. No STF, demonstramos uma nulidade referente às provas produzidas de forma desconforme com a legislação, resultando no trancamento do feito. Excelente conduta profissional e integridade acadêmica.",
  },
  {
    id: "test-2",
    clientInitials: "J. S. F.",
    roleOrLocation: "Goiânia",
    caseType: "Atuação em Plenário do Júri",
    outcome: "Absolvição pelo Conselho de Sentença",
    text: "Minha defesa foi realizada com profundo respeito às provas e à técnica processual penal aplicável. A argumentação jurídica do Dr. Maciel no Tribunal do Júri assegurou uma absolvição que restabeleceu a dignidade da minha família.",
  },
  {
    id: "test-3",
    clientInitials: "P. A. T.",
    roleOrLocation: "Brasília",
    caseType: "Impetração de Habeas Corpus",
    outcome: "Habeas Corpus Concedido em Sede Recursal",
    text: "A equipe impetrou Habeas Corpus demonstrando tecnicamente a ausência dos requisitos legais para a manutenção da prisão. Atendimento profissional, ético e dedicação integral no acompanhamento de medidas sob juízo.",
  },
];
