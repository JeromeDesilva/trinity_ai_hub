import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessStories = () => {
  const stories = [
  {
    company: 'FinTech Startup A',
    founder: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_173b85801-1763296473353.png",
    imageAlt: 'Professional Asian woman with dark hair in business attire smiling confidently',
    result: '200% revenue growth in 6 months',
    quote: 'Trinity\'s market analysis helped us pivot from B2C to B2B, tripling our ARR. Their AI automation strategy saved us $50K in operational costs.',
    metrics: [
    { label: 'Revenue Growth', value: '+200%' },
    { label: 'Cost Savings', value: '$50K' },
    { label: 'Time to Market', value: '-40%' }],

    icon: 'TrendingUp',
    color: 'purple'
  },
  {
    company: 'HealthTech Platform',
    founder: 'Marcus Johnson',
    role: 'Founder',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c925a7f-1763294244184.png",
    imageAlt: 'Young Black man with beard wearing casual blue shirt in modern office',
    result: '10K users in first 3 months',
    quote: 'After our consultation, we completely revamped our acquisition strategy. Trinity\'s growth roadmap was instrumental in our Series A raise.',
    metrics: [
    { label: 'User Growth', value: '10K' },
    { label: 'CAC Reduction', value: '-65%' },
    { label: 'Funding Raised', value: '$2M' }],

    icon: 'Users',
    color: 'blue'
  },
  {
    company: 'SaaS Analytics Tool',
    founder: 'Emily Rodriguez',
    role: 'CTO',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10099ac9e-1763300731841.png",
    imageAlt: 'Professional Hispanic woman with glasses in white blouse working at laptop',
    result: 'Reduced churn by 45% in 4 months',
    quote: 'Their AI integration audit revealed automation opportunities we hadn\'t considered. We now process 10x more data with the same team size.',
    metrics: [
    { label: 'Churn Reduction', value: '-45%' },
    { label: 'Processing Speed', value: '10x' },
    { label: 'Team Efficiency', value: '+300%' }],

    icon: 'Zap',
    color: 'pink'
  }];


  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: '#6B46C1' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: '#2563EB' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: '#DB2777' }
    };
    return colors?.[color] || colors?.purple;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Icon name="Award" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Startups
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our consultations have helped startups achieve rapid growth and market success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories?.map((story, index) => {
            const colors = getColorClasses(story?.color);

            return (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">

                <div className={`p-6 ${colors?.bg} rounded-t-xl`}>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story?.image}
                      alt={story?.imageAlt}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />

                    <div>
                      <p className="font-bold text-gray-900">{story?.founder}</p>
                      <p className="text-sm text-gray-600">{story?.role}</p>
                      <p className="text-sm font-semibold text-gray-900">{story?.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={story?.icon} size={20} color={colors?.icon} />
                    <p className={`font-bold ${colors?.text}`}>{story?.result}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{story?.quote}"
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    {story?.metrics?.map((metric, idx) =>
                    <div key={idx} className="text-center">
                        <p className={`text-2xl font-bold ${colors?.text}`}>{metric?.value}</p>
                        <p className="text-xs text-gray-600 mt-1">{metric?.label}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>);

          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">150+</p>
              <p className="text-sm text-gray-600">Startups Consulted</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">$45M+</p>
              <p className="text-sm text-gray-600">Total Funding Raised</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">3.2x</p>
              <p className="text-sm text-gray-600">Avg Growth Rate</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStories;