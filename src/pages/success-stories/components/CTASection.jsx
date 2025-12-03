import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-12 text-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          <Icon name="Rocket" size={32} className="text-white" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Write Your Success Story?
        </h2>

        <p className="text-lg text-white/90 mb-8">
          Join hundreds of businesses that have transformed their operations with Trinity's AI-powered solutions. Let's create measurable results together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Download"
            iconPosition="left"
            className="border-white text-white hover:bg-white/10"
          >
            Download Case Studies
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={16} />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={16} />
            <span>No Commitment Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={16} />
            <span>ROI Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;