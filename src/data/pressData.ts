export interface PressArticle {
  id: string;
  title: string;
  subtitle: string;
  publisher: string;
  publisherLogo?: string;
  edition: string;
  author: string;
  date: string;
  category: string;
  badge: string;
  quote: string;
  summary: string;
  coverImage: string;
  originalUrl: string;
  instagramUrl?: string;
  content: string[];
  qa?: { q: string; a: string }[];
  highlights?: {
    title: string;
    text?: string;
    points?: string[];
  }[];
}

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: "lorena-talento-abre-portas",
    title: "Dr. Maciel de Carvalho: \"O talento abre portas. O trabalho derruba barreiras.\"",
    subtitle: "Advogado e administrador, Dr. Maciel de Carvalho lidera um escritório com atuação nacional e defende uma advocacia que alia estratégia, governança e inteligência jurídica para impulsionar o crescimento sustentável das empresas.",
    publisher: "Revista Lorena Magazine",
    edition: "Capa Business - Julho / 2026",
    author: "Por André Pontes",
    date: "30 de Julho de 2026",
    category: "Capa & Entrevista Exclusiva",
    badge: "Edição Nacional de Capa",
    quote: "O talento abre portas. O trabalho derruba barreiras.",
    summary: "Em entrevista de capa exclusiva para a Lorena Magazine, o Dr. Maciel de Carvalho revisita sua trajetória inspiradora desde os 16 anos em canteiros de obras até a liderança de um renomado escritório com atuação nacional, unindo Direito, Filosofia, Teologia e Gestão Empresarial.",
    coverImage: "/lorena_capa_2026.jpeg",
    originalUrl: "https://lorena.ig.com.br/categoria/magazine/dr-maciel-de-carvalho-talento-abre-portas",
    instagramUrl: "https://www.instagram.com/p/DbbTkXZji4Q/?igsh=MXdjMnFmdDU4aDNoMg==",
    content: [
      "Muito antes de comandar um escritório com atuação em diferentes estados brasileiros, a história do Dr. Maciel de Carvalho Rodrigues Medeiros começou em um canteiro de obras. Foi ali, aos 16 anos, que ele aprendeu lições de disciplina, responsabilidade e dedicação — princípios que se tornaram a base de sua trajetória e que, até hoje, norteiam sua forma de liderar pessoas, gerir negócios e exercer uma advocacia estratégica e humanizada.",
      "Primeiro advogado de sua família, Dr. Maciel fez do conhecimento seu principal patrimônio. Com uma formação multidisciplinar que reúne Filosofia, Teologia, Direito e Administração, ele desenvolveu uma visão estratégica que hoje diferencia sua atuação na liderança corporativa e no contencioso jurídico de alta complexidade.",
      "Abaixo, confira a íntegra da entrevista de capa concedida à Revista Lorena Magazine:"
    ],
    qa: [
      {
        q: "Sua trajetória profissional começou muito antes da advocacia. Como essas primeiras experiências influenciaram o profissional que você é hoje?",
        a: "Comecei a trabalhar aos 16 anos como ajudante de pedreiro. Foi um período que me ensinou disciplina, responsabilidade e respeito pelo trabalho. Depois vieram a tecnologia, a consultoria financeira e outras experiências que ampliaram minha visão sobre pessoas e negócios. Hoje percebo que nenhuma dessas etapas foi por acaso. Todas contribuíram para a forma como lidero equipes, atendo clientes e administro o escritório."
      },
      {
        q: "Você costuma dizer que o advogado precisa compreender o negócio antes do processo. Como essa visão surgiu?",
        a: "Ela nasceu durante os anos em que atuei como consultor financeiro. Eu acompanhava empresários tomando decisões importantes e percebia que muitas questões jurídicas eram analisadas sem considerar a realidade financeira e operacional das empresas. Entendi que o Direito não pode caminhar separado da gestão. Para oferecer soluções eficientes, primeiro é preciso entender como aquele negócio funciona."
      },
      {
        q: "O que diferencia o Maciel de Carvalho Advogados Associados de um escritório tradicional?",
        a: "Desde o início, nossa proposta foi administrar o escritório como uma empresa. Trabalhamos com governança, indicadores, gestão de processos, desenvolvimento de pessoas e planejamento estratégico. Isso nos permite oferecer uma advocacia mais preventiva, consultiva e próxima da realidade dos empresários. Nosso objetivo não é apenas resolver conflitos, mas ajudar nossos clientes a evitá-los."
      },
      {
        q: "Hoje o escritório atua em diferentes estados brasileiros. Quais foram os principais desafios para alcançar essa expansão?",
        a: "O maior desafio foi construir credibilidade. Não havia uma estrutura pronta ou uma carteira de clientes consolidada. O crescimento aconteceu de forma gradual, baseado na qualidade do trabalho, na confiança construída com cada cliente e na busca constante por aperfeiçoamento. A expansão foi consequência natural desse processo."
      },
      {
        q: "Sua formação reúne Filosofia, Teologia, Direito e Administração. De que forma essa diversidade contribui para sua atuação?",
        a: "Sem dúvida. A Filosofia desenvolveu meu pensamento crítico; a Teologia fortaleceu meus princípios éticos; a Administração ampliou minha visão estratégica; e o Direito fornece os instrumentos técnicos para transformar tudo isso em soluções jurídicas eficientes. Hoje consigo analisar um problema sob diferentes perspectivas, e isso faz muita diferença nas decisões de alto risco."
      },
      {
        q: "Você também atua na Comissão de Direitos Humanos da OAB e está em fase de construção do seu primeiro livro. Como essas iniciativas complementam sua carreira?",
        a: "Acredito que o conhecimento precisa ser compartilhado. A atuação institucional fortalece o compromisso com a cidadania e com as garantias fundamentais. Já o livro 'A Pena Além dos Muros' nasce da vontade de provocar reflexões sobre o sistema penal brasileiro e seus impactos sociais. São formas diferentes de contribuir com a sociedade."
      },
      {
        q: "Muito se fala sobre gestão nas empresas. Esse conceito também é indispensável dentro da advocacia?",
        a: "Sem dúvida. A advocacia moderna precisa ser administrada com alto nível de profissionalismo. Um escritório depende de processos bem definidos, tecnologia, desenvolvimento de pessoas e planejamento financeiro. Quando a gestão é eficiente, conseguimos entregar mais qualidade, agilidade e melhores resultados para os clientes."
      },
      {
        q: "Na sua avaliação, quais são os maiores erros que empresários cometem quando o assunto é segurança jurídica?",
        a: "Muitos ainda procuram um advogado apenas quando o problema já aconteceu. A prevenção continua sendo um dos maiores desafios do mercado brasileiro. Empresas que incorporam a estratégia jurídica desde o planejamento inicial conseguem reduzir custos, evitar litígios e tomar decisões com muito mais segurança."
      },
      {
        q: "Como você define sua filosofia de liderança?",
        a: "Liderar é desenvolver pessoas. Nenhuma empresa cresce de forma sustentável se o conhecimento estiver concentrado em uma única pessoa. Procuro construir uma cultura baseada em confiança, responsabilidade, aprendizado contínuo e valorização da equipe. São as pessoas que sustentam qualquer organização."
      },
      {
        q: "Depois de quase três décadas de trajetória profissional, qual legado você espera construir?",
        a: "Espero ser lembrado como alguém que mostrou que o Direito pode ser um agente de desenvolvimento para empresas e para a sociedade. Minha trajetória sempre foi construída pelo trabalho, pelo estudo e pela busca constante por evolução. Existe uma frase que resume tudo isso e que procuro levar para a vida: Nada resiste ao trabalho."
      },
      {
        q: "Se você se definisse em uma frase, qual seria?",
        a: "\"O talento abre portas. O trabalho derruba barreiras.\""
      }
    ]
  },
  {
    id: "lorena-direito-tributario",
    title: "Dr. Maciel de Carvalho: o advogado que revoluciona o direito tributário ao antecipar soluções na esfera administrativa",
    subtitle: "A atuação estratégica do Dr. Maciel de Carvalho na transformação do contencioso tributário por meio da via administrativa preventiva e soluções antes do Judiciário.",
    publisher: "Portal iG / Lorena Magazine (M.A.G)",
    edition: "Empreendedorismo & Negócios - Março / 2026",
    author: "Por Heloisa Santos",
    date: "02 de Março de 2026",
    category: "Empreendedorismo & Direito Tributário",
    badge: "Análise Especializada iG",
    quote: "A via administrativa permite o diálogo técnico direto com a autoridade fiscal, evitando a exposição do contribuinte a longas demandas no Poder Judiciário.",
    summary: "Reportagem especial analisando como a atuação preventiva e a profunda governança administrativa do Dr. Maciel de Carvalho revolucionam o contencioso tributário, eliminando autos de infração e resguardando o caixa corporativo.",
    coverImage: "/lorena_capa_2026.jpeg",
    originalUrl: "https://lorena.ig.com.br/categoria/magazine/dr-maciel-de-carvalho-talento-abre-portas",
    content: [
      "Em um cenário de elevada complexidade normativa, constante mutação legislativa e crescente rigor fiscalizatório, o Direito Tributário brasileiro consolidou-se como um dos ramos mais técnicos e estratégicos da advocacia contemporânea.",
      "Nesse contexto, destaca-se o trabalho do Dr. Maciel de Carvalho, profissional que atua não apenas de forma reativa, mas de maneira preventiva e estrutural, reorganizando a vida fiscal de seus clientes antes que o litígio se materialize no Poder Judiciário. Trata-se de uma atuação que privilegia a via administrativa como campo primário de resolução de conflitos, reduzindo passivos, evitando autuações e preservando a saúde financeira das corporações."
    ],
    highlights: [
      {
        title: "A Atuação Estratégica na Esfera Administrativa",
        text: "O contencioso tributário brasileiro é tradicionalmente marcado por elevada litigiosidade. Contudo, profissionais de vanguarda têm demonstrado que a verdadeira eficiência jurídica reside na prevenção do litígio. Na esfera federal, por exemplo, a atuação junto à Receita Federal do Brasil e ao Conselho Administrativo de Recursos Fiscais (CARF) exige domínio técnico aprofundado do Código Tributário Nacional, da Lei nº 9.784/1999 (Processo Administrativo Federal) e do Decreto nº 70.235/1972 (Processo Administrativo Fiscal)."
      },
      {
        title: "Instrumentos Preventivos e Defesa Fiscal Administrativa",
        text: "Por meio da impugnação administrativa fundamentada, é possível afastar lançamentos indevidos sem a necessidade de garantias contratuais ou depósitos judiciais. Entre as principais medidas de atuação preventiva destacam-se:",
        points: [
          "Impugnação técnica de autos de infração com fundamentação pericial e contábil;",
          "Demonstração de vícios formais e materiais na lavratura do lançamento fiscal;",
          "Sustentação de decadência e prescrição na via administrativa;",
          "Pleito de revisão de enquadramento e reenquadramento tributário com restituição;",
          "Requerimento de retificação de obrigações acessórias sem imposição de penalidades;",
          "Formulação de pedidos estratégicos de compensação e ressarcimento de créditos."
        ]
      },
      {
        title: "Planejamento Tributário e Compliance Fiscal Corporativo",
        text: "O trabalho preventivo liderado por Dr. Maciel de Carvalho combina auditoria minuciosa e estruturação de governança tributária. As ações englobam:",
        points: [
          "Diagnóstico fiscal completo com auditoria preventiva de processos e obrigações;",
          "Revisão estratégica do regime tributário (Lucro Real, Lucro Presumido ou Simples Nacional);",
          "Mapeamento e recuperação segura de créditos tributários acumulados;",
          "Reestruturação societária direcionada à eficiência fiscal sustentável;",
          "Implementação de programas de compliance tributário e mitigação de contingências."
        ]
      },
      {
        title: "Soluções Antes do Judiciário: Economia e Segurança Jurídica",
        text: "Ao solucionar controvérsias ainda na fase administrativa, o advogado preserva a previsibilidade financeira do cliente e evita a exposição a longas demandas perante o Poder Judiciário (eliminando custas processuais, honorários periciais judiciais e morosidade). Além disso, a via administrativa permite o diálogo técnico qualificado diretamente com a autoridade fiscal."
      },
      {
        title: "Conclusão: Transformando Passivos em Oportunidades",
        text: "O advogado que revoluciona o Direito Tributário é aquele que compreende a centralidade da esfera administrativa como palco decisivo da defesa fiscal. Sua atuação técnica, preventiva e estratégica transforma passivos em oportunidades de reorganização, reduz riscos jurídicos e consolida a estabilidade financeira de seus clientes. Mais do que resolver processos, ele estrutura soluções sustentáveis."
      }
    ]
  },
  {
    id: "inmagazine-direito-tributario-reestruturacao",
    title: "Dr. Maciel de Carvalho: Engenharia Tributária, Superação de Endividamento e Gestão Bancária e Empresarial",
    subtitle: "Matéria no Portal iG (InMagazine) destaca as soluções ágeis para recuperação de passivos financeiros, captação de recursos BNDES/FCO e reestruturação preventiva de empresas.",
    publisher: "InMagazine / Portal iG",
    edition: "Empreendedorismo & Negócios",
    author: "Redação InMagazine",
    date: "2026",
    category: "Empreendedorismo & Direito Bancário/Tributário",
    badge: "Publicação InMagazine iG",
    quote: "A chave para superar o endividamento e os passivos fiscais está na agilidade estratégica e na negociação preventiva, preservando o fluxo de caixa e a operação corporativa.",
    summary: "Reportagem no InMagazine (Portal iG) analisa a atuação revolucionária do Dr. Maciel de Carvalho no assessoramento a empresários, combinando governança bancária, captação de recursos subsidiados do Governo Federal (BNDES/FCO) e redução ágil de passivos tributários.",
    coverImage: "/dr_maciel_portrait.jpg",
    originalUrl: "https://inmagazine.ig.com.br/empreendedorismo/dr-maciel-carvalho-advogado-direito-tributario",
    content: [
      "Com uma sólida trajetória de mais de duas décadas de atuação na advocacia bancária, tributária e empresarial, o Dr. Maciel de Carvalho tornou-se uma referência nacional no assessoramento a empreendedores que buscam reestruturação financeira, superação de dívidas e conformidade fiscal sustentável.",
      "Matéria publicada no caderno de Empreendedorismo do portal InMagazine (iG) evidencia sua metodologia voltada a soluções céleres e eficientes, que permitem aos empresários renegociar passivos bancários e tributários sem comprometer o fluxo de caixa nem paralisar as atividades da empresa."
    ],
    highlights: [
      {
        title: "Desalavancagem e Reestruturação de Passivos Bancários e Financeiros",
        text: "Atuação focada na revisão técnica de contratos de financiamento, repactuação de garantias e renegociação de dívidas perante instituições financeiras, viabilizando a saúde financeira e a continuidade dos negócios.",
        points: [
          "Revisão técnica de encargos em contratos bancários e de capital de giro;",
          "Negociação direta e mediação preventiva de passivos com credores;",
          "Preservação do caixa operacional e proteção de ativos essenciais da empresa."
        ]
      },
      {
        title: "Captação e Gestão de Recursos Subsidiados (BNDES e FCO)",
        text: "Ampla expertise na intermediação e viabilização de recursos governamentais subsidiados via BNDES e FCO, auxiliando empresas na estruturação de projetos de expansão e readequação de capital.",
        points: [
          "Análise de elegibilidade e estruturação de projetos para linhas BNDES e FCO;",
          "Acompanhamento técnico de processos de liberação e governança contratual;",
          "Otimização da estrutura de capital corporativo com taxas de juros incentivadas."
        ]
      },
      {
        title: "Prevenção Fiscal e Proteção Patrimonial Corporativa",
        text: "Integração entre o contencioso tributário administrativo e soluções de governança societária para afastar autuações fiscais e proteger o patrimônio empresarial.",
        points: [
          "Mitigação de riscos fiscais e solução de controvérsias na esfera administrativa;",
          "Estratégia societária preventiva e proteção do patrimônio dos sócios;",
          "Implementação de rotinas de compliance tributário e financeiro."
        ]
      }
    ]
  }
];
