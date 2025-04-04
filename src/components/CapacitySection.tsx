
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';

const CapacitySection: FC = () => {
  // Define column definitions for Box Capacity
  const boxColumnDefs = [
    { headerName: 'ID', field: 'id', width: 70 },
    { headerName: 'Box Type', field: 'boxType', width: 150 },
    { headerName: 'Recipe Type', field: 'recipeType', width: 150 },
    { headerName: 'WK-1', field: 'wkMinus1', width: 100 },
    { headerName: 'WK', field: 'wk', width: 100 },
    { headerName: 'WK+1', field: 'wkPlus1', width: 100 },
    { headerName: 'WK+2', field: 'wkPlus2', width: 100 },
    { headerName: 'WK+3', field: 'wkPlus3', width: 100 },
  ];

  // Define column definitions for Kit Capacity
  const kitColumnDefs = [
    { headerName: 'ID', field: 'id', width: 70 },
    { headerName: 'Kit Type', field: 'kitType', width: 150 },
    { headerName: 'Recipe Type', field: 'recipeType', width: 150 },
    { headerName: 'WK-1', field: 'wkMinus1', width: 100 },
    { headerName: 'WK', field: 'wk', width: 100 },
    { headerName: 'WK+1', field: 'wkPlus1', width: 100 },
    { headerName: 'WK+2', field: 'wkPlus2', width: 100 },
    { headerName: 'WK+3', field: 'wkPlus3', width: 100 },
  ];

  // Generate box capacity data
  const boxRowData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    boxType: `Box Type ${i + 1}`,
    recipeType: `Recipe ${i % 5 + 1}`,
    wkMinus1: Math.floor(Math.random() * 100),
    wk: Math.floor(Math.random() * 100),
    wkPlus1: Math.floor(Math.random() * 100),
    wkPlus2: Math.floor(Math.random() * 100),
    wkPlus3: Math.floor(Math.random() * 100),
  }));

  // Generate kit capacity data
  const kitRowData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    kitType: `Kit Type ${i + 1}`,
    recipeType: `Recipe ${i % 5 + 1}`,
    wkMinus1: Math.floor(Math.random() * 100),
    wk: Math.floor(Math.random() * 100),
    wkPlus1: Math.floor(Math.random() * 100),
    wkPlus2: Math.floor(Math.random() * 100),
    wkPlus3: Math.floor(Math.random() * 100),
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
          <h3 className="font-medium mb-2">Kit Capacity</h3>
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
