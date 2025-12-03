import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = () => {
  const stories = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    role: 'Data Scientist at Google',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_107555573-1763296653935.png",
    imageAlt: 'Professional headshot of Hispanic woman with long dark hair in modern tech office wearing casual business attire with confident smile',
    previousRole: 'Marketing Analyst',
    course: 'Data Science Mastery Path',
    outcome: 'Career transition to FAANG company',
    salary: '+150% salary increase',
    testimonial: `Trinity Academy transformed my career completely. The hands-on projects and expert mentorship gave me the confidence to transition from marketing to data science. Within 6 months of completing the program, I landed my dream job at Google.`,
    achievements: ['Completed 10 courses', 'Built 6 portfolio projects', 'Earned 2 certifications']
  },
  {
    id: 2,
    name: 'David Thompson',
    role: 'AI Engineering Lead at Microsoft',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aef10a9f-1763294632369.png",
    imageAlt: 'Professional headshot of Caucasian man with short brown hair in navy suit with glasses and professional demeanor',
    previousRole: 'Software Developer',
    course: 'AI Engineer Career Path',
    outcome: 'Promoted to leadership role',
    salary: '+80% salary increase',
    testimonial: `The AI Engineering path at Trinity Academy provided exactly what I needed to level up my career. The curriculum is cutting-edge, and the instructors are world-class. I'm now leading a team of 15 engineers building production AI systems.`,
    achievements: ['Mastered MLOps', 'Led 3 major projects', 'Mentored 20+ students']
  },
  {
    id: 3,
    name: 'Priya Sharma', role: 'Marketing Director at Salesforce', image: "https://img.rocket.new/generatedImages/rocket_gen_img_129e71e71-1763293897486.png", imageAlt: 'Professional headshot of Indian woman with long black hair in elegant business attire with warm professional smile', previousRole: 'Marketing Manager', course: 'Marketing Automation Mastery', outcome: 'Scaled marketing operations 10x', salary: '+120% team budget increase', testimonial: `Trinity Academy's marketing automation courses gave me the skills to transform our entire marketing operation. We've automated 80% of our workflows and increased lead generation by 300%. The ROI has been incredible.`,
    achievements: ['300% lead increase', 'Automated 80% workflows', 'Trained 50+ team members']
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Results from Real People
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Trinity Academy graduates have transformed their careers and achieved remarkable success
          </p>
        </div>

        <div className="space-y-8">
          {stories?.map((story, index) =>
          <div key={story?.id} className={`card p-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8`}>
              <div className="lg:w-1/3">
                <div className="relative">
                  <Image
                  src={story?.image}
                  alt={story?.imageAlt}
                  className="w-full aspect-square object-cover rounded-xl" />

                  <div className="absolute -bottom-4 -right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-xs font-medium">Career Growth</div>
                    <div className="text-lg font-bold">{story?.salary}</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{story?.name}</h3>
                    <p className="text-primary font-medium mb-2">{story?.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-1 rounded-full bg-muted">
                        Previously: {story?.previousRole}
                      </span>
                      <Icon name="ArrowRight" size={14} />
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {story?.outcome}
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={32} color="var(--color-warning)" />
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Icon name="BookOpen" size={16} />
                    <span>Completed: {story?.course}</span>
                  </div>
                </div>

                <blockquote className="relative mb-6">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="absolute -top-2 -left-2 opacity-20" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    {story?.testimonial}
                  </p>
                </blockquote>

                <div className="grid grid-cols-3 gap-4">
                  {story?.achievements?.map((achievement, idx) =>
                <div key={idx} className="text-center p-3 rounded-lg bg-muted/50">
                      <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">{achievement}</div>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Career Advancement</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">$45K</div>
              <div className="text-sm text-muted-foreground">Avg. Salary Increase</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStories;