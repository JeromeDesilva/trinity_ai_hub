import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const FilterBar = ({ filters, onFilterChange }) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' }
  ];

  const companySizeOptions = [
    { value: 'all', label: 'All Company Sizes' },
    { value: 'startup', label: 'Startup (1-50)' },
    { value: 'sme', label: 'SME (51-500)' },
    { value: 'enterprise', label: 'Enterprise (500+)' }
  ];

  const serviceTypeOptions = [
    { value: 'all', label: 'All Service Types' },
    { value: 'ai-automation', label: 'AI & Automation' },
    { value: 'creative', label: 'Creative Services' },
    { value: 'development', label: 'Development' },
    { value: 'consulting', label: 'Consulting' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="Filter" size={20} color="var(--color-primary)" />
        <h3 className="text-lg font-bold text-foreground">Filter Clusters</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Industry"
          options={industryOptions}
          value={filters?.industry}
          onChange={(value) => onFilterChange('industry', value)}
          placeholder="Select industry"
        />

        <Select
          label="Company Size"
          options={companySizeOptions}
          value={filters?.companySize}
          onChange={(value) => onFilterChange('companySize', value)}
          placeholder="Select company size"
        />

        <Select
          label="Service Type"
          options={serviceTypeOptions}
          value={filters?.serviceType}
          onChange={(value) => onFilterChange('serviceType', value)}
          placeholder="Select service type"
        />
      </div>
      {(filters?.industry !== 'all' || filters?.companySize !== 'all' || filters?.serviceType !== 'all') && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Active filters applied
          </p>
          <button
            onClick={() => onFilterChange('reset')}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-1"
          >
            <Icon name="X" size={16} />
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;