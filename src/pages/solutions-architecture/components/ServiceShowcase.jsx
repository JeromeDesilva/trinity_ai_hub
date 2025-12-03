import React from 'react';
import SolutionCategoryCard from './SolutionCategoryCard';

const ServiceShowcase = () => {
  const solutionCategories = [
    {
      id: 1,
      icon: "Bot",
      iconColor: "#6B46C1",
      bgColor: "bg-purple-100",
      title: "Agentic AI Solutions",
      description: "Autonomous AI agents that learn, adapt, and execute complex tasks with minimal human intervention.",
      features: [
        "Intelligent workflow automation",
        "Self-learning decision systems",
        "Multi-agent collaboration frameworks",
        "Real-time adaptive responses"
      ]
    },
    {
      id: 2,
      icon: "Workflow",
      iconColor: "#3B82F6",
      bgColor: "bg-blue-100",
      title: "Process Automation",
      description: "End-to-end automation solutions that streamline operations and eliminate repetitive tasks.",
      features: [
        "RPA implementation & optimization",
        "Document processing automation",
        "Workflow orchestration",
        "Integration with existing systems"
      ]
    },
    {
      id: 3,
      icon: "BarChart3",
      iconColor: "#EC4899",
      bgColor: "bg-pink-100",
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: [
        "Predictive analytics models",
        "Real-time dashboards",
        "Custom reporting solutions",
        "Business intelligence integration"
      ]
    },
    {
      id: 4,
      icon: "Users",
      iconColor: "#10B981",
      bgColor: "bg-green-100",
      title: "Customer Experience AI",
      description: "Enhance customer interactions with intelligent chatbots, personalization, and support automation.",
      features: [
        "24/7 AI-powered support",
        "Sentiment analysis & insights",
        "Personalized recommendations",
        "Omnichannel integration"
      ]
    },
    {
      id: 5,
      icon: "Shield",
      iconColor: "#F59E0B",
      bgColor: "bg-amber-100",
      title: "Security & Compliance",
      description: "AI-driven security solutions that protect your business and ensure regulatory compliance.",
      features: [
        "Threat detection & prevention",
        "Automated compliance monitoring",
        "Data privacy protection",
        "Security audit automation"
      ]
    },
    {
      id: 6,
      icon: "Rocket",
      iconColor: "#8B5CF6",
      bgColor: "bg-violet-100",
      title: "Digital Transformation",
      description: "Comprehensive transformation strategies that modernize your entire business infrastructure.",
      features: [
        "Cloud migration & optimization",
        "Legacy system modernization",
        "API development & integration",
        "Scalable architecture design"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solution Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our full spectrum of AI-powered services designed to address every aspect of your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionCategories?.map((category) => (
            <SolutionCategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;