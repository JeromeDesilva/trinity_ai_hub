import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';


const FilterSection = ({ filters, onFilterChange, onClearFilters }) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'technology', label: 'Technology' },
    { value: 'education', label: 'Education' },
    { value: 'logistics', label: 'Logistics & Supply Chain' }
  ];

  const companySizeOptions = [
    { value: 'all', label: 'All Company Sizes' },
    { value: 'startup', label: 'Startup (1-50)' },
    { value: 'sme', label: 'SME (51-500)' },
    { value: 'enterprise', label: 'Enterprise (500+)' }
  ];

  const solutionTypeOptions = [
    { value: 'all', label: 'All Solutions' },
    { value: 'ai-automation', label: 'AI Automation' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'cloud-migration', label: 'Cloud Migration' },
    { value: 'custom-development', label: 'Custom Development' }
  ];

  const roiRangeOptions = [
    { value: 'all', label: 'All ROI Ranges' },
    { value: '100-200', label: '100-200% ROI' },
    { value: '200-300', label: '200-300% ROI' },
    { value: '300-500', label: '300-500% ROI' },
    { value: '500+', label: '500%+ ROI' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">Filter Success Stories</h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="X"
          iconPosition="left"
          onClick={onClearFilters}
        >
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Industry"
          options={industryOptions}
          value={filters?.industry}
          onChange={(value) => onFilterChange('industry', value)}
        />

        <Select
          label="Company Size"
          options={companySizeOptions}
          value={filters?.companySize}
          onChange={(value) => onFilterChange('companySize', value)}
        />

        <Select
          label="Solution Type"
          options={solutionTypeOptions}
          value={filters?.solutionType}
          onChange={(value) => onFilterChange('solutionType', value)}
        />

        <Select
          label="ROI Range"
          options={roiRangeOptions}
          value={filters?.roiRange}
          onChange={(value) => onFilterChange('roiRange', value)}
        />
      </div>
    </div>
  );
};

export default FilterSection;