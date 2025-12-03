import React from 'react';
import Icon from '../../../components/AppIcon';

const IndustryShowcase = ({ industries }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Transforming Industries Worldwide
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From healthcare to finance, retail to manufacturing - see how Trinity's AI solutions drive measurable results across diverse sectors
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {industries?.map((industry, index) => (
          <div
            key={index}
            className="group bg-card rounded-lg border border-border p-6 hover:border-primary transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={industry?.icon} size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{industry?.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{industry?.count} Success Stories</p>
              <p className="text-xs text-primary font-semibold">
                Avg. {industry?.avgROI} ROI
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryShowcase;