import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials?.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials?.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground">
          Real feedback from business leaders who transformed with Trinity
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Quote" size={48} className="text-primary/20" />
          </div>

          <p className="text-xl text-foreground text-center mb-8 leading-relaxed">
            "{currentTestimonial?.quote}"
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src={currentTestimonial?.avatar}
              alt={currentTestimonial?.avatarAlt}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-foreground">{currentTestimonial?.name}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial?.position}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial?.company}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              iconName="ChevronLeft"
            />
            <div className="flex gap-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8' :'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              iconName="ChevronRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;