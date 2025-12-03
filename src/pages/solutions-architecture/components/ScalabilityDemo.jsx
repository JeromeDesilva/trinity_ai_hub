import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ScalabilityDemo = () => {
  const [activeScale, setActiveScale] = useState('startup');

  const scaleOptions = [
    {
      id: 'startup',
      label: 'Startup',
      users: '1-50',
      icon: 'Rocket',
      color: 'purple'
    },
    {
      id: 'growth',
      label: 'Growth Stage',
      users: '51-500',
      icon: 'TrendingUp',
      color: 'blue'
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      users: '500+',
      icon: 'Building2',
      color: 'pink'
    }
  ];

  const scalabilityFeatures = {
    startup: [
      { metric: 'Processing Capacity', value: '10K requests/day', icon: 'Gauge' },
      { metric: 'Data Storage', value: '100 GB', icon: 'Database' },
      { metric: 'API Calls', value: '50K/month', icon: 'Zap' },
      { metric: 'User Accounts', value: 'Up to 50', icon: 'Users' },
      { metric: 'Response Time', value: '< 200ms', icon: 'Clock' },
      { metric: 'Uptime SLA', value: '99.5%', icon: 'Shield' }
    ],
    growth: [
      { metric: 'Processing Capacity', value: '500K requests/day', icon: 'Gauge' },
      { metric: 'Data Storage', value: '1 TB', icon: 'Database' },
      { metric: 'API Calls', value: '1M/month', icon: 'Zap' },
      { metric: 'User Accounts', value: 'Up to 500', icon: 'Users' },
      { metric: 'Response Time', value: '< 150ms', icon: 'Clock' },
      { metric: 'Uptime SLA', value: '99.9%', icon: 'Shield' }
    ],
    enterprise: [
      { metric: 'Processing Capacity', value: '10M+ requests/day', icon: 'Gauge' },
      { metric: 'Data Storage', value: 'Unlimited', icon: 'Database' },
      { metric: 'API Calls', value: 'Unlimited', icon: 'Zap' },
      { metric: 'User Accounts', value: 'Unlimited', icon: 'Users' },
      { metric: 'Response Time', value: '< 100ms', icon: 'Clock' },
      { metric: 'Uptime SLA', value: '99.99%', icon: 'Shield' }
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Icon name="Layers" size={20} color="#10B981" />
            <span className="text-sm font-medium text-green-700">Scalability</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built to Scale with Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From startup to enterprise, our solutions grow seamlessly with your needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {scaleOptions?.map((option) => (
              <button
                key={option?.id}
                onClick={() => setActiveScale(option?.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeScale === option?.id
                    ? option?.color === 'purple' ? 'bg-purple-700 text-white shadow-lg scale-105' :
                      option?.color === 'blue' ? 'bg-blue-500 text-white shadow-lg scale-105' :
                      'bg-pink-500 text-white shadow-lg scale-105' :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon 
                  name={option?.icon} 
                  size={24} 
                  color={activeScale === option?.id ? 'white' : '#6B7280'} 
                />
                <div className="text-left">
                  <div className="text-sm">{option?.label}</div>
                  <div className="text-xs opacity-80">{option?.users} users</div>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scalabilityFeatures?.[activeScale]?.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} color="#6B46C1" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{feature?.metric}</div>
                    <div className="text-xl font-bold text-gray-900">{feature?.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-xl border border-purple-200 p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={24} color="#6B46C1" className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Auto-Scaling Infrastructure</h4>
                  <p className="text-gray-600">
                    Our platform automatically adjusts resources based on demand, ensuring optimal performance during peak times while minimizing costs during low-traffic periods.
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300 whitespace-nowrap">
                <Icon name="MessageSquare" size={20} />
                Discuss Scaling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalabilityDemo;