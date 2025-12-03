import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const ctaFeatures = [
    {
      icon: "Calendar",
      title: "Free Consultation",
      description: "30-minute strategy session with our AI experts"
    },
    {
      icon: "FileText",
      title: "Custom Proposal",
      description: "Tailored solution architecture for your business"
    },
    {
      icon: "TrendingUp",
      title: "ROI Analysis",
      description: "Detailed cost-benefit analysis and projections"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-700 via-blue-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Join 500+ companies that have already accelerated their growth with Trinity AI Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ctaFeatures?.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center">
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={feature?.icon} size={28} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature?.title}</h3>
              <p className="text-white/80 text-sm">{feature?.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg" 
            iconName="Calendar" 
            iconPosition="left"
            className="bg-white text-purple-700 hover:bg-gray-100"
          >
            Schedule Free Consultation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            iconName="Download" 
            iconPosition="left"
            className="border-white text-white hover:bg-white/10"
          >
            Download Solutions Guide
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} />
            <span>Free trial available</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;