import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InstructorShowcase = () => {
  const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'Chief AI Architect',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    imageAlt: 'Professional headshot of Asian woman with long black hair wearing navy blazer and white blouse in modern office setting',
    expertise: ['Machine Learning', 'Deep Learning', 'AI Strategy'],
    experience: '15+ years',
    students: 12500,
    courses: 18,
    rating: 4.9,
    bio: 'Former Google AI researcher with expertise in neural networks and production ML systems. Published 50+ research papers.',
    achievements: ['PhD in Computer Science', 'Google AI Research Lead', 'TEDx Speaker']
  },
  {
    id: 2,
    name: 'Prof. Michael Rodriguez',
    title: 'ML Engineering Lead',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c30629a8-1763296377538.png",
    imageAlt: 'Professional headshot of Hispanic man with short black hair in navy suit and glasses with confident expression',
    expertise: ['MLOps', 'Model Deployment', 'Cloud Architecture'],
    experience: '12+ years',
    students: 9800,
    courses: 15,
    rating: 4.8,
    bio: 'Built ML infrastructure at Amazon and Netflix. Specializes in scaling AI systems for production environments.',
    achievements: ['MS in Data Science', 'AWS ML Certified', 'Author of 3 books']
  },
  {
    id: 3,
    name: 'Emma Thompson',
    title: 'Marketing Automation Expert',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1cf02ab-1763294013918.png",
    imageAlt: 'Professional headshot of Caucasian woman with blonde hair in gray business suit with warm smile and friendly demeanor',
    expertise: ['Marketing Automation', 'Growth Hacking', 'Analytics'],
    experience: '10+ years',
    students: 15200,
    courses: 22,
    rating: 4.9,
    bio: 'Former CMO at leading SaaS companies. Helped 200+ businesses scale their marketing with automation.',
    achievements: ['MBA Marketing', 'HubSpot Diamond Partner', 'Forbes 30 Under 30']
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    title: 'Data Science Director',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d854688-1763295573707.png",
    imageAlt: 'Professional headshot of African American man with short hair wearing dark suit and tie with confident authoritative presence',
    expertise: ['Data Analytics', 'Statistical Modeling', 'Business Intelligence'],
    experience: '14+ years',
    students: 11400,
    courses: 20,
    rating: 4.8,
    bio: 'Led data science teams at Microsoft and IBM. Expert in translating complex data into actionable business insights.',
    achievements: ['PhD in Statistics', 'Kaggle Grandmaster', 'Data Science Summit Speaker']
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Users" size={20} color="var(--color-secondary)" />
            <span className="text-sm font-medium text-secondary">World-Class Instructors</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Learn from Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our instructors are seasoned professionals from top tech companies with real-world experience in AI and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instructors?.map((instructor) =>
          <div key={instructor?.id} className="card p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <Image
                  src={instructor?.image}
                  alt={instructor?.imageAlt}
                  className="w-24 h-24 rounded-xl object-cover" />

                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} color="white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{instructor?.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{instructor?.title}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {instructor?.expertise?.map((skill, index) =>
                  <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {skill}
                      </span>
                  )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} color="var(--color-warning)" />
                      <span className="font-medium">{instructor?.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      <span>{instructor?.students?.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BookOpen" size={14} />
                      <span>{instructor?.courses} courses</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {instructor?.bio}
              </p>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Icon name="Award" size={16} />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-1">
                  {instructor?.achievements?.map((achievement, index) =>
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                )}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button variant="outline" fullWidth iconName="User" iconPosition="left">
                  View Profile
                </Button>
                <Button variant="default" fullWidth iconName="BookOpen" iconPosition="left">
                  View Courses
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" iconName="Users" iconPosition="left">
            Meet All 50+ Instructors
          </Button>
        </div>
      </div>
    </section>);

};

export default InstructorShowcase;