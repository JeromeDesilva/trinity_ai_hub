import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import StoryCard from './components/StoryCard';
import FilterSection from './components/FilterSection';
import FeaturedStory from './components/FeaturedStory';
import StatsOverview from './components/StatsOverview';
import IndustryShowcase from './components/IndustryShowcase';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';

const SuccessStories = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    companySize: 'all',
    solutionType: 'all',
    roiRange: 'all'
  });

  const overviewStats = [
  {
    icon: 'TrendingUp',
    value: '450%',
    label: 'Average ROI Achieved'
  },
  {
    icon: 'Users',
    value: '250+',
    label: 'Success Stories'
  },
  {
    icon: 'Globe',
    value: '35+',
    label: 'Countries Served'
  },
  {
    icon: 'Award',
    value: '98%',
    label: 'Client Satisfaction'
  }];


  const industries = [
  {
    name: 'Healthcare',
    icon: 'Heart',
    count: 45,
    avgROI: '380%'
  },
  {
    name: 'Finance',
    icon: 'DollarSign',
    count: 52,
    avgROI: '520%'
  },
  {
    name: 'Retail',
    icon: 'ShoppingCart',
    count: 38,
    avgROI: '410%'
  },
  {
    name: 'Manufacturing',
    icon: 'Factory',
    count: 41,
    avgROI: '465%'
  },
  {
    name: 'Technology',
    icon: 'Cpu',
    count: 35,
    avgROI: '550%'
  },
  {
    name: 'Education',
    icon: 'GraduationCap',
    count: 28,
    avgROI: '340%'
  },
  {
    name: 'Logistics',
    icon: 'Truck',
    count: 32,
    avgROI: '425%'
  },
  {
    name: 'Real Estate',
    icon: 'Building',
    count: 24,
    avgROI: '390%'
  }];


  const featuredStory = {
    id: 'featured-1',
    title: 'Global Healthcare Provider Achieves 520% ROI with AI-Powered Patient Management',
    description: 'How MediCare International transformed patient care delivery and operational efficiency through Trinity\'s comprehensive AI automation suite, reducing wait times by 65% and increasing patient satisfaction scores to 96%.',
    image: "https://images.unsplash.com/photo-1710562750592-3be59a9fde45",
    imageAlt: 'Modern hospital reception area with digital check-in kiosks and healthcare professionals using tablet computers for patient management',
    companyName: 'MediCare International',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_19133b56f-1764336404673.png",
    companyLogoAlt: 'MediCare International company logo featuring medical cross symbol in blue and white color scheme',
    companySize: 'Enterprise (5000+ employees)',
    industry: 'Healthcare',
    readTime: '12 min read',
    metrics: [
    { value: '520%', label: 'ROI Achieved' },
    { value: '65%', label: 'Wait Time Reduction' },
    { value: '96%', label: 'Patient Satisfaction' }],

    testimonial: {
      quote: 'Trinity\'s AI solutions transformed our entire patient care ecosystem. The results exceeded our most optimistic projections.',
      name: 'Dr. Sarah Mitchell',
      position: 'Chief Digital Officer',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed76a677-1763293873868.png",
      avatarAlt: 'Professional headshot of Dr. Sarah Mitchell, female healthcare executive with short brown hair wearing white medical coat and stethoscope'
    }
  };

  const successStories = [
  {
    id: 'story-1',
    title: 'Retail Giant Transforms Customer Experience with AI-Driven Personalization',
    description: 'ShopSmart revolutionized their e-commerce platform with Trinity\'s AI recommendation engine, achieving unprecedented conversion rates and customer loyalty metrics.',
    image: "https://images.unsplash.com/photo-1711864768464-98c979cb920c",
    imageAlt: 'Modern retail store interior with digital displays showing personalized product recommendations and customers shopping with mobile devices',
    companyName: 'ShopSmart Retail',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_10b0fa307-1764336406001.png",
    companyLogoAlt: 'ShopSmart Retail company logo with shopping cart icon in vibrant orange and blue gradient',
    companySize: 'Enterprise (2500+ employees)',
    industry: 'Retail & E-commerce',
    readTime: '10 min read',
    metrics: [
    { value: '385%', label: 'ROI' },
    { value: '42%', label: 'Conversion Increase' },
    { value: '3.2x', label: 'Revenue Growth' }]

  },
  {
    id: 'story-2',
    title: 'Financial Services Leader Automates Compliance with 99.8% Accuracy',
    description: 'SecureBank implemented Trinity\'s AI compliance automation, reducing manual review time by 80% while maintaining industry-leading accuracy standards.',
    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    imageAlt: 'Modern banking office with financial analysts reviewing automated compliance reports on multiple computer screens showing data analytics dashboards',
    companyName: 'SecureBank Financial',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_10277725b-1764336405978.png",
    companyLogoAlt: 'SecureBank Financial logo featuring shield symbol with bank building silhouette in professional navy blue and gold colors',
    companySize: 'Enterprise (8000+ employees)',
    industry: 'Finance & Banking',
    readTime: '15 min read',
    metrics: [
    { value: '610%', label: 'ROI' },
    { value: '80%', label: 'Time Saved' },
    { value: '99.8%', label: 'Accuracy Rate' }]

  },
  {
    id: 'story-3',
    title: 'Manufacturing Company Optimizes Supply Chain with Predictive AI',
    description: 'TechManufacture leveraged Trinity\'s predictive analytics to transform their supply chain operations, reducing costs and improving delivery times significantly.',
    image: "https://images.unsplash.com/photo-1679625321680-18e400172256",
    imageAlt: 'Advanced manufacturing facility with robotic arms and automated assembly lines controlled by AI-powered systems with workers monitoring digital dashboards',
    companyName: 'TechManufacture Inc',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_147af7c01-1764336404725.png",
    companyLogoAlt: 'TechManufacture Inc logo with industrial gear icon and modern typography in metallic silver and electric blue',
    companySize: 'Enterprise (3500+ employees)',
    industry: 'Manufacturing',
    readTime: '11 min read',
    metrics: [
    { value: '445%', label: 'ROI' },
    { value: '35%', label: 'Cost Reduction' },
    { value: '50%', label: 'Faster Delivery' }]

  },
  {
    id: 'story-4',
    title: 'EdTech Startup Scales to 1M Users with AI-Powered Learning Platform',
    description: 'LearnFast transformed online education with Trinity\'s adaptive learning AI, achieving remarkable user growth and engagement metrics.',
    image: "https://images.unsplash.com/photo-1694532409273-b26e2ce266ea",
    imageAlt: 'Modern classroom with students using tablets and laptops for personalized AI-driven learning experiences with interactive digital content on screens',
    companyName: 'LearnFast Education',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a57d7518-1764336404031.png",
    companyLogoAlt: 'LearnFast Education logo featuring graduation cap icon with upward arrow in bright green and purple gradient colors',
    companySize: 'SME (250 employees)',
    industry: 'Education',
    readTime: '9 min read',
    metrics: [
    { value: '720%', label: 'ROI' },
    { value: '1M+', label: 'Active Users' },
    { value: '85%', label: 'Completion Rate' }]

  },
  {
    id: 'story-5',
    title: 'Logistics Company Reduces Delivery Times by 45% with Route Optimization AI',
    description: 'FastShip Logistics implemented Trinity\'s AI-powered route optimization, revolutionizing their delivery operations and customer satisfaction.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e154c436-1764336415599.png",
    imageAlt: 'Modern logistics warehouse with automated sorting systems and delivery trucks being loaded using AI-optimized routing displayed on control center screens',
    companyName: 'FastShip Logistics',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_125870042-1764336405554.png",
    companyLogoAlt: 'FastShip Logistics logo with lightning bolt and package icon in dynamic red and yellow color scheme',
    companySize: 'Enterprise (1800+ employees)',
    industry: 'Logistics & Supply Chain',
    readTime: '10 min read',
    metrics: [
    { value: '395%', label: 'ROI' },
    { value: '45%', label: 'Faster Delivery' },
    { value: '30%', label: 'Cost Savings' }]

  },
  {
    id: 'story-6',
    title: 'Real Estate Platform Increases Property Sales by 60% with AI Matching',
    description: 'HomeMatch revolutionized property discovery with Trinity\'s AI-powered buyer-property matching system, transforming the real estate experience.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1557921e7-1764336415505.png",
    imageAlt: 'Modern real estate office with agents using tablets showing AI-powered property matching interface with virtual home tours on large display screens',
    companyName: 'HomeMatch Realty',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4a40ea1-1764336405866.png",
    companyLogoAlt: 'HomeMatch Realty logo featuring house icon with heart symbol in warm orange and teal gradient colors',
    companySize: 'SME (450 employees)',
    industry: 'Real Estate',
    readTime: '8 min read',
    metrics: [
    { value: '480%', label: 'ROI' },
    { value: '60%', label: 'Sales Increase' },
    { value: '92%', label: 'Match Accuracy' }]

  }];


  const testimonials = [
  {
    quote: 'Trinity\'s AI solutions didn\'t just improve our operations - they completely transformed how we serve our customers. The ROI was evident within the first quarter.',
    name: 'Michael Chen',
    position: 'CEO',
    company: 'TechManufacture Inc',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13cfc504c-1763295673286.png",
    avatarAlt: 'Professional headshot of Michael Chen, Asian male executive in navy blue suit with confident smile in modern office setting'
  },
  {
    quote: 'Working with Trinity was a game-changer. Their team understood our challenges and delivered solutions that exceeded our expectations. The results speak for themselves.',
    name: 'Jennifer Rodriguez',
    position: 'Chief Technology Officer',
    company: 'ShopSmart Retail',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12ba661fd-1763298449681.png",
    avatarAlt: 'Professional headshot of Jennifer Rodriguez, Hispanic female technology executive with long dark hair wearing professional blazer in corporate environment'
  },
  {
    quote: 'The level of expertise and support from Trinity\'s team was exceptional. They guided us through every step of our digital transformation journey.',
    name: 'David Thompson',
    position: 'VP of Operations',
    company: 'FastShip Logistics',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15ebdb31b-1763300068284.png",
    avatarAlt: 'Professional headshot of David Thompson, Caucasian male operations executive with short gray hair in business casual attire with warehouse background'
  },
  {
    quote: 'Trinity\'s AI platform scaled perfectly with our rapid growth. Their solutions are robust, reliable, and deliver measurable business impact.',
    name: 'Priya Patel',
    position: 'Founder & CEO',
    company: 'LearnFast Education',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19af6ba18-1763295086559.png",
    avatarAlt: 'Professional headshot of Priya Patel, Indian female entrepreneur with warm smile wearing colorful traditional-modern fusion attire in bright office space'
  }];


  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      companySize: 'all',
      solutionType: 'all',
      roiRange: 'all'
    });
  };

  const filteredStories = useMemo(() => {
    return successStories?.filter((story) => {
      if (filters?.industry !== 'all' && !story?.industry?.toLowerCase()?.includes(filters?.industry)) {
        return false;
      }
      if (filters?.companySize !== 'all') {
        const sizeMap = {
          'startup': '1-50',
          'sme': '51-500',
          'enterprise': '500+'
        };
        if (!story?.companySize?.includes(sizeMap?.[filters?.companySize])) {
          return false;
        }
      }
      return true;
    });
  }, [filters, successStories]);

  return (
    <>
      <Helmet>
        <title>Success Stories - Trinity AI Hub | Real Transformation Results</title>
        <meta
          name="description"
          content="Explore 250+ success stories showcasing measurable ROI and business transformation across healthcare, finance, retail, manufacturing, and more. See how Trinity's AI solutions deliver real results." />

      </Helmet>
      <Header />
      <main className="main-content bg-background">
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="Award" size={20} />
                <span className="text-sm font-semibold">Success Transformation Stories</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Real Results, Real Impact
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how businesses across industries achieve measurable transformation with Trinity's AI-powered solutions. From 385% ROI to 99.8% accuracy - these are the stories of success.
              </p>
            </div>

            <StatsOverview stats={overviewStats} />

            <FeaturedStory story={featuredStory} />

            <IndustryShowcase industries={industries} />

            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters} />


            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  All Success Stories
                </h2>
                <p className="text-muted-foreground">
                  Showing {filteredStories?.length} of {successStories?.length} stories
                </p>
              </div>

              {filteredStories?.length > 0 ?
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStories?.map((story) =>
                <StoryCard key={story?.id} story={story} />
                )}
                </div> :

              <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <Icon name="Search" size={32} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    No Stories Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to see more success stories
                  </p>
                  <button
                  onClick={handleClearFilters}
                  className="text-primary font-semibold hover:underline">

                    Clear All Filters
                  </button>
                </div>
              }
            </div>

            <TestimonialCarousel testimonials={testimonials} />

            <CTASection />
          </div>
        </section>
      </main>
    </>);

};

export default SuccessStories;