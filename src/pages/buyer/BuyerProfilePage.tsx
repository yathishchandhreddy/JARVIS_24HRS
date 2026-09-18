import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';

export const BuyerProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-4xl mx-auto">
      <PageHeader
        nodeTag="Apex Circular Synthetics Corp"
        statusTag="Verified Offtaker Entity"
        title="Industrial Buyer & Offtaker Profile"
        description="Corporate credentials, recycling plant capacity, and procurement authorization status."
      />

      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col gap-4">
        <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
          <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <span className="material-symbols-outlined text-[28px]">business</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">
                Apex Circular Synthetics Corp.
              </h3>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                Verified Buyer
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Vadodara Industrial Cluster • Gujarat, India • GSTIN: 24AAACA1234F1Z5
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Industrial Sector</span>
            <div className="text-xs font-bold text-slate-900 mt-1">Secondary Polymer Converter & Injection Molding</div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Monthly Intake Capacity</span>
            <div className="text-xs font-bold text-emerald-700 mt-1">150 MT / Month (Scalable to 300 MT)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
