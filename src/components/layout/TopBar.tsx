import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import type { UserRole } from '@/src/types';

interface TopBarProps {
  role?: UserRole;
  nodeId?: string;
  onRoleChange?: (role: UserRole) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  role = 'generator',
  nodeId = 'FAC-PUNE-04',
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const activeRole: UserRole = profile?.role || role;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowRoleSwitcher(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      setShowUserMenu(false);
      await signOut();
      navigate('/login', { replace: true });
    } catch (err) {
      console.error('Sign out error:', err);
      navigate('/login', { replace: true });
    }
  };

  const currentRoleName =
    activeRole === 'generator'
      ? 'Waste Generator'
      : activeRole === 'buyer'
      ? 'Industrial Buyer'
      : 'System Admin';

  const roleBadgeStyle =
    activeRole === 'generator'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : activeRole === 'buyer'
      ? 'bg-sky-50 text-sky-700 border-sky-200'
      : 'bg-amber-50 text-amber-700 border-amber-200';

  const displayName = profile?.name || user?.email?.split('@')[0] || 'Facility Operator';
  const displayOrg = profile?.organization || 'Industrial Facility';
  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'OP';

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-white border-b border-slate-200 shadow-xs">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Brand & Facility Info */}
        <div className="flex items-center gap-6">
          <Link to="/app" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold shadow-xs">
              <span className="material-symbols-outlined text-[20px]">recycling</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 text-base tracking-tight">
                  WasteX AI
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Industrial Grid
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal hidden sm:block">
                Industrial Waste Valorization & Circular Exchange
              </span>
            </div>
          </Link>

          {/* Plant / Facility Indicator */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 text-xs text-slate-600">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">factory</span>
            <span className="font-medium text-slate-800">Facility:</span>
            <span className="font-mono text-slate-600 text-[11px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              {nodeId}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">AutoComp Zone 3</span>
          </div>
        </div>

        {/* Action Controls & Role Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Role Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${roleBadgeStyle}`}
            >
              <span className="w-2 h-2 rounded-full bg-current opacity-80" />
              <span>{currentRoleName}</span>
              <span className="material-symbols-outlined text-[16px] text-slate-400">expand_more</span>
            </button>

            {showRoleSwitcher && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white border border-slate-200 shadow-lg p-1.5 z-50 flex flex-col gap-1">
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Switch Active Portal
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowRoleSwitcher(false);
                    navigate('/app');
                  }}
                  className={`text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/app')
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">precision_manufacturing</span>
                    <span>Generator Portal</span>
                  </div>
                  {location.pathname.startsWith('/app') && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowRoleSwitcher(false);
                    navigate('/buyer');
                  }}
                  className={`text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/buyer')
                      ? 'bg-sky-50 text-sky-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-sky-600">storefront</span>
                    <span>Industrial Buyer Portal</span>
                  </div>
                  {location.pathname.startsWith('/buyer') && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowRoleSwitcher(false);
                    navigate('/admin');
                  }}
                  className={`text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                    location.pathname.startsWith('/admin')
                      ? 'bg-amber-50 text-amber-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-amber-600">admin_panel_settings</span>
                    <span>System Admin Portal</span>
                  </div>
                  {location.pathname.startsWith('/admin') && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors relative"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-600 ring-2 ring-white" />
          </button>

          {/* User Profile & Account Dropdown */}
          <div className="relative pl-2 border-l border-slate-200" ref={userMenuRef}>
            <button
              type="button"
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-label="User Account Menu"
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-semibold group-hover:bg-emerald-700 transition-colors">
                {initials}
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-xs font-medium text-slate-800 leading-tight truncate max-w-[130px]">
                  {displayName}
                </span>
                <span className="text-[10px] text-slate-500 truncate max-w-[130px]">
                  {displayOrg}
                </span>
              </div>
              <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-slate-600 hidden sm:block">
                expand_more
              </span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white border border-slate-200 shadow-lg p-2 z-50 flex flex-col gap-1">
                <div className="px-3 py-2 border-b border-slate-100 flex flex-col">
                  <span className="text-xs font-semibold text-slate-900 truncate">
                    {displayName}
                  </span>
                  <span className="text-[11px] text-slate-500 truncate">
                    {user?.email || 'Authenticated Entity'}
                  </span>
                  <span className="text-[10px] font-mono mt-1 inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 w-fit">
                    {displayOrg}
                  </span>
                </div>

                <Link
                  to={activeRole === 'buyer' ? '/buyer/profile' : '/app/profile'}
                  onClick={() => setShowUserMenu(false)}
                  className="px-3 py-2 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-500">
                    badge
                  </span>
                  <span>Facility Profile</span>
                </Link>

                <Link
                  to={activeRole === 'admin' ? '/admin/settings' : '/app/settings'}
                  onClick={() => setShowUserMenu(false)}
                  className="px-3 py-2 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-500">
                    settings
                  </span>
                  <span>System Configuration</span>
                </Link>

                <div className="my-1 border-t border-slate-100" />

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="px-3 py-2 rounded-md text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition-colors w-full text-left cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-rose-500">
                    logout
                  </span>
                  <span>Sign Out of Platform</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
