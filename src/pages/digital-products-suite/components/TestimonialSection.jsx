import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Chief Technology Officer',
    company: 'TechVision Inc.',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b43e8b7f-1763295504724.png",
    avatarAlt: 'Professional headshot of Caucasian woman with shoulder-length brown hair wearing navy blazer and white blouse',
    rating: 5,
    content: `Trinity's AI automation suite transformed our operations completely. We've seen a 300% increase in productivity and reduced operational costs by 45%. The integration was seamless, and their support team is exceptional.`,
    productUsed: 'AI Workflow Automation',
    results: ['300% productivity increase', '45% cost reduction', '2-week implementation']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'VP of Marketing',
    company: 'GrowthScale Solutions',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_132439872-1763300631728.png",
    avatarAlt: 'Professional headshot of Asian man with short black hair wearing charcoal suit and light blue shirt',
    rating: 5,
    content: `The marketing automation platform exceeded our expectations. Our campaign ROI improved by 250%, and we're now able to personalize customer experiences at scale. Trinity's products are truly enterprise-grade.`,
    productUsed: 'Marketing Intelligence Hub',
    results: ['250% ROI improvement', '10x campaign efficiency', 'Real-time personalization']
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Customer Success',
    company: 'CustomerFirst Corp',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1631c1677-1763295642190.png",
    avatarAlt: 'Professional headshot of Hispanic woman with long dark hair wearing burgundy blazer and cream blouse',
    rating: 5,
    content: `Our customer satisfaction scores jumped from 72% to 94% after implementing Trinity's customer experience platform. The AI-powered insights help us anticipate customer needs before they even reach out.`,
    productUsed: 'Customer Experience AI',
    results: ['94% satisfaction score', '60% faster response time', 'Predictive support']
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-4">
            <Icon name="MessageSquare" size={20} color="#6B46C1" />
            <span className="text-sm font-semibold text-purple-700">Customer Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are achieving remarkable results with Trinity's digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) =>
          <div key={testimonial?.id} className="card p-8 flex flex-col h-full">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, index) =>
              <Icon key={index} name="Star" size={20} color="#F59E0B" />
              )}
              </div>

              <p className="text-gray-700 mb-6 flex-1 leading-relaxed">
                "{testimonial?.content}"
              </p>

              <div className="space-y-4 mb-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Package" size={16} color="#6B46C1" />
                  <span className="font-semibold text-gray-900">{testimonial?.productUsed}</span>
                </div>
                <div className="space-y-2">
                  {testimonial?.results?.map((result, index) =>
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="TrendingUp" size={14} color="#10B981" />
                      <span>{result}</span>
                    </div>
                )}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial?.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial?.role}</p>
                  <p className="text-sm text-purple-700 font-medium">{testimonial?.company}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-500 transition-all duration-300">
            <Icon name="BookOpen" size={20} />
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>);

};

export default TestimonialSection;