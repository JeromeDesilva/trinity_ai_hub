import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourcesSection = () => {
  const resources = [
  {
    id: 1,
    category: "Partnership Materials",
    icon: "Briefcase",
    color: "purple",
    items: [
    { name: "Partnership Overview Deck", type: "PDF", size: "4.2 MB", icon: "FileText" },
    { name: "Partner Program Guide", type: "PDF", size: "2.8 MB", icon: "BookOpen" },
    { name: "Technical Integration Guide", type: "PDF", size: "5.1 MB", icon: "Code" },
    { name: "Marketing Co-op Guidelines", type: "PDF", size: "1.9 MB", icon: "Megaphone" }]

  },
  {
    id: 2,
    category: "Investment Documents",
    icon: "TrendingUp",
    color: "blue",
    items: [
    { name: "Investor Presentation Deck", type: "PDF", size: "8.5 MB", icon: "PresentationChart" },
    { name: "Financial Performance Report", type: "PDF", size: "3.2 MB", icon: "BarChart3" },
    { name: "Market Analysis & Opportunity", type: "PDF", size: "6.7 MB", icon: "Globe" },
    { name: "Technology & IP Overview", type: "PDF", size: "4.3 MB", icon: "Cpu" }]

  },
  {
    id: 3,
    category: "Due Diligence",
    icon: "Search",
    color: "pink",
    items: [
    { name: "Company Overview & History", type: "PDF", size: "2.1 MB", icon: "Building2" },
    { name: "Leadership Team Bios", type: "PDF", size: "1.5 MB", icon: "Users" },
    { name: "Client Success Stories", type: "PDF", size: "7.8 MB", icon: "Award" },
    { name: "Security & Compliance Docs", type: "PDF", size: "3.9 MB", icon: "Shield" }]

  },
  {
    id: 4,
    category: "Case Studies",
    icon: "FileCheck",
    color: "green",
    items: [
    { name: "Enterprise AI Transformation", type: "PDF", size: "5.4 MB", icon: "Zap" },
    { name: "Global Partnership Success", type: "PDF", size: "4.1 MB", icon: "Globe" },
    { name: "ROI Analysis: Fortune 500", type: "PDF", size: "3.6 MB", icon: "DollarSign" },
    { name: "Multi-Vertical Integration", type: "PDF", size: "6.2 MB", icon: "Layers" }]

  }];


  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: "bg-purple-50",
        icon: "#6B46C1",
        border: "border-purple-200",
        text: "text-purple-700"
      },
      blue: {
        bg: "bg-blue-50",
        icon: "#3B82F6",
        border: "border-blue-200",
        text: "text-blue-700"
      },
      pink: {
        bg: "bg-pink-50",
        icon: "#EC4899",
        border: "border-pink-200",
        text: "text-pink-700"
      },
      green: {
        bg: "bg-green-50",
        icon: "#10B981",
        border: "border-green-200",
        text: "text-green-700"
      }
    };
    return colors?.[color];
  };

  const videoResources = [
  {
    id: 1,
    title: "Trinity Platform Overview",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1643025267097-377a54606081",
    thumbnailAlt: "Modern office meeting room with large screen displaying Trinity AI platform dashboard and analytics",
    views: "2.4K"
  },
  {
    id: 2,
    title: "Partnership Success Stories",
    duration: "8:30",
    thumbnail: "https://images.unsplash.com/photo-1637979910474-38e3ad8d5cab",
    thumbnailAlt: "Diverse business team collaborating around conference table with laptops and documents in bright office",
    views: "1.8K"
  },
  {
    id: 3,
    title: "Investment Opportunity Webinar",
    duration: "45:20",
    thumbnail: "https://images.unsplash.com/photo-1595819492006-5310d129e010",
    thumbnailAlt: "Professional business presentation with speaker at podium addressing audience in modern conference hall",
    views: "3.2K"
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Icon name="FolderOpen" size={20} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Resources & Materials</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="gradient-text">Resource Library</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access detailed documentation, presentations, and materials to support your partnership or investment evaluation. All resources are regularly updated with the latest information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources?.map((resource) => {
            const colors = getColorClasses(resource?.color);
            return (
              <div key={resource?.id} className="card p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${colors?.bg} rounded-xl flex items-center justify-center border ${colors?.border}`}>
                    <Icon name={resource?.icon} size={28} color={colors?.icon} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{resource?.category}</h3>
                </div>
                <div className="space-y-3">
                  {resource?.items?.map((item, index) =>
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">

                      <div className="flex items-center gap-3 flex-grow">
                        <Icon name={item?.icon} size={20} color="#6B7280" />
                        <div>
                          <div className="font-medium text-gray-900">{item?.name}</div>
                          <div className="text-sm text-gray-600">{item?.type} • {item?.size}</div>
                        </div>
                      </div>
                      <Icon name="Download" size={20} color="#6B46C1" />
                    </div>
                  )}
                </div>
                <Button variant="outline" fullWidth className="mt-6" iconName="FolderOpen" iconPosition="left">
                  View All {resource?.category}
                </Button>
              </div>);

          })}
        </div>

        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Video Resources</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch detailed presentations and success stories to better understand Trinity's capabilities and partnership opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {videoResources?.map((video) =>
            <div key={video?.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img
                  src={video?.thumbnail}
                  alt={video?.thumbnailAlt}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Icon name="Play" size={32} color="#6B46C1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-white text-sm font-medium">
                    {video?.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">{video?.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Eye" size={16} color="#6B7280" />
                    <span>{video?.views} views</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Icon name="Lock" size={28} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Secure Data Room</h3>
                <p className="text-sm text-gray-600">For qualified investors and partners</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access comprehensive due diligence materials including detailed financials, legal documents, technical specifications, and strategic roadmaps in our secure virtual data room.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={20} color="#10B981" />
                <span className="text-gray-700">Bank-grade encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={20} color="#10B981" />
                <span className="text-gray-700">Granular access controls</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={20} color="#10B981" />
                <span className="text-gray-700">Activity tracking & audit logs</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={20} color="#10B981" />
                <span className="text-gray-700">NDA-protected materials</span>
              </div>
            </div>
            
            <Button variant="default" fullWidth iconName="Key" iconPosition="left">
              Request Data Room Access
            </Button>
          </div>
          
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Mail" size={28} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Newsletter Subscription</h3>
                <p className="text-sm text-gray-600">Stay updated on Trinity news</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Subscribe to receive quarterly updates on company performance, new partnership opportunities, market insights, and exclusive invitations to investor events.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Icon name="TrendingUp" size={20} color="#3B82F6" />
                <span className="text-gray-700 text-sm">Quarterly financial updates</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Icon name="Lightbulb" size={20} color="#6B46C1" />
                <span className="text-gray-700 text-sm">Product innovation announcements</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                <Icon name="Calendar" size={20} color="#EC4899" />
                <span className="text-gray-700 text-sm">Exclusive event invitations</span>
              </div>
            </div>
            
            <Button variant="default" fullWidth iconName="Bell" iconPosition="left">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default ResourcesSection;