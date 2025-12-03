import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrinityClusterSection from './components/TrinityClusterSection';
import AICapabilitiesSection from './components/AICapabilitiesSection';
import SuccessMetricsSection from './components/SuccessMetricsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trinity AI Hub - Intelligent Automation & Digital Transformation</title>
        <meta
          name="description"
          content="Transform your business with Trinity's AI-powered solutions. From intelligent automation to scalable digital products, we bridge complex technology and practical business outcomes."
        />
        <meta name="keywords" content="AI automation, digital transformation, agentic AI, business intelligence, SaaS solutions, Trinity Creative Services" />
        <meta property="og:title" content="Trinity AI Hub - Intelligent Automation & Digital Transformation" />
        <meta property="og:description" content="Empowering businesses with AI-driven solutions that amplify human potential and accelerate growth." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="main-content">
          <HeroSection />
          <TrinityClusterSection />
          <AICapabilitiesSection />
          <SuccessMetricsSection />
          <TestimonialsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;