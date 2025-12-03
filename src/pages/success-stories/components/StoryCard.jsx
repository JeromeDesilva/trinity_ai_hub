import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StoryCard = ({ story }) => {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={story?.image}
          alt={story?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
            {story?.industry}
          </span>
          <h3 className="text-white text-xl font-bold line-clamp-2">{story?.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src={story?.companyLogo}
            alt={story?.companyLogoAlt}
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="font-semibold text-foreground">{story?.companyName}</p>
            <p className="text-sm text-muted-foreground">{story?.companySize}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{story?.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
          {story?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold gradient-text">{metric?.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{metric?.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{story?.readTime}</span>
          </div>
          <Link
            to={`/success-stories/${story?.id}`}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 no-underline"
          >
            Read Story
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;