import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const contactOptions = [
    {
      id: 1,
      icon: "Users",
      title: "Partnership Inquiries",
      description: "Explore strategic partnership opportunities",
      email: "partnerships@trinitycreative.ai",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      icon: "TrendingUp",
      title: "Investment Relations",
      description: "Connect with our investor relations team",
      email: "investors@trinitycreative.ai",
      phone: "+1 (555) 123-4568"
    },
    {
      id: 3,
      icon: "Briefcase",
      title: "Business Development",
      description: "Discuss custom collaboration opportunities",
      email: "bizdev@trinitycreative.ai",
      phone: "+1 (555) 123-4569"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-16 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Icon name="Sparkles" size={20} color="white" />
                <span className="text-sm font-medium">Let's Build Together</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform the Future?
              </h2>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Whether you're seeking partnership opportunities or investment potential, Trinity offers a unique platform for growth and innovation. Join us in building the next generation of AI-powered business solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={20} color="white" />
                  </div>
                  <span className="text-lg">Proven track record of success</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={20} color="white" />
                  </div>
                  <span className="text-lg">Industry-leading growth metrics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={20} color="white" />
                  </div>
                  <span className="text-lg">World-class leadership team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={20} color="white" />
                  </div>
                  <span className="text-lg">Comprehensive support ecosystem</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" iconName="FileText" iconPosition="left">
                  Download Partnership Guide
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" iconName="Calendar" iconPosition="left">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactOptions?.map((option) => (
                  <div key={option?.id} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={option?.icon} size={24} color="white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{option?.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{option?.description}</p>
                        <div className="space-y-2">
                          <a href={`mailto:${option?.email}`} className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300 no-underline">
                            <Icon name="Mail" size={16} />
                            <span className="text-sm font-medium">{option?.email}</span>
                          </a>
                          <a href={`tel:${option?.phone?.replace(/\s/g, '')}`} className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300 no-underline">
                            <Icon name="Phone" size={16} />
                            <span className="text-sm font-medium">{option?.phone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="MapPin" size={24} color="#6B46C1" />
                  <h4 className="text-lg font-bold text-gray-900">Headquarters</h4>
                </div>
                <p className="text-gray-700 mb-2">Trinity Creative Services</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  123 Innovation Drive, Suite 500<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={32} color="white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h4>
            <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} color="white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Confidential</h4>
            <p className="text-gray-600">All discussions protected by NDA</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} color="white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h4>
            <p className="text-gray-600">Personal guidance throughout the process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;