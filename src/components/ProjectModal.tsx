import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, ArrowRight, Layers, Database, ShieldCheck } from 'lucide-react';
import { Project } from '../types';
import { InteractiveDashboard } from './InteractiveDashboard';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-100 my-auto">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-sm text-sky-400 font-mono mt-1">{project.tagline}</p>
          </div>

          {/* Methodology Visual Flow */}
          <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider mb-3">
              Methodology Pipeline & Data Workflow
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.methodology.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-mono font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-200 block">{step.label}</span>
                      {step.description && <span className="text-[10px] text-slate-400 block">{step.description}</span>}
                    </div>
                  </div>
                  {idx < project.methodology.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-sky-500/60 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Interactive Demo Widget Section */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider mb-3">
              Visual Analytics & Demonstration
            </h4>
            {project.demoType === 'power-bi' || project.demoType === 'data-pipeline' ? (
              <InteractiveDashboard />
            ) : (
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-teal-400 font-bold">Verified Workflow Model Concept</span>
                  <span className="text-slate-400">Status: Completed & Audit Ready</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px] block">Primary Technical Target</span>
                    <span className="text-white font-bold text-sm">{project.category}</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px] block">Data Quality Standard</span>
                    <span className="text-sky-400 font-bold text-sm">100% Schema Validation</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Problem, Objectives & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Context & Problem</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.problem}</p>
            </div>
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Analytical Approach</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.approach}</p>
            </div>
          </div>

          {/* Key Contributions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              My Specific Technical Contributions
            </h4>
            <div className="space-y-2">
              {project.keyContributions.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Results & Impact */}
          <div className="bg-gradient-to-r from-sky-950/40 to-teal-950/40 p-5 rounded-2xl border border-sky-800/30 space-y-3">
            <h4 className="text-xs font-bold text-sky-400 uppercase font-mono tracking-wider">
              Verified Project Results & Organizational Impact
            </h4>
            <div className="space-y-2">
              {project.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider mb-3">
              Technologies & Tools Employed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] font-mono text-slate-400">
            Project Category: <span className="text-slate-200">{project.category}</span>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
