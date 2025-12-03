import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-card to-muted rounded-xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
            <Icon name={stat?.icon} size={24} className="text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-2">{stat?.value}</p>
          <p className="text-sm text-muted-foreground">{stat?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;