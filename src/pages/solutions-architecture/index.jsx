import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceShowcase from './components/ServiceShowcase';
import AIRecommendationEngine from './components/AIRecommendationEngine';
import ROICalculator from './components/ROICalculator';
import IntegrationShowcase from './components/IntegrationShowcase';
import ScalabilityDemo from './components/ScalabilityDemo';
import CTASection from './components/CTASection';

const SolutionsArchitecture = () => {
  return (
    <>
      <Helmet>
        <title>Solutions Architecture - Trinity AI Hub | AI-Driven Business Solutions</title>
        <meta 
          name="description" 
          content="Explore Trinity AI Hub's comprehensive suite of AI-powered solutions including agentic AI, process automation, data analytics, and digital transformation services. Get personalized recommendations and calculate your ROI." 
        />
        <meta name="keywords" content="AI solutions, business automation, agentic AI, process automation, data analytics, digital transformation, ROI calculator" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="main-content">
          <HeroSection />
          <ServiceShowcase />
          <AIRecommendationEngine />
          <ROICalculator />
          <IntegrationShowcase />
          <ScalabilityDemo />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default SolutionsArchitecture;