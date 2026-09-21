import React from 'react';
import { PROFILE } from '../data/profile';
import { GraduationCap, Globe, UserCheck, Mail, Phone, Building2, Award, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educationSummary = [
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

  const certificationsSummary = [
    "Training in Monitoring and Evaluation — IOM (May 2021)",
    "CISA Certificate — Enabel / Université Lumière (2018 – 2019)",
    "Training in PHP & SQL Databases — NTSystem (Sep 2018)"
  ];

  const references = [
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

  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-900/40 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Languages & References
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Academic degrees in Software Engineering and Applied Statistics, language proficiencies, and institutional references.
          </p>
        </div>

        {/* Compact Education & Certifications Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degrees Summary */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Education Summary</h3>
                <p className="text-xs text-slate-400 font-mono">Degrees in Computer Science & Applied Statistics</p>
              </div>
            </div>

            <div className="space-y-4">
              {educationSummary.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-slate-900 border border-slate-800/80">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white leading-snug">{item.degree}</h4>
                    <p className="text-xs font-mono text-sky-400">{item.specialization}</p>
                    <p className="text-xs text-slate-400">{item.institution}</p>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950 text-teal-400 border border-slate-800 w-fit shrink-0">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Summary */}
          <div className="lg:col-span-5 bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Professional Certifications</h3>
                <p className="text-xs text-slate-400 font-mono">Specialized M&E, CISA & DB Systems</p>
              </div>
            </div>

            <div className="space-y-3 font-sans text-xs">
              {certificationsSummary.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Language Skills */}
        <div className="bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Language Skills</h3>
              <p className="text-xs text-slate-400 font-mono">International Multilingual Capabilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROFILE.languages.map((lang) => (
              <div key={lang.language} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">{lang.language}</span>
                <span className="text-sm font-bold text-white block">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Professional References */}
        <div className="bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Professional References</h3>
              <p className="text-xs text-slate-400 font-mono">Senior Leaders & International Organization Supervisors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {references.map((ref) => (
              <div key={ref.name} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="truncate">{ref.organization}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{ref.name}</h4>
                  <p className="text-xs text-slate-400 leading-snug">{ref.role}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Mail className="w-3 h-3 text-sky-400 shrink-0" />
                    <a href={`mailto:${ref.email}`} className="hover:text-sky-400 truncate">{ref.email}</a>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Phone className="w-3 h-3 text-teal-400 shrink-0" />
                    <span>{ref.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
