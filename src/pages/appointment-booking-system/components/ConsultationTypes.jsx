import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationTypes = ({ onServiceSelect, selectedService }) => {
  const consultationTypes = [
    {
      id: 'market-validation',
      title: 'Market Validation Session',
      duration: '30 min',
      price: 'Free',
      description: 'Validate your product-market fit with data-driven insights and competitive analysis.',
      features: [
        'Target market analysis',
        'Competitor positioning review',
        'MVP feedback & recommendations',
        'Go-to-market strategy overview'
      ],
      icon: 'Target',
      color: 'purple',
      recommended: false
    },
    {
      id: 'growth-strategy',
      title: 'Growth Strategy Workshop',
      duration: '45 min',
      price: 'Free',
      description: 'Comprehensive growth plan focusing on customer acquisition, retention, and scaling operations.',
      features: [
        'Customer acquisition channels',
        'Conversion optimization strategies',
        'Scaling roadmap (0-100k users)',
        'Marketing automation setup',
        'Key metrics & KPI tracking'
      ],
      icon: 'TrendingUp',
      color: 'blue',
      recommended: true
    },
    {
      id: 'ai-implementation',
      title: 'AI Implementation Audit',
      duration: '45 min',
      price: 'Free',
      description: 'Technical assessment of AI integration opportunities to reduce costs and accelerate growth.',
      features: [
        'Process automation opportunities',
        'AI tool recommendations',
        'Cost-benefit analysis',
        'Implementation timeline',
        'Technical requirements'
      ],
      icon: 'Cpu',
      color: 'pink',
      recommended: false
    },
    {
      id: 'funding-readiness',
      title: 'Funding Readiness Review',
      duration: '30 min',
      price: 'Free',
      description: 'Prepare for investor meetings with pitch refinement and financial projections review.',
      features: [
        'Pitch deck feedback',
        'Financial model review',
        'Investor objection handling',
        'Valuation guidance'
      ],
      icon: 'DollarSign',
      color: 'green',
      recommended: false
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: '#6B46C1', button: 'bg-purple-600 hover:bg-purple-700' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: '#2563EB', button: 'bg-blue-600 hover:bg-blue-700' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: '#DB2777', button: 'bg-pink-600 hover:bg-pink-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: '#059669', button: 'bg-green-600 hover:bg-green-700' }
    };
    return colors?.[color] || colors?.purple;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Icon name="Calendar" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Choose Your Focus</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Select Your Consultation Type
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All sessions are complimentary and tailored to your startup's specific challenges and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {consultationTypes?.map((consultation) => {
            const colors = getColorClasses(consultation?.color);
            const isSelected = selectedService?.id === consultation?.id;

            return (
              <div
                key={consultation?.id}
                className={`relative p-6 bg-white rounded-xl border-2 transition-all duration-300 ${
                  isSelected 
                    ? `${colors?.border} shadow-lg scale-105` 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {consultation?.recommended && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${colors?.bg} rounded-lg`}>
                    <Icon name={consultation?.icon} size={24} color={colors?.icon} />
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${colors?.text}`}>{consultation?.duration}</p>
                    <p className="text-lg font-bold text-gray-900">{consultation?.price}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{consultation?.title}</h3>
                <p className="text-gray-600 mb-4">{consultation?.description}</p>
                <div className="space-y-2 mb-6">
                  {consultation?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={16} color={colors?.icon} className="mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full ${isSelected ? colors?.button : ''}`}
                  onClick={() => onServiceSelect(consultation)}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  {isSelected ? 'Selected - Choose Time' : 'Select & Schedule'}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <Icon name="Video" size={20} color="#6B46C1" />
              <span className="text-sm font-medium text-gray-700">Zoom or Google Meet</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} color="#6B46C1" />
              <span className="text-sm font-medium text-gray-700">Flexible Scheduling</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} color="#6B46C1" />
              <span className="text-sm font-medium text-gray-700">100% Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;