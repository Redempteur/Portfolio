import React from 'react';
import { BarChart2, Mail, MapPin, Linkedin, Github, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-sky-600/30">
                <BarChart2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                BAHUWIMBUYE <span className="text-sky-400">Rédempteur</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed font-sans">
              Statistician & Computer Scientist with over 8 years of expertise in data analysis, relational databases, information systems, monitoring & evaluation (M&E), and data quality control.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-sky-400 font-mono">
                <MapPin className="w-3 h-3 text-sky-400" />
                {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-teal-400 font-mono">
                8+ Years Experience
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="capitalize hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky-500/50">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">Professional Channels</h4>
            <div className="space-y-3 text-xs">
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-all"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub Repositories</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-teal-400 hover:border-teal-500/30 transition-all"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Direct Contact Form</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} BAHUWIMBUYE Rédempteur. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-mono text-[11px]">Data + Technology + Impact</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
