import React from 'react';
import { EDUCATION } from '../data/education';
import { PROFILE } from '../data/profile';
import { GraduationCap, BookOpen, CheckCircle2, Globe, UserCheck, Mail, Phone, Building2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Languages & References
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Formal degrees in Computer Science and Statistics, language proficiencies, and verified institutional references.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EDUCATION.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between space-y-6 ${
                item.isMain
                  ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-sky-500/40 shadow-xl'
                  : 'bg-slate-950/80 border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${item.isMain ? 'bg-sky-500/20 text-sky-400 border-sky-500/30' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
                    {item.isMain ? <GraduationCap className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-900 text-teal-400 border border-slate-800">
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug">{item.degree}</h3>
                  <p className="text-xs font-mono text-sky-400 mt-1">{item.field}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.institution}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-3 border-t border-slate-800/80 whitespace-pre-line">
                  {item.details}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Qualification</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated
                </span>
              </div>
            </div>
          ))}
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
