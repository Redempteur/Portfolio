import React from 'react';
import { PROFILE } from '../data/profile';
import { DataLifecycleVisual } from '../components/DataLifecycleVisual';
import { CheckCircle2, Award, Terminal, Cpu } from 'lucide-react';
import portraitImg from '../assets/Portrait_Red.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/60 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About BAHUWIMBUYE Rédempteur
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            A rare dual profile combining the mathematical exactness of statistics with the structural power of computer science.
          </p>
        </div>

        {/* Story & Background Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main About Story */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-sky-400" />
                Dual Domain Expertise: Statistics + IT
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {PROFILE.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Throughout my 8+ years of professional practice, I have specialized in bridging technical data collection with organizational needs. Whether engineering mobile field surveys in KoboToolbox, writing complex SQL validation scripts, structuring relational databases, running machine learning predictions, or producing executive Power BI scorecards, my goal remains constant: delivering trustworthy, high-integrity data that drives impact.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Statistical Modeling</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Relational Databases</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Information Systems</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>M&E KPI Tracking</span>
              </div>
            </div>
          </div>

          {/* Side Portrait Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 border border-slate-800 flex flex-col items-center justify-between text-center space-y-6">
            <div className="relative">
              <img
                src={portraitImg}
                alt="BAHUWIMBUYE Rédempteur Portrait"
                className="w-40 h-48 rounded-2xl object-cover border-2 border-sky-500/40 shadow-xl"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sky-600 text-white font-mono text-[10px] font-bold rounded-full shadow-md">
                8+ Years Practice
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-extrabold text-white">BAHUWIMBUYE Rédempteur</h4>
              <p className="text-xs text-sky-400 font-mono">Statistician & Computer Scientist</p>
              <p className="text-xs text-slate-400 max-w-xs leading-normal">
                "Data quality is not an accident; it is the result of structured processes, rigorous validation, and analytical precision."
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-800 flex items-center justify-around text-xs font-mono text-slate-300">
              <div>
                <span className="block text-sky-400 font-bold">100%</span>
                <span className="text-[10px] text-slate-500">Confidentiality</span>
              </div>
              <div>
                <span className="block text-teal-400 font-bold">Audit-Ready</span>
                <span className="text-[10px] text-slate-500">Datasets</span>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Data Lifecycle Diagram */}
        <div className="pt-6">
          <DataLifecycleVisual />
        </div>

      </div>
    </section>
  );
};
