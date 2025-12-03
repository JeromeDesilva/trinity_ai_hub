import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Icon name="Sparkles" size={20} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Intelligent Solutions for
            <span className="gradient-text block mt-2">Modern Business Challenges</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
            Discover our comprehensive suite of AI-driven services designed to transform your business operations, enhance customer experiences, and accelerate growth through intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Icon name="Rocket" size={20} />
              Explore Solutions
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
              <Icon name="Calendar" size={20} />
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} color="#10B981" />
              <span>500+ Implementations</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} color="#10B981" />
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} color="#10B981" />
              <span>24/7 AI Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;