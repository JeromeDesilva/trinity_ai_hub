import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      icon: "Layers",
      value: "6",
      label: "Integrated Clusters",
      description: "Comprehensive service verticals",
      color: "#6B46C1"
    },
    {
      icon: "Users",
      value: "500+",
      label: "Active Clients",
      description: "Across all industries",
      color: "#3B82F6"
    },
    {
      icon: "Zap",
      value: "1,200+",
      label: "Projects Delivered",
      description: "Successfully completed",
      color: "#EC4899"
    },
    {
      icon: "Award",
      value: "98%",
      label: "Client Satisfaction",
      description: "Average rating score",
      color: "#10B981"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${stat?.color}20 0%, ${stat?.color}40 100%)`
            }}
          >
            <Icon name={stat?.icon} size={28} color={stat?.color} />
          </div>
          <div className="text-4xl font-bold gradient-text mb-2">{stat?.value}</div>
          <h4 className="font-semibold text-foreground mb-1">{stat?.label}</h4>
          <p className="text-sm text-muted-foreground">{stat?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;