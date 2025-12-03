import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200">
              <Icon name="Handshake" size={20} color="#6B46C1" />
              <span className="text-sm font-medium text-purple-700">Strategic Partnerships & Investment</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build the Future of{' '}
              <span className="gradient-text">AI-Driven Business</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Join Trinity's ecosystem of innovation. Whether you're an investor seeking high-growth AI opportunities or a strategic partner ready to amplify your capabilities, we're building the next generation of intelligent business solutions together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
                Explore Investment Opportunities
              </Button>
              <Button variant="outline" size="lg" iconName="Users" iconPosition="left">
                Partnership Inquiry
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" size={24} color="#10B981" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">$50M+</div>
                  <div className="text-sm text-gray-600">Annual Revenue</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={24} color="#3B82F6" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Enterprise Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={24} color="#EC4899" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Growth Metrics</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Live Data</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="BarChart3" size={20} color="#6B46C1" />
                      <span className="text-sm text-gray-600">YoY Growth</span>
                    </div>
                    <div className="text-3xl font-bold text-purple-700">145%</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Target" size={20} color="#3B82F6" />
                      <span className="text-sm text-gray-600">Client Retention</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-700">98%</div>
                  </div>
                  
                  <div className="bg-pink-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Zap" size={20} color="#EC4899" />
                      <span className="text-sm text-gray-600">AI Projects</span>
                    </div>
                    <div className="text-3xl font-bold text-pink-700">500+</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Award" size={20} color="#10B981" />
                      <span className="text-sm text-gray-600">ROI Average</span>
                    </div>
                    <div className="text-3xl font-bold text-green-700">320%</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Market Valuation</div>
                      <div className="text-2xl font-bold text-gray-900">$250M+</div>
                    </div>
                    <Icon name="TrendingUp" size={32} color="#6B46C1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;