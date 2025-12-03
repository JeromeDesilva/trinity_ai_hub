import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const ctaOptions = [
    {
      title: "Start Your Transformation",
      description: "Book a free consultation with our AI experts",
      icon: "Calendar",
      buttonText: "Schedule Consultation",
      buttonVariant: "default",
      link: "/solutions-architecture"
    },
    {
      title: "Explore Digital Products",
      description: "Try our SaaS solutions with 14-day free trial",
      icon: "Package",
      buttonText: "Start Free Trial",
      buttonVariant: "outline",
      link: "/digital-products-suite"
    },
    {
      title: "Join Trinity Academy",
      description: "Enroll in AI courses and get certified",
      icon: "GraduationCap",
      buttonText: "Browse Courses",
      buttonVariant: "outline",
      link: "/trinity-academy"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <Icon name="Rocket" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Ready to Get Started?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="gradient-text">Path Forward</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need consultation, products, or education - we have the perfect starting point for your journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions?.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon name={option?.icon} size={28} color="white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                {option?.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {option?.description}
              </p>

              <Link to={option?.link}>
                <Button
                  variant={option?.buttonVariant}
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  fullWidth
                >
                  {option?.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-700 via-blue-700 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Not Sure Where to Start?
              </h3>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Let our AI-powered recommendation engine analyze your business needs and suggest the perfect solution path tailored to your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" iconName="Sparkles" iconPosition="left" className="bg-white text-purple-700 hover:bg-gray-100">
                  Get Personalized Recommendations
                </Button>
                <Button variant="outline" size="lg" iconName="Phone" iconPosition="left" className="border-white text-white hover:bg-white/10">
                  Talk to an Expert
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Users", label: "10,000+ Clients", value: "Worldwide" },
                { icon: "Award", label: "50+ Awards", value: "Won" },
                { icon: "TrendingUp", label: "$2.4B Saved", value: "For Clients" },
                { icon: "Clock", label: "24/7 Support", value: "Available" }
              ]?.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Icon name={stat?.icon} size={32} color="white" className="mb-4" />
                  <p className="text-2xl font-bold mb-1">{stat?.label}</p>
                  <p className="text-purple-200">{stat?.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;