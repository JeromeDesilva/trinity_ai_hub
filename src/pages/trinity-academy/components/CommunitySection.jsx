import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunitySection = () => {
  const communityStats = [
  { icon: 'Users', value: '25,000+', label: 'Active Members' },
  { icon: 'MessageSquare', value: '50K+', label: 'Forum Discussions' },
  { icon: 'Calendar', value: '200+', label: 'Monthly Events' },
  { icon: 'Globe', value: '120+', label: 'Countries' }];


  const forumTopics = [
  {
    id: 1,
    title: 'Best practices for deploying ML models in production',
    author: 'Sarah Johnson',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1949c68ff-1763296821644.png",
    authorImageAlt: 'Professional headshot of Caucasian woman with brown hair in business casual attire with friendly smile',
    category: 'Machine Learning',
    replies: 45,
    views: 1230,
    lastActive: '2 hours ago',
    isHot: true
  },
  {
    id: 2,
    title: 'How to optimize marketing automation workflows for B2B',
    author: 'Michael Chen',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_15db12dbc-1763293506512.png",
    authorImageAlt: 'Professional headshot of Asian man with glasses in navy suit with confident professional demeanor',
    category: 'Marketing',
    replies: 32,
    views: 890,
    lastActive: '5 hours ago',
    isHot: false
  },
  {
    id: 3,
    title: 'Data visualization techniques for executive dashboards',
    author: 'Emily Rodriguez',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_176735b2f-1763294041335.png",
    authorImageAlt: 'Professional headshot of Hispanic woman with long dark hair in modern office setting with warm expression',
    category: 'Data Science',
    replies: 28,
    views: 756,
    lastActive: '1 day ago',
    isHot: false
  }];


  const upcomingEvents = [
  {
    id: 1,
    title: 'AI in Healthcare: Real-world Applications',
    type: 'Webinar',
    date: 'Dec 5, 2025',
    time: '2:00 PM EST',
    speaker: 'Dr. Sarah Chen',
    attendees: 450,
    icon: 'Video'
  },
  {
    id: 2,
    title: 'Marketing Automation Workshop',
    type: 'Workshop',
    date: 'Dec 8, 2025',
    time: '10:00 AM EST',
    speaker: 'Emma Thompson',
    attendees: 120,
    icon: 'Users'
  },
  {
    id: 3,
    title: 'Data Science Career Panel',
    type: 'Panel Discussion',
    date: 'Dec 12, 2025',
    time: '4:00 PM EST',
    speaker: 'Multiple Experts',
    attendees: 680,
    icon: 'MessageCircle'
  }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Users" size={20} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Vibrant Community</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join Our Global Learning Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow learners, share knowledge, and grow together in our supportive community
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {communityStats?.map((stat, index) =>
          <div key={index} className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Active Discussions</h3>
              <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
                New Topic
              </Button>
            </div>

            <div className="space-y-4">
              {forumTopics?.map((topic) =>
              <div key={topic?.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <Image
                    src={topic?.authorImage}
                    alt={topic?.authorImageAlt}
                    className="w-10 h-10 rounded-full object-cover" />

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-foreground hover:text-primary cursor-pointer">
                          {topic?.title}
                        </h4>
                        {topic?.isHot &&
                      <span className="text-xs px-2 py-0.5 rounded-full bg-error/10 text-error font-medium flex items-center gap-1">
                            <Icon name="Flame" size={12} />
                            Hot
                          </span>
                      }
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{topic?.author}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {topic?.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="MessageSquare" size={14} />
                      <span>{topic?.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      <span>{topic?.views} views</span>
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                      <Icon name="Clock" size={14} />
                      <span>{topic?.lastActive}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button variant="ghost" fullWidth className="mt-4">
              View All Discussions
            </Button>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Upcoming Events</h3>
              <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
                View Calendar
              </Button>
            </div>

            <div className="space-y-4">
              {upcomingEvents?.map((event) =>
              <div key={event?.id} className="border border-border rounded-lg p-4 hover:border-secondary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={event?.icon} size={24} color="var(--color-secondary)" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                          {event?.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{event?.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          <span>{event?.date} at {event?.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={14} />
                          <span>Speaker: {event?.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Users" size={14} />
                          <span>{event?.attendees} registered</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" fullWidth iconName="Plus" iconPosition="left">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button variant="ghost" fullWidth className="mt-4">
              View All Events
            </Button>
          </div>
        </div>

        <div className="card p-8 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <Icon name="Users" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Ready to Join the Community?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get instant access to forums, events, study groups, and exclusive resources when you enroll in any course
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="default" size="lg" iconName="UserPlus" iconPosition="left">
              Join Community
            </Button>
            <Button variant="outline" size="lg" iconName="MessageCircle" iconPosition="left">
              Browse Forums
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default CommunitySection;