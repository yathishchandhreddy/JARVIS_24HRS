import React from 'react';
import { NavLink } from 'react-router-dom';
import type { UserRole } from '@/src/types';

interface NavItemConfig {
  path: string;
  label: string;
  icon: string;
}

interface MobileNavigationProps {
  role?: UserRole;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  role = 'generator',
}) => {
  const generatorNavItems: NavItemConfig[] = [
    { path: '/app', label: 'Overview', icon: 'space_dashboard' },
    { path: '/app/analyze', label: 'Analyze', icon: 'document_scanner' },
    { path: '/app/valorize', label: 'Valorize', icon: 'alt_route' },
    { path: '/app/exchange', label: 'Exchange', icon: 'swap_horiz' },
    { path: '/app/analytics', label: 'Analytics', icon: 'bar_chart' },
  ];

  const buyerNavItems: NavItemConfig[] = [
    { path: '/buyer', label: 'Overview', icon: 'space_dashboard' },
    { path: '/buyer/find-waste', label: 'Feedstock', icon: 'search' },
    { path: '/buyer/matches', label: 'Matches', icon: 'hub' },
    { path: '/buyer/exchange', label: 'Exchange', icon: 'swap_horiz' },
    { path: '/buyer/requests', label: 'Requests', icon: 'assignment' },
  ];

  const adminNavItems: NavItemConfig[] = [
    { path: '/admin', label: 'Telemetry', icon: 'monitoring' },
    { path: '/admin/users', label: 'Facilities', icon: 'domain' },
    { path: '/admin/waste', label: 'Streams', icon: 'recycling' },
    { path: '/admin/matches', label: 'Matches', icon: 'join' },
    { path: '/admin/analytics', label: 'ESG Yields', icon: 'co2' },
  ];

  const items =
    role === 'buyer'
      ? buyerNavItems
      : role === 'admin'
      ? adminNavItems
      : generatorNavItems;

  return (
    <nav
      aria-label="Mobile and handheld navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-md"
    >
      <div className="flex justify-around items-center h-15 px-2 max-w-md mx-auto">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/app' || item.path === '/buyer' || item.path === '/admin'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] h-12 px-1 transition-colors ${
                isActive
                  ? 'text-emerald-700'
                  : 'text-slate-500 hover:text-slate-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[10px] mt-0.5 tracking-tight ${
                    isActive ? 'font-semibold text-emerald-700' : 'font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
