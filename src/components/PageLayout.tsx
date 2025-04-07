
import { FC, ReactNode, useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  activeTab: string;
  showPlanHeader?: boolean;
  title?: string;
}

const PageLayout: FC<PageLayoutProps> = ({ 
  children, 
  activeTab,
  showPlanHeader = true,
  title
}) => {
  const [planName, setPlanName] = useState('Weekly Production Plan');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={() => {}} />
      
      {/* Content Container */}
      <div className="container mx-auto py-4 px-2 md:px-4 max-w-7xl flex-grow">
        {/* Plan Header Section - Optional */}
        {showPlanHeader && <PlanHeader planName={planName} setPlanName={setPlanName} />}
        
        {/* Main Content */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-md shadow">
          {title && <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">{title}</h2>}
          {children}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;
