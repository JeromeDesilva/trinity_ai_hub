import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SolutionsArchitecture from './pages/solutions-architecture';
import PartnershipPortal from './pages/partnership-portal';
import TrinityAcademy from './pages/trinity-academy';
import TrinityClusterExplorer from './pages/trinity-cluster-explorer';
import SuccessStories from './pages/success-stories';
import DigitalProductsSuite from './pages/digital-products-suite';
import Homepage from './pages/homepage';
import AppointmentBookingSystem from './pages/appointment-booking-system';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/solutions-architecture" element={<SolutionsArchitecture />} />
        <Route path="/partnership-portal" element={<PartnershipPortal />} />
        <Route path="/trinity-academy" element={<TrinityAcademy />} />
        <Route path="/trinity-cluster-explorer" element={<TrinityClusterExplorer />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/digital-products-suite" element={<DigitalProductsSuite />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/appointment-booking-system" element={<AppointmentBookingSystem />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;