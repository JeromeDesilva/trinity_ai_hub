import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProtectedRoute from "components/ProtectedRoute";

// Public pages (unchanged)
import SolutionsArchitecture from './pages/solutions-architecture';
import PartnershipPortal from './pages/partnership-portal';
import TrinityAcademy from './pages/trinity-academy';
import TrinityClusterExplorer from './pages/trinity-cluster-explorer';
import SuccessStories from './pages/success-stories';
import DigitalProductsSuite from './pages/digital-products-suite';
import Homepage from './pages/homepage';
import AppointmentBookingSystem from './pages/appointment-booking-system';
import GetStarted from './pages/get-started';
import WatchDemo from './pages/watch-demo';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLeads from './pages/admin/AdminLeads';
import AdminBlog from './pages/admin/AdminBlog';
import AdminBlogEdit from './pages/admin/AdminBlogEdit';
import AdminSEO from './pages/admin/AdminSEO';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* ── Public Routes (unchanged) ─────────────────────────── */}
          <Route path="/" element={<Homepage />} />
          <Route path="/solutions-architecture" element={<SolutionsArchitecture />} />
          <Route path="/partnership-portal" element={<PartnershipPortal />} />
          <Route path="/trinity-academy" element={<TrinityAcademy />} />
          <Route path="/trinity-cluster-explorer" element={<TrinityClusterExplorer />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/digital-products-suite" element={<DigitalProductsSuite />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/appointment-booking-system" element={<AppointmentBookingSystem />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/watch-demo" element={<WatchDemo />} />

          {/* ── Admin Routes ──────────────────────────────────────── */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/leads" element={<ProtectedRoute><AdminLeads /></ProtectedRoute>} />
          <Route path="/admin/blog" element={<ProtectedRoute><AdminBlog /></ProtectedRoute>} />
          <Route path="/admin/blog/:id" element={<ProtectedRoute><AdminBlogEdit /></ProtectedRoute>} />
          <Route path="/admin/seo" element={<ProtectedRoute><AdminSEO /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;