import React, { useState } from 'react';
import { Database, Filter, Layers, BarChart3, PieChart, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const DataLifecycleVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [
    <Database className="w-5 h-5" key="1" />,
    <Filter className="w-5 h-5" key="2" />,
    <Layers className="w-5 h-5" key="3" />,
    <BarChart3 className="w-5 h-5" key="4" />,
    <PieChart className="w-5 h-5" key="5" />,
    <FileText className="w-5 h-5" key="6" />,
    <CheckCircle2 className="w-5 h-5" key="7" />
  ];

  const currentStepData = PROFILE.lifecycleSteps[activeStep];

  return (
    <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-slate-950/40 text-slate-100">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-2">
            <span>Visual Methodology</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            The Complete Data Lifecycle Workflow
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Click on any stage below to inspect the methods, tools, and quality assurances applied at each phase.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300">
          <span className="text-sky-400 font-bold">7 Stages</span>
          <span className="text-slate-600">|</span>
          <span className="text-teal-400 font-bold">100% Integrity</span>
        </div>
      </div>

      {/* Workflow Stepper Bar (Horizontal) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
        {PROFILE.lifecycleSteps.map((stepItem, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={stepItem.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center p-3 rounded-2xl border transition-all text-center cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-b from-sky-600 to-teal-600 border-sky-400 text-white shadow-lg shadow-sky-600/30 scale-105 z-10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl mb-2 ${isActive ? 'bg-white/20 text-white' : 'bg-slate-900 text-sky-400'}`}>
                {icons[idx]}
              </div>
              <span className="text-[10px] font-mono tracking-wider opacity-80 uppercase font-semibold">Stage {stepItem.step}</span>
              <span className="text-xs font-bold leading-tight mt-0.5">{stepItem.title}</span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-mono font-bold text-sm flex items-center justify-center border border-sky-500/30">
              0{currentStepData.step}
            </span>
            <div>
              <h4 className="text-lg font-bold text-white">{currentStepData.title}</h4>
              <p className="text-xs font-mono text-teal-400">{currentStepData.subtitle}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {currentStepData.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">Core Toolstack:</span>
            {currentStepData.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-sky-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Lifecycle Focus</span>
            <p className="text-xs text-slate-300 font-semibold leading-tight">
              {activeStep === 0 && "Field Mobile Form Engineering & Logic Skip Rules"}
              {activeStep === 1 && "Duplicate Identification & Anomaly Removal"}
              {activeStep === 2 && "Relational Schema Integrity & Access Control"}
              {activeStep === 3 && "K-Means Clustering & Supervised Classifiers"}
              {activeStep === 4 && "Spatial Risk Maps & Power BI Dashboard Controls"}
              {activeStep === 5 && "Executive M&E KPI Scorecards & Funder Reports"}
              {activeStep === 6 && "Actionable Strategic Interventions & Policy Direction"}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700"
            >
              Previous
            </button>
            <span className="text-xs font-mono text-slate-400">{activeStep + 1} / 7</span>
            <button
              disabled={activeStep === 6}
              onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-600 text-xs font-bold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-500"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
