import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IntegrationShowcase = () => {
  const integrationPartners = [
  {
    id: 1,
    name: "Salesforce",
    logo: "https://images.unsplash.com/photo-1728410539013-ad662a093c68",
    logoAlt: "Salesforce cloud CRM platform logo with blue cloud icon on white background",
    category: "CRM",
    description: "Seamless integration with Salesforce for enhanced customer relationship management"
  },
  {
    id: 2,
    name: "Microsoft Azure",
    logo: "https://images.unsplash.com/photo-1662052955282-da15376f3919",
    logoAlt: "Microsoft Azure cloud computing platform logo with blue geometric design",
    category: "Cloud",
    description: "Enterprise-grade cloud infrastructure and AI services integration"
  },
  {
    id: 3,
    name: "SAP",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb1b6e0b-1764336402812.png",
    logoAlt: "SAP enterprise resource planning software logo with blue and white branding",
    category: "ERP",
    description: "Complete ERP system integration for streamlined business operations"
  },
  {
    id: 4,
    name: "Google Cloud",
    logo: "https://images.unsplash.com/photo-1597282020612-81b3977d2f20",
    logoAlt: "Google Cloud Platform logo with colorful cloud icon and modern design",
    category: "Cloud",
    description: "Advanced AI and machine learning capabilities through Google Cloud"
  },
  {
    id: 5,
    name: "Slack",
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20",
    logoAlt: "Slack team collaboration platform logo with colorful hashtag symbol",
    category: "Communication",
    description: "Real-time team collaboration and workflow automation"
  },
  {
    id: 6,
    name: "HubSpot",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17a5f6a3e-1764336404730.png",
    logoAlt: "HubSpot inbound marketing platform logo with orange sprocket icon",
    category: "Marketing",
    description: "Marketing automation and customer engagement platform integration"
  }];


  const integrationCapabilities = [
  {
    icon: "Plug",
    title: "Plug & Play Integration",
    description: "Quick setup with pre-built connectors for popular platforms"
  },
  {
    icon: "RefreshCw",
    title: "Real-Time Sync",
    description: "Instant data synchronization across all connected systems"
  },
  {
    icon: "Shield",
    title: "Secure Data Transfer",
    description: "Enterprise-grade encryption and security protocols"
  },
  {
    icon: "Zap",
    title: "Custom API Support",
    description: "Build custom integrations for proprietary systems"
  }];


  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Icon name="Plug" size={20} color="#3B82F6" />
            <span className="text-sm font-medium text-blue-700">Integration Capabilities</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Seamless Integration with Your Existing Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect Trinity AI Hub with your favorite platforms and tools for a unified, powerful ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrationCapabilities?.map((capability, index) =>
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={capability?.icon} size={24} color="#6B46C1" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{capability?.title}</h3>
              <p className="text-sm text-gray-600">{capability?.description}</p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200 p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Integration Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationPartners?.map((partner) =>
            <div key={partner?.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="h-20 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
                  <Image
                  src={partner?.logo}
                  alt={partner?.logoAlt}
                  className="w-full h-full object-contain p-4" />

                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{partner?.name}</h4>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                    {partner?.category}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{partner?.description}</p>
                
                <button className="inline-flex items-center gap-2 text-purple-700 font-semibold text-sm hover:gap-3 transition-all duration-300">
                  View Integration
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need a custom integration?</p>
            <button className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <Icon name="MessageSquare" size={20} />
              Contact Integration Team
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default IntegrationShowcase;