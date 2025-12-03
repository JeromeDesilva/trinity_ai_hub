import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductCard = ({ product, onTryDemo, onLearnMore }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'AI Automation': 'bg-purple-100 text-purple-700 border-purple-200',
      'Marketing': 'bg-blue-100 text-blue-700 border-blue-200',
      'Analytics': 'bg-pink-100 text-pink-700 border-pink-200',
      'Customer Experience': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      'Content Creation': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'E-commerce': 'bg-emerald-100 text-emerald-700 border-emerald-200'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="card group p-0 overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
        <Image
          src={product?.image}
          alt={product?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(product?.category)}`}>
            <Icon name={product?.categoryIcon} size={14} />
            {product?.category}
          </span>
        </div>

        {product?.isNew && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-700 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Icon name="Sparkles" size={14} />
              New
            </span>
          </div>
        )}

        {product?.isFeatured && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              <Icon name="Star" size={14} />
              Featured
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
            {product?.name}
          </h3>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <Icon name="Star" size={16} color="#F59E0B" />
            <span>{product?.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
          {product?.description}
        </p>

        <div className="space-y-3 mb-4">
          {product?.keyFeatures?.slice(0, 3)?.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Icon name="Check" size={18} color="#10B981" className="flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} color="#6B7280" />
            <span className="text-sm text-gray-600">{product?.activeUsers}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" size={16} color="#6B7280" />
            <span className="text-sm text-gray-600">{product?.growthRate}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={() => onTryDemo(product)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="Play" size={18} />
            Try Demo
          </button>
          <button
            onClick={() => onLearnMore(product)}
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-500 transition-all duration-300"
          >
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;