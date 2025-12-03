import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const AIRecommendationEngine = () => {
  const [industry, setIndustry] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const industryOptions = [
    { value: 'healthcare', label: 'Healthcare & Medical' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'technology', label: 'Technology & SaaS' },
    { value: 'education', label: 'Education & Training' }
  ];

  const businessSizeOptions = [
    { value: 'startup', label: 'Startup (1-50 employees)' },
    { value: 'sme', label: 'SME (51-500 employees)' },
    { value: 'enterprise', label: 'Enterprise (500+ employees)' }
  ];

  const challengeOptions = [
    { value: 'automation', label: 'Process Automation' },
    { value: 'customer-experience', label: 'Customer Experience' },
    { value: 'data-analytics', label: 'Data Analytics & Insights' },
    { value: 'scalability', label: 'Scalability & Growth' },
    { value: 'cost-reduction', label: 'Cost Reduction' },
    { value: 'digital-transformation', label: 'Digital Transformation' }
  ];

  const recommendations = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation",
      match: "95% Match",
      description: "Implement intelligent chatbots and virtual assistants to handle customer inquiries 24/7, reducing response time by 80% and operational costs by 60%.",
      roi: "250% ROI in 12 months",
      implementation: "6-8 weeks",
      icon: "MessageSquare",
      color: "purple"
    },
    {
      id: 2,
      title: "Predictive Analytics Platform",
      match: "88% Match",
      description: "Leverage machine learning to forecast trends, optimize inventory, and make data-driven decisions with 95% accuracy.",
      roi: "180% ROI in 12 months",
      implementation: "8-10 weeks",
      icon: "TrendingUp",
      color: "blue"
    },
    {
      id: 3,
      title: "Intelligent Process Automation Suite",
      match: "82% Match",
      description: "Automate repetitive tasks across departments, freeing up 40% of employee time for strategic initiatives.",
      roi: "320% ROI in 12 months",
      implementation: "10-12 weeks",
      icon: "Zap",
      color: "pink"
    }
  ];

  const handleGetRecommendations = () => {
    if (industry && businessSize && challenge) {
      setShowRecommendations(true);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Icon name="Brain" size={20} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">AI-Powered Recommendations</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few questions and let our AI recommend the best solutions tailored to your business needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Select
              label="Your Industry"
              placeholder="Select industry"
              options={industryOptions}
              value={industry}
              onChange={setIndustry}
              searchable
            />
            
            <Select
              label="Business Size"
              placeholder="Select size"
              options={businessSizeOptions}
              value={businessSize}
              onChange={setBusinessSize}
            />
            
            <Select
              label="Primary Challenge"
              placeholder="Select challenge"
              options={challengeOptions}
              value={challenge}
              onChange={setChallenge}
              searchable
            />
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              iconName="Sparkles"
              iconPosition="left"
              onClick={handleGetRecommendations}
              disabled={!industry || !businessSize || !challenge}
            >
              Get AI Recommendations
            </Button>
          </div>

          {showRecommendations && (
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                <Icon name="CheckCircle2" size={20} />
                <span className="font-semibold">Found 3 perfect matches for your business</span>
              </div>

              {recommendations?.map((rec) => (
                <div key={rec?.id} className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      rec?.color === 'purple' ? 'bg-purple-100' :
                      rec?.color === 'blue' ? 'bg-blue-100' : 'bg-pink-100'
                    }`}>
                      <Icon 
                        name={rec?.icon} 
                        size={32} 
                        color={
                          rec?.color === 'purple' ? '#6B46C1' :
                          rec?.color === 'blue' ? '#3B82F6' : '#EC4899'
                        } 
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{rec?.title}</h3>
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                          <Icon name="Target" size={16} />
                          {rec?.match}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4">{rec?.description}</p>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="TrendingUp" size={16} color="#10B981" />
                          <span className="font-semibold text-green-600">{rec?.roi}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} color="#6B7280" />
                          <span className="text-gray-600">{rec?.implementation}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="default" size="sm" iconName="ArrowRight" iconPosition="right">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" iconName="Calculator">
                          Calculate ROI
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIRecommendationEngine;