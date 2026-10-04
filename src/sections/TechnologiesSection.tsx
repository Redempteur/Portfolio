import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/technologies';
import { FileCode2, Database, PieChart, Table, ClipboardCheck, Map, Cpu, Server, Code, GitBranch, Terminal } from 'lucide-react';

export const TechnologiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Analytics & BI', 'Languages & DB', 'Field & Spatial', 'Development'];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-sky-400" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-amber-400" />;
      case 'Table': return <Table className="w-5 h-5 text-emerald-400" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-cyan-400" />;
      case 'Map': return <Map className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Code': return <Code className="w-5 h-5 text-sky-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      default: return <Terminal className="w-5 h-5 text-sky-400" />;
    }
  };

  const filteredTech = activeCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === activeCategory);

  return (
    <section id="technologies" className="py-20 lg:py-28 bg-slate-900/40 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <span>Technical Toolstack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies & Analytical Tools
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Software packages, programming languages, database management systems, and survey platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-900/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 hover:border-sky-500/40 transition-all hover:scale-[1.02] flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getTechIcon(tech.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">{tech.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{tech.description}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Production Environment</span>
                <span className="text-teal-400">Proficient</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
