import { EducationItem } from '../types';

export interface EducationSummaryItem {
  degree: string;
  specialization: string;
  institution: string;
  period: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  organization: string;
  email: string;
  phone: string;
}

export const EDUCATION_SUMMARY: EducationSummaryItem[] = [
  {
    degree: "Master's Degree — Software Engineering",
    specialization: "Machine Learning / Data Mining / AI",
    institution: "Université des Grands Lacs, Bujumbura",
    period: "2022 – 2025"
  },
  {
    degree: "Bachelor's Degree — Computer Science",
    specialization: "Information Management & Mobile Programming",
    institution: "Université des Grands Lacs, Bujumbura",
    period: "2012 – 2016"
  },
  {
    degree: "Bachelor's Degree — Applied Statistics for Economics",
    specialization: "Statistics & Demography",
    institution: "Université du Burundi, Bujumbura",
    period: "2004 – 2008"
  }
];

export const CERTIFICATIONS_SUMMARY: string[] = [
  "Training in Monitoring and Evaluation — IOM (May 2021)",
  "CISA Certificate — Enabel / Université Lumière (2018 – 2019)",
  "Training in PHP & SQL Databases — NTSystem (Sep 2018)"
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Mr. SINDAYAMAZE Guy Florin",
    role: "Senior Information Management Officer",
    organization: "International Organization for Migration (IOM)",
    email: "Gsindayamaze@iom.int",
    phone: "+257 62 165 149"
  },
  {
    name: "Dr. NTUNZWENIMANA Charles",
    role: "Field Officer Manager",
    organization: "FHI 360 (Family Health International)",
    email: "ntunzwenimanacha@gmail.com",
    phone: "+257 79 318 611"
  },
  {
    name: "Mr. Olivier NTAMATUNGIRO",
    role: "Senior M&E Officer",
    organization: "UN World Food Programme (UNWFP) / PSI",
    email: "olivierntamatungiro2016@gmail.com",
    phone: "+257 79 715 000"
  },
  {
    name: "Mr. Sylvère BAREGENSABE",
    role: "Senior M&E Specialist",
    organization: "United Nations Population Fund (UNFPA)",
    email: "sbaregensabe@unfpa.org",
    phone: "+257 79 318 611"
  }
];

