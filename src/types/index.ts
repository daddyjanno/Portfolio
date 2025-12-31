/* Common types for the portfolio */

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: 'Frontend' | 'Backend' | 'Fullstack';
  images: string[];
  details: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  category: 'Frontend' | 'Backend' | 'Tools' | 'Creative';
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon?: string | React.ReactNode;
}

export interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  type: 'Experience' | 'Education';
  startDate?: string;
  endDate?: string;
  description: string[];
  stack?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: 'Opportunité professionnelle' | 'Mission freelance' | 'Collaboration' | 'Autre';
  message: string;
}

export interface SoftSkill {
  name: string;
  description: string;
}
