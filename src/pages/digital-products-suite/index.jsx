import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import ProductHero from './components/ProductHero';
import ProductFilters from './components/ProductFilters';
import ProductCard from './components/ProductCard';
import ProductComparison from './components/ProductComparison';
import IntegrationShowcase from './components/IntegrationShowcase';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';

const DigitalProductsSuite = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
  {
    id: 1,
    name: 'AI Workflow Automation',
    category: 'AI Automation',
    categoryIcon: 'Bot',
    description: 'Intelligent automation platform that streamlines complex business processes using advanced AI algorithms. Reduce manual work by 80% and eliminate human errors with smart workflow orchestration.',
    image: "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f",
    imageAlt: 'Modern digital workspace showing AI automation dashboard with colorful workflow diagrams and data visualizations on large monitor',
    rating: 4.9,
    activeUsers: '12,500+',
    growthRate: '+45% MoM',
    isNew: true,
    isFeatured: true,
    keyFeatures: [
    'Visual workflow builder with drag-and-drop interface',
    'AI-powered decision making and routing',
    'Real-time monitoring and analytics dashboard',
    'Integration with 500+ business applications',
    'Custom API development and webhooks']

  },
  {
    id: 2,
    name: 'Marketing Intelligence Hub',
    category: 'Marketing',
    categoryIcon: 'Megaphone',
    description: 'Comprehensive marketing automation suite powered by AI for campaign management, lead scoring, and customer journey optimization. Increase ROI by 250% with data-driven insights.',
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    imageAlt: 'Marketing analytics dashboard displaying colorful charts graphs and campaign performance metrics on desktop computer screen',
    rating: 4.8,
    activeUsers: '8,300+',
    growthRate: '+38% MoM',
    isNew: false,
    isFeatured: true,
    keyFeatures: [
    'Multi-channel campaign orchestration',
    'Predictive lead scoring with machine learning',
    'A/B testing automation and optimization',
    'Customer segmentation and personalization',
    'ROI tracking and attribution modeling']

  },
  {
    id: 3,
    name: 'Customer Experience AI',
    category: 'Customer Experience',
    categoryIcon: 'Users',
    description: 'Transform customer interactions with AI-powered chatbots, sentiment analysis, and predictive support. Achieve 94% customer satisfaction with intelligent automation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_137f95981-1764336415577.png",
    imageAlt: 'Customer service representative using AI chatbot interface with conversation bubbles and satisfaction metrics on dual monitors',
    rating: 4.9,
    activeUsers: '15,200+',
    growthRate: '+52% MoM',
    isNew: true,
    isFeatured: false,
    keyFeatures: [
    'Natural language processing chatbots',
    'Sentiment analysis and emotion detection',
    'Predictive customer support routing',
    'Omnichannel conversation management',
    'Customer journey mapping and analytics']

  },
  {
    id: 4,
    name: 'Data Analytics Engine',
    category: 'Analytics',
    categoryIcon: 'BarChart3',
    description: 'Enterprise-grade analytics platform with AI-powered insights, predictive modeling, and real-time data visualization. Make data-driven decisions 10x faster.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_140ca07e0-1764336412999.png",
    imageAlt: 'Business intelligence dashboard showing complex data visualizations with pie charts bar graphs and trend lines on widescreen display',
    rating: 4.7,
    activeUsers: '6,800+',
    growthRate: '+31% MoM',
    isNew: false,
    isFeatured: true,
    keyFeatures: [
    'Real-time data processing and visualization',
    'Predictive analytics with machine learning',
    'Custom dashboard builder',
    'Automated report generation',
    'Data warehouse integration']

  },
  {
    id: 5,
    name: 'Content Creation Studio',
    category: 'Content Creation',
    categoryIcon: 'FileText',
    description: 'AI-powered content generation platform for blogs, social media, and marketing materials. Create high-quality content 5x faster with intelligent writing assistance.',
    image: "https://images.unsplash.com/photo-1537716069347-b3a81eb09f24",
    imageAlt: 'Creative workspace with laptop showing content creation interface surrounded by coffee cup notebook and design materials',
    rating: 4.8,
    activeUsers: '9,500+',
    growthRate: '+42% MoM',
    isNew: true,
    isFeatured: false,
    keyFeatures: [
    'AI-powered content generation',
    'SEO optimization suggestions',
    'Multi-language support',
    'Brand voice customization',
    'Content calendar and scheduling']

  },
  {
    id: 6,
    name: 'E-commerce Accelerator',
    category: 'E-commerce',
    categoryIcon: 'ShoppingCart',
    description: 'Complete e-commerce solution with AI-driven product recommendations, inventory management, and conversion optimization. Boost sales by 180%.',
    image: "https://images.unsplash.com/photo-1733232679107-9c9957c1affa",
    imageAlt: 'Modern e-commerce dashboard displaying product catalog inventory management and sales analytics on laptop screen',
    rating: 4.9,
    activeUsers: '11,200+',
    growthRate: '+48% MoM',
    isNew: false,
    isFeatured: true,
    keyFeatures: [
    'AI-powered product recommendations',
    'Dynamic pricing optimization',
    'Inventory forecasting',
    'Abandoned cart recovery',
    'Multi-currency and payment gateway support']

  },
  {
    id: 7,
    name: 'Sales Intelligence Platform',
    category: 'AI Automation',
    categoryIcon: 'TrendingUp',
    description: 'Empower your sales team with AI-driven lead prioritization, pipeline management, and predictive forecasting. Close deals 40% faster.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1096c50c4-1764336414011.png",
    imageAlt: 'Sales dashboard showing pipeline visualization lead scoring metrics and revenue forecasts on desktop monitor',
    rating: 4.7,
    activeUsers: '7,600+',
    growthRate: '+35% MoM',
    isNew: false,
    isFeatured: false,
    keyFeatures: [
    'Predictive lead scoring',
    'Sales pipeline visualization',
    'Email tracking and automation',
    'Meeting scheduler integration',
    'Revenue forecasting with AI']

  },
  {
    id: 8,
    name: 'Project Management Pro',
    category: 'AI Automation',
    categoryIcon: 'Briefcase',
    description: 'Intelligent project management platform with AI-powered resource allocation, risk prediction, and automated reporting. Deliver projects 30% faster.',
    image: "https://images.unsplash.com/photo-1609188343737-366b8dc25152",
    imageAlt: 'Project management interface displaying kanban board with task cards timeline view and team collaboration tools',
    rating: 4.8,
    activeUsers: '10,400+',
    growthRate: '+40% MoM',
    isNew: false,
    isFeatured: false,
    keyFeatures: [
    'AI-powered resource allocation',
    'Risk prediction and mitigation',
    'Gantt charts and timeline views',
    'Team collaboration tools',
    'Automated progress reporting']

  },
  {
    id: 9,
    name: 'Social Media Command Center',
    category: 'Marketing',
    categoryIcon: 'Share2',
    description: 'Unified social media management platform with AI-powered content scheduling, engagement tracking, and sentiment analysis across all channels.',
    image: "https://images.unsplash.com/photo-1676276375581-da33fe6d1c8b",
    imageAlt: 'Social media management dashboard showing multiple platform feeds engagement metrics and content calendar on large screen',
    rating: 4.7,
    activeUsers: '13,800+',
    growthRate: '+44% MoM',
    isNew: true,
    isFeatured: false,
    keyFeatures: [
    'Multi-platform post scheduling',
    'AI-powered content suggestions',
    'Engagement analytics and reporting',
    'Social listening and sentiment analysis',
    'Influencer collaboration tools']

  },
  {
    id: 10,
    name: 'HR Management Suite',
    category: 'AI Automation',
    categoryIcon: 'Users',
    description: 'Comprehensive HR platform with AI-driven recruitment, performance management, and employee engagement tools. Reduce hiring time by 60%.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10f593121-1764336413401.png",
    imageAlt: 'Human resources dashboard displaying employee profiles performance metrics and recruitment pipeline on computer screen',
    rating: 4.8,
    activeUsers: '5,900+',
    growthRate: '+33% MoM',
    isNew: false,
    isFeatured: false,
    keyFeatures: [
    'AI-powered candidate screening',
    'Performance review automation',
    'Employee engagement surveys',
    'Payroll and benefits management',
    'Learning and development tracking']

  },
  {
    id: 11,
    name: 'Financial Analytics Pro',
    category: 'Analytics',
    categoryIcon: 'DollarSign',
    description: 'Advanced financial analytics platform with AI-powered forecasting, budget optimization, and real-time financial reporting for data-driven decisions.',
    image: "https://images.unsplash.com/photo-1724833256463-26b199dc1b69",
    imageAlt: 'Financial analytics dashboard showing revenue charts expense tracking and profit forecasts on dual monitor setup',
    rating: 4.9,
    activeUsers: '4,200+',
    growthRate: '+29% MoM',
    isNew: false,
    isFeatured: false,
    keyFeatures: [
    'Predictive financial forecasting',
    'Budget vs actual analysis',
    'Cash flow optimization',
    'Automated financial reporting',
    'Compliance and audit trails']

  },
  {
    id: 12,
    name: 'Email Marketing Automation',
    category: 'Marketing',
    categoryIcon: 'Mail',
    description: 'Intelligent email marketing platform with AI-powered personalization, send-time optimization, and advanced segmentation. Achieve 45% open rates.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105e23617-1764336415590.png",
    imageAlt: 'Email marketing interface showing campaign builder with drag-and-drop editor and performance analytics on laptop',
    rating: 4.8,
    activeUsers: '16,700+',
    growthRate: '+50% MoM',
    isNew: true,
    isFeatured: true,
    keyFeatures: [
    'AI-powered personalization',
    'Send-time optimization',
    'Advanced segmentation',
    'A/B testing automation',
    'Deliverability monitoring']

  }];


  const filteredProducts = products?.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product?.category?.toLowerCase()?.replace(/\s+/g, '-') === selectedCategory;

    const matchesSearch = searchQuery === '' ||
    product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    product?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    product?.category?.toLowerCase()?.includes(searchQuery?.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleTryDemo = (product) => {
    console.log('Starting demo for:', product?.name);
  };

  const handleLearnMore = (product) => {
    console.log('Learning more about:', product?.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <ProductHero />

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPricing={selectedPricing}
              onPricingChange={setSelectedPricing}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery} />


            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredProducts?.length} Products Found
                </h2>
                <p className="text-gray-600 mt-1">
                  Explore our comprehensive suite of AI-powered solutions
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Highest Rated</option>
                  <option>Name (A-Z)</option>
                </select>
              </div>
            </div>

            {filteredProducts?.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts?.map((product) =>
              <ProductCard
                key={product?.id}
                product={product}
                onTryDemo={handleTryDemo}
                onLearnMore={handleLearnMore} />

              )}
              </div> :

            <div className="text-center py-20">
                <Icon name="Search" size={64} color="#D1D5DB" className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">

                  <Icon name="RotateCcw" size={18} />
                  Reset Filters
                </button>
              </div>
            }
          </div>
        </section>

        <ProductComparison />
        <IntegrationShowcase />
        <TestimonialSection />
        <CTASection />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500">
                  <Icon name="Sparkles" size={24} color="white" />
                </div>
                <span className="text-xl font-bold">Trinity AI Hub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering businesses with intelligent automation and AI-first digital solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">AI Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Marketing Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Customer Experience</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date()?.getFullYear()} Trinity AI Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default DigitalProductsSuite;