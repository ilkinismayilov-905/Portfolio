export type Link = {
  label: string;
  href: string;
  kind?: "email" | "linkedin" | "external";
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  summary?: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  role: string;
  context: string;
  contribution: string[];
  technologies: string[];
  outcome: string;
};

export type PortfolioData = {
  person: {
    name: string;
    location: string;
    headline: string;
    intro: string;
    email: string;
    linkedin: string;
  };
  highlights: string[];
  projects: ProjectItem[];
  experience: TimelineItem[];
  education: TimelineItem[];
  activities: TimelineItem[];
  skills: {
    technical: string[];
    professional: string[];
    languages: string[];
  };
};
