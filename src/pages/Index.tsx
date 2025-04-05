
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';
import RiskAssessment from '@/components/RiskAssessment';
import CapacitySection from '@/components/CapacitySection';
import HeadcountSection from '@/components/HeadcountSection';
import ConfigurationSection from '@/components/ConfigurationSection';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const [activeTab, setActiveTab] = useState('planning');
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
        
        {/* Main Content Sections */}
        <div className="space-y-4 mt-6">
          <RiskAssessment />
          <CapacitySection />
          <HeadcountSection />
          <ConfigurationSection />
        </div>
      </div>

      {/* Footer */}
      <Footer toggleDarkMode={toggleTheme} isDarkMode={theme === 'dark'} />
    </div>
  );
};

export default Index;
