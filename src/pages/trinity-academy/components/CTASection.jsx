import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Icon name="Sparkles" size={20} color="white" />
          <span className="text-sm font-medium text-white">Limited Time Offer</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Start Your Learning Journey Today
        </h2>

        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join 25,000+ professionals who are transforming their careers with Trinity Academy. Get instant access to 150+ courses, expert mentorship, and a global community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
            iconName="Rocket"
            iconPosition="right"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Demo
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: 'CheckCircle', text: '7-day free trial' },
            { icon: 'CreditCard', text: 'No credit card required' },
            { icon: 'Award', text: 'Money-back guarantee' }
          ]?.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-white">
              <Icon name={item?.icon} size={20} />
              <span className="text-sm font-medium">{item?.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']?.map((company, index) => (
              <div key={index} className="text-white/60 font-bold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;