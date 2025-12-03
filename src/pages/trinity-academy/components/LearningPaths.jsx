import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPaths = () => {
  const paths = [
    {
      id: 1,
      title: 'AI Engineer Career Path',
      description: 'Complete roadmap from fundamentals to advanced AI engineering with hands-on projects and industry certifications',
      duration: '6 months',
      courses: 12,
      projects: 8,
      level: 'Beginner to Advanced',
      icon: 'Cpu',
      color: 'primary',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'MLOps', 'AI Ethics'],
      outcomes: [
        'Build production-ready AI models',
        'Deploy ML systems at scale',
        'Earn industry-recognized certification'
      ]
    },
    {
      id: 2,
      title: 'Data Science Mastery',
      description: 'Transform raw data into actionable insights with comprehensive training in analytics, visualization, and predictive modeling',
      duration: '5 months',
      courses: 10,
      projects: 6,
      level: 'Beginner to Intermediate',
      icon: 'BarChart3',
      color: 'secondary',
      skills: ['Statistics', 'Python/R', 'SQL', 'Data Visualization', 'Business Intelligence'],
      outcomes: [
        'Master data analysis techniques',
        'Create compelling visualizations',
        'Drive data-driven decisions'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Automation',
      description: 'Learn to leverage AI and automation tools to create high-performing marketing campaigns that scale',
      duration: '4 months',
      courses: 8,
      projects: 5,
      level: 'Intermediate',
      icon: 'Megaphone',
      color: 'accent',
      skills: ['Marketing Automation', 'SEO/SEM', 'Content Strategy', 'Analytics', 'AI Tools'],
      outcomes: [
        'Automate marketing workflows',
        'Optimize campaign performance',
        'Increase ROI by 300%+'
      ]
    },
    {
      id: 4,
      title: 'AI Leadership & Strategy',
      description: 'Executive program for leaders driving AI transformation and building data-driven organizations',
      duration: '3 months',
      courses: 6,
      projects: 4,
      level: 'Advanced',
      icon: 'Target',
      color: 'success',
      skills: ['AI Strategy', 'Change Management', 'Team Leadership', 'Innovation', 'Ethics'],
      outcomes: [
        'Lead AI transformation initiatives',
        'Build high-performing AI teams',
        'Create sustainable AI strategies'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
      success: 'bg-success/10 text-success border-success/20'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Route" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Structured Learning Paths</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Career-Focused Learning Journeys
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow curated paths designed by industry experts to achieve your career goals with comprehensive training and certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {paths?.map((path) => (
            <div key={path?.id} className="card p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(path?.color)}`}>
                  <Icon name={path?.icon} size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{path?.title}</h3>
                  <p className="text-muted-foreground">{path?.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Icon name="Clock" size={16} />
                    <span>Duration</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{path?.duration}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Icon name="BookOpen" size={16} />
                    <span>Courses</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{path?.courses}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Icon name="Code" size={16} />
                    <span>Projects</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{path?.projects}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Icon name="Award" size={16} />
                  <span>Skills You'll Master</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {path?.skills?.map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1 rounded-full bg-muted text-foreground font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Icon name="CheckCircle" size={16} />
                  <span>Learning Outcomes</span>
                </div>
                <ul className="space-y-2">
                  {path?.outcomes?.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="default" fullWidth iconName="ArrowRight" iconPosition="right">
                  Start Learning Path
                </Button>
                <Button variant="outline" iconName="Eye">
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;