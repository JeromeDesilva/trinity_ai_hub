import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ClusterCard from './components/ClusterCard';
import ClusterDetail from './components/ClusterDetail';
import EcosystemVisualization from './components/EcosystemVisualization';
import FilterBar from './components/FilterBar';
import IntegrationMap from './components/IntegrationMap';
import StatsOverview from './components/StatsOverview';

const TrinityClusterExplorer = () => {
  const [activeCluster, setActiveCluster] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [filters, setFilters] = useState({
    industry: 'all',
    companySize: 'all',
    serviceType: 'all'
  });
  const [viewMode, setViewMode] = useState('grid');

  const clusters = [
  {
    id: 1,
    title: "AI & Automation Intelligence",
    shortName: "AI Core",
    category: "Technology",
    icon: "Brain",
    gradientStart: "#6B46C1",
    gradientEnd: "#8B5CF6",
    description: "Advanced AI solutions and intelligent automation systems that transform business operations through machine learning and cognitive computing.",
    fullDescription: "Our AI & Automation Intelligence cluster represents the cutting edge of artificial intelligence implementation. We specialize in developing custom AI models, implementing agentic AI systems, and creating intelligent automation workflows that adapt to your business needs. From natural language processing to computer vision, our solutions leverage the latest advancements in machine learning to deliver measurable business outcomes.",
    services: 12,
    keyServices: [
    {
      name: "Agentic AI Development",
      icon: "Bot",
      description: "Custom AI agents that autonomously handle complex business tasks"
    },
    {
      name: "Machine Learning Models",
      icon: "TrendingUp",
      description: "Predictive analytics and intelligent decision-making systems"
    },
    {
      name: "Process Automation",
      icon: "Zap",
      description: "End-to-end workflow automation with intelligent routing"
    },
    {
      name: "Natural Language Processing",
      icon: "MessageSquare",
      description: "Advanced text analysis and conversational AI solutions"
    }],

    integrations: ["Creative Studio", "Digital Products", "Data Analytics"],
    metrics: [
    { value: "85%", label: "Efficiency Gain" },
    { value: "60%", label: "Cost Reduction" },
    { value: "3x", label: "Faster Processing" },
    { value: "99.9%", label: "Accuracy Rate" }],

    caseStudy: {
      company: "TechCorp Industries",
      industry: "Manufacturing",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9af583e-1764336404709.png",
      logoAlt: "Modern technology company logo with blue and silver geometric design representing innovation in manufacturing sector",
      challenge: "Manual quality control processes were causing production delays and inconsistent product quality across multiple facilities.",
      result: "Implemented AI-powered visual inspection system reducing defects by 92% and increasing production speed by 45%"
    }
  },
  {
    id: 2,
    title: "Creative & Media Studio",
    shortName: "Creative",
    category: "Design",
    icon: "Palette",
    gradientStart: "#EC4899",
    gradientEnd: "#F472B6",
    description: "Comprehensive creative services including brand design, video production, and multimedia content creation for impactful storytelling.",
    fullDescription: "The Creative & Media Studio cluster brings together world-class designers, videographers, and content creators to deliver stunning visual experiences. We combine artistic excellence with strategic thinking to create brand identities, marketing campaigns, and multimedia content that resonates with your audience and drives engagement across all channels.",
    services: 15,
    keyServices: [
    {
      name: "Brand Identity Design",
      icon: "Sparkles",
      description: "Complete brand systems from logo to style guides"
    },
    {
      name: "Video Production",
      icon: "Video",
      description: "Professional video content from concept to final edit"
    },
    {
      name: "Motion Graphics",
      icon: "Film",
      description: "Animated content and visual effects for digital media"
    },
    {
      name: "Content Strategy",
      icon: "FileText",
      description: "Strategic content planning and editorial calendars"
    }],

    integrations: ["Digital Marketing", "Web Development", "Social Media"],
    metrics: [
    { value: "250+", label: "Brands Created" },
    { value: "5M+", label: "Video Views" },
    { value: "4.8/5", label: "Client Rating" },
    { value: "98%", label: "On-Time Delivery" }],

    caseStudy: {
      company: "GreenLife Wellness",
      industry: "Healthcare",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12cdd7871-1764336403153.png",
      logoAlt: "Healthcare wellness brand logo featuring green leaf symbol and modern typography representing natural health solutions",
      challenge: "New wellness brand needed complete visual identity and marketing materials to launch in competitive market.",
      result: "Created comprehensive brand system and launch campaign achieving 150% of first-year customer acquisition targets"
    }
  },
  {
    id: 3,
    title: "Digital Products & Platforms",
    shortName: "Products",
    category: "Development",
    icon: "Package",
    gradientStart: "#3B82F6",
    gradientEnd: "#60A5FA",
    description: "Custom software development, SaaS platforms, and digital product engineering with focus on scalability and user experience.",
    fullDescription: "Our Digital Products & Platforms cluster specializes in building enterprise-grade software solutions that scale with your business. From custom web applications to complex SaaS platforms, we leverage modern technologies and agile methodologies to deliver products that users love and businesses depend on.",
    services: 18,
    keyServices: [
    {
      name: "SaaS Development",
      icon: "Cloud",
      description: "Scalable cloud-based software as a service platforms"
    },
    {
      name: "Mobile Applications",
      icon: "Smartphone",
      description: "Native and cross-platform mobile app development"
    },
    {
      name: "API Integration",
      icon: "Link",
      description: "Seamless third-party service integration and APIs"
    },
    {
      name: "DevOps & Infrastructure",
      icon: "Server",
      description: "Cloud infrastructure and continuous deployment pipelines"
    }],

    integrations: ["AI Solutions", "Data Analytics", "Security Services"],
    metrics: [
    { value: "100+", label: "Products Built" },
    { value: "2M+", label: "Active Users" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "50ms", label: "Avg Response" }],

    caseStudy: {
      company: "FinanceFlow Solutions",
      industry: "Financial Services",
      logo: "https://images.unsplash.com/photo-1645085735420-627d5fc4a200",
      logoAlt: "Financial technology company logo with blue and gold colors featuring abstract currency symbol and modern design",
      challenge: "Legacy banking system needed complete digital transformation to compete with modern fintech competitors.",
      result: "Developed cloud-native banking platform processing $500M+ in transactions monthly with 99.99% reliability"
    }
  },
  {
    id: 4,
    title: "Digital Marketing & Growth",
    shortName: "Marketing",
    category: "Marketing",
    icon: "TrendingUp",
    gradientStart: "#10B981",
    gradientEnd: "#34D399",
    description: "Data-driven marketing strategies, SEO optimization, and growth hacking techniques to maximize digital presence and ROI.",
    fullDescription: "The Digital Marketing & Growth cluster combines strategic thinking with tactical execution to drive measurable business growth. Our team of marketing experts, data analysts, and growth hackers work together to create and execute campaigns that not only reach your target audience but convert them into loyal customers.",
    services: 14,
    keyServices: [
    {
      name: "SEO & Content Marketing",
      icon: "Search",
      description: "Organic search optimization and content strategy"
    },
    {
      name: "Paid Advertising",
      icon: "Target",
      description: "Multi-channel paid media campaigns and optimization"
    },
    {
      name: "Marketing Automation",
      icon: "Repeat",
      description: "Automated email campaigns and lead nurturing"
    },
    {
      name: "Analytics & Reporting",
      icon: "BarChart",
      description: "Comprehensive performance tracking and insights"
    }],

    integrations: ["Creative Studio", "Social Media", "E-commerce"],
    metrics: [
    { value: "300%", label: "Avg ROI" },
    { value: "5M+", label: "Leads Generated" },
    { value: "85%", label: "Conversion Rate" },
    { value: "200+", label: "Campaigns Run" }],

    caseStudy: {
      company: "EcoStyle Fashion",
      industry: "Retail",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11795a900-1764336403799.png",
      logoAlt: "Sustainable fashion brand logo with green earth tones and elegant typography representing eco-friendly clothing retail",
      challenge: "E-commerce startup struggling with customer acquisition costs and low conversion rates in competitive fashion market.",
      result: "Implemented integrated marketing strategy reducing CAC by 65% while increasing conversion rate from 1.2% to 4.8%"
    }
  },
  {
    id: 5,
    title: "Business Intelligence & Analytics",
    shortName: "Analytics",
    category: "Data",
    icon: "BarChart3",
    gradientStart: "#F59E0B",
    gradientEnd: "#FBBF24",
    description: "Advanced data analytics, business intelligence dashboards, and predictive modeling for informed decision-making.",
    fullDescription: "Our Business Intelligence & Analytics cluster transforms raw data into actionable insights. We build comprehensive analytics platforms, create interactive dashboards, and develop predictive models that help businesses understand their performance, identify opportunities, and make data-driven decisions with confidence.",
    services: 11,
    keyServices: [
    {
      name: "Data Visualization",
      icon: "PieChart",
      description: "Interactive dashboards and real-time reporting"
    },
    {
      name: "Predictive Analytics",
      icon: "TrendingUp",
      description: "Forecasting models and trend analysis"
    },
    {
      name: "Data Warehousing",
      icon: "Database",
      description: "Centralized data storage and management systems"
    },
    {
      name: "Business Intelligence",
      icon: "Lightbulb",
      description: "Strategic insights and performance metrics"
    }],

    integrations: ["AI Solutions", "Digital Products", "Marketing"],
    metrics: [
    { value: "10TB+", label: "Data Processed" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "50+", label: "Dashboards Built" },
    { value: "24/7", label: "Real-time Data" }],

    caseStudy: {
      company: "RetailMax Corporation",
      industry: "Retail",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_170d41058-1764336409831.png",
      logoAlt: "Large retail corporation logo with bold red and white colors featuring shopping cart icon and modern corporate design",
      challenge: "Multi-location retailer lacked unified view of inventory, sales, and customer behavior across 200+ stores.",
      result: "Built enterprise BI platform providing real-time insights reducing stockouts by 78% and improving margins by 23%"
    }
  },
  {
    id: 6,
    title: "Enterprise Consulting & Strategy",
    shortName: "Consulting",
    category: "Consulting",
    icon: "Briefcase",
    gradientStart: "#8B5CF6",
    gradientEnd: "#A78BFA",
    description: "Strategic consulting services for digital transformation, technology roadmaps, and organizational change management.",
    fullDescription: "The Enterprise Consulting & Strategy cluster provides executive-level guidance for digital transformation initiatives. Our consultants bring deep industry expertise and technical knowledge to help organizations navigate complex technology decisions, develop comprehensive digital strategies, and successfully implement transformational change.",
    services: 9,
    keyServices: [
    {
      name: "Digital Transformation",
      icon: "Workflow",
      description: "End-to-end transformation strategy and execution"
    },
    {
      name: "Technology Roadmaps",
      icon: "Map",
      description: "Strategic technology planning and architecture"
    },
    {
      name: "Change Management",
      icon: "Users",
      description: "Organizational change and adoption strategies"
    },
    {
      name: "Process Optimization",
      icon: "Settings",
      description: "Business process analysis and improvement"
    }],

    integrations: ["All Clusters", "Executive Leadership", "Project Management"],
    metrics: [
    { value: "150+", label: "Transformations" },
    { value: "$2B+", label: "Value Created" },
    { value: "95%", label: "Success Rate" },
    { value: "C-Level", label: "Engagement" }],

    caseStudy: {
      company: "GlobalBank International",
      industry: "Banking",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19d8168c4-1764336404678.png",
      logoAlt: "International banking institution logo with gold and navy blue colors featuring globe symbol representing global financial services",
      challenge: "Traditional bank needed comprehensive digital transformation strategy to compete with digital-first competitors.",
      result: "Developed 5-year transformation roadmap resulting in 40% cost reduction and 300% increase in digital adoption"
    }
  }];


  const handleClusterClick = (cluster) => {
    setActiveCluster(cluster);
    setShowDetail(true);
  };

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setFilters({
        industry: 'all',
        companySize: 'all',
        serviceType: 'all'
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trinity Cluster Explorer - Integrated Business Verticals | Trinity AI Hub</title>
        <meta
          name="description"
          content="Explore Trinity's 6 integrated business verticals - AI & Automation, Creative Studio, Digital Products, Marketing, Analytics, and Consulting. Discover seamless cross-cluster solutions." />

      </Helmet>
      <Header />
      <main className="main-content">
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Icon name="Sparkles" size={20} color="var(--color-primary)" />
                <span className="text-sm font-semibold text-primary">Integrated Ecosystem</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Trinity Cluster <span className="gradient-text">Universe</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore our six integrated business verticals working in harmony to deliver comprehensive digital transformation solutions. Each cluster is designed to complement the others, creating a powerful ecosystem of services.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="default" size="lg" iconName="Compass" iconPosition="left">
                  Start Exploring
                </Button>
                <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            <StatsOverview />
          </div>
        </section>

        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interactive Ecosystem Map
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visualize how our clusters interconnect to create comprehensive solutions. Click on any cluster to explore its services and integration points.
              </p>
            </div>

            <div className="mb-12">
              <EcosystemVisualization
                clusters={clusters}
                activeCluster={activeCluster}
                onClusterSelect={handleClusterClick} />

            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted'}`
                }>

                <Icon name="Grid3x3" size={20} className="inline mr-2" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted'}`
                }>

                <Icon name="List" size={20} className="inline mr-2" />
                List View
              </button>
            </div>

            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters?.map((cluster) =>
              <ClusterCard
                key={cluster?.id}
                cluster={cluster}
                isActive={activeCluster?.id === cluster?.id}
                onClick={() => handleClusterClick(cluster)} />

              )}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <IntegrationMap clusters={clusters} />
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
              <span className="text-sm font-semibold text-success">Ready to Transform</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build Your Solution Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our integrated cluster approach means you get comprehensive solutions that work seamlessly together. Schedule a consultation to discover how Trinity can accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="default" size="lg" iconName="Calendar" iconPosition="left">
                Schedule Strategy Session
              </Button>
              <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                Download Capabilities Deck
              </Button>
            </div>
          </div>
        </section>

        {showDetail &&
        <ClusterDetail cluster={activeCluster} onClose={() => setShowDetail(false)} />
        }
      </main>
    </>);

};

export default TrinityClusterExplorer;