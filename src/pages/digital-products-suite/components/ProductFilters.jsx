import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductFilters = ({ selectedCategory, onCategoryChange, selectedPricing, onPricingChange, searchQuery, onSearchChange }) => {
  const categories = [
    { id: 'all', name: 'All Products', icon: 'Grid3x3', count: 12 },
    { id: 'ai-automation', name: 'AI Automation', icon: 'Bot', count: 4 },
    { id: 'marketing', name: 'Marketing', icon: 'Megaphone', count: 3 },
    { id: 'analytics', name: 'Analytics', icon: 'BarChart3', count: 2 },
    { id: 'customer-experience', name: 'Customer Experience', icon: 'Users', count: 2 },
    { id: 'content-creation', name: 'Content Creation', icon: 'FileText', count: 1 }
  ];

  const pricingOptions = [
    { id: 'all', name: 'All Pricing', icon: 'DollarSign' },
    { id: 'free', name: 'Free Trial', icon: 'Gift' },
    { id: 'starter', name: 'Starter', icon: 'Zap' },
    { id: 'professional', name: 'Professional', icon: 'Briefcase' },
    { id: 'enterprise', name: 'Enterprise', icon: 'Building2' }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Search Products
          </label>
          <div className="relative">
            <Icon name="Search" size={20} color="#6B7280" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e?.target?.value)}
              placeholder="Search by product name, feature, or category..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Pricing Model
          </label>
          <div className="relative">
            <Icon name="Filter" size={20} color="#6B7280" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <select
              value={selectedPricing}
              onChange={(e) => onPricingChange(e?.target?.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
            >
              {pricingOptions?.map((option) => (
                <option key={option?.id} value={option?.id}>
                  {option?.name}
                </option>
              ))}
            </select>
            <Icon name="ChevronDown" size={20} color="#6B7280" className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Categories
        </label>
        <div className="flex flex-wrap gap-3">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category?.id
                  ? 'bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                selectedCategory === category?.id
                  ? 'bg-white/20 text-white' :'bg-gray-200 text-gray-600'
              }`}>
                {category?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;