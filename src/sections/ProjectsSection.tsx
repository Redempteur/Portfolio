import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ArrowUpRight, Github, Layers, ShieldCheck, CheckCircle2, Filter, Cpu, Database, PieChart, Building2, BarChart2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Data Analysis & Machine Learning',
    'Data Quality & Information Management',
    'Business Intelligence & M&E',
    'Business Management / CRM',
    'Organizational Information Management'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Data Analysis & Machine Learning':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Data Quality & Information Management':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'Business Intelligence & M&E':
        return <BarChart2 className="w-5 h-5 text-amber-400" />;
      case 'Business Management / CRM':
        return <PieChart className="w-5 h-5 text-indigo-400" />;
      case 'Organizational Information Management':
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-900/60 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Systems & Analytical Projects
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Real-world data pipelines, statistical vulnerability models, data quality systems, and enterprise management tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-900/30'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Projects (5)' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-slate-950/90 rounded-3xl border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-900/20 flex flex-col justify-between overflow-hidden group"
            >
              
              <div className="p-6 space-y-5">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      PROJECT 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-sky-400 border border-slate-800">
                    Completed
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-sky-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mt-1">{project.tagline}</p>
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>

                {/* Key Contribution Highlight */}
                <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Key Contribution</span>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.keyContributions[0]}</span>
                  </div>
                </div>

                {/* Results Highlight */}
                <div className="flex items-start gap-2 text-xs text-teal-300 font-mono">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{project.results[0]}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-500 self-center">+{project.technologies.length - 4} more</span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
