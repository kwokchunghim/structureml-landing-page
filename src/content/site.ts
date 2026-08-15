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
