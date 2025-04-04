
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';

const Kitting = () => {
  const [activeTab, setActiveTab] = useState('kitting');
  const [planName, setPlanName] = useState('Weekly Production Plan');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Container */}
      <div className="container mx-auto py-4 px-2 md:px-4 max-w-7xl">
        {/* Plan Header Section */}
        <PlanHeader planName={planName} setPlanName={setPlanName} />
        
        {/* Main Content */}
        <div className="mt-8 bg-white p-6 rounded-md shadow">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Kitting Dashboard</h2>
          <p className="text-gray-600 mb-4">
            This page will contain kitting management functionality, including kit tracking, inventory management,
            and assembly instructions.
          </p>
          
          <div className="p-4 border rounded-md bg-primary/5 text-primary">
            <p className="font-medium">Coming soon:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Kit inventory tracking</li>
              <li>Assembly instructions</li>
              <li>QA verification</li>
              <li>Performance analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitting;
