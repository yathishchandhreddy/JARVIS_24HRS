import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { DEMO_MATCHES, DEMO_DATA_BADGE } from '@/src/data/demo';

export const ExchangePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-5xl mx-auto">
      <PageHeader
        nodeTag="Plant: Pune Facility • Unit 04"
        statusTag="Bilateral Buyer Matching Active"
        title="Verified Feedstock Offtaker Matches"
        description="Multi-factor algorithmic matching evaluating chemical composition compatibility, batch volume, transit distance, and price tolerances."
        badge={DEMO_DATA_BADGE}
      />

      <div className="flex flex-col gap-4">
        {DEMO_MATCHES.map((match) => (
          <div
            key={match.id}
            className="rounded-xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {match.requirement?.buyer_company}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{match.requirement?.location}</span>
                    <span>•</span>
                    <span>{match.requirement?.frequency} procurement cycle</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  {match.match_score}% Match Index
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {match.reason}
            </p>

            {/* Score Factors Breakdown */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Material</span>
                <span className="text-xs font-bold text-emerald-700 mt-0.5">{match.material_score}%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Volume</span>
                <span className="text-xs font-bold text-emerald-700 mt-0.5">{match.quantity_score}%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Purity</span>
                <span className="text-xs font-bold text-emerald-700 mt-0.5">{match.quality_score}%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Transit</span>
                <span className="text-xs font-bold text-sky-700 mt-0.5">{match.location_score}%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Price</span>
                <span className="text-xs font-bold text-amber-700 mt-0.5">{match.price_score}%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Cadence</span>
                <span className="text-xs font-bold text-emerald-700 mt-0.5">{match.frequency_score}%</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="text-xs text-slate-600">
                Buyer Indicative Price:{' '}
                <span className="text-slate-900 font-bold">
                  ${match.requirement?.max_price} {match.requirement?.currency}/MT
                </span>
              </div>
              <Link
                to="/app/requests"
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                <span>Initiate Supply Request</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
