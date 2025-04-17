
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

const Simulation = () => {
  const [planName, setPlanName] = useState('Shift Simulation');
  
  return (
    <PageLayout activeTab="simulation" title="Shift Simulation" planName={planName} setPlanName={setPlanName}>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        The Shift Simulation page provides tools to simulate shift patterns and production capacity.
      </p>
      
      <div className="p-4 border rounded-md bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground">
        <p className="font-medium">Simulation features:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Resource allocation</li>
          <li>Capacity modeling</li>
          <li>Bottleneck identification</li>
          <li>Optimization recommendations</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Simulation;
