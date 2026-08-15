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

export const researchAreas: readonly ResearchArea[] = [
  {
    number: "01",
    title: "Relational Foundation Models",
    question:
      "How can pretrained models learn across tables, entities, relationships and schemas, then generalize to unseen databases and prediction tasks?",
    tags: ["RFM", "Relational Learning", "RDL", "Pretraining"],
  },
  {
    number: "02",
    title: "Tabular & Structured ICL",
    question:
      "How can models infer new structured-data prediction tasks from labelled examples without requiring a new model-training pipeline for every task?",
    tags: ["Tabular FM", "PFN", "ICL", "Task Adaptation"],
  },
  {
    number: "03",
    title: "Efficient Context & Retrieval",
    question:
      "Can structured-data models learn which examples and relational context actually matter instead of conditioning on an entire training dataset?",
    tags: ["Retrieval", "Context Selection", "Scaling", "Efficient Inference"],
  },
];

export const writingEntries: readonly WritingEntry[] = [
  {
    title: "Does Tabular ICL Need the Entire Training Set?",
    kind: "Research Note",
    status: "upcoming",
    year: 2026,
    summary:
      "Full-context inference, retrieval and the scalability problem for structured-data foundation models.",
  },
  {
    title: "Dissecting Relational In-Context Learning",
    kind: "Research Note",
    status: "upcoming",
    year: 2026,
    summary:
      "What recent relational foundation models tell us about context construction, support labels and cross-database generalization.",
  },
  {
    title: "From Feature Engineering to Relational Foundation Models",
    kind: "Research Note",
    status: "upcoming",
    year: 2026,
    summary:
      "Why relational databases provide a natural substrate for end-to-end representation learning.",
  },
];

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
