import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <Icon name="Sparkles" size={16} color="#6B46C1" />
              <span className="text-sm font-medium text-purple-700">AI-Powered Digital Transformation</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Intelligence Meets{' '}
              <span className="gradient-text">Creativity</span>
              {' '}at Scale
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your business with agentic AI solutions that amplify human potential. From intelligent automation to scalable digital products, Trinity bridges the gap between complex technology and practical business outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/watch-demo">
                <Button variant="outline" size="lg" iconName="Play" iconPosition="left">
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[
                  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9e8814c-1763296696290.png", alt: "Professional woman with brown hair in business attire smiling at camera" },
                  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1752f228f-1763294014332.png", alt: "Young man with beard wearing casual blue shirt in office setting" },
                  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_184ab59fa-1763300528740.png", alt: "Professional woman with glasses in white blouse working at desk" },
                  { src: "https://images.unsplash.com/photo-1723990720514-65968a7d517b", alt: "Confident businessman in dark suit with arms crossed in modern office" }]?.
                  map((user, index) =>
                    <img
                      key={index}
                      src={user?.src}
                      alt={user?.alt}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover" />

                  )}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">10,000+ businesses transformed</p>
                <p className="text-xs text-gray-600">Join industry leaders worldwide</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">AI Performance Dashboard</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Automation Rate", value: "94%", change: "+12%", icon: "TrendingUp", color: "text-green-600" },
                    { label: "Cost Savings", value: "$2.4M", change: "+28%", icon: "DollarSign", color: "text-blue-600" },
                    { label: "Time Saved", value: "15,000h", change: "+45%", icon: "Clock", color: "text-purple-600" },
                    { label: "ROI Growth", value: "340%", change: "+89%", icon: "TrendingUp", color: "text-pink-600" }]?.
                    map((metric, index) =>
                      <div key={index} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name={metric?.icon} size={16} className={metric?.color} />
                          <span className="text-xs text-gray-600">{metric?.label}</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{metric?.value}</p>
                        <p className="text-xs text-green-600 font-medium mt-1">{metric?.change} this month</p>
                      </div>
                    )}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Active AI Agents</span>
                    <span className="text-sm font-bold text-gray-900">24/7</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6]?.map((_, index) =>
                      <div key={index} className="flex-1 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;