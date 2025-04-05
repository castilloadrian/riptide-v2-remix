
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';

const LearnMore = () => {
  const [activeTab, setActiveTab] = useState('');
  const [planName, setPlanName] = useState('Weekly Production Plan');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Container */}
      <div className="container mx-auto py-4 px-2 md:px-4 max-w-7xl">
        {/* Plan Header Section */}
        <PlanHeader planName={planName} setPlanName={setPlanName} />
        
        {/* Main Content */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-md shadow">
          <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">Learn More</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This page contains additional information about the application and its features.
          </p>
          
          <div className="p-4 border rounded-md bg-primary/5 text-primary dark:bg-primary/10">
            <p className="font-medium">Documentation coming soon</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>User guides</li>
              <li>API documentation</li>
              <li>Sample workflows</li>
              <li>Video tutorials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
