import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <Icon name="Sparkles" size={16} color="#FFFFFF" />
          <span className="text-sm font-medium text-white">Limited Availability</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Accelerate Your Startup Growth?
        </h2>

        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our growth consultants have limited availability each month. Book your free session now and get personalized strategies to scale your business faster.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant="default"
            size="lg"
            className="bg-white text-purple-900 hover:bg-gray-100"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Schedule Your Free Consultation
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Questions? Chat With Us
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
          {[
            { icon: 'Clock', text: 'No Long-Term Commitment' },
            { icon: 'Shield', text: '100% Confidential' },
            { icon: 'Video', text: 'Remote or In-Person' },
            { icon: 'CheckCircle', text: 'Actionable Insights' }
          ]?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="p-3 bg-white/10 rounded-full">
                <Icon name={item?.icon} size={24} color="#FFFFFF" />
              </div>
              <p className="text-sm font-medium text-white">{item?.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl inline-block">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Users" size={20} color="#FFFFFF" />
            <p className="text-white font-semibold">Join 150+ startups who've accelerated their growth with Trinity</p>
          </div>
          <p className="text-sm text-purple-100">
            Average time to first revenue milestone: 4.2 months after consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;