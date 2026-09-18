import React, { useState } from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { DEMO_CURRENT_LISTING, DEMO_DATA_BADGE } from '@/src/data/demo';

export const FindWastePage: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-5xl mx-auto">
      <PageHeader
        nodeTag="Feedstock Discovery Registry"
        statusTag="Live Industrial Directory"
        title="Discover Industrial Byproducts & Secondary Feedstocks"
        description="Search certified post-industrial scrap, mineral slag, and chemical byproducts verified by spectroscopic computer vision."
        badge={DEMO_DATA_BADGE}
      />

      {/* Search Input */}
      <div className="bg-white border border-slate-300 p-2.5 rounded-xl flex items-center gap-3 shadow-xs focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition-all">
        <span className="material-symbols-outlined text-slate-400 text-[20px] ml-1">search</span>
        <input
          type="text"
          placeholder="Search by polymer grade, metal alloy, mineral composition, or dispatch plant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-slate-900 text-xs font-medium w-full focus:outline-none placeholder:text-slate-400"
        />
        <button
          type="button"
          className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border border-slate-200 flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span>Filters</span>
        </button>
      </div>

      {/* Feedstock Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row gap-5 justify-between items-center shadow-xs">
        <div className="flex items-center gap-4">
          <img
            src={DEMO_CURRENT_LISTING.image_url}
            alt="Feedstock"
            className="w-20 h-20 rounded-xl object-cover border border-slate-200"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                Grade A Recyclability
              </span>
              <span className="text-slate-500 text-xs font-medium">
                {DEMO_CURRENT_LISTING.location}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-1">
              {DEMO_CURRENT_LISTING.material}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Available: <strong className="text-slate-900">{DEMO_CURRENT_LISTING.quantity} {DEMO_CURRENT_LISTING.unit}</strong> • Cadence: {DEMO_CURRENT_LISTING.generation_frequency}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="w-full md:w-auto px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">science</span>
          <span>Request Material Sample</span>
        </button>
      </div>
    </div>
  );
};
