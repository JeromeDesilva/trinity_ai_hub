import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductComparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Automation',
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Custom Integrations',
      starter: 'Limited',
      professional: true,
      enterprise: true
    },
    {
      feature: 'Advanced Analytics',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Priority Support',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'White-Label Options',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'Dedicated Account Manager',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'Custom Development',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'SLA Guarantee',
      starter: false,
      professional: '99.5%',
      enterprise: '99.9%'
    }
  ];

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <Icon name="Check" size={24} color="#10B981" />;
    } else if (value === false) {
      return <Icon name="X" size={24} color="#EF4444" />;
    } else {
      return <span className="text-sm font-medium text-gray-700">{value}</span>;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-4">
            <Icon name="GitCompare" size={20} color="#6B46C1" />
            <span className="text-sm font-semibold text-purple-700">Feature Comparison</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Right Plan for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare features across our pricing tiers to find the perfect fit for your organization's needs and growth trajectory.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 border-b border-gray-200">
                  <th className="text-left py-6 px-6 text-sm font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Zap" size={24} color="#6B46C1" />
                      <span className="text-lg font-bold text-gray-900">Starter</span>
                      <span className="text-sm text-gray-600">$49/month</span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 bg-purple-100">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Briefcase" size={24} color="#3B82F6" />
                      <span className="text-lg font-bold text-gray-900">Professional</span>
                      <span className="text-sm text-gray-600">$149/month</span>
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-700 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold mt-1">
                        <Icon name="Star" size={12} />
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Building2" size={24} color="#EC4899" />
                      <span className="text-lg font-bold text-gray-900">Enterprise</span>
                      <span className="text-sm text-gray-600">Custom</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData?.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {row?.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {renderFeatureValue(row?.starter)}
                    </td>
                    <td className="py-4 px-6 text-center bg-purple-50/50">
                      {renderFeatureValue(row?.professional)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {renderFeatureValue(row?.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 border-t border-gray-200">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-500 transition-all duration-300">
              <Icon name="Zap" size={18} />
              Start Starter Trial
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Icon name="Briefcase" size={18} />
              Start Professional Trial
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-500 transition-all duration-300">
              <Icon name="Building2" size={18} />
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;