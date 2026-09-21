import React from 'react';
import { ArrowRight, Download, BarChart2, ShieldCheck, Database, MapPin, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { InteractiveDashboard } from '../components/InteractiveDashboard';
import portraitImg from '../assets/Portrait_Red.jpeg';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-slate-950 overflow-hidden text-slate-100">
      
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Professional Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-300 tracking-wide font-medium">
                8+ Years Professional Experience
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-sky-400">Available for Opportunities</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PROFILE.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold text-gradient-dark">
                {PROFILE.title}
              </div>
            </div>

            {/* Secondary Positioning */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 py-1">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300">Data Analysis</span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-teal-300">Information Management</span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">Monitoring & Evaluation</span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-indigo-300">Digital Solutions</span>
            </div>

            {/* Main Tagline */}
            <blockquote className="border-l-4 border-sky-500 pl-4 py-1 text-base sm:text-xl font-medium text-slate-200 italic font-sans">
              "{PROFILE.tagline}"
            </blockquote>

            {/* Brief Introduction */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-sans">
              Combining statistical rigor, information technology, database engineering, and organizational strategy to turn raw field observation into reliable datasets, analytical dashboards, and strategic decisions.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-900/40 transition-all hover:scale-105 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="block text-sky-400 font-extrabold text-lg">100%</span>
                <span className="text-slate-400 text-[11px]">Data Integrity</span>
              </div>
              <div>
                <span className="block text-teal-400 font-extrabold text-lg">5+</span>
                <span className="text-slate-400 text-[11px]">Featured Systems</span>
              </div>
              <div>
                <span className="block text-cyan-400 font-extrabold text-lg">Bujumbura</span>
                <span className="text-slate-400 text-[11px]">{PROFILE.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composite Card with Portrait & Live Data Widget */}
          <div className="lg:col-span-5 relative">
            
            {/* Card Shell */}
            <div className="relative rounded-3xl bg-slate-900 p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-5">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={portraitImg}
                    alt="BAHUWIMBUYE Rédempteur"
                    className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl object-cover border-2 border-sky-500/50 shadow-lg"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" title="Available"></span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-white text-base sm:text-lg leading-tight">
                    BAHUWIMBUYE Rédempteur
                  </h3>
                  <span className="inline-block text-xs font-mono text-sky-400 font-semibold">
                    Statistician & Computer Scientist
                  </span>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              {/* Data Analytics Visual Component */}
              <InteractiveDashboard />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
