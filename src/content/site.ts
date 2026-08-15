export interface SiteLinks {
  githubUrl: string | null;
  contactEmail: string;
  founderGithubUrl: null;
  founderLinkedInUrl: null;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ResearchArea {
  number: string;
  title: string;
  question: string;
  tags: readonly string[];
}

export interface ResearchReference {
  title: string;
  citation: string;
  relevance: string;
  href: string;
}

export interface ResearchPositioning {
  introduction: string;
  thesis: string;
  references: readonly ResearchReference[];
}

export type WritingKind = "Research Note" | "Experiment" | "Paper" | "Code";
export type WritingStatus = "upcoming" | "published";
export type LinkDestination = "internal" | "github" | "arxiv" | "external";

export interface WritingLink {
  destination: LinkDestination;
  href: string;
}

export interface WritingEntry {
  title: string;
  kind: WritingKind;
  status: WritingStatus;
  year: number;
  summary: string;
  link?: WritingLink;
}

export type FounderProfileStatus = "complete" | "tbc";

export interface FounderProfile {
  name: string;
  role: "Co-founder";
  bio: string;
  status: FounderProfileStatus;
}

export const siteLinks: SiteLinks = {
  githubUrl: null,
  contactEmail: "info@structureml.com",
  founderGithubUrl: null,
  founderLinkedInUrl: null,
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Research", href: "#research" },
  { label: "Writing", href: "#writing" },
  { label: "Prototype", href: "#prototype" },
  { label: "About", href: "#about" },
];

export const researchPositioning: ResearchPositioning = {
  introduction:
    "Recent work shows that pretrained models can transfer across relational databases and prediction tasks. These systems make the direction credible; they do not close the gaps in context efficiency, relational–tabular integration or learning to make decisions.",
  thesis:
    "We believe structured-data foundation models are at a GPT-2 moment: the core capability is visible, but the field has not yet reached its GPT-3 breakthrough. Getting there will require advances in data, context efficiency, adaptation and decision learning—not scale alone.",
  references: [
    {
      title: "Relational Transformer",
      citation: "ICLR 2026",
      relevance:
        "Cross-database and cross-task relational prediction without downstream weight updates.",
      href: "https://openreview.net/forum?id=rpPtgMC5s9",
    },
    {
      title: "KumoRFM-2",
      citation: "Preprint · 2026",
      relevance:
        "Few-shot prediction across connected tables with task conditioning and scalable relational retrieval.",
      href: "https://arxiv.org/abs/2604.12596",
    },
    {
      title: "RT-J",
      citation: "Preprint · 2026",
      relevance:
        "Context-efficient relational prediction using task-relevant evidence retrieved from the database.",
      href: "https://openreview.net/forum?id=oQINTd9din",
    },
    {
      title: "OpenRFM",
      citation: "Preprint · 2026",
      relevance: "A dual-stage design combining relational and tabular in-context learning.",
      href: "https://arxiv.org/abs/2606.04320",
    },
  ],
};

export const researchAreas: readonly ResearchArea[] = [
  {
    number: "01",
    title: "Relational & Tabular Foundation Models",
    question:
      "How should relational representation learning and tabular task adaptation work together across schemas and tasks, and can they be unified without losing the strengths of either?",
    tags: ["RFM", "Tabular FM", "Representation Learning", "Task Adaptation"],
  },
  {
    number: "02",
    title: "Context-Efficient Adaptation",
    question:
      "Can models learn a query- and task-dependent sufficient context from labelled examples, relational neighbourhoods and schema signals—without paying full-context costs or losing rare, global and temporally relevant information?",
    tags: ["Retrieval", "Support Selection", "Context Efficiency", "Efficient Inference"],
  },
  {
    number: "03",
    title: "From Prediction to Decisioning",
    question:
      "How can pretrained structured-data models move from predicting outcomes to choosing actions under objectives, constraints and feedback—and safely balance exploration with exploitation as preferences and responses evolve?",
    tags: [
      "Decision Learning",
      "Contextual Bandits",
      "Exploration / Exploitation",
      "Constrained Optimization",
    ],
  },
];

export const writingEntries: readonly WritingEntry[] = [];

export const founders: readonly FounderProfile[] = [
  {
    name: "Tony Kwok",
    role: "Co-founder",
    bio: "Machine learning engineer based in London, interested in production ML, structured-data foundation models and learning systems.",
    status: "complete",
  },
  {
    name: "Billy Zhao",
    role: "Co-founder",
    bio: "Information TBC.",
    status: "tbc",
  },
];
