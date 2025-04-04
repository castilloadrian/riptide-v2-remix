
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';
import RiskAssessment from '@/components/RiskAssessment';
import CapacitySection from '@/components/CapacitySection';
import HeadcountSection from '@/components/HeadcountSection';
import ConfigurationSection from '@/components/ConfigurationSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('planning');
  const [planName, setPlanName] = useState('Weekly Production Plan');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Container */}
      <div className="container mx-auto py-4 px-2 md:px-4 max-w-7xl">
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
    </div>
  );
};

export default Index;
