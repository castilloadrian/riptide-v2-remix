
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConfigurationSection: FC = () => {
  // Define column definitions for Box Configuration
  const boxColumnDefs = [
    { headerName: 'Shift', field: 'shift', width: 100 },
    { headerName: 'Start Time', field: 'startTime', width: 110 },
    { headerName: 'End Time', field: 'endTime', width: 110 },
    { headerName: 'Down Time', field: 'downTime', width: 110 },
    { headerName: 'Hours', field: 'hours', width: 100 },
    { headerName: 'Lines', field: 'lines', width: 100 },
    { headerName: 'BPH', field: 'bph', width: 100 },
    { headerName: 'Grocery %', field: 'groceryPercent', width: 110 },
    { headerName: 'Core %', field: 'corePercent', width: 100 },
    { headerName: '2P %', field: 'twoPPercent', width: 100 },
    { headerName: '4P %', field: 'fourPPercent', width: 100 },
  ];

  // Define column definitions for Kit Configuration
  const kitColumnDefs = [
    { headerName: 'Shift', field: 'shift', width: 100 },
    { headerName: 'Start Time', field: 'startTime', width: 110 },
    { headerName: 'End Time', field: 'endTime', width: 110 },
    { headerName: 'Down Time', field: 'downTime', width: 110 },
    { headerName: 'Hours', field: 'hours', width: 100 },
    { headerName: 'Lines', field: 'lines', width: 100 },
    { headerName: 'KPH', field: 'kph', width: 100 },
  ];

  // Define the tabs for the configuration tables
  const configTabs = [
    { value: 'auto', label: 'Auto' },
    { value: 'core', label: 'Core' },
    { value: 'grocery', label: 'Grocery Line' },
    { value: 'bagger', label: 'Auto Bagger' },
    { value: 'everyplate', label: 'Every Plate' },
  ];

  // Function to generate box configuration data based on tab
  const generateBoxConfigData = (tabValue: string) => {
    const rowCount = 12;
    
    const modifiers = {
      auto: { bph: 150, lines: 3 },
      core: { bph: 180, lines: 4 },
      grocery: { bph: 130, lines: 5 },
      bagger: { bph: 200, lines: 2 },
      everyplate: { bph: 120, lines: 3 }
    };
    
    const modifier = modifiers[tabValue as keyof typeof modifiers] || modifiers.auto;
    
    return Array.from({ length: rowCount }, (_, i) => {
      const shift = i % 3 === 0 ? 'Morning' : i % 3 === 1 ? 'Afternoon' : 'Night';
      const startTime = i % 3 === 0 ? '06:00' : i % 3 === 1 ? '14:00' : '22:00';
      const endTime = i % 3 === 0 ? '14:00' : i % 3 === 1 ? '22:00' : '06:00';
      
      return {
        shift,
        startTime,
        endTime,
        downTime: `${(i % 3) * 10 + 5}m`,
        hours: (8 - (i % 3) * 0.2).toFixed(1),
        lines: Math.floor(Math.random() * 2) + modifier.lines,
        bph: Math.floor(Math.random() * 30) + modifier.bph,
        groceryPercent: `${Math.floor(Math.random() * 30) + 30}%`,
        corePercent: `${Math.floor(Math.random() * 20) + 20}%`,
        twoPPercent: `${Math.floor(Math.random() * 15) + 15}%`,
        fourPPercent: `${Math.floor(Math.random() * 15) + 10}%`
      };
    });
  };

  // Generate kit configuration data
  const kitRowData = Array.from({ length: 12 }, (_, i) => {
    const shift = i % 3 === 0 ? 'Morning' : i % 3 === 1 ? 'Afternoon' : 'Night';
    const startTime = i % 3 === 0 ? '06:00' : i % 3 === 1 ? '14:00' : '22:00';
    const endTime = i % 3 === 0 ? '14:00' : i % 3 === 1 ? '22:00' : '06:00';
    
    return {
      shift,
      startTime,
      endTime,
      downTime: `${(i % 3) * 15 + 10}m`,
      hours: (8 - (i % 3) * 0.3).toFixed(1),
      lines: Math.floor(Math.random() * 4) + 2,
      kph: Math.floor(Math.random() * 40) + 120
    };
  });

  return (
    <CollapsibleSection title="Configuration">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="font-medium mb-2">Box Configuration</h3>
          <Tabs defaultValue="auto" className="w-full">
            <TabsList className="w-full mb-2">
              {configTabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value}
                  className="text-xs flex-1"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {configTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <div className="overflow-x-auto">
                  <DataTable
                    columnDefs={boxColumnDefs}
                    rowData={generateBoxConfigData(tab.value)}
                    height="400px"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Kit Configuration</h3>
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

export default ConfigurationSection;
