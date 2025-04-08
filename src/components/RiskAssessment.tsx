
import { FC, useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const RiskAssessment: FC = () => {
  const [activeTab, setActiveTab] = useState('plan-visualization');

  // Define column definitions for Plan Visualization table (original risk assessment table)
  const planVisualizationColumns = [
    { headerName: 'Date', field: 'date', width: 120 },
    { headerName: 'Item', field: 'item', width: 120 },
    { headerName: 'Category', field: 'category', width: 120 },
    { headerName: 'Sub Cat', field: 'subCategory', width: 120 },
    { headerName: 'Volume', field: 'volume', width: 100 },
    { headerName: 'Status', field: 'status', width: 120 },
    { headerName: 'Action', field: 'action', width: 120 },
    { headerName: 'Percent', field: 'percent', width: 100 },
    { 
      headerName: 'Value', 
      field: 'value',
      width: 120,
      cellRenderer: (params: any) => {
        const risk = params.data.risk;
        return `<div class="risk-bar ${risk === 'high' ? 'risk-red' : risk === 'medium' ? 'risk-yellow' : 'risk-green'}" style="width: ${params.data.percent}%"></div>`;
      }
    },
  ];

  // Generate sample data for the risk assessment tables
  const planVisualizationData = Array.from({ length: 15 }, (_, i) => ({
    date: `2023-04-${i + 10}`,
    item: `Item ${i + 1}`,
    category: `Category ${i % 4 + 1}`,
    subCategory: `Sub ${i % 3 + 1}`,
    volume: Math.floor(Math.random() * 1000),
    status: i % 3 === 0 ? 'Open' : 'Closed',
    action: i % 2 === 0 ? 'Review' : 'Monitor',
    percent: Math.floor(Math.random() * 100),
    value: '',
    risk: i % 3 === 0 ? 'low' : i % 3 === 1 ? 'medium' : 'high'
  }));

  // Define column definitions for Total P2PDL table
  const p2pdlColumns = [
    { headerName: 'Plan Date', field: 'planDate', width: 120 },
    { headerName: 'Carrier', field: 'carrier', width: 120 },
    { headerName: 'Lane', field: 'lane', width: 120 },
    { headerName: 'Volume', field: 'volume', width: 100 },
    { headerName: 'P2PDL', field: 'p2pdl', width: 100 },
    { headerName: 'Risk Level', field: 'riskLevel', width: 120 },
  ];

  // Generate sample data for the P2PDL table
  const p2pdlData = Array.from({ length: 10 }, (_, i) => ({
    planDate: `2023-04-${i + 10}`,
    carrier: `Carrier ${i % 3 + 1}`,
    lane: `Lane ${i % 5 + 1}`,
    volume: Math.floor(Math.random() * 1000),
    p2pdl: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
    riskLevel: i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low'
  }));

  // Define column definitions for Row Volume table
  const rowVolumeColumns = [
    { headerName: 'Date', field: 'date', width: 120 },
    { headerName: 'Row Type', field: 'rowType', width: 140 },
    { headerName: 'Scheduled Volume', field: 'scheduledVolume', width: 160 },
    { headerName: 'Actual Volume', field: 'actualVolume', width: 140 },
    { headerName: 'Delta', field: 'delta', width: 100 },
    { headerName: 'Status', field: 'status', width: 120 },
  ];

  // Generate sample data for the Row Volume table
  const rowVolumeData = Array.from({ length: 12 }, (_, i) => ({
    date: `2023-04-${i + 10}`,
    rowType: `Type ${i % 4 + 1}`,
    scheduledVolume: Math.floor(Math.random() * 1000) + 200,
    actualVolume: Math.floor(Math.random() * 1000) + 100,
    delta: Math.floor(Math.random() * 200) - 100,
    status: i % 3 === 0 ? 'On Track' : i % 3 === 1 ? 'At Risk' : 'Delayed'
  }));

  // Updated column definitions for Grocery (Complexity) table
  const groceryColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: '% (Grocery / Total Volume)', field: 'groceryTotalPercent', width: 200 },
    { headerName: '% (Grocery / Auto Volume)', field: 'groceryAutoPercent', width: 200 },
  ];

  // Generate sample data for the Grocery table with updated fields
  const groceryData = Array.from({ length: 10 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    groceryTotalPercent: `${Math.floor(Math.random() * 40) + 10}%`,
    groceryAutoPercent: `${Math.floor(Math.random() * 60) + 20}%`,
  }));

  // Updated column definitions for Time to CPT Range table
  const cptRangeColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: '3-6', field: 'range3to6', width: 100 },
    { headerName: '6-12', field: 'range6to12', width: 100 },
    { headerName: '12-24', field: 'range12to24', width: 100 },
    { headerName: '24-30', field: 'range24to30', width: 100 },
    { headerName: '>30', field: 'rangeOver30', width: 100 },
  ];

  // Generate sample data for the Time to CPT Range table with updated fields
  const cptRangeData = Array.from({ length: 8 }, (_, i) => ({
    shift: i % 2 === 0 ? 'Morning' : 'Evening',
    range3to6: Math.floor(Math.random() * 20) + 5,
    range6to12: Math.floor(Math.random() * 30) + 10,
    range12to24: Math.floor(Math.random() * 40) + 15,
    range24to30: Math.floor(Math.random() * 15) + 5,
    rangeOver30: Math.floor(Math.random() * 10) + 2,
  }));

  // Updated column definitions for Same Day Ship table
  const sameDayShipColumns = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: 'Total', field: 'total', width: 100 },
    { headerName: 'First CPT', field: 'firstCPT', width: 120 },
    { headerName: 'Second CPT', field: 'secondCPT', width: 120 },
    { headerName: 'Third CPT', field: 'thirdCPT', width: 120 },
  ];

  // Generate sample data for the Same Day Ship table with updated fields
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
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="plan-visualization">Plan Visualization</TabsTrigger>
            <TabsTrigger value="p2pdl">Total P2PDL</TabsTrigger>
            <TabsTrigger value="row-volume">Row Volume</TabsTrigger>
            <TabsTrigger value="grocery">Grocery (Complexity)</TabsTrigger>
            <TabsTrigger value="cpt-range">Time to CPT Range</TabsTrigger>
            <TabsTrigger value="same-day-ship">Same Day Ship</TabsTrigger>
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
          
          <TabsContent value="p2pdl" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={p2pdlColumns}
                rowData={p2pdlData}
                height="400px"
              />
            </div>
          </TabsContent>

          <TabsContent value="row-volume" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={rowVolumeColumns}
                rowData={rowVolumeData}
                height="400px"
              />
            </div>
          </TabsContent>

          <TabsContent value="grocery" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={groceryColumns}
                rowData={groceryData}
                height="400px"
              />
            </div>
          </TabsContent>

          <TabsContent value="cpt-range" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={cptRangeColumns}
                rowData={cptRangeData}
                height="400px"
              />
            </div>
          </TabsContent>

          <TabsContent value="same-day-ship" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={sameDayShipColumns}
                rowData={sameDayShipData}
                height="400px"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CollapsibleSection>
  );
};

export default RiskAssessment;
