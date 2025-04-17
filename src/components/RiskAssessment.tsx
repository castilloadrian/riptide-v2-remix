
import { FC, useState, useMemo } from 'react';
import CollapsibleSection from './CollapsibleSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';
import PlanVisualizationTab from './risk-assessment/PlanVisualizationTab';
import PlanKPIsTab from './risk-assessment/PlanKPIsTab';
import {
  getPlanVisualizationColumns,
  getPlanVisualizationData,
  getP2PDLColumns,
  getP2PDLData,
  getRowVolumeColumns,
  getRowVolumeData,
  getGroceryColumns,
  getGroceryData,
  getCptRangeColumns,
  getCptRangeData,
  getSameDayShipColumns,
  getSameDayShipData
} from './risk-assessment/riskAssessmentData';

const RiskAssessment: FC = () => {
  const [activeTab, setActiveTab] = useState('plan-visualization');
  const isMobile = useIsMobile();

  // Generate all data and columns using our utility functions
  const planVisualizationColumns = useMemo(() => getPlanVisualizationColumns(), []);
  const planVisualizationData = useMemo(() => getPlanVisualizationData(), []);
  
  const p2pdlColumns = useMemo(() => getP2PDLColumns(), []);
  const p2pdlData = useMemo(() => getP2PDLData(), []);
  
  const rowVolumeColumns = useMemo(() => getRowVolumeColumns(), []);
  const rowVolumeData = useMemo(() => getRowVolumeData(), []);
  
  const groceryColumns = useMemo(() => getGroceryColumns(), []);
  const groceryData = useMemo(() => getGroceryData(), []);
  
  const cptRangeColumns = useMemo(() => getCptRangeColumns(), []);
  const cptRangeData = useMemo(() => getCptRangeData(), []);
  
  const sameDayShipColumns = useMemo(() => getSameDayShipColumns(), []);
  const sameDayShipData = useMemo(() => getSameDayShipData(), []);

  return (
    <CollapsibleSection title="Risk Assessment">
      <div className="p-2">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="plan-visualization">Plan Visualization</TabsTrigger>
            <TabsTrigger value="plan-kpis">Plan KPIs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="plan-visualization" className="w-full">
            <PlanVisualizationTab 
              columns={planVisualizationColumns} 
              data={planVisualizationData} 
            />
          </TabsContent>
          
          <TabsContent value="plan-kpis" className="w-full">
            <PlanKPIsTab 
              p2pdlTable={{
                title: "Total P2PDL",
                columns: p2pdlColumns,
                data: p2pdlData
              }}
              rowVolumeTable={{
                title: "RoW Volume",
                columns: rowVolumeColumns,
                data: rowVolumeData
              }}
              groceryTable={{
                title: "Grocery (Complexity)",
                columns: groceryColumns,
                data: groceryData
              }}
              cptRangeTable={{
                title: "Time to CPT Range",
                columns: cptRangeColumns,
                data: cptRangeData
              }}
              sameDayShipTable={{
                title: "Same Day Ship",
                columns: sameDayShipColumns,
                data: sameDayShipData
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </CollapsibleSection>
  );
};

export default RiskAssessment;
