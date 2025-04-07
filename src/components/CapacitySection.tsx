
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';

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

  // Generate consistent number of rows for both tables (10 rows)
  const numberOfRows = 10;
  
  // Generate box capacity data
  const boxRowData = Array.from({ length: numberOfRows }, (_, i) => ({
    shift: `Shift ${i % 3 + 1}`,
    available: Math.floor(Math.random() * 1000),
    planned: Math.floor(Math.random() * 800),
    excess: Math.floor(Math.random() * 200),
  }));

  // Generate kit overview data with the same number of rows
  const kitRowData = Array.from({ length: numberOfRows }, (_, i) => ({
    shift: `Shift ${i % 3 + 1}`,
    need: Math.floor(Math.random() * 500),
    sosOnHand: Math.floor(Math.random() * 400),
    liveNeeds: Math.floor(Math.random() * 300),
    buffer: Math.floor(Math.random() * 100),
    planCreate: Math.floor(Math.random() * 200),
  }));

  return (
    <CollapsibleSection title="Capacity">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Box Capacity</h3>
          <div className="overflow-x-auto">
            <DataTable
              columnDefs={boxColumnDefs}
              rowData={boxRowData}
              height="400px"
            />
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Kit Overview</h3>
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
