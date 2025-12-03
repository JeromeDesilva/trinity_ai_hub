import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const CertificationPrograms = () => {
  const certifications = [
  {
    id: 1,
    title: 'Trinity Certified AI Professional',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1e626e6f3-1764336405134.png",
    badgeAlt: 'Professional certification badge with gold seal and Trinity AI Hub logo on premium certificate paper',
    level: 'Professional',
    duration: '3 months',
    exams: 3,
    projects: 5,
    recognition: 'Industry-recognized',
    description: 'Comprehensive certification validating your expertise in AI implementation, model development, and ethical AI practices',
    requirements: [
    'Complete 8 core AI courses',
    'Pass 3 certification exams',
    'Submit 5 capstone projects',
    'Maintain 90%+ course completion'],

    benefits: [
    'LinkedIn certification badge',
    'Digital certificate and physical plaque',
    'Access to exclusive job board',
    'Priority support and mentorship']

  },
  {
    id: 2,
    title: 'Trinity Data Science Expert',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_124f175dd-1764336405886.png",
    badgeAlt: 'Expert level certification badge with platinum seal and data science emblem on official certificate',
    level: 'Expert',
    duration: '4 months',
    exams: 4,
    projects: 6,
    recognition: 'Global standard',
    description: 'Advanced certification demonstrating mastery in data analysis, machine learning, and business intelligence',
    requirements: [
    'Complete 10 data science courses',
    'Pass 4 comprehensive exams',
    'Build 6 real-world projects',
    'Peer review participation'],

    benefits: [
    'Global certification recognition',
    'Career advancement support',
    'Exclusive networking events',
    'Lifetime learning resources']

  },
  {
    id: 3,
    title: 'Trinity Marketing Automation Specialist',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1812521d0-1764336405091.png",
    badgeAlt: 'Specialist certification badge with silver seal and marketing automation symbol on professional certificate',
    level: 'Specialist',
    duration: '2 months',
    exams: 2,
    projects: 4,
    recognition: 'Industry-validated',
    description: 'Specialized certification in marketing automation, campaign optimization, and AI-powered marketing strategies',
    requirements: [
    'Complete 6 marketing courses',
    'Pass 2 practical exams',
    'Create 4 campaign projects',
    'Case study presentation'],

    benefits: [
    'Marketing automation tools access',
    'Campaign templates library',
    'Industry expert mentorship',
    'Job placement assistance']

  }];


  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Icon name="Award" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Professional Certifications</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Earn Industry-Recognized Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validate your expertise with Trinity certifications trusted by leading companies worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {certifications?.map((cert) =>
          <div key={cert?.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary via-secondary to-accent p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <Icon name="Award" size={64} color="var(--color-primary)" />
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-primary">{cert?.level}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{cert?.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert?.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{cert?.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">{cert?.exams}</div>
                    <div className="text-xs text-muted-foreground">Exams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{cert?.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Icon name="Globe" size={16} color="var(--color-success)" />
                      <span className="text-xs font-medium text-success">{cert?.recognition}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Recognition</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                    <Icon name="ClipboardCheck" size={16} />
                    <span>Requirements</span>
                  </div>
                  <ul className="space-y-2">
                    {cert?.requirements?.map((req, index) =>
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                    <Icon name="Gift" size={16} />
                    <span>Benefits</span>
                  </div>
                  <ul className="space-y-2">
                    {cert?.benefits?.map((benefit, index) =>
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Star" size={16} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <Button variant="default" fullWidth iconName="ArrowRight" iconPosition="right">
                  Start Certification
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <Icon name="Users" size={24} color="var(--color-primary)" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">12,500+</div>
                <div className="text-sm text-muted-foreground">Certified Professionals</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="flex items-center gap-3">
              <Icon name="Building2" size={24} color="var(--color-secondary)" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="flex items-center gap-3">
              <Icon name="TrendingUp" size={24} color="var(--color-success)" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">Career Advancement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CertificationPrograms;