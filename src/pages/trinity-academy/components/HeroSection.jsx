import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Icon name="GraduationCap" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">AI-Powered Learning Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Master AI & Digital Transformation with{' '}
            <span className="gradient-text">Trinity Academy</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive courses, hands-on projects, and industry certifications designed to transform your team into AI-powered innovators. Learn from experts, practice with real-world scenarios, and accelerate your career.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="default" size="lg" iconName="Rocket" iconPosition="right">
              Start Learning Journey
            </Button>
            <Button variant="outline" size="lg" iconName="PlayCircle" iconPosition="left">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'BookOpen', value: '150+', label: 'Expert Courses' },
              { icon: 'Users', value: '25K+', label: 'Active Learners' },
              { icon: 'Award', value: '98%', label: 'Completion Rate' },
              { icon: 'TrendingUp', value: '4.9/5', label: 'Average Rating' }
            ]?.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                <Icon name={stat?.icon} size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;