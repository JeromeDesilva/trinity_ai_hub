import React from 'react';

import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedStory = ({ story }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-border mb-12">
      <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit mb-4">
            <Icon name="Star" size={16} />
            <span className="text-sm font-semibold">Featured Success Story</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {story?.title}
          </h2>

          <p className="text-lg text-muted-foreground mb-6">{story?.description}</p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {story?.metrics?.map((metric, index) => (
              <div key={index}>
                <p className="text-3xl font-bold gradient-text mb-1">{metric?.value}</p>
                <p className="text-sm text-muted-foreground">{metric?.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <Image
              src={story?.companyLogo}
              alt={story?.companyLogoAlt}
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="font-bold text-foreground text-lg">{story?.companyName}</p>
              <p className="text-muted-foreground">{story?.industry} • {story?.companySize}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
              Read Full Story
            </Button>
            <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
              Download PDF
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
            <Image
              src={story?.image}
              alt={story?.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Image
                    src={story?.testimonial?.avatar}
                    alt={story?.testimonial?.avatarAlt}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-foreground/80 italic mb-2">
                      "{story?.testimonial?.quote}"
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {story?.testimonial?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {story?.testimonial?.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;