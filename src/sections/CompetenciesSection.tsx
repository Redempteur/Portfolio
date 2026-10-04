import React from 'react';
import { COMPETENCIES } from '../data/competencies';
import { BarChart3, Database, Target, Smartphone, MapPin, CheckCircle2 } from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-sky-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-teal-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-emerald-400" />;
      default:
        return <BarChart3 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <span>Domain Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Professional Competencies
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Methodological skills structured into five essential domain pillars for organizational excellence.
          </p>
        </div>

        {/* Competency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETENCIES.map((cat, idx) => (
            <div
              key={cat.title}
              className={`bg-slate-900/90 rounded-3xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-900/10 flex flex-col justify-between space-y-6 ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Header with Icon */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Pillar 0{idx + 1}</span>
                    <h3 className="text-base font-extrabold text-white tracking-tight">{cat.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="font-sans font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/50 text-[11px] font-mono text-slate-500 flex justify-between">
                <span>{cat.skills.length} Specialized Competencies</span>
                <span className="text-sky-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
