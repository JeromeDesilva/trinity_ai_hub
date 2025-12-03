import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [employees, setEmployees] = useState('');
  const [avgSalary, setAvgSalary] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    if (employees && avgSalary && hoursPerWeek) {
      setShowResults(true);
    }
  };

  const annualCost = employees && avgSalary ? (parseInt(employees) * parseInt(avgSalary)) : 0;
  const hoursSaved = hoursPerWeek ? parseInt(hoursPerWeek) * 52 : 0;
  const costSavings = annualCost && hoursPerWeek ? (annualCost * (parseInt(hoursPerWeek) / 40) * 0.4) : 0;
  const implementationCost = 50000;
  const netROI = costSavings - implementationCost;
  const roiPercentage = implementationCost > 0 ? ((netROI / implementationCost) * 100) : 0;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-4">
            <Icon name="Calculator" size={20} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">ROI Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much your business could save with AI automation in just 12 months
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Input
              label="Number of Employees"
              type="number"
              placeholder="e.g., 50"
              value={employees}
              onChange={(e) => setEmployees(e?.target?.value)}
              description="Total employees affected by automation"
            />
            
            <Input
              label="Average Annual Salary ($)"
              type="number"
              placeholder="e.g., 60000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(e?.target?.value)}
              description="Average salary per employee"
            />
            
            <Input
              label="Hours Saved Per Week"
              type="number"
              placeholder="e.g., 10"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e?.target?.value)}
              description="Time saved through automation"
            />
          </div>

          <div className="text-center mb-8">
            <Button
              variant="default"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              onClick={calculateROI}
              disabled={!employees || !avgSalary || !hoursPerWeek}
            >
              Calculate ROI
            </Button>
          </div>

          {showResults && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Your Projected Results</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Icon name="Clock" size={24} color="#6B46C1" className="mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-700">{hoursSaved?.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Hours Saved Annually</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Icon name="DollarSign" size={24} color="#3B82F6" className="mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700">${costSavings?.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Icon name="TrendingUp" size={24} color="#10B981" className="mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700">{roiPercentage?.toFixed(0)}%</div>
                    <div className="text-sm text-gray-600">ROI Percentage</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Icon name="Target" size={24} color="#EC4899" className="mx-auto mb-2" />
                    <div className="text-2xl font-bold text-pink-700">${netROI?.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Net Profit (Year 1)</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} color="#10B981" className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-green-900 mb-2">Impressive Results!</h4>
                    <p className="text-green-800 mb-3">
                      Based on your inputs, implementing our AI automation solutions could save your business approximately <span className="font-bold">${costSavings?.toLocaleString()}</span> annually while freeing up <span className="font-bold">{hoursSaved?.toLocaleString()}</span> hours for strategic initiatives.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="success" size="sm" iconName="Calendar">
                        Schedule Consultation
                      </Button>
                      <Button variant="outline" size="sm" iconName="Download">
                        Download Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;