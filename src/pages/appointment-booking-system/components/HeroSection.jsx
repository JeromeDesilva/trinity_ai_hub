import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onBookNow }) => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <Icon name="Calendar" size={16} color="#6B46C1" />
              <span className="text-sm font-medium text-purple-700">Free Strategy Session</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Scale Your Startup with{' '}
              <span className="gradient-text">Expert Guidance</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Book a no-commitment consultation with Trinity's growth strategists. We've helped 150+ startups achieve rapid market penetration and sustainable scaling through data-driven AI solutions.
            </p>

            <div className="space-y-4">
              <Button 
                variant="default" 
                size="lg" 
                iconName="ArrowRight" 
                iconPosition="right"
                onClick={onBookNow}
              >
                Schedule Free Consultation
              </Button>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} color="#6B46C1" />
                  <span className="text-sm font-medium text-gray-700">30-Min Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} color="#10B981" />
                  <span className="text-sm font-medium text-gray-700">No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} color="#6B46C1" />
                  <span className="text-sm font-medium text-gray-700">Expert Team</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Trusted by fast-growing startups:</p>
              <div className="flex items-center gap-4">
                {[1, 2, 3, 4, 5]?.map((_, index) => (
                  <div key={index} className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Icon name="Briefcase" size={20} color="#6B46C1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">What You'll Get</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700">Available Now</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Market Analysis", description: "Your competitive landscape & positioning strategy", icon: "TrendingUp" },
                    { title: "Growth Roadmap", description: "90-day action plan for customer acquisition", icon: "Map" },
                    { title: "AI Integration Plan", description: "Tech stack recommendations to automate & scale", icon: "Cpu" },
                    { title: "Resource Planning", description: "Budget allocation & hiring priorities", icon: "DollarSign" }
                  ]?.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Icon name={benefit?.icon} size={20} color="#6B46C1" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{benefit?.title}</p>
                        <p className="text-sm text-gray-600">{benefit?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Avg. Client Growth</span>
                    <span className="text-lg font-bold text-purple-600">3.2x</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Within 6 months of implementation</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;