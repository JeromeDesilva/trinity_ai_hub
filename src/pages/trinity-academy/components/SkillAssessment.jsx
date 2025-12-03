import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const SkillAssessment = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showResults, setShowResults] = useState(false);

  const roleOptions = [
    { value: 'developer', label: 'Software Developer' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'business-analyst', label: 'Business Analyst' },
    { value: 'marketing', label: 'Marketing Professional' },
    { value: 'executive', label: 'Executive/Leadership' }
  ];

  const levelOptions = [
    { value: 'beginner', label: 'Beginner - New to AI/Tech' },
    { value: 'intermediate', label: 'Intermediate - Some Experience' },
    { value: 'advanced', label: 'Advanced - Extensive Experience' },
    { value: 'expert', label: 'Expert - Industry Leader' }
  ];

  const handleAssessment = () => {
    if (selectedRole && selectedLevel) {
      setShowResults(true);
    }
  };

  const recommendedPaths = [
    {
      title: 'AI Fundamentals Track',
      duration: '8 weeks',
      courses: 5,
      level: 'Beginner',
      description: 'Start your AI journey with foundational concepts and practical applications',
      icon: 'Brain'
    },
    {
      title: 'Machine Learning Mastery',
      duration: '12 weeks',
      courses: 8,
      level: 'Intermediate',
      description: 'Deep dive into ML algorithms, model training, and deployment strategies',
      icon: 'Cpu'
    },
    {
      title: 'AI Strategy & Leadership',
      duration: '6 weeks',
      courses: 4,
      level: 'Advanced',
      description: 'Lead AI transformation initiatives and build data-driven organizations',
      icon: 'Target'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Sparkles" size={20} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">AI-Powered Assessment</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Discover Your Perfect Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take our intelligent skill assessment to receive personalized course recommendations tailored to your role and experience level
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card p-8">
            {!showResults ? (
              <div className="space-y-6">
                <div>
                  <Select
                    label="What's your current role?"
                    placeholder="Select your role"
                    options={roleOptions}
                    value={selectedRole}
                    onChange={setSelectedRole}
                    searchable
                  />
                </div>

                <div>
                  <Select
                    label="What's your experience level with AI/Technology?"
                    placeholder="Select your level"
                    options={levelOptions}
                    value={selectedLevel}
                    onChange={setSelectedLevel}
                  />
                </div>

                <Button 
                  variant="default" 
                  size="lg" 
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={handleAssessment}
                  disabled={!selectedRole || !selectedLevel}
                >
                  Get Personalized Recommendations
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} color="var(--color-success)" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Assessment Complete!</h3>
                    <p className="text-sm text-muted-foreground">Here are your recommended learning paths</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {recommendedPaths?.map((path, index) => (
                    <div key={index} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={path?.icon} size={24} color="var(--color-primary)" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-bold text-foreground">{path?.title}</h4>
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                              {path?.level}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{path?.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={16} />
                              <span>{path?.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="BookOpen" size={16} />
                              <span>{path?.courses} courses</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                          Explore
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  fullWidth
                  onClick={() => setShowResults(false)}
                >
                  Take Assessment Again
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessment;