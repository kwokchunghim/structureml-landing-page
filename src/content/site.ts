export interface SiteLinks {
  githubUrl: string | null;
  contactEmail: string;
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
  href: string;
}

export interface ResearchPositioning {
  thesis: string;
  tabularReferences: readonly ResearchReference[];
  relationalReferences: readonly ResearchReference[];
  integrationReferences: readonly ResearchReference[];
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

export interface FounderProfile {
  name: string;
  role: "Co-founder";
  linkedinUrl: string;
}

export const siteLinks: SiteLinks = {
  githubUrl: null,
  contactEmail: "info@structureml.com",
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Research", href: "#research" },
  { label: "Writing", href: "#writing" },
  { label: "Prototype", href: "#prototype" },
  { label: "About", href: "#about" },
];

export const researchPositioning: ResearchPositioning = {
  thesis:
    "We believe structured-data foundation models are at a GPT-2 moment: the core capability is visible, but the field has not yet reached its GPT-3 breakthrough. Getting there will require advances in data, context efficiency, adaptation and decision learning—not scale alone.",
  tabularReferences: [
    {
      title: "TabPFN v2",
      citation: "Nature · 2025",
      href: "https://doi.org/10.1038/s41586-024-08328-6",
    },
    {
      title: "TabICL",
      citation: "ICML · 2025",
      href: "https://proceedings.mlr.press/v267/qu25d.html",
    },
  ],
  relationalReferences: [
    {
      title: "Relational Transformer",
      citation: "ICLR 2026",
      href: "https://openreview.net/forum?id=rpPtgMC5s9",
    },
    {
      title: "KumoRFM-2",
      citation: "Preprint · 2026",
      href: "https://arxiv.org/abs/2604.12596",
    },
  ],
  integrationReferences: [
    {
      title: "OpenRFM",
      citation: "Preprint · 2026",
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
    linkedinUrl: "https://www.linkedin.com/in/tonykwokch/",
  },
  {
    name: "Billy Zhao",
    role: "Co-founder",
    linkedinUrl: "https://www.linkedin.com/in/yanhong-billy-zhao-9913ba140/",
  },
];
