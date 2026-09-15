export type ProjectCategory = 'all' | 'accessibility' | 'web-app' | 'ai-rag' | 'frontend';

export type ProjectStatus = 'Active' | 'Completed' | 'In Development';

export interface ProjectDecision {
  title: string;
  rationale: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  docs?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'accessibility' | 'web-app' | 'ai-rag' | 'frontend';
  categoryLabel: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  technologies: string[];
  problem: string;
  goal: string;
  architecture: {
    overview: string;
    flow: string[];
  };
  keyDecisions: ProjectDecision[];
  challenges: ProjectChallenge[];
  learnings: string[];
  links: ProjectLinks;
}
