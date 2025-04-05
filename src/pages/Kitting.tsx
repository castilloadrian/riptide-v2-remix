
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

const Kitting = () => {
  const [activeTab, setActiveTab] = useState('kitting');
  const [planName, setPlanName] = useState('Weekly Production Plan');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Container */}
      <div className="container mx-auto py-4 px-2 md:px-4 max-w-7xl flex-grow">
        {/* Plan Header Section */}
        <PlanHeader planName={planName} setPlanName={setPlanName} />
        
        {/* Main Content */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-md shadow">
          <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">Kitting Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This page will contain kitting management functionality, including kit tracking, inventory management,
            and assembly instructions.
          </p>
          
          <div className="p-4 border rounded-md bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground">
            <p className="font-medium">Coming soon:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Kit inventory tracking</li>
              <li>Assembly instructions</li>
              <li>QA verification</li>
              <li>Performance analytics</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer toggleDarkMode={toggleTheme} isDarkMode={theme === 'dark'} />
    </div>
  );
};

export default Kitting;
