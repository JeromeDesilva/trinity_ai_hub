import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AICapabilitiesSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const capabilities = [
  {
    id: 0,
    title: "Intelligent Process Automation",
    description: "AI agents that learn, adapt, and optimize your business workflows in real-time",
    icon: "Workflow",
    metrics: [
    { label: "Processes Automated", value: "500+", icon: "Zap" },
    { label: "Time Saved", value: "85%", icon: "Clock" },
    { label: "Error Reduction", value: "99.2%", icon: "Shield" }],

    demoImage: "https://images.unsplash.com/photo-1722223155596-ed791d67cab0",
    demoImageAlt: "Modern office workspace with multiple computer screens displaying automated workflow dashboards and analytics charts in purple and blue colors"
  },
  {
    id: 1,
    title: "Predictive Analytics Engine",
    description: "Machine learning models that forecast trends and optimize decision-making",
    icon: "TrendingUp",
    metrics: [
    { label: "Prediction Accuracy", value: "94%", icon: "Target" },
    { label: "Data Points", value: "1B+", icon: "Database" },
    { label: "Models Deployed", value: "150+", icon: "Brain" }],

    demoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    demoImageAlt: "Business analytics dashboard showing colorful graphs, charts and predictive trend lines on large monitor in modern corporate office environment"
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Advanced NLP for customer service, content generation, and sentiment analysis",
    icon: "MessageSquare",
    metrics: [
    { label: "Languages Supported", value: "95+", icon: "Globe" },
    { label: "Response Time", value: "<1s", icon: "Gauge" },
    { label: "Accuracy Rate", value: "96%", icon: "CheckCircle2" }],

    demoImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1286c3267-1764336412810.png",
    demoImageAlt: "Close-up of laptop screen displaying natural language processing interface with text analysis and sentiment indicators in modern workspace"
  }];


  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <Icon name="Cpu" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">AI Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience{' '}
            <span className="gradient-text">Intelligent Automation</span>
            {' '}in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions transform complex business challenges into automated, scalable processes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {capabilities?.map((capability, index) =>
            <div
              key={capability?.id}
              onClick={() => setActiveDemo(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
              activeDemo === index ?
              'bg-white shadow-xl border-2 border-purple-500' :
              'bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-lg'}`
              }>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                activeDemo === index ?
                'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gray-100'}`
                }>
                    <Icon
                    name={capability?.icon}
                    size={24}
                    color={activeDemo === index ? 'white' : '#6B7280'} />

                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  activeDemo === index ? 'text-purple-700' : 'text-gray-900'}`
                  }>
                      {capability?.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {capability?.description}
                    </p>

                    {activeDemo === index &&
                  <div className="grid grid-cols-3 gap-4 animate-fadeIn">
                        {capability?.metrics?.map((metric, idx) =>
                    <div key={idx} className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <Icon name={metric?.icon} size={16} color="#6B46C1" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900">{metric?.value}</p>
                            <p className="text-xs text-gray-600">{metric?.label}</p>
                          </div>
                    )}
                      </div>
                  }
                  </div>

                  <Icon
                  name={activeDemo === index ? 'ChevronDown' : 'ChevronRight'}
                  size={20}
                  color="#6B46C1"
                  className="flex-shrink-0" />

                </div>
              </div>
            )}

            <div className="pt-6">
              <Button variant="default" size="lg" iconName="Play" iconPosition="left" fullWidth>
                Watch Live Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={capabilities?.[activeDemo]?.demoImage}
                alt={capabilities?.[activeDemo]?.demoImageAlt}
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h4 className="text-2xl font-bold mb-2">{capabilities?.[activeDemo]?.title}</h4>
                <p className="text-white/90">{capabilities?.[activeDemo]?.description}</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default AICapabilitiesSection;