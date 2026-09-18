import React from 'react';
import { NavLink } from 'react-router-dom';
import type { UserRole } from '@/src/types';

interface SidebarProps {
  role?: UserRole;
}

interface NavItem {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ role = 'generator' }) => {
  const generatorSections: NavSection[] = [
    {
      title: 'OPERATIONS',
      items: [
        { to: '/app', label: 'Facility Dashboard', icon: 'space_dashboard', end: true },
        { to: '/app/analyze', label: 'AI Waste Analyzer', icon: 'document_scanner', badge: 'AI' },
        { to: '/app/valorize', label: 'Valorization Routes', icon: 'alt_route' },
      ],
    },
    {
      title: 'CIRCULAR MARKETPLACE',
      items: [
        { to: '/app/exchange', label: 'Exchange Matrix', icon: 'swap_horiz' },
        { to: '/app/demands', label: 'Demand Intelligence', icon: 'trending_up' },
        { to: '/app/requests', label: 'Trade Orders', icon: 'sync_alt' },
      ],
    },
    {
      title: 'INTELLIGENCE & ESG',
      items: [
        { to: '/app/analytics', label: 'Yield & Carbon ESG', icon: 'bar_chart' },
        { to: '/app/profile', label: 'Plant Facility Profile', icon: 'factory' },
        { to: '/app/settings', label: 'System Configuration', icon: 'tune' },
      ],
    },
  ];

  const buyerSections: NavSection[] = [
    {
      title: 'PROCUREMENT',
      items: [
        { to: '/buyer', label: 'Buyer Dashboard', icon: 'space_dashboard', end: true },
        { to: '/buyer/find-waste', label: 'Feedstock Catalog', icon: 'search' },
        { to: '/buyer/post-requirement', label: 'Post Requirement', icon: 'post_add' },
      ],
    },
    {
      title: 'MATCHING & ORDERS',
      items: [
        { to: '/buyer/matches', label: 'Verified Matches', icon: 'hub' },
        { to: '/buyer/exchange', label: 'Bilateral Exchange', icon: 'swap_horiz' },
        { to: '/buyer/requests', label: 'Purchase Requests', icon: 'assignment' },
      ],
    },
    {
      title: 'INTELLIGENCE',
      items: [
        { to: '/buyer/demands', label: 'Market Trends', icon: 'insights' },
        { to: '/buyer/profile', label: 'Corporate Profile', icon: 'business' },
      ],
    },
  ];

  const adminSections: NavSection[] = [
    {
      title: 'GRID MONITORING',
      items: [
        { to: '/admin', label: 'Network Telemetry', icon: 'monitoring', end: true },
        { to: '/admin/users', label: 'Registered Facilities', icon: 'domain' },
        { to: '/admin/waste', label: 'Waste Streams', icon: 'recycling' },
      ],
    },
    {
      title: 'BILATERAL TRADING',
      items: [
        { to: '/admin/requirements', label: 'Offtaker Demands', icon: 'demands' },
        { to: '/admin/matches', label: 'Match Clearinghouse', icon: 'join' },
        { to: '/admin/requests', label: 'Trade Settlements', icon: 'receipt_long' },
      ],
    },
    {
      title: 'ESG & INFRASTRUCTURE',
      items: [
        { to: '/admin/analytics', label: 'Circular ESG Yields', icon: 'co2' },
        { to: '/admin/settings', label: 'Platform Policy & Rules', icon: 'settings' },
      ],
    },
  ];

  const sections =
    role === 'buyer'
      ? buyerSections
      : role === 'admin'
      ? adminSections
      : generatorSections;

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 bg-white border-r border-slate-200 h-[calc(100vh-4rem)] sticky top-16 select-none p-3 justify-between overflow-y-auto">
      <div className="flex flex-col gap-5">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="px-3 py-1 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              {section.title}
            </div>

            <nav className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-semibold border-l-3 border-emerald-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`material-symbols-outlined text-[19px] ${
                            isActive ? 'text-emerald-700' : 'text-slate-400'
                          }`}
                          style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Industrial Circularity & Standards Card */}
      <div className="mt-4 rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs">
        <div className="flex items-center justify-between text-slate-500 text-[11px]">
          <span className="font-semibold text-slate-700">AI Valorizer Engine</span>
          <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>
        <p className="mt-1 text-slate-600 text-[11px] leading-relaxed">
          ISO 14001 / CPCB Circular Compliance Ready
        </p>
        <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
          <span>Plant Diversion Rate</span>
          <span className="font-bold text-slate-800">78.4%</span>
        </div>
        <div className="mt-1 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div className="bg-emerald-600 h-full rounded-full" style={{ width: '78.4%' }} />
        </div>
      </div>
    </aside>
  );
};
