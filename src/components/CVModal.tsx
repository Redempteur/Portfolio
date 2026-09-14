import React from 'react';
import { Download, FileText, X, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Curriculum Vitae (CV)</h3>
              <p className="text-xs text-slate-400 font-mono">BAHUWIMBUYE Rédempteur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-mono">File Name:</span>
            <span className="font-mono text-sky-400 font-bold">{PROFILE.cvFilename}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-mono">Format:</span>
            <span className="font-mono text-slate-300">PDF (Executive Summary)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-mono">Target Audience:</span>
            <span className="font-mono text-teal-400">Recruiters & NGOs</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2 text-xs text-slate-300">
          <h4 className="font-bold text-white font-mono uppercase text-[11px] tracking-wider">Document Summary Highlights</h4>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>8+ Years in Statistics, Data Analysis & Information Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>KoboToolbox Field Surveys & ArcGIS Spatial Mapping</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>SQL Database Administration & Power BI Dashboard Analytics</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 space-y-3">
          <a
            href={`/${PROFILE.cvFilename}`}
            download={PROFILE.cvFilename}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-sky-900/40 transition-transform active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Official CV (PDF)</span>
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold"
          >
            <Mail className="w-4 h-4 text-teal-400" />
            <span>Request Tailored CV via Contact Form</span>
          </a>
        </div>

      </div>
    </div>
  );
};
