export interface ProjectMethodologyStep {
  label: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyContributions: string[];
  results: string[];
  methodology: ProjectMethodologyStep[];
  overview: string;
  problem: string;
  objectives: string[];
  approach: string;
  demoType?: 'interactive-chart' | 'data-pipeline' | 'power-bi' | 'crm-flow' | 'org-system';
  demoData?: any;
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholder?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  category: string;
  organization?: string;
  location: string;
  summary: string;
  responsibilities: string[];
  impactHighlights: string[];
  skillsUsed: string[];
}

export interface CompetencyCategory {
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface Technology {
  name: string;
  category: 'Languages & DB' | 'Analytics & BI' | 'Field & Spatial' | 'Development';
  icon: string;
  description: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  status: string;
  year?: string;
  details?: string;
  isMain?: boolean;
}

export interface ValueProp {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
}
