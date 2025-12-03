import React from 'react';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <Icon name="Rocket" size={20} color="white" />
            <span className="text-sm font-semibold text-white">Start Your Transformation Today</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of businesses already leveraging Trinity's intelligent solutions. Start your 14-day free trial today—no credit card required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Icon name="Play" size={20} />
              Start Free Trial
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              <Icon name="Calendar" size={20} />
              Schedule Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Icon name="Shield" size={32} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/80 text-sm">
                Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Icon name="Headphones" size={32} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-white/80 text-sm">
                Dedicated support team available around the clock to ensure your success
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Icon name="Zap" size={32} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-white/80 text-sm">
                Get up and running in minutes with our intuitive onboarding process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;