
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';
import RiskAssessment from '@/components/RiskAssessment';
import CapacitySection from '@/components/CapacitySection';
import HeadcountSection from '@/components/HeadcountSection';
import ConfigurationSection from '@/components/ConfigurationSection';
import PlanDeepDiveSection from '@/components/PlanDeepDiveSection';
import Footer from '@/components/Footer';

const LivePlan = () => {
  const [activeTab, setActiveTab] = useState('live-plan');
  const [planName, setPlanName] = useState('Live Production Plan');

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
          <PlanDeepDiveSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LivePlan;
