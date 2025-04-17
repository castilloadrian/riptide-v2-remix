
import { FC, useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

const RiskAssessment: FC = () => {
  const [activeTab, setActiveTab] = useState('plan-visualization');
  const isMobile = useIsMobile();

  // Define column definitions for Plan Visualization table with new headers
  const planVisualizationColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: 'Kits', field: 'kits', width: 100 },
    { headerName: 'Core Boxes', field: 'coreBoxes', width: 120 },
    { headerName: 'GL Boxes', field: 'glBoxes', width: 120 },
    { headerName: 'Same Day', field: 'sameDay', width: 120 },
    { headerName: 'First CPT', field: 'firstCpt', width: 120 },
    { 
      headerName: 'Progress', 
      field: 'progress',
      width: 150,
      cellRenderer: (params: any) => {
        const risk = params.data.risk;
        return `<div class="flex items-center gap-2">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="risk-bar ${risk === 'high' ? 'risk-red' : risk === 'medium' ? 'risk-yellow' : 'risk-green'}" 
                         style="width: ${params.data.percent}%; height: 0.625rem; border-radius: 0.25rem;"></div>
                  </div>
                  <span>${params.data.percent}%</span>
                </div>`;
      }
    },
  ];

  // Generate sample data for the risk assessment table with new fields
  const planVisualizationData = Array.from({ length: 15 }, (_, i) => ({
    shift: i % 3 === 0 ? 'Morning' : i % 3 === 1 ? 'Evening' : 'Night',
    kits: Math.floor(Math.random() * 100) + 20,
    coreBoxes: Math.floor(Math.random() * 500) + 100,
    glBoxes: Math.floor(Math.random() * 300) + 50,
    sameDay: `${Math.floor(Math.random() * 40) + 60}%`,
    firstCpt: `${Math.floor(Math.random() * 20) + 80}%`,
    percent: Math.floor(Math.random() * 100),
    progress: '',
    risk: i % 3 === 0 ? 'low' : i % 3 === 1 ? 'medium' : 'high'
  }));

  // Updated column definitions for Total P2PDL table
  const p2pdlColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: 'Volume', field: 'volume', width: 120 },
  ];

  // Generate sample data for the P2PDL table
  const p2pdlData = Array.from({ length: 10 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    volume: Math.floor(Math.random() * 1000) + 100,
  }));

  // Updated column definitions for RoW Volume table
  const rowVolumeColumns = [
    { headerName: 'Shift', field: 'shift', width: 140 },
    { headerName: 'Volume', field: 'volume', width: 160 },
  ];

  // Generate sample data for the RoW Volume table
  const rowVolumeData = Array.from({ length: 12 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    volume: Math.floor(Math.random() * 1000) + 200,
  }));

  // Grocery (Complexity) table columns definition
  const groceryColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: '% (Grocery / Total Volume)', field: 'groceryTotalPercent', width: 200 },
    { headerName: '% (Grocery / Auto Volume)', field: 'groceryAutoPercent', width: 200 },
  ];

  // Generate sample data for the Grocery table
  const groceryData = Array.from({ length: 10 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    groceryTotalPercent: `${Math.floor(Math.random() * 40) + 10}%`,
    groceryAutoPercent: `${Math.floor(Math.random() * 60) + 20}%`,
  }));

  // Time to CPT Range table columns definition
  const cptRangeColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: '3-6', field: 'range3to6', width: 100 },
    { headerName: '6-12', field: 'range6to12', width: 100 },
    { headerName: '12-24', field: 'range12to24', width: 100 },
    { headerName: '24-30', field: 'range24to30', width: 100 },
    { headerName: '>30', field: 'rangeOver30', width: 100 },
  ];

  // Generate sample data for the Time to CPT Range table
  const cptRangeData = Array.from({ length: 8 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    range3to6: Math.floor(Math.random() * 20) + 5,
    range6to12: Math.floor(Math.random() * 30) + 10,
    range12to24: Math.floor(Math.random() * 40) + 15,
    range24to30: Math.floor(Math.random() * 15) + 5,
    rangeOver30: Math.floor(Math.random() * 10) + 2,
  }));

  // Same Day Ship table columns definition
  const sameDayShipColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: 'Total', field: 'total', width: 100 },
    { headerName: 'First CPT', field: 'firstCPT', width: 120 },
    { headerName: 'Second CPT', field: 'secondCPT', width: 120 },
    { headerName: 'Third CPT', field: 'thirdCPT', width: 120 },
  ];

  // Generate sample data for the Same Day Ship table
  const sameDayShipData = Array.from({ length: 10 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    total: Math.floor(Math.random() * 100) + 20,
    firstCPT: `${Math.floor(Math.random() * 30) + 70}%`,
    secondCPT: `${Math.floor(Math.random() * 30) + 60}%`,
    thirdCPT: `${Math.floor(Math.random() * 30) + 50}%`,
  }));

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
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={planVisualizationColumns}
                rowData={planVisualizationData}
                height="400px"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="plan-kpis" className="w-full">
            {/* Top row with 3 tables side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Total P2PDL Table */}
              <div>
                <h3 className="font-medium text-sm mb-2">Total P2PDL</h3>
                <div className="h-[250px]">
                  <DataTable
                    columnDefs={p2pdlColumns}
                    rowData={p2pdlData}
                    height="250px"
                  />
                </div>
              </div>
              
              {/* RoW Volume Table */}
              <div>
                <h3 className="font-medium text-sm mb-2">RoW Volume</h3>
                <div className="h-[250px]">
                  <DataTable
                    columnDefs={rowVolumeColumns}
                    rowData={rowVolumeData}
                    height="250px"
                  />
                </div>
              </div>
              
              {/* Grocery Table */}
              <div>
                <h3 className="font-medium text-sm mb-2">Grocery (Complexity)</h3>
                <div className="h-[250px]">
                  <DataTable
                    columnDefs={groceryColumns}
                    rowData={groceryData}
                    height="250px"
                  />
                </div>
              </div>
            </div>
            
            {/* Bottom row with 2 tables stacked */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Time to CPT Range Table */}
              <div>
                <h3 className="font-medium text-sm mb-2">Time to CPT Range</h3>
                <div className="h-[250px]">
                  <DataTable
                    columnDefs={cptRangeColumns}
                    rowData={cptRangeData}
                    height="250px"
                  />
                </div>
              </div>
              
              {/* Same Day Ship Table */}
              <div>
                <h3 className="font-medium text-sm mb-2">Same Day Ship</h3>
                <div className="h-[250px]">
                  <DataTable
                    columnDefs={sameDayShipColumns}
                    rowData={sameDayShipData}
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CollapsibleSection>
  );
};

export default RiskAssessment;
