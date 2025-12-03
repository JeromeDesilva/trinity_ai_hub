import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetricsSection = () => {
  const metrics = [
  {
    value: "10,000+",
    label: "Businesses Transformed",
    description: "From startups to Fortune 500 companies",
    icon: "Building2",
    color: "from-purple-500 to-purple-700"
  },
  {
    value: "$2.4B",
    label: "Cost Savings Generated",
    description: "Through intelligent automation",
    icon: "DollarSign",
    color: "from-blue-500 to-blue-700"
  },
  {
    value: "94%",
    label: "Client Satisfaction",
    description: "Rated excellent or outstanding",
    icon: "Star",
    color: "from-pink-500 to-pink-700"
  },
  {
    value: "15M+",
    label: "Hours Automated",
    description: "Freeing teams for strategic work",
    icon: "Clock",
    color: "from-purple-500 to-blue-500"
  }];


  const recognitions = [
  {
    title: "AI Innovation Award 2025",
    organization: "Tech Excellence Forum",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1548717668-9a3ba4d72e4a",
    imageAlt: "Golden trophy award on pedestal with spotlight in elegant ceremony setting with purple and blue lighting"
  },
  {
    title: "Best Automation Platform",
    organization: "Digital Transformation Summit",
    icon: "Trophy",
    image: "https://images.unsplash.com/photo-1699299163439-ade427360d53",
    imageAlt: "Silver trophy cup with laurel wreath design displayed on modern glass podium in professional conference venue"
  },
  {
    title: "Top AI Service Provider",
    organization: "Enterprise Tech Review",
    icon: "Medal",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4b4f9db-1764336415556.png",
    imageAlt: "Bronze medal with ribbon hanging on display stand at technology awards ceremony with ambient lighting"
  },
  {
    title: "Innovation Excellence",
    organization: "Global Business Awards",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1621075161884-97917b7782f7",
    imageAlt: "Crystal glass award trophy reflecting colorful lights on black marble base in corporate awards display"
  }];


  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <Icon name="TrendingUp" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Proven Results</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry{' '}
            <span className="gradient-text">Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering measurable impact across industries and geographies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics?.map((metric, index) =>
          <div
            key={index}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">

              <div className={`absolute inset-0 bg-gradient-to-br ${metric?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={metric?.icon} size={24} color="white" />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {metric?.value}
                </h3>

                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {metric?.label}
                </p>

                <p className="text-sm text-gray-600">
                  {metric?.description}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Recognition & Awards
            </h3>
            <p className="text-lg text-gray-600">
              Honored for excellence in AI innovation and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions?.map((recognition, index) =>
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">

                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                  src={recognition?.image}
                  alt={recognition?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon name={recognition?.icon} size={20} color="#6B46C1" />
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {recognition?.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {recognition?.organization}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessMetricsSection;