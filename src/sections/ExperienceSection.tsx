import React from 'react';
import { EXPERIENCES } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <span>Career Path & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Demonstrated track record of technical responsibilities, data quality governance, and operational impact.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-12 space-y-12 pl-6 sm:pl-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center text-sky-400 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-sky-400"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.category}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">{exp.title}</h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-sky-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-teal-300">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic border-l-2 border-sky-500/50 pl-3">
                  "{exp.summary}"
                </p>

                {/* Specific Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                    Core Technical Responsibilities
                  </h4>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Achievements / Impact */}
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-bold text-teal-400 uppercase font-mono tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Key Results & Process Improvements
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {exp.impactHighlights.map((imp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-teal-400 font-mono font-bold">›</span>
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-500">Skills Applied:</span>
                  {exp.skillsUsed.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-sky-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
