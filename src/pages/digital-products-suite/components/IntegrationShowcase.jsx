import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IntegrationShowcase = () => {
  const integrations = [
  {
    id: 1,
    name: 'Salesforce',
    logo: "https://images.unsplash.com/photo-1728410539013-ad662a093c68",
    logoAlt: 'Salesforce cloud-based CRM platform logo with distinctive blue cloud icon on white background',
    category: 'CRM',
    description: 'Seamless customer data synchronization',
    isPopular: true
  },
  {
    id: 2,
    name: 'Slack',
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20",
    logoAlt: 'Slack team collaboration platform logo featuring colorful hashtag symbol on white background',
    category: 'Communication',
    description: 'Real-time team notifications',
    isPopular: true
  },
  {
    id: 3,
    name: 'Google Analytics',
    logo: "https://images.unsplash.com/photo-1663124178667-28b3776d7c15",
    logoAlt: 'Google Analytics web analytics service logo with orange and yellow graph icon on white background',
    category: 'Analytics',
    description: 'Advanced tracking and insights',
    isPopular: false
  },
  {
    id: 4,
    name: 'HubSpot',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_136981a81-1764336403793.png",
    logoAlt: 'HubSpot inbound marketing platform logo with orange sprocket icon on white background',
    category: 'Marketing',
    description: 'Marketing automation integration',
    isPopular: true
  },
  {
    id: 5,
    name: 'Stripe',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18d714b5f-1764336403765.png",
    logoAlt: 'Stripe online payment processing platform logo with purple gradient stripes on white background',
    category: 'Payments',
    description: 'Secure payment processing',
    isPopular: false
  },
  {
    id: 6,
    name: 'Zapier',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2f2901c-1764336403609.png",
    logoAlt: 'Zapier automation platform logo with orange lightning bolt icon on white background',
    category: 'Automation',
    description: 'Connect 5000+ apps',
    isPopular: true
  },
  {
    id: 7,
    name: 'Microsoft Teams',
    logo: "https://images.unsplash.com/photo-1633410189542-36d96e3762b8",
    logoAlt: 'Microsoft Teams collaboration platform logo with purple and blue icon on white background',
    category: 'Communication',
    description: 'Enterprise collaboration',
    isPopular: false
  },
  {
    id: 8,
    name: 'Shopify',
    logo: "https://images.unsplash.com/photo-1658297063569-162817482fb6",
    logoAlt: 'Shopify e-commerce platform logo with green shopping bag icon on white background',
    category: 'E-commerce',
    description: 'E-commerce synchronization',
    isPopular: true
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-200 mb-4">
            <Icon name="Plug" size={20} color="#6B46C1" />
            <span className="text-sm font-semibold text-purple-700">Seamless Integrations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect with Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our products integrate seamlessly with the tools you already use, ensuring a smooth workflow and maximum productivity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrations?.map((integration) =>
          <div
            key={integration?.id}
            className="card group p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">

              {integration?.isPopular &&
            <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-700 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    <Icon name="Star" size={12} />
                    Popular
                  </span>
                </div>
            }

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                src={integration?.logo}
                alt={integration?.logoAlt}
                className="w-full h-full object-cover" />

              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                {integration?.name}
              </h3>

              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-2">
                {integration?.category}
              </span>

              <p className="text-sm text-gray-600">
                {integration?.description}
              </p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-xl p-8 text-center border border-purple-100">
          <Icon name="Plus" size={48} color="#6B46C1" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need a Custom Integration?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our enterprise plans include custom integration development to connect with your proprietary systems and specialized tools.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Icon name="MessageSquare" size={20} />
            Contact Integration Team
          </button>
        </div>
      </div>
    </section>);

};

export default IntegrationShowcase;