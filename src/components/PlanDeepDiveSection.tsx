
import React, { useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import DataTable from './DataTable';
import ShiftTimeSeriesChart from './plan-deep-dive/ShiftTimeSeriesChart';
import { ShiftData } from './plan-deep-dive/utils/chartDataTransformers';

// Mock data for the shift time series visualization
const shiftTimeSeriesData: ShiftData[] = [
  {
    type: 'EP-ALL',
    shifts: [
      { start: 7, end: 11, status: 'active' },
      { start: 11, end: 12, status: 'break' },
      { start: 12, end: 19, status: 'active' }
    ]
  },
  {
    type: 'HF-2P',
    shifts: [
      { start: 7, end: 11, status: 'active' },
      { start: 11, end: 12, status: 'break' },
      { start: 12, end: 19, status: 'active' }
    ]
  },
  {
    type: 'HF-4P',
    shifts: [
      { start: 7, end: 11, status: 'active' },
      { start: 11, end: 12, status: 'break' },
      { start: 12, end: 15, status: 'active' }
    ]
  },
  {
    type: 'GL-ALL',
    shifts: [
      { start: 15, end: 16, status: 'break' },
      { start: 16, end: 19, status: 'active' }
    ]
  },
  {
    type: 'AUTO-1',
    shifts: [
      { start: 7, end: 11, status: 'active' },
      { start: 11, end: 12, status: 'break' },
      { start: 12, end: 19, status: 'active' }
    ]
  },
  {
    type: 'AUTO-2',
    shifts: [
      { start: 8, end: 12, status: 'active' },
      { start: 12, end: 13, status: 'break' },
      { start: 13, end: 16, status: 'active' }
    ]
  }
];

// Mock data for CPT risk table
const cptRiskData = Array.from({ length: 10 }, (_, i) => ({
  productionType: `Type ${i % 3 + 1}`,
  lane: `Lane ${i % 5 + 1}`,
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  shipDate: `2025-04-${10 + i}`,
  cptDelta: Math.floor(Math.random() * 120) - 30,
  shipDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][i % 5],
  flag: i % 3 === 0 ? 'Urgent' : i % 3 === 1 ? 'Warning' : 'Normal',
  totalBoxes: Math.floor(Math.random() * 1000) + 100,
  tnt: Math.floor(Math.random() * 50) + 10,
  effectiveTnt: Math.floor(Math.random() * 40) + 10,
}));

// Column definitions for CPT Risk table
const cptRiskColumns = [
  { headerName: 'Production Type', field: 'productionType', flex: 1 },
  { headerName: 'Lane', field: 'lane', flex: 1 },
  { headerName: 'Shift', field: 'shift', flex: 1 },
  { headerName: 'Ship Date', field: 'shipDate', flex: 1 },
  { headerName: 'CPT Delta', field: 'cptDelta', flex: 1 },
  { headerName: 'Ship Day', field: 'shipDay', flex: 1 },
  { headerName: 'Flag', field: 'flag', flex: 1 },
  { headerName: 'Total Boxes', field: 'totalBoxes', flex: 1 },
  { headerName: 'TNT', field: 'tnt', flex: 1 },
  { headerName: 'Effective TNT', field: 'effectiveTnt', flex: 1 },
];

// Mock data for plan details table
const planDetailsData = Array.from({ length: 12 }, (_, i) => ({
  shift: i % 3 === 0 ? 'Morning' : i % 3 === 1 ? 'Evening' : 'Night',
  boxAggregation: `Box-${i + 1}`,
  lane: `Lane ${i % 5 + 1}`,
  allocatedLine: `Line ${i % 4 + 1}`,
  scheduledVolume: Math.floor(Math.random() * 500) + 100,
  status: i % 4 === 0 ? 'Completed' : i % 4 === 1 ? 'In Progress' : i % 4 === 2 ? 'Scheduled' : 'Delayed',
  cpt: `${(Math.floor(Math.random() * 12) + 8)}:00 ${Math.floor(Math.random() * 12) + 8 > 12 ? 'PM' : 'AM'}`,
  cptDelta: Math.floor(Math.random() * 180) - 60,
  cptDeltaGroup: i % 3 === 0 ? 'On Time' : i % 3 === 1 ? 'At Risk' : 'Late',
  volumeLabelFlag: i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low',
  effectiveTnt: Math.floor(Math.random() * 40) + 10,
  scanCount: Math.floor(Math.random() * 200) + 50,
}));

// Column definitions for Plan Details table
const planDetailsColumns = [
  { headerName: 'Shift', field: 'shift', flex: 1 },
  { headerName: 'Box Aggregation', field: 'boxAggregation', flex: 1 },
  { headerName: 'Lane', field: 'lane', flex: 1 },
  { headerName: 'Allocated Line', field: 'allocatedLine', flex: 1 },
  { headerName: 'Scheduled Volume', field: 'scheduledVolume', flex: 1 },
  { headerName: 'Status', field: 'status', flex: 1 },
  { headerName: 'CPT', field: 'cpt', flex: 1 },
  { headerName: 'CPT Delta', field: 'cptDelta', flex: 1 },
  { headerName: 'CPT Delta Group', field: 'cptDeltaGroup', flex: 1 },
  { headerName: 'Volume Label Flag', field: 'volumeLabelFlag', flex: 1 },
  { headerName: 'Effective TNT', field: 'effectiveTnt', flex: 1 },
  { headerName: 'Scan Count', field: 'scanCount', flex: 1 },
];

const PlanDeepDiveSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('shift');
  
  return (
    <CollapsibleSection title="Plan Deep Dive">
      <div className="p-2">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="shift">Shift Visualization</TabsTrigger>
            <TabsTrigger value="risk">CPT Risk Profile</TabsTrigger>
            <TabsTrigger value="details">Plan Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="shift" className="w-full">
            <ShiftTimeSeriesChart data={shiftTimeSeriesData} />
          </TabsContent>
          
          <TabsContent value="risk" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={cptRiskColumns}
                rowData={cptRiskData}
                height="400px"
                className="w-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="w-full">
            <div className="h-[400px] w-full">
              <DataTable
                columnDefs={planDetailsColumns}
                rowData={planDetailsData}
                height="400px"
                className="w-full"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CollapsibleSection>
  );
};

export default PlanDeepDiveSection;
