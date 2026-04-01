// ─────────────────────────────────────────────────────────────────────────────
// DADOS DO PORTFÓLIO — edite aqui para atualizar o site
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Mario Henrique",
  role: "AI Engineer",
  roleSecondary: "Software Engineer (Backend)",
  location: "Feira de Santana, BA — Brasil · Remoto",
  pitch:
    "Especialista em unir engenharia de backend robusta com o estado da arte em IA para escalar operações de vendas e experiência do cliente.",
  email: "mariohenrique.dev@gmail.com",
  phone: "+55 75 99949-5925",
  linkedin: "https://www.linkedin.com/in/mario-henrique-61b44023a/",
  // Substitua pela URL da sua foto ou coloque o arquivo em /public/photo.jpg
  photo: "/photo.jpg",
  cvUrl: "/mario-henrique-cv.pdf",
  about: [
    "Construo sistemas de IA que saem do protótipo e vão para produção. Minha especialidade está na interseção entre engenharia de backend orientada a eventos e IA aplicada — LLMs, RAG, agentes autônomos e orquestração de workflows complexos.",
    "Na Varejo Hub, arquitetei uma plataforma SaaS multi-tenant que processa mais de 400 mil mensagens/mês, reduzindo 80% do trabalho manual, melhorando o SLA em 94% e aumentando a conversão de leads em 40% via automação inteligente.",
    "Se existe lacuna entre o modelo e o negócio, eu construo a ponte.",
  ],
  stats: [
    { value: "400k+", label: "mensagens/mês" },
    { value: "↓80%", label: "carga manual" },
    { value: "↓94%", label: "SLA (4h→15min)" },
    { value: "↑40%", label: "conversão de leads" },
  ],
};

// ─── STACK ───────────────────────────────────────────────────────────────────

export const stackGroups = [
  {
    title: "IA & LLMs",
    icon: "🧠",
    items: [
      "OpenAI API (GPT, Whisper)",
      "Claude (Anthropic)",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Agentic Workflows",
      "MCP",
      "NLP",
      "Vetorização de Dados",
    ],
  },
  {
    title: "Backend & Arquitetura",
    icon: "⚙️",
    items: [
      "Node.js",
      "TypeScript",
      "APIs REST",
      "Microsserviços",
      "System Design",
      "Sistemas Distribuídos",
      "Arquitetura Orientada a Eventos",
      "Escalabilidade",
    ],
  },
  {
    title: "Mensageria",
    icon: "📨",
    items: ["Apache Kafka", "RabbitMQ", "AWS SQS"],
  },
  {
    title: "Bancos de Dados",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase (pgvector)"],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Git / GitLab"],
  },
  {
    title: "Automação & Ferramentas",
    icon: "🔧",
    items: [
      "n8n",
      "Chatwoot",
      "Twilio",
      "VAPI",
      "Ultravox",
      "Flowise",
      "Dify",
      "Jira",
      "ClickUp",
    ],
  },
];

// ─── PROJETOS ─────────────────────────────────────────────────────────────────
// Para adicionar um novo projeto, copie um bloco abaixo e cole no array.

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: "production" | "r&d" | "open-source";
}

export const projects: Project[] = [
  {
    title: "Plataforma Multi-Agente & Voice AI",
    subtitle: "Atendimento omnichannel autônomo",
    description:
      "Sistema omnichannel com múltiplos agentes especializados (SDR, Suporte, Gerente, Devoluções) e integração de Voice AI para chamadas inbound/outbound em tempo real.",
    stack: ["n8n", "LangChain", "OpenAI", "Twilio", "VAPI", "Ultravox", "Redis", "Chatwoot"],
    highlights: [
      "Roteamento semântico por intenção via LLMs integrados ao CRM",
      "Automação total do ciclo de vendas e suporte sem alucinações",
      "Chamadas de voz com latência ultrabaixa (Twilio + VAPI + Ultravox)",
      "Contexto multi-usuário em grupos com memória persistente",
    ],
    status: "production",
  },
  {
    title: "Infraestrutura RAG & OSINT B2B",
    subtitle: "Pipeline de enriquecimento de dados em larga escala",
    description:
      "Pipeline ETL com vetorização contínua no Supabase (pgvector) para garantir contexto atualizado aos LLMs, combinado com web scraping semântico para enriquecimento de dados B2B.",
    stack: ["Supabase", "pgvector", "PostgreSQL", "n8n", "APIs REST", "OpenAI Embeddings"],
    highlights: [
      "Redução significativa de hallucinations via RAG contextualizado",
      "Scraping automatizado para enriquecimento B2B em larga escala",
      "Pipelines ETL com vetorização contínua e incremental",
      "Integração direta com agentes de IA para acesso em tempo real",
    ],
    status: "production",
  },
  {
    title: "Integração MCP & Auditoria Multimodal",
    subtitle: "Model Context Protocol + processamento de áudio/texto",
    description:
      "Implementação do Model Context Protocol (MCP) para conexão direta entre LLMs e sistemas corporativos, com automação de auditorias de qualidade em texto e áudio.",
    stack: ["Claude (Anthropic)", "MCP", "MongoDB", "Node.js", "Whisper"],
    highlights: [
      "Integração LLM ↔ sistemas corporativos sem camadas desnecessárias",
      "Auditoria automática de qualidade em texto e áudio",
      "Lifecycle orchestration e garbage collection de contexto",
      "Otimização de confiabilidade em ambientes distribuídos",
    ],
    status: "r&d",
  },
  {
    title: "SaaS Multi-Tenant — Varejo Hub",
    subtitle: "Plataforma de atendimento e vendas em escala",
    description:
      "Arquitetura SaaS multi-tenant com microsserviços orientados a eventos, processando 400k+ mensagens/mês para múltiplos clientes com regras de negócio isoladas.",
    stack: ["Kafka", "RabbitMQ", "SQS", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    highlights: [
      "400k+ mensagens/mês com uptime > 99.9%",
      "Self-healing systems e heartbeat anti-hibernação",
      "Automação via RAG: ↓80% esforço manual de triagem",
      "SLA otimizado em 94%: de 4h para 15 minutos",
    ],
    status: "production",
  },
];

// ─── EXPERIÊNCIA ──────────────────────────────────────────────────────────────

export const experiences = [
  {
    role: "AI Engineer",
    company: "Varejo Hub",
    period: "Jun 2024 — Atual",
    current: true,
  },
  {
    role: "Analista de Suporte Técnico / Automação",
    company: "Wellon Digital",
    period: "Mai 2024 — Ago 2025",
    current: false,
  },
  {
    role: "Assistente de Logística / BI",
    company: "Unimarka",
    period: "Jul 2023 — Jul 2024",
    current: false,
  },
  {
    role: "Analista de Redes",
    company: "Rei Informática",
    period: "Jan 2021 — Fev 2023",
    current: false,
  },
];
