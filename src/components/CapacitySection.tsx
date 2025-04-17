import { FC, useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CapacitySection: FC = () => {
  // Define column definitions for Box Capacity
  const boxColumnDefs = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: 'Available', field: 'available', width: 120 },
    { headerName: 'Planned', field: 'planned', width: 120 },
    { headerName: 'Excess', field: 'excess', width: 120 },
  ];

  // Define column definitions for Kit Overview
  const kitColumnDefs = [
    { headerName: 'Shift', field: 'shift', width: 120 },
    { headerName: 'Need', field: 'need', width: 100 },
    { headerName: 'SoS On-Hand', field: 'sosOnHand', width: 140 },
    { headerName: 'Live Needs', field: 'liveNeeds', width: 120 },
    { headerName: 'Buffer', field: 'buffer', width: 100 },
    { headerName: 'Plan Create', field: 'planCreate', width: 120 },
  ];

  // Function to generate data based on the selected tab
  const generateBoxRowData = (tabValue: string) => {
    const numberOfRows = 10;
    const multiplier = tabValue === 'auto' ? 1 :
                       tabValue === 'core' ? 0.8 :
                       tabValue === 'grocery' ? 1.2 :
                       tabValue === 'bagger' ? 0.9 :
                       0.75; // every plate
    
    return Array.from({ length: numberOfRows }, (_, i) => ({
      shift: `Shift ${i % 3 + 1}`,
      available: Math.floor(Math.random() * 1000 * multiplier),
      planned: Math.floor(Math.random() * 800 * multiplier),
      excess: Math.floor(Math.random() * 200 * multiplier),
    }));
  };

  // Generate kit overview data with the same number of rows
  const kitRowData = Array.from({ length: 10 }, (_, i) => ({
    shift: `Shift ${i % 3 + 1}`,
    need: Math.floor(Math.random() * 500),
    sosOnHand: Math.floor(Math.random() * 400),
    liveNeeds: Math.floor(Math.random() * 300),
    buffer: Math.floor(Math.random() * 100),
    planCreate: Math.floor(Math.random() * 200),
  }));

  // Define the tabs for the box capacity
  const boxTabs = [
    { value: 'auto', label: 'Auto' },
    { value: 'core', label: 'Core' },
    { value: 'grocery', label: 'Grocery Line' },
    { value: 'bagger', label: 'Auto Bagger' },
    { value: 'everyplate', label: 'Every Plate' },
  ];

  return (
    <CollapsibleSection title="Capacity">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Box Capacity</h3>
          <Tabs defaultValue="auto" className="w-full">
            <TabsList className="w-full mb-2">
              {boxTabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value}
                  className="text-xs flex-1"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {boxTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 p-0">
                <div className="overflow-x-auto">
                  <DataTable
                    columnDefs={boxColumnDefs}
                    rowData={generateBoxRowData(tab.value)}
                    height="400px"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Kit Overview</h3>
          <div className="w-full h-10 mb-2 invisible">Spacer</div>
          <div className="overflow-x-auto">
            <DataTable
              columnDefs={kitColumnDefs}
              rowData={kitRowData}
              height="400px"
            />
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default CapacitySection;
