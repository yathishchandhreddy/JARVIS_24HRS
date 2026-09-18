/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from '@/src/layouts/PublicLayout';
import { GeneratorLayout } from '@/src/layouts/GeneratorLayout';
import { BuyerLayout } from '@/src/layouts/BuyerLayout';
import { AdminLayout } from '@/src/layouts/AdminLayout';

// Public Pages
import { LandingPage } from '@/src/pages/public/LandingPage';
import { LoginPage } from '@/src/pages/public/LoginPage';
import { SignupPage } from '@/src/pages/public/SignupPage';

// Generator Pages
import { OverviewPage } from '@/src/pages/generator/OverviewPage';
import { AnalyzePage } from '@/src/pages/generator/AnalyzePage';
import { ValorizePage } from '@/src/pages/generator/ValorizePage';
import { ExchangePage } from '@/src/pages/generator/ExchangePage';
import { DemandsPage } from '@/src/pages/generator/DemandsPage';
import { RequestsPage } from '@/src/pages/generator/RequestsPage';
import { AnalyticsPage } from '@/src/pages/generator/AnalyticsPage';
import { ProfilePage } from '@/src/pages/generator/ProfilePage';
import { SettingsPage } from '@/src/pages/generator/SettingsPage';

// Buyer Pages
import { BuyerOverviewPage } from '@/src/pages/buyer/BuyerOverviewPage';
import { FindWastePage } from '@/src/pages/buyer/FindWastePage';
import { PostRequirementPage } from '@/src/pages/buyer/PostRequirementPage';
import { BuyerMatchesPage } from '@/src/pages/buyer/BuyerMatchesPage';
import { BuyerRequestsPage } from '@/src/pages/buyer/BuyerRequestsPage';
import { BuyerProfilePage } from '@/src/pages/buyer/BuyerProfilePage';

// Admin Pages
import { AdminDashboardPage } from '@/src/pages/admin/AdminDashboardPage';

// State Fallbacks
import { NotFoundState } from '@/src/components/ui/NotFoundState';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Marketing & Authentication */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* Generator Routes */}
        <Route path="/app" element={<GeneratorLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="analyze" element={<AnalyzePage />} />
          <Route path="valorize" element={<ValorizePage />} />
          <Route path="exchange" element={<ExchangePage />} />
          <Route path="demands" element={<DemandsPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Buyer Routes */}
        <Route path="/buyer" element={<BuyerLayout />}>
          <Route index element={<BuyerOverviewPage />} />
          <Route path="find-waste" element={<FindWastePage />} />
          <Route path="post-requirement" element={<PostRequirementPage />} />
          <Route path="matches" element={<BuyerMatchesPage />} />
          <Route path="exchange" element={<BuyerMatchesPage />} />
          <Route path="requests" element={<BuyerRequestsPage />} />
          <Route path="demands" element={<DemandsPage />} />
          <Route path="profile" element={<BuyerProfilePage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage title="Network Overview & Grid Telemetry" />} />
          <Route path="users" element={<AdminDashboardPage title="Registered Facility Nodes" category="User Registry" />} />
          <Route path="waste" element={<AdminDashboardPage title="Industrial Feedstock Registry" category="Waste Streams" />} />
          <Route path="requirements" element={<AdminDashboardPage title="Procurement Requirements" category="Offtaker Requirements" />} />
          <Route path="matches" element={<AdminDashboardPage title="Bilateral Match Registry" category="Bilateral Matches" />} />
          <Route path="requests" element={<AdminDashboardPage title="Active Bilateral Trade Orders" category="Trade Orders" />} />
          <Route path="analytics" element={<AdminDashboardPage title="Platform-wide Circular Yields" category="Platform Analytics" />} />
          <Route path="settings" element={<AdminDashboardPage title="Core Platform Infrastructure" category="System Infrastructure" />} />
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-[#06090D] flex items-center justify-center p-4">
              <NotFoundState
                title="Node Route Not Found"
                description="The requested routing endpoint does not exist on this industrial telemetry network."
                actionLabel="Return to Generator Hub"
                onAction={() => window.location.assign('/app')}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
