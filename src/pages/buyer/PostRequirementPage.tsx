import React, { useState } from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';

export const PostRequirementPage: React.FC = () => {
  const [material, setMaterial] = useState('rPET High Purity Flakes');
  const [minQty, setMinQty] = useState('10');
  const [maxPrice, setMaxPrice] = useState('1300');
  const [purity, setPurity] = useState('Purity >90%, Moisture <1.5%');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-2xl mx-auto">
      <PageHeader
        nodeTag="Procurement Intake Desk"
        statusTag="Active Offtaker Registration"
        title="Post Secondary Feedstock Requirement"
        description="Broadcast your industrial raw material specifications to certified generators in your regional network."
      />

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col gap-4">
        {submitted ? (
          <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-emerald-600 text-[36px] mb-2">task_alt</span>
            <h3 className="text-base font-bold text-slate-900">Procurement Requirement Broadcasted</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-md">
              WasteX AI circular matching will notify verified industrial generators within your target dispatch radius matching your purity tolerances.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700">Target Secondary Commodity / Polymer Grade</label>
              <input
                type="text"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Min Monthly Intake (MT)</label>
                <input
                  type="number"
                  value={minQty}
                  onChange={(e) => setMinQty(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">Ceiling Bid Price ($/MT)</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700">Purity, Moisture & Contaminant Thresholds</label>
              <input
                type="text"
                value={purity}
                onChange={(e) => setPurity(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs"
            >
              Publish Offtaker Requirement
            </button>
          </>
        )}
      </form>
    </div>
  );
};
