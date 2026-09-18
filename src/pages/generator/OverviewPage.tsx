import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { DEMO_CURRENT_LISTING, DEMO_VALORIZATION_OPTIONS, DEMO_MATCHES } from '@/src/data/demo';

export const OverviewPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-6xl mx-auto">
      <PageHeader
        nodeTag="Plant: Pune Manufacturing Facility 04"
        statusTag="Telemetry Online"
        title="Industrial Generator Operations Hub"
        description="Continuous byproduct characterization, multi-pathway techno-economic valorization, and circular buyer exchange."
        action={
          <Link
            to="/app/analyze"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-xs hover:bg-emerald-700 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">document_scanner</span>
            <span>New Waste Stream Analysis</span>
          </Link>
        }
      />

      {/* Grid KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Batch Volume Logged
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">scale</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1.5 mt-3">
            <span className="text-3xl font-extrabold text-slate-900">12.5</span>
            <span className="text-sm font-semibold text-emerald-700">MT</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1">
            Bi-weekly batch cycle (Fly Ash F-Class)
          </span>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              CO₂ Avoidance Yield
            </span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">eco</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1.5 mt-3">
            <span className="text-3xl font-extrabold text-slate-900">18.4</span>
            <span className="text-sm font-semibold text-sky-700">tCO₂e</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1">
            Based on clinker replacement factors
          </span>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Valorized Revenue Est.
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">payments</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-3">
            <span className="text-3xl font-extrabold text-slate-900">₹1,24,000</span>
          </div>
          <span className="text-[11px] text-emerald-700 font-medium mt-1">
            +32% vs unclassified landfill dispatch
          </span>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Verified Offtakers
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">hub</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1.5 mt-3">
            <span className="text-3xl font-extrabold text-slate-900">3</span>
            <span className="text-xs text-slate-500">within 120km</span>
          </div>
          <span className="text-[11px] text-emerald-700 font-medium mt-1">
            96.4% max compatibility index
          </span>
        </div>
      </div>

      {/* Primary Circular Workflow Roadmap */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Circular Valorization Pipeline
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              SU-05 Standard Industrial Procedure: Waste Analysis → Valorization → Demand → Matching → Execution
            </p>
          </div>
          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hidden sm:inline-flex">
            Pipeline Ready
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <Link
            to="/app/analyze"
            className="p-4 rounded-lg bg-emerald-50/60 border border-emerald-300 flex flex-col gap-1.5 hover:bg-emerald-50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span className="material-symbols-outlined text-emerald-700 text-[20px]">
                document_scanner
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 mt-1">
              1. Waste Analysis
            </span>
            <span className="text-[11px] text-slate-600 leading-tight">
              Spectral CV, composition & moisture
            </span>
          </Link>

          <Link
            to="/app/valorize"
            className="p-4 rounded-lg bg-white border border-slate-200 flex flex-col gap-1.5 hover:border-emerald-400 hover:shadow-xs transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-emerald-600 text-[20px] transition-colors">
                alt_route
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 mt-1">
              2. Valorization
            </span>
            <span className="text-[11px] text-slate-500 leading-tight">
              Reuse, recycling & recovery TEA
            </span>
          </Link>

          <Link
            to="/app/demands"
            className="p-4 rounded-lg bg-white border border-slate-200 flex flex-col gap-1.5 hover:border-emerald-400 hover:shadow-xs transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">
                3
              </span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-emerald-600 text-[20px] transition-colors">
                trending_up
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 mt-1">
              3. Market Demand
            </span>
            <span className="text-[11px] text-slate-500 leading-tight">
              Commodity pricing & volume demand
            </span>
          </Link>

          <Link
            to="/app/exchange"
            className="p-4 rounded-lg bg-white border border-slate-200 flex flex-col gap-1.5 hover:border-emerald-400 hover:shadow-xs transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">
                4
              </span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-emerald-600 text-[20px] transition-colors">
                hub
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 mt-1">
              4. Buyer Matching
            </span>
            <span className="text-[11px] text-slate-500 leading-tight">
              AI compatibility & log distance
            </span>
          </Link>

          <Link
            to="/app/requests"
            className="p-4 rounded-lg bg-white border border-slate-200 flex flex-col gap-1.5 hover:border-emerald-400 hover:shadow-xs transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">
                5
              </span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-emerald-600 text-[20px] transition-colors">
                assignment_turned_in
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 mt-1">
              5. Request Execution
            </span>
            <span className="text-[11px] text-slate-500 leading-tight">
              Manifest, dispatch & verification
            </span>
          </Link>
        </div>
      </div>

      {/* Active Material Stream in Facility */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-xs flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={DEMO_CURRENT_LISTING.image_url}
            alt="Active Specimen"
            className="w-20 h-20 rounded-lg object-cover border border-slate-200 shrink-0"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                Active Batch Ready
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Grade: {DEMO_CURRENT_LISTING.quality}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-1">
              {DEMO_CURRENT_LISTING.material}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Quantity: <span className="font-semibold text-slate-800">{DEMO_CURRENT_LISTING.quantity} {DEMO_CURRENT_LISTING.unit}</span> • Location: {DEMO_CURRENT_LISTING.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Link
            to="/app/analyze"
            className="flex-1 md:flex-none text-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-all shadow-xs"
          >
            Review AI Scan
          </Link>
          <Link
            to="/app/valorize"
            className="flex-1 md:flex-none text-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs"
          >
            Explore Pathways
          </Link>
        </div>
      </div>
    </div>
  );
};
