import React from 'react';
import Icon from '../../../components/AppIcon';

const SolutionCategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${category?.bgColor}`}>
        <Icon name={category?.icon} size={28} color={category?.iconColor} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
        {category?.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {category?.description}
      </p>
      <div className="space-y-2 mb-4">
        {category?.features?.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Icon name="Check" size={16} color="#10B981" className="mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:gap-3 transition-all duration-300">
        Learn More
        <Icon name="ArrowRight" size={18} />
      </button>
    </div>
  );
};

export default SolutionCategoryCard;