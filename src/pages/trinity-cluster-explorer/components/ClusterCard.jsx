import React from 'react';
import Icon from '../../../components/AppIcon';


const ClusterCard = ({ cluster, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer group ${
        isActive
          ? 'border-primary shadow-2xl scale-105'
          : 'border-border hover:border-primary/50 hover:shadow-xl'
      }`}
      style={{
        background: isActive
          ? 'linear-gradient(135deg, rgba(107, 70, 193, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)'
          : 'var(--color-card)'
      }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isActive ? 'scale-110' : 'group-hover:scale-105'
            }`}
            style={{
              background: `linear-gradient(135deg, ${cluster?.gradientStart} 0%, ${cluster?.gradientEnd} 100%)`,
              boxShadow: isActive ? `0 8px 32px ${cluster?.gradientStart}40` : 'none'
            }}
          >
            <Icon name={cluster?.icon} size={32} color="white" />
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
              isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {cluster?.category}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {cluster?.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cluster?.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Layers" size={16} color="var(--color-primary)" />
            <span className="text-xs font-medium text-foreground">{cluster?.services} Services</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <span className="text-sm font-semibold">Explore</span>
            <Icon
              name="ArrowRight"
              size={16}
              className={`transition-transform duration-300 ${
                isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        style={{
          background: `linear-gradient(90deg, ${cluster?.gradientStart} 0%, ${cluster?.gradientEnd} 100%)`
        }}
      />
    </div>
  );
};

export default ClusterCard;