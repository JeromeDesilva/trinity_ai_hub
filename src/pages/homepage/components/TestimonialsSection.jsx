import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 0,
    quote: "Trinity transformed our entire operations with their AI automation solutions. We\'ve seen a 340% ROI in just 6 months and our team is now focused on strategic initiatives rather than repetitive tasks.",
    author: "Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "GlobalTech Industries",
    industry: "Technology",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8ddfd9b-1763295097738.png",
    imageAlt: "Professional woman with blonde hair in navy business suit smiling confidently in modern corporate office with glass walls",
    metrics: [
    { label: "ROI Increase", value: "340%" },
    { label: "Time Saved", value: "15,000h" },
    { label: "Cost Reduction", value: "65%" }]

  },
  {
    id: 1,
    quote: "The Trinity Academy program equipped our entire team with AI skills that directly translated to business value. Their hands-on approach and real-world projects made the learning incredibly practical.",
    author: "Michael Chen",
    role: "VP of Learning & Development",
    company: "Enterprise Solutions Corp",
    industry: "Consulting",
    image: "https://images.unsplash.com/photo-1723990720514-65968a7d517b",
    imageAlt: "Asian businessman in dark suit with glasses standing in bright modern office space with arms crossed looking professional",
    metrics: [
    { label: "Team Trained", value: "500+" },
    { label: "Skill Improvement", value: "85%" },
    { label: "Project Success", value: "92%" }]

  },
  {
    id: 2,
    quote: "Working with Trinity\'s creative studio and AI capabilities gave us a competitive edge. Their ability to blend human creativity with intelligent automation is unmatched in the industry.",
    author: "Emily Rodriguez",
    role: "Chief Marketing Officer",
    company: "Innovate Brands",
    industry: "Marketing",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d92d732-1763296764294.png",
    imageAlt: "Hispanic woman with long dark hair in white blouse smiling warmly in creative agency office with colorful artwork background",
    metrics: [
    { label: "Campaign ROI", value: "280%" },
    { label: "Content Output", value: "5x" },
    { label: "Engagement", value: "+125%" }]

  }];


  const handlePrevious = () => {
    setActiveTestimonial((prev) => prev === 0 ? testimonials?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => prev === testimonials?.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="MessageSquare" size={16} color="white" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hear from Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Transformation Partners
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Real stories from real businesses achieving extraordinary results with Trinity
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials?.[activeTestimonial]?.image}
                    alt={testimonials?.[activeTestimonial]?.imageAlt}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/20" />

                  <div>
                    <h3 className="text-2xl font-bold">{testimonials?.[activeTestimonial]?.author}</h3>
                    <p className="text-purple-200">{testimonials?.[activeTestimonial]?.role}</p>
                    <p className="text-sm text-purple-300">{testimonials?.[activeTestimonial]?.company}</p>
                  </div>
                </div>

                <div className="relative">
                  <Icon name="Quote" size={48} color="rgba(255,255,255,0.1)" className="absolute -top-4 -left-2" />
                  <p className="text-xl lg:text-2xl leading-relaxed relative z-10 pl-8">
                    {testimonials?.[activeTestimonial]?.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-white/10 rounded-full">
                    <span className="text-sm font-medium">{testimonials?.[activeTestimonial]?.industry}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5]?.map((star) =>
                    <Icon key={star} name="Star" size={20} color="#F59E0B" fill="#F59E0B" />
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold mb-6">Impact Metrics</h4>
                {testimonials?.[activeTestimonial]?.metrics?.map((metric, index) =>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <p className="text-sm text-purple-200 mb-2">{metric?.label}</p>
                    <p className="text-4xl font-bold">{metric?.value}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/20">
              <div className="flex gap-2">
                {testimonials?.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ?
                  'bg-white w-8' : 'bg-white/30 hover:bg-white/50'}`
                  }
                  aria-label={`Go to testimonial ${index + 1}`} />

                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeft" size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;