import React from 'react';
import Icon from '../../../components/AppIcon';

const IntegrationMap = ({ clusters }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Network" size={24} color="var(--color-primary)" />
        <h3 className="text-xl font-bold text-foreground">Cross-Cluster Integration Network</h3>
      </div>
      <div className="space-y-4">
        {clusters?.slice(0, 4)?.map((cluster, index) => (
          <div key={cluster?.id} className="relative">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${cluster?.gradientStart} 0%, ${cluster?.gradientEnd} 100%)`
                }}
              >
                <Icon name={cluster?.icon} size={24} color="white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{cluster?.title}</h4>
                <p className="text-sm text-muted-foreground">
                  Integrates with {cluster?.integrations?.length} other clusters
                </p>
              </div>
              <div className="flex gap-2">
                {cluster?.integrations?.slice(0, 3)?.map((integration, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center"
                    title={integration}
                  >
                    <Icon name="Link2" size={14} color="var(--color-primary)" />
                  </div>
                ))}
              </div>
            </div>
            {index < 3 && (
              <div className="absolute left-6 top-full w-0.5 h-4 bg-border" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-start gap-3">
          <Icon name="Lightbulb" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Seamless Integration</h4>
            <p className="text-sm text-muted-foreground">
              All Trinity clusters are designed to work together seamlessly, enabling comprehensive solutions that span multiple service verticals for maximum business impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationMap;