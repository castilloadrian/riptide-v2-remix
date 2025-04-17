
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import RiskAssessment from '@/components/RiskAssessment';
import CapacitySection from '@/components/CapacitySection';
import HeadcountSection from '@/components/HeadcountSection';
import ConfigurationSection from '@/components/ConfigurationSection';
import PlanDeepDiveSection from '@/components/PlanDeepDiveSection';

const LivePlan = () => {
  const [planName, setPlanName] = useState('Live Production Plan');

  return (
    <PageLayout activeTab="live-plan" planName={planName} setPlanName={setPlanName}>
      <div className="space-y-4">
        <RiskAssessment />
        <CapacitySection />
        <HeadcountSection />
        <ConfigurationSection />
        <PlanDeepDiveSection />
      </div>
    </PageLayout>
  );
};

export default LivePlan;
