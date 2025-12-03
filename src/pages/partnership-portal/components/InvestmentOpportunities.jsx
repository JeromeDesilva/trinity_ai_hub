import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InvestmentOpportunities = () => {
  const investmentHighlights = [
    {
      id: 1,
      icon: "TrendingUp",
      title: "Proven Growth Trajectory",
      metric: "145% YoY",
      description: "Consistent revenue growth driven by AI market expansion and enterprise adoption",
      color: "#10B981"
    },
    {
      id: 2,
      icon: "Target",
      title: "Market Leadership",
      metric: "#1 Position",
      description: "Leading AI-first transformation platform in mid-market enterprise segment",
      color: "#3B82F6"
    },
    {
      id: 3,
      icon: "Users",
      title: "Client Retention",
      metric: "98% Rate",
      description: "Industry-leading retention through measurable ROI and strategic partnerships",
      color: "#EC4899"
    },
    {
      id: 4,
      icon: "Globe",
      title: "Global Expansion",
      metric: "15 Markets",
      description: "Established presence with aggressive expansion roadmap for 2025-2027",
      color: "#6B46C1"
    }
  ];

  const financialMetrics = [
    {
      category: "Revenue Performance",
      metrics: [
        { label: "Annual Recurring Revenue", value: "$42M", growth: "+156%" },
        { label: "Total Revenue 2024", value: "$50M+", growth: "+145%" },
        { label: "Gross Margin", value: "72%", growth: "+8%" }
      ]
    },
    {
      category: "Market Position",
      metrics: [
        { label: "Enterprise Clients", value: "200+", growth: "+85%" },
        { label: "Average Contract Value", value: "$180K", growth: "+42%" },
        { label: "Market Share", value: "18%", growth: "+12%" }
      ]
    },
    {
      category: "Operational Excellence",
      metrics: [
        { label: "Client Lifetime Value", value: "$850K", growth: "+67%" },
        { label: "Customer Acquisition Cost", value: "$12K", growth: "-28%" },
        { label: "Net Revenue Retention", value: "142%", growth: "+18%" }
      ]
    }
  ];

  const investmentTiers = [
    {
      id: 1,
      tier: "Strategic Investor",
      minInvestment: "$5M+",
      equity: "Board seat consideration",
      benefits: [
        "Quarterly board meetings and strategic input",
        "Priority access to new product launches",
        "Co-investment opportunities in spin-offs",
        "Exclusive market intelligence reports"
      ],
      icon: "Crown"
    },
    {
      id: 2,
      tier: "Growth Partner",
      minInvestment: "$1M - $5M",
      equity: "Preferred equity terms",
      benefits: [
        "Quarterly investor updates and financials",
        "Annual strategic planning sessions",
        "Early access to partnership opportunities",
        "Dedicated investor relations contact"
      ],
      icon: "Rocket"
    },
    {
      id: 3,
      tier: "Venture Participant",
      minInvestment: "$250K - $1M",
      equity: "Standard equity terms",
      benefits: [
        "Semi-annual performance reviews",
        "Access to investor portal and resources",
        "Networking events with portfolio companies",
        "Market research and industry insights"
      ],
      icon: "Briefcase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Icon name="TrendingUp" size={20} color="#10B981" />
            <span className="text-sm font-medium text-green-700">Investment Opportunities</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Invest in the Future of <span className="gradient-text">AI-Driven Business</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join leading VCs and strategic investors backing Trinity's mission to democratize AI-powered business transformation. Strong fundamentals, proven execution, and massive market opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investmentHighlights?.map((highlight) => (
            <div key={highlight?.id} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <Icon name={highlight?.icon} size={32} color={highlight?.color} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{highlight?.metric}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight?.title}</h3>
              <p className="text-sm text-gray-600">{highlight?.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Financial Performance Overview</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {financialMetrics?.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-200">
                  {section?.category}
                </h4>
                {section?.metrics?.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{metric?.label}</div>
                      <div className="text-2xl font-bold text-gray-900">{metric?.value}</div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full">
                      <Icon name="TrendingUp" size={16} color="#10B981" />
                      <span className="text-sm font-medium text-green-700">{metric?.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Investment Tiers</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {investmentTiers?.map((tier) => (
              <div key={tier?.id} className="card p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name={tier?.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{tier?.tier}</h4>
                    <div className="text-sm text-gray-600">{tier?.minInvestment}</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-1">Equity Structure</div>
                  <div className="text-lg font-bold text-purple-700">{tier?.equity}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {tier?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} color="#6B46C1" className="mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" fullWidth iconName="ArrowRight" iconPosition="right">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Invest?</h3>
              <p className="text-lg text-purple-100 mb-6">
                Access our comprehensive investor deck, financial projections, and due diligence materials. Schedule a confidential discussion with our executive team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" iconName="Download" iconPosition="left">
                  Download Investor Deck
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" iconName="Calendar" iconPosition="left">
                  Schedule Meeting
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-sm text-purple-200 mb-4">Current Investment Round</div>
              <div className="text-4xl font-bold mb-2">Series B</div>
              <div className="text-lg text-purple-100 mb-6">$25M Target | $18M Committed</div>
              
              <div className="bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: '72%' }}></div>
              </div>
              
              <div className="flex justify-between text-sm text-purple-100">
                <span>72% Committed</span>
                <span>Closing Q1 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;