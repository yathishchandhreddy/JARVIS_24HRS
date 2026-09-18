import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-margin pb-space-xl gap-space-lg select-none max-w-3xl mx-auto">
      <PageHeader
        nodeTag="Plant Alpha • Sector 4"
        statusTag="Verified Industrial Entity"
        title="Facility Node Profile"
        description="Operational registration, environmental compliance audits, and authorized material dispatcher info."
      />

      <div className="bg-[#0D131A] border border-[#1D2836] p-space-lg rounded-xl shadow-xl flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-[#121A24] border border-[#1D2836] flex items-center justify-center text-[#00E599]">
            <span className="material-symbols-outlined text-[32px]">factory</span>
          </div>
          <div>
            <h3 className="font-headline-md text-lg text-[#F4F7FA] font-bold">
              Plant Alpha Byproduct Recovery Node
            </h3>
            <p className="text-xs text-[#6F8299] font-label-sm">
              Sector 4 Industrial Hub • Gujarat Industrial Corridor (IN)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-[#101418] p-3 rounded-lg border border-[#1D2836]">
            <span className="font-label-sm text-[10px] text-[#6F8299] uppercase">Node Identifier</span>
            <div className="font-data-metric text-sm text-[#00E599] mt-0.5">NODE-IN-GJ-ALPHA-04</div>
          </div>
          <div className="bg-[#101418] p-3 rounded-lg border border-[#1D2836]">
            <span className="font-label-sm text-[10px] text-[#6F8299] uppercase">Environmental Compliance</span>
            <div className="font-data-metric text-sm text-[#F4F7FA] mt-0.5">CPCB / SPCB Category Green</div>
          </div>
          <div className="bg-[#101418] p-3 rounded-lg border border-[#1D2836]">
            <span className="font-label-sm text-[10px] text-[#6F8299] uppercase">Primary Byproducts</span>
            <div className="font-body-md text-xs text-[#F4F7FA] mt-0.5">PET Flakes, Polyolefin Pellets</div>
          </div>
          <div className="bg-[#101418] p-3 rounded-lg border border-[#1D2836]">
            <span className="font-label-sm text-[10px] text-[#6F8299] uppercase">Certified Dispatch Capacity</span>
            <div className="font-body-md text-xs text-[#00C2FF] mt-0.5">85 Metric Tons / Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};
