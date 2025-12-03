import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
  { id: 'all', label: 'All Courses', icon: 'Grid3x3' },
  { id: 'ai-ml', label: 'AI & Machine Learning', icon: 'Brain' },
  { id: 'automation', label: 'Automation', icon: 'Zap' },
  { id: 'data-science', label: 'Data Science', icon: 'BarChart3' },
  { id: 'digital-marketing', label: 'Digital Marketing', icon: 'Megaphone' },
  { id: 'leadership', label: 'Leadership', icon: 'Users' }];


  const levels = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }];


  const courses = [
  {
    id: 1,
    title: 'AI Fundamentals for Business Leaders',
    category: 'ai-ml',
    level: 'beginner',
    duration: '6 weeks',
    lessons: 24,
    students: 3420,
    rating: 4.9,
    reviews: 856,
    instructor: 'Dr. Sarah Chen',
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    instructorImageAlt: 'Professional headshot of Asian woman with long black hair wearing navy blazer and white blouse',
    price: 299,
    thumbnail: "https://images.unsplash.com/photo-1719343881239-1d6cf7a44558",
    thumbnailAlt: 'Modern office workspace with laptop displaying AI neural network visualization and colorful data charts on screen',
    description: 'Master the fundamentals of artificial intelligence and learn how to implement AI strategies in your organization',
    skills: ['AI Strategy', 'Machine Learning Basics', 'Business Applications'],
    certified: true
  },
  {
    id: 2,
    title: 'Advanced Machine Learning Engineering',
    category: 'ai-ml',
    level: 'advanced',
    duration: '12 weeks',
    lessons: 48,
    students: 1890,
    rating: 4.8,
    reviews: 432,
    instructor: 'Prof. Michael Rodriguez',
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_149e5a5ab-1763293802841.png",
    instructorImageAlt: 'Professional headshot of Hispanic man with short black hair in navy suit and glasses',
    price: 599,
    thumbnail: "https://images.unsplash.com/photo-1576272906753-3de49860ea43",
    thumbnailAlt: 'Close-up of computer screen showing complex machine learning code with Python syntax and neural network architecture',
    description: 'Deep dive into advanced ML algorithms, model optimization, and production deployment strategies',
    skills: ['Deep Learning', 'Model Optimization', 'MLOps'],
    certified: true
  },
  {
    id: 3,
    title: 'Marketing Automation Mastery',
    category: 'automation',
    level: 'intermediate',
    duration: '8 weeks',
    lessons: 32,
    students: 2650,
    rating: 4.9,
    reviews: 678,
    instructor: 'Emma Thompson',
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1cf02ab-1763294013918.png",
    instructorImageAlt: 'Professional headshot of Caucasian woman with blonde hair in gray business suit with warm smile',
    price: 399,
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_16713674e-1764336415489.png",
    thumbnailAlt: 'Marketing dashboard on laptop screen showing analytics graphs, campaign metrics, and automation workflow diagrams',
    description: 'Learn to build sophisticated marketing automation workflows that drive engagement and conversions',
    skills: ['Email Automation', 'Lead Nurturing', 'Campaign Analytics'],
    certified: true
  },
  {
    id: 4,
    title: 'Data Science with Python',
    category: 'data-science',
    level: 'beginner',
    duration: '10 weeks',
    lessons: 40,
    students: 4120,
    rating: 4.8,
    reviews: 1024,
    instructor: 'Dr. James Wilson',
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18d854688-1763295573707.png",
    instructorImageAlt: 'Professional headshot of African American man with short hair wearing dark suit and tie with confident expression',
    price: 349,
    thumbnail: "https://images.unsplash.com/photo-1630540926052-5c8a71baf0fb",
    thumbnailAlt: 'Data visualization on multiple monitors showing colorful pie charts, bar graphs, and statistical analysis dashboards',
    description: 'Comprehensive introduction to data science using Python, pandas, and machine learning libraries',
    skills: ['Python Programming', 'Data Analysis', 'Visualization'],
    certified: true
  },
  {
    id: 5,
    title: 'AI-Driven Digital Marketing Strategy',
    category: 'digital-marketing',
    level: 'intermediate',
    duration: '7 weeks',
    lessons: 28,
    students: 2340,
    rating: 4.9,
    reviews: 567,
    instructor: 'Lisa Anderson',
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1397d6030-1763299405824.png",
    instructorImageAlt: 'Professional headshot of Caucasian woman with brown hair in modern office attire with friendly demeanor',
    price: 429,
    thumbnail: "https://images.unsplash.com/photo-1676276376474-74ab06e89307",
    thumbnailAlt: 'Creative workspace with laptop showing social media marketing dashboard and digital strategy planning documents',
    description: 'Leverage AI tools to create data-driven marketing strategies that maximize ROI and customer engagement',
    skills: ['AI Marketing Tools', 'Content Strategy', 'Performance Analytics'],
    certified: true
  },
  {
    id: 6,
    title: 'Leadership in the AI Era',
    category: 'leadership',
    level: 'advanced',
    duration: '6 weeks',
    lessons: 24,
    students: 1560,
    rating: 4.9,
    reviews: 389,
    instructor: 'Robert Chang',
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1da674842-1763294526400.png",
    instructorImageAlt: 'Professional headshot of Asian man with glasses in executive business suit with authoritative presence',
    price: 549,
    thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    thumbnailAlt: 'Business meeting room with diverse team collaborating around conference table with presentation screens showing AI strategy',
    description: 'Develop the leadership skills needed to guide organizations through AI transformation and digital innovation',
    skills: ['Change Management', 'AI Strategy', 'Team Leadership'],
    certified: true
  }];


  const filteredCourses = courses?.filter((course) => {
    const categoryMatch = selectedCategory === 'all' || course?.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || course?.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore Our Course Catalog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 150+ expert-led courses across AI, automation, data science, and digital transformation
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories?.map((category) =>
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category?.id ?
              'bg-primary text-primary-foreground' :
              'bg-white text-foreground hover:bg-muted'}`
              }>

                <Icon name={category?.icon} size={18} />
                <span>{category?.label}</span>
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {levels?.map((level) =>
            <button
              key={level?.id}
              onClick={() => setSelectedLevel(level?.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedLevel === level?.id ?
              'bg-secondary text-secondary-foreground' :
              'bg-white text-foreground hover:bg-muted'}`
              }>

                {level?.label}
              </button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses?.map((course) =>
          <div key={course?.id} className="card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                src={course?.thumbnail}
                alt={course?.thumbnailAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-primary">${course?.price}</span>
                </div>
                {course?.certified &&
              <div className="absolute top-4 left-4 bg-success/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Award" size={14} color="white" />
                    <span className="text-xs font-medium text-white">Certified</span>
                  </div>
              }
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium capitalize">
                    {course?.level}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{course?.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {course?.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {course?.description}
                </p>

                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <Image
                  src={course?.instructorImage}
                  alt={course?.instructorImageAlt}
                  className="w-10 h-10 rounded-full object-cover" />

                  <div>
                    <div className="text-sm font-medium text-foreground">{course?.instructor}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={12} color="var(--color-warning)" />
                        <span>{course?.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{course?.reviews} reviews</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="BookOpen" size={16} />
                    <span>{course?.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    <span>{course?.students?.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course?.skills?.slice(0, 3)?.map((skill, index) =>
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {skill}
                    </span>
                )}
                </div>

                <Button variant="default" fullWidth iconName="ArrowRight" iconPosition="right">
                  View Course
                </Button>
              </div>
            </div>
          )}
        </div>

        {filteredCourses?.length === 0 &&
        <div className="text-center py-12">
            <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
          </div>
        }

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" iconName="Grid3x3" iconPosition="left">
            View All 150+ Courses
          </Button>
        </div>
      </div>
    </section>);

};

export default CourseCatalog;