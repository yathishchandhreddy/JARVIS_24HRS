import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [orgName, setOrgName] = useState('Gujarat Chemical Cluster Node');
  const [email, setEmail] = useState('dispatch@gujaratchem.in');
  const [role, setRole] = useState<'generator' | 'buyer'>('generator');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'buyer') {
      navigate('/buyer');
    } else {
      navigate('/app');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 flex-1">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
        <div className="text-center">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
            <span className="material-symbols-outlined text-[22px]">domain_add</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Register Industrial Facility</h2>
          <p className="text-xs text-slate-500 mt-1">Enroll an industrial byproduct generator or circular procurement desk</p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Facility Type</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('generator')}
                className={`py-2 text-xs rounded-lg border font-medium transition-all ${
                  role === 'generator'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Waste Generator
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
                Circular Buyer
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Organization / Plant Name</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Corporate Dispatch Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-xs mt-2"
          >
            Create Facility Account
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
          Already registered?{' '}
          <Link to="/login" className="text-emerald-700 hover:underline font-semibold">
            Sign In to Existing Account
          </Link>
        </div>
      </div>
    </div>
  );
};
