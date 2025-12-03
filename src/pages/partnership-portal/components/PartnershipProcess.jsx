import React from 'react';
import Icon from '../../../components/AppIcon';

const PartnershipProcess = () => {
  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Initial Inquiry",
      description: "Submit partnership application through our portal. Our team reviews your submission within 48 hours.",
      icon: "FileText",
      duration: "1-2 days",
      actions: ["Complete online application", "Share company overview", "Define partnership goals"]
    },
    {
      id: 2,
      step: "02",
      title: "Discovery Call",
      description: "Scheduled conversation with partnership team to explore alignment, capabilities, and mutual opportunities.",
      icon: "Phone",
      duration: "1 week",
      actions: ["30-minute video call", "Capability assessment", "Opportunity mapping"]
    },
    {
      id: 3,
      step: "03",
      title: "Due Diligence",
      description: "Mutual evaluation of technical capabilities, market position, and strategic fit for long-term collaboration.",
      icon: "Search",
      duration: "2-3 weeks",
      actions: ["Technical evaluation", "Reference checks", "Financial review"]
    },
    {
      id: 4,
      step: "04",
      title: "Proposal & Terms",
      description: "Customized partnership proposal with detailed terms, revenue models, and collaboration framework.",
      icon: "FileCheck",
      duration: "1-2 weeks",
      actions: ["Partnership agreement draft", "Commercial terms", "Legal review"]
    },
    {
      id: 5,
      step: "05",
      title: "Onboarding",
      description: "Comprehensive onboarding program including training, resource access, and integration support.",
      icon: "Rocket",
      duration: "2-4 weeks",
      actions: ["Training sessions", "System access setup", "Marketing materials"]
    },
    {
      id: 6,
      step: "06",
      title: "Active Partnership",
      description: "Ongoing collaboration with dedicated support, regular reviews, and continuous optimization.",
      icon: "Handshake",
      duration: "Ongoing",
      actions: ["Quarterly reviews", "Performance tracking", "Joint planning"]
    }
  ];

  const investmentProcess = [
    {
      id: 1,
      phase: "Confidential Inquiry",
      description: "Submit investment interest through secure portal. NDA execution and initial materials shared.",
      timeline: "Week 1"
    },
    {
      id: 2,
      phase: "Executive Presentation",
      description: "Detailed presentation with CEO and CFO covering business model, financials, and growth strategy.",
      timeline: "Week 2-3"
    },
    {
      id: 3,
      phase: "Due Diligence",
      description: "Comprehensive review of financials, legal, technology, and operations with full data room access.",
      timeline: "Week 4-8"
    },
    {
      id: 4,
      phase: "Term Sheet",
      description: "Negotiation and execution of term sheet outlining investment terms and conditions.",
      timeline: "Week 9-10"
    },
    {
      id: 5,
      phase: "Legal Documentation",
      description: "Preparation and execution of definitive agreements with legal counsel.",
      timeline: "Week 11-14"
    },
    {
      id: 6,
      phase: "Closing",
      description: "Final closing, fund transfer, and investor onboarding to board and reporting systems.",
      timeline: "Week 15-16"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Icon name="GitBranch" size={20} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Partnership Journey</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Path to <span className="gradient-text">Collaboration</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, structured process designed to ensure mutual success. From initial inquiry to active partnership, we guide you every step of the way.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Process</h3>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 hidden lg:block"></div>
            
            <div className="space-y-8">
              {processSteps?.map((step, index) => (
                <div key={step?.id} className="relative">
                  <div className="lg:ml-20">
                    <div className="card p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg lg:absolute lg:-left-8 lg:top-8">
                            <Icon name={step?.icon} size={32} color="white" />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-bold text-purple-200">{step?.step}</span>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">{step?.title}</h4>
                              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                <Icon name="Clock" size={16} color="#6B7280" />
                                <span>{step?.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">{step?.description}</p>
                          
                          <div className="grid sm:grid-cols-3 gap-3">
                            {step?.actions?.map((action, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-purple-50 rounded-lg px-4 py-2">
                                <Icon name="CheckCircle2" size={16} color="#6B46C1" />
                                <span className="text-sm text-gray-700">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < processSteps?.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center my-4 ml-8">
                      <Icon name="ArrowDown" size={24} color="#6B46C1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Investment Process Timeline</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured 16-week process from initial inquiry to closing, designed for thorough evaluation and seamless execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentProcess?.map((phase) => (
              <div key={phase?.id} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {phase?.id}
                  </div>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-700">
                    {phase?.timeline}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{phase?.phase}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{phase?.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="Sparkles" size={48} color="white" className="mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Whether you're interested in partnership or investment, our team is ready to guide you through the process. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center gap-2">
              <Icon name="FileText" size={20} />
              Start Partnership Application
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2">
              <Icon name="TrendingUp" size={20} />
              Investment Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProcess;