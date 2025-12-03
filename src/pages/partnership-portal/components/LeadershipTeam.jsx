import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LeadershipTeam = () => {
  const executiveTeam = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1230b9d-1763294070661.png",
    imageAlt: "Professional Asian woman with shoulder-length black hair in navy blazer smiling confidently in modern office setting",
    bio: "Former VP of AI Strategy at Microsoft. 15+ years leading enterprise transformation initiatives. Stanford MBA.",
    linkedin: "linkedin.com/in/sarahchen",
    expertise: ["AI Strategy", "Enterprise Sales", "M&A"]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1452dc5c5-1763296801065.png",
    imageAlt: "Hispanic male executive with short dark hair and beard in white shirt against modern tech office background",
    bio: "Ex-Google AI Research Lead. PhD in Machine Learning from MIT. 20+ patents in AI and automation.",
    linkedin: "linkedin.com/in/marcusrodriguez",
    expertise: ["AI Architecture", "ML Systems", "Innovation"]
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Chief Financial Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1cf02ab-1763294013918.png",
    imageAlt: "Professional Caucasian woman with blonde hair in gray business suit smiling warmly in corporate office environment",
    bio: "Former CFO at SaaS unicorn. Led 3 successful exits. CPA with expertise in high-growth tech companies.",
    linkedin: "linkedin.com/in/jenniferwilliams",
    expertise: ["Financial Strategy", "IPO Preparation", "Investor Relations"]
  },
  {
    id: 4,
    name: "David Okonkwo",
    role: "Chief Operating Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffe872cd-1763294679798.png",
    imageAlt: "African American male executive with short hair in dark suit and tie with confident professional demeanor",
    bio: "20+ years scaling operations at Fortune 500 companies. Expert in process optimization and global expansion.",
    linkedin: "linkedin.com/in/davidokonkwo",
    expertise: ["Operations", "Scaling", "Global Expansion"]
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    role: "Chief AI Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe9b5695-1763296011297.png",
    imageAlt: "Indian woman with long dark hair in professional attire smiling in modern technology workspace with natural lighting",
    bio: "PhD in AI Ethics from Oxford. Former head of AI research at IBM. Published author on responsible AI.",
    linkedin: "linkedin.com/in/priyasharma",
    expertise: ["AI Ethics", "Research", "Product Innovation"]
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Chief Revenue Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a99cc915-1763299240589.png",
    imageAlt: "Asian male executive with glasses and short black hair in navy suit smiling professionally in corporate setting",
    bio: "Built and scaled sales teams at 3 unicorn startups. Expert in enterprise SaaS go-to-market strategies.",
    linkedin: "linkedin.com/in/robertkim",
    expertise: ["Sales Strategy", "Team Building", "Market Expansion"]
  }];


  const advisoryBoard = [
  {
    name: "Dr. Andrew Mitchell",
    role: "AI Strategy Advisor",
    company: "Former CTO, Amazon Web Services",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb27b9bd-1763296842514.png",
    imageAlt: "Senior Caucasian male with gray hair and beard in business casual attire in professional office environment"
  },
  {
    name: "Lisa Thompson",
    role: "Growth Advisor",
    company: "Partner, Sequoia Capital",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d9d1e3f-1763293907442.png",
    imageAlt: "Professional woman with short brown hair in elegant black blazer smiling warmly in modern office setting"
  },
  {
    name: "James Park",
    role: "Technology Advisor",
    company: "Founder & CEO, TechVentures",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_180b45e39-1763296194737.png",
    imageAlt: "Asian male entrepreneur with styled black hair in casual business attire in contemporary workspace"
  },
  {
    name: "Maria Garcia",
    role: "International Expansion Advisor",
    company: "Former VP Global Operations, Salesforce",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_126946a46-1763294962859.png",
    imageAlt: "Hispanic woman with long dark hair in professional burgundy blazer smiling confidently in corporate office"
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Icon name="Users" size={20} color="#3B82F6" />
            <span className="text-sm font-medium text-blue-700">Leadership Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team Driving <span className="gradient-text">Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class leadership with proven track records in AI, enterprise technology, and scaling high-growth companies. Combined 150+ years of experience building industry-leading organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {executiveTeam?.map((executive) =>
          <div key={executive?.id} className="card p-6 hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image
                  src={executive?.image}
                  alt={executive?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>
                <a
                href={`https://${executive?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                aria-label={`Connect with ${executive?.name} on LinkedIn`}>

                  <Icon name="Linkedin" size={20} color="white" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{executive?.name}</h3>
              <div className="text-purple-600 font-medium mb-4">{executive?.role}</div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{executive?.bio}</p>
              
              <div className="flex flex-wrap gap-2">
                {executive?.expertise?.map((skill, index) =>
              <span
                key={index}
                className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">

                    {skill}
                  </span>
              )}
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic guidance from industry veterans and thought leaders who bring deep expertise in AI, venture capital, and global business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard?.map((advisor, index) =>
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto bg-gray-100">
                  <Image
                  src={advisor?.image}
                  alt={advisor?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>
                <h4 className="text-lg font-bold text-gray-900 text-center mb-1">{advisor?.name}</h4>
                <div className="text-sm text-purple-600 font-medium text-center mb-2">{advisor?.role}</div>
                <div className="text-xs text-gray-600 text-center">{advisor?.company}</div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Connect with Our Leadership</h3>
              <p className="text-lg text-purple-100 mb-6">
                Schedule a confidential discussion with our executive team to explore partnership opportunities, investment details, or strategic collaboration initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" iconName="Calendar" iconPosition="left">
                  Schedule Executive Meeting
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" iconName="Mail" iconPosition="left">
                  Email Leadership
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon name="Award" size={32} color="white" className="mb-4" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm text-purple-100">Industry Awards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon name="BookOpen" size={32} color="white" className="mb-4" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-purple-100">Published Papers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon name="Users" size={32} color="white" className="mb-4" />
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-sm text-purple-100">Years Combined Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon name="TrendingUp" size={32} color="white" className="mb-4" />
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-sm text-purple-100">Successful Exits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LeadershipTeam;