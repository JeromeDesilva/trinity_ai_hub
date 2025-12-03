import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClusterDetail = ({ cluster, onClose }) => {
  if (!cluster) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin">
        <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border z-10">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${cluster?.gradientStart} 0%, ${cluster?.gradientEnd} 100%)`
                }}
              >
                <Icon name={cluster?.icon} size={28} color="white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{cluster?.title}</h2>
                <p className="text-sm text-muted-foreground">{cluster?.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              aria-label="Close cluster details"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{cluster?.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Key Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cluster?.keyServices?.map((service, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${cluster?.gradientStart}20 0%, ${cluster?.gradientEnd}20 100%)`
                      }}
                    >
                      <Icon name={service?.icon} size={20} color={cluster?.gradientStart} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{service?.name}</h4>
                      <p className="text-sm text-muted-foreground">{service?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Integration Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cluster?.integrations?.map((integration, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-muted/50 border border-border text-center"
                >
                  <Icon name="Link" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{integration}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cluster?.metrics?.map((metric, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold gradient-text mb-1">{metric?.value}</div>
                  <p className="text-xs text-muted-foreground">{metric?.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Featured Case Study</h3>
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={cluster?.caseStudy?.logo}
                  alt={cluster?.caseStudy?.logoAlt}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{cluster?.caseStudy?.company}</h4>
                  <p className="text-sm text-muted-foreground">{cluster?.caseStudy?.industry}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{cluster?.caseStudy?.challenge}</p>
              <div className="flex items-center gap-2 text-success">
                <Icon name="TrendingUp" size={20} />
                <span className="font-semibold">{cluster?.caseStudy?.result}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="default" className="flex-1" iconName="Calendar" iconPosition="left">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="flex-1" iconName="FileText" iconPosition="left">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClusterDetail;