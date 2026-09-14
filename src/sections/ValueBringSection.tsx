import React from 'react';
import { VALUE_PROPS } from '../data/valueProps';
import { Brain, CheckCircle2, Binary, Target, Lightbulb, Sparkles } from 'lucide-react';

export const ValueBringSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-sky-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-teal-400" />;
      case 'Binary': return <Binary className="w-6 h-6 text-indigo-400" />;
      case 'Target': return <Target className="w-6 h-6 text-cyan-400" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-400" />;
      default: return <Brain className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="value" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <span>Organizational Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Bring to an Organization
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Key capabilities that convert data assets into operational momentum, data quality, and institutional impact.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((val) => (
            <div
              key={val.id}
              className="bg-slate-900/80 rounded-3xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 space-y-4 hover:shadow-xl"
            >
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 w-fit">
                {getIcon(val.icon)}
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-white tracking-tight">{val.title}</h3>
                <p className="text-xs font-bold text-sky-400 font-mono leading-snug">{val.summary}</p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2 border-t border-slate-800/80">
                {val.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
