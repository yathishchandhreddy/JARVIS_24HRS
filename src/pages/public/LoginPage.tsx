import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('generator@wastex.ai');
  const [password, setPassword] = useState('••••••••');
  const [role, setRole] = useState<'generator' | 'buyer' | 'admin'>('generator');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'buyer') {
      navigate('/buyer');
    } else if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/app');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 flex-1">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
        <div className="text-center">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
            <span className="material-symbols-outlined text-[22px]">lock</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Sign in to WasteX AI</h2>
          <p className="text-xs text-slate-500 mt-1">Enterprise industrial waste valorization & circular marketplace</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Account Type</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRole('generator')}
                className={`py-2 text-xs rounded-lg border font-medium transition-all ${
                  role === 'generator'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Generator
              </button>
              <button
                type="button"
                onClick={() => setRole('buyer')}
                className={`py-2 text-xs rounded-lg border font-medium transition-all ${
                  role === 'buyer'
                    ? 'bg-sky-50 border-sky-600 text-sky-800 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Buyer
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`py-2 text-xs rounded-lg border font-medium transition-all ${
                  role === 'admin'
                    ? 'bg-amber-50 border-amber-600 text-amber-800 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Corporate Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700">Password / Token</label>
              <span className="text-[11px] text-emerald-700 hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-xs mt-2"
          >
            Sign In to Platform
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
          Don&apos;t have an enterprise account?{' '}
          <Link to="/signup" className="text-emerald-700 hover:underline font-semibold">
            Register Industrial Facility
          </Link>
        </div>
      </div>
    </div>
  );
};
