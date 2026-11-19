export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  year: string;
  client?: string;
  artStyle: 'dome-lavender' | 'sphere-lime' | 'orb-lilac' | 'horizon-sunset';
  overview?: string;
  deliverables?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details?: string[];
}

export interface SiteContent {
  brandName: string;
  heroKicker: string;
  heroHeadline: string;
  aboutTitle: string;
  aboutHeadline: string;
  servicesTitle: string;
  services: ServiceItem[];
  projectsTitle: string;
  projects: ProjectItem[];
  bannerText: string;
  addressLine1: string;
  addressLine2: string;
  email: string;
  phone: string;
  copyright: string;
}
