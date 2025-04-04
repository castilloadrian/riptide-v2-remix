
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';

const Simulation = () => {
  const [activeTab, setActiveTab] = useState('simulation');
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
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Shift Simulation Tool</h2>
          <p className="text-gray-600 mb-4">
            The shift simulation tool allows planners to model different shift patterns and 
            staffing scenarios to optimize production capacity.
          </p>
          
          <div className="p-4 border rounded-md bg-primary/5 text-primary">
            <p className="font-medium">Coming soon:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Shift pattern modeling</li>
              <li>Staffing optimization</li>
              <li>Capacity prediction</li>
              <li>Cost analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
