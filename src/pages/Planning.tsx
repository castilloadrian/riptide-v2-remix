
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import RiskAssessment from '@/components/RiskAssessment';
import CapacitySection from '@/components/CapacitySection';
import HeadcountSection from '@/components/HeadcountSection';
import ConfigurationSection from '@/components/ConfigurationSection';
import PlanDeepDiveSection from '@/components/PlanDeepDiveSection';

const Planning = () => {
  const [planName, setPlanName] = useState('Weekly Production Plan');

  return (
    <PageLayout activeTab="planning" planName={planName} setPlanName={setPlanName}>
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

export default Planning;
