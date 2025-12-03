import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnershipTypes = () => {
  const partnershipOptions = [
    {
      id: 1,
      icon: "Briefcase",
      title: "Strategic Technology Partners",
      description: "Integrate Trinity\'s AI capabilities into your existing solutions. Co-develop innovative products and expand market reach through complementary technologies.",
      benefits: [
        "Joint product development opportunities",
        "Revenue sharing models",
        "Technical integration support",
        "Co-marketing initiatives"
      ],
      color: "purple"
    },
    {
      id: 2,
      icon: "Building2",
      title: "Enterprise Resellers",
      description: "Become an authorized Trinity reseller. Offer our comprehensive AI solutions to your client base with full support and competitive margins.",
      benefits: [
        "Attractive commission structure",
        "Sales enablement resources",
        "Dedicated partner success manager",
        "Priority technical support"
      ],
      color: "blue"
    },
    {
      id: 3,
      icon: "Users",
      title: "Implementation Partners",
      description: "Deliver Trinity solutions to clients with our implementation framework. Build expertise in AI deployment and transformation consulting.",
      benefits: [
        "Comprehensive training programs",
        "Implementation playbooks",
        "Client referral opportunities",
        "Certification programs"
      ],
      color: "pink"
    },
    {
      id: 4,
      icon: "Globe",
      title: "Regional Expansion Partners",
      description: "Bring Trinity to new markets. Establish regional presence with exclusive territory rights and localized support infrastructure.",
      benefits: [
        "Exclusive geographic territories",
        "Localization support",
        "Market development funding",
        "Regional brand building"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: "bg-purple-50",
        icon: "#6B46C1",
        border: "border-purple-200",
        text: "text-purple-700"
      },
      blue: {
        bg: "bg-blue-50",
        icon: "#3B82F6",
        border: "border-blue-200",
        text: "text-blue-700"
      },
      pink: {
        bg: "bg-pink-50",
        icon: "#EC4899",
        border: "border-pink-200",
        text: "text-pink-700"
      },
      green: {
        bg: "bg-green-50",
        icon: "#10B981",
        border: "border-green-200",
        text: "text-green-700"
      }
    };
    return colors?.[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Icon name="Handshake" size={20} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Partnership Opportunities</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="gradient-text">Partnership Path</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple partnership models designed to align with your business goals and capabilities. Each path offers unique opportunities for growth and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partnershipOptions?.map((option) => {
            const colors = getColorClasses(option?.color);
            return (
              <div
                key={option?.id}
                className="card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${colors?.bg} rounded-xl flex items-center justify-center mb-6 border ${colors?.border}`}>
                  <Icon name={option?.icon} size={32} color={colors?.icon} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option?.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option?.description}</p>
                <div className="space-y-3 mb-8">
                  {option?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} color={colors?.icon} className="mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" fullWidth iconName="ArrowRight" iconPosition="right">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Not Sure Which Path Fits?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Schedule a consultation with our partnership team. We'll help you identify the best collaboration model based on your capabilities, market position, and growth objectives.
              </p>
              <Button variant="default" size="lg" iconName="Calendar" iconPosition="left">
                Schedule Partnership Consultation
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={24} color="white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Partnership Success Rate</div>
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Partnerships</span>
                  <span className="font-bold text-gray-900">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Combined Revenue Impact</span>
                  <span className="font-bold text-gray-900">$120M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Partnership Duration</span>
                  <span className="font-bold text-gray-900">4.5 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTypes;