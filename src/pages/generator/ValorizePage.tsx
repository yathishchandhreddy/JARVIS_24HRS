import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { DEMO_VALORIZATION_OPTIONS, DEMO_CURRENT_LISTING, DEMO_DATA_BADGE } from '@/src/data/demo';

export const ValorizePage: React.FC = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(DEMO_VALORIZATION_OPTIONS[0].id);

  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-5xl mx-auto">
      <PageHeader
        nodeTag="Plant: Pune Facility • Unit 04"
        statusTag="TEA Ranking Synthesized"
        title="Techno-Economic Valorization Pathways"
        description="Comprehensive techno-economic and environmental assessment evaluating multi-tiered recovery, recycling, and remanufacturing routes."
        badge={DEMO_DATA_BADGE}
        action={
          <Link
            to="/app/exchange"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-xs hover:bg-emerald-700 transition-all"
          >
            <span>Proceed to Buyer Matching</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        }
      />

      {/* Feedstock Reference Capsule */}
      <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <span className="material-symbols-outlined text-[20px]">science</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Evaluated Byproduct Stream
            </span>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              {DEMO_CURRENT_LISTING.material} • <span className="text-emerald-700 font-semibold">{DEMO_CURRENT_LISTING.quantity} {DEMO_CURRENT_LISTING.unit}</span> ({DEMO_CURRENT_LISTING.quality})
            </div>
          </div>
        </div>
        <Link
          to="/app/analyze"
          className="text-emerald-700 hover:text-emerald-800 text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors"
        >
          <span>Modify Feedstock</span>
          <span className="material-symbols-outlined text-[16px]">edit</span>
        </Link>
      </div>

      {/* Ranked Pathways Stack */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Ranked Circular Pathways ({DEMO_VALORIZATION_OPTIONS.length} Evaluated)
          </h2>
          <span className="text-xs text-slate-500">
            Select a pathway to target specific buyer segments
          </span>
        </div>

        {DEMO_VALORIZATION_OPTIONS.map((opt, idx) => {
          const isSelected = selectedOptionId === opt.id;
          return (
            <div
              key={opt.id}
              onClick={() => setSelectedOptionId(opt.id)}
              className={`cursor-pointer rounded-xl bg-white p-5 transition-all border ${
                isSelected
                  ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                      idx === 0
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    #{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {opt.pathway}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-slate-500">Methodology: Continuous mechanical extrusion & filtration</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    Circularity Score: {opt.overall_score}/100
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                    TRL {opt.technology_readiness_level} (Commercial)
                  </span>
                </div>
              </div>

              {/* Rationale explanation */}
              <p className="text-xs text-slate-600 my-3 leading-relaxed">
                {opt.reason}
              </p>

              {/* Multi-Vector Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Valorized Revenue Est.
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-1">
                    ${opt.estimated_value}
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">
                    Net realization ({opt.currency})
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Offtaker Market Demand
                  </span>
                  <div className="text-lg font-bold text-emerald-700 mt-1">
                    {opt.market_demand_score}%
                  </div>
                  <span className="text-[11px] text-slate-500">
                    High regional liquidity
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    CO₂ Abatement Yield
                  </span>
                  <div className="text-lg font-bold text-sky-700 mt-1">
                    {opt.carbon_avoidance_potential_tco2e} <span className="text-xs font-normal text-slate-600">tCO₂e</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Scope 3 avoidance benefit
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Capex / Implementation
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-1">
                    {opt.capex_requirement}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    {opt.feasibility_score}% Feasibility score
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
