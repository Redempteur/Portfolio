import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900 border border-teal-500/40 text-slate-100 shadow-2xl shadow-slate-950 animate-bounce">
      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
      <div className="text-xs font-sans">
        <span className="font-bold text-white block">Success!</span>
        <span className="text-slate-300">{message}</span>
      </div>
      <button onClick={onClose} className="p-1 text-slate-400 hover:text-white ml-2">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
