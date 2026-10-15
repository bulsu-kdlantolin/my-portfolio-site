export interface TechSkill {
  name: string;
  role: string;
  logo: string;
  isMonochrome?: boolean;
  status?: string;
  isPrimary?: boolean;
}

export interface TechTier {
  id: string;
  title: string;
  badge: string;
  skills: TechSkill[];
}

