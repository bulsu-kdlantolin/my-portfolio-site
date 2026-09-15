export interface TechSkill {
  name: string;
  role: string;
  experienceContext: string;
  tags?: string[];
}

export interface TechTier {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: TechSkill[];
}
