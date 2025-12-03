import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrinityClusterSection = () => {
  const clusters = [
    {
      id: 1,
      title: "AI Automation Hub",
      description: "Intelligent process automation and agentic AI solutions that transform operations",
      icon: "Bot",
      color: "from-purple-500 to-purple-700",
      stats: "500+ automations deployed",
      features: ["Process Mining", "Intelligent Agents", "Workflow Optimization"]
    },
    {
      id: 2,
      title: "Creative Studio",
      description: "Award-winning design and media production with AI-enhanced creativity",
      icon: "Palette",
      color: "from-pink-500 to-pink-700",
      stats: "10,000+ creative assets",
      features: ["Brand Design", "Video Production", "Content Creation"]
    },
    {
      id: 3,
      title: "Digital Products",
      description: "Scalable SaaS solutions and enterprise-grade digital platforms",
      icon: "Package",
      color: "from-blue-500 to-blue-700",
      stats: "50+ products launched",
      features: ["SaaS Development", "Mobile Apps", "Web Platforms"]
    },
    {
      id: 4,
      title: "Data Intelligence",
      description: "Advanced analytics and business intelligence powered by machine learning",
      icon: "BarChart3",
      color: "from-purple-500 to-blue-500",
      stats: "1B+ data points analyzed",
      features: ["Predictive Analytics", "Data Visualization", "ML Models"]
    },
    {
      id: 5,
      title: "Learning Academy",
      description: "Comprehensive AI and digital transformation education programs",
      icon: "GraduationCap",
      color: "from-blue-500 to-pink-500",
      stats: "25,000+ students trained",
      features: ["AI Courses", "Certifications", "Corporate Training"]
    },
    {
      id: 6,
      title: "Strategic Consulting",
      description: "Executive advisory and digital transformation strategy services",
      icon: "Lightbulb",
      color: "from-pink-500 to-purple-500",
      stats: "200+ transformations led",
      features: ["Strategy Planning", "Change Management", "ROI Optimization"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <Icon name="Layers" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Trinity Cluster Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Integrated Verticals,{' '}
            <span className="gradient-text">One Powerful Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive ecosystem of AI-driven services designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clusters?.map((cluster) => (
            <div
              key={cluster?.id}
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cluster?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cluster?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={cluster?.icon} size={28} color="white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {cluster?.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cluster?.description}
                </p>

                <div className="flex items-center gap-2 mb-6 text-sm font-medium text-purple-600">
                  <Icon name="CheckCircle2" size={16} />
                  <span>{cluster?.stats}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {cluster?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="group-hover:text-purple-700"
                >
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/trinity-cluster-explorer">
            <Button variant="default" size="lg" iconName="Compass" iconPosition="left">
              Explore Full Ecosystem
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrinityClusterSection;