import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, CheckCircle2, ShieldCheck, Database, Sliders, RefreshCw } from 'lucide-react';

export const InteractiveDashboard: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q3');
  const [selectedSector, setSelectedSector] = useState<string>('All Sectors');

  const sectorData: Record<string, { beneficiaries: string; accuracy: string; kpiRate: string; status: string }> = {
    'All Sectors': { beneficiaries: '142,500', accuracy: '99.8%', kpiRate: '94.8%', status: 'Optimal' },
    'Food Security': { beneficiaries: '48,200', accuracy: '99.6%', kpiRate: '96.2%', status: 'Exceeding' },
    'Climate Risk': { beneficiaries: '35,100', accuracy: '99.9%', kpiRate: '93.5%', status: 'On Track' },
    'Economic Vulnerability': { beneficiaries: '59,200', accuracy: '99.7%', kpiRate: '94.1%', status: 'Optimal' },
  };

  const current = sectorData[selectedSector] || sectorData['All Sectors'];

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-2xl p-5 text-slate-100 font-sans">
      
      {/* Widget Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wide">M&E Executive Indicators Monitor</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30">
                <ShieldCheck className="w-3 h-3" /> Live Demo Data
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Verified Indicator Dashboard Concept</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2">
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            aria-label="Filter Sector"
            className="bg-slate-950 text-xs font-mono border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="All Sectors">All Sectors</option>
            <option value="Food Security">Food Security</option>
            <option value="Climate Risk">Climate Risk</option>
            <option value="Economic Vulnerability">Economic Vulnerability</option>
          </select>

          <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-800 text-[11px] font-mono">
            {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
              <button
                key={q}
                onClick={() => setSelectedQuarter(q)}
                className={`px-2 py-0.5 rounded ${
                  selectedQuarter === q ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-3 gap-3 my-4">
        
        <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Target Beneficiaries</span>
          <div className="text-lg font-extrabold text-white mt-1 font-mono tracking-tight">{current.beneficiaries}</div>
          <div className="flex items-center gap-1 text-[10px] text-teal-400 font-mono mt-1">
            <TrendingUp className="w-3 h-3" /> +12.4% vs baseline
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Data Validation Rate</span>
          <div className="text-lg font-extrabold text-sky-400 mt-1 font-mono tracking-tight">{current.accuracy}</div>
          <div className="flex items-center gap-1 text-[10px] text-sky-400 font-mono mt-1">
            <CheckCircle2 className="w-3 h-3" /> Audit Verified
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">KPI Reach Rate</span>
          <div className="text-lg font-extrabold text-teal-300 mt-1 font-mono tracking-tight">{current.kpiRate}</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono mt-1">
            <span>Status: {current.status}</span>
          </div>
        </div>

      </div>

      {/* Visual Chart Bars Representation */}
      <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Key Indicator Execution Progress ({selectedQuarter})</span>
          <span className="text-sky-400">Overall Score: 94.8%</span>
        </div>

        <div className="space-y-2 text-xs">
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Data Quality & Cleaning Protocols</span>
              <span className="font-mono text-sky-400 font-bold">99.8%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sky-500 to-teal-400 rounded-full" style={{ width: '99.8%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Beneficiary Mobile Data Collection (KoboToolbox)</span>
              <span className="font-mono text-teal-400 font-bold">94.5%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" style={{ width: '94.5%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Predictive Risk Classification (SMOTE + Decision Tree)</span>
              <span className="font-mono text-cyan-400 font-bold">91.4%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '91.4%' }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
