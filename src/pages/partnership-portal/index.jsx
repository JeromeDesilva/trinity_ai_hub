import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PartnershipTypes from './components/PartnershipTypes';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import LeadershipTeam from './components/LeadershipTeam';
import PartnershipProcess from './components/PartnershipProcess';
import ResourcesSection from './components/ResourcesSection';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';

const PartnershipPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <PartnershipTypes />
        <InvestmentOpportunities />
        <LeadershipTeam />
        <PartnershipProcess />
        <ResourcesSection />
        <CTASection />
        
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Icon name="Sparkles" size={24} color="white" />
                  </div>
                  <span className="text-xl font-bold">Trinity AI Hub</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Building the future of AI-driven business transformation through strategic partnerships and innovation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/homepage" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Home</a></li>
                  <li><a href="/trinity-cluster-explorer" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Cluster Explorer</a></li>
                  <li><a href="/solutions-architecture" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Solutions</a></li>
                  <li><a href="/digital-products-suite" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Products</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Partnership</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Become a Partner</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Investment Opportunities</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Resource Library</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Connect</h4>
                <div className="flex gap-3 mb-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300" aria-label="LinkedIn">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300" aria-label="Twitter">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300" aria-label="GitHub">
                    <Icon name="Github" size={20} />
                  </a>
                </div>
                <p className="text-gray-400 text-sm">
                  partnerships@trinitycreative.ai<br />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date()?.getFullYear()} Trinity Creative Services. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PartnershipPortal;