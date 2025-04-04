
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';

const ConfigurationSection: FC = () => {
  // Define column definitions for Box Configuration
  const boxColumnDefs = [
    { headerName: 'ID', field: 'id', width: 70 },
    { headerName: 'Box Type', field: 'boxType', width: 150 },
    { headerName: 'Config', field: 'config', width: 150 },
    { headerName: 'Version', field: 'version', width: 100 },
    { headerName: 'Active', field: 'active', width: 100 },
    { headerName: 'Details', field: 'details', width: 150 },
  ];

  // Define column definitions for Kit Configuration
  const kitColumnDefs = [
    { headerName: 'ID', field: 'id', width: 70 },
    { headerName: 'Kit Type', field: 'kitType', width: 150 },
    { headerName: 'Config', field: 'config', width: 150 },
    { headerName: 'Version', field: 'version', width: 100 },
    { headerName: 'Active', field: 'active', width: 100 },
    { headerName: 'Details', field: 'details', width: 150 },
  ];

  // Generate box configuration data
  const boxRowData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    boxType: `Box Type ${i + 1}`,
    config: `Config ${String.fromCharCode(65 + i % 6)}`,
    version: `v${Math.floor(i/4) + 1}.${i % 4}`,
    active: i < 8 ? 'Yes' : 'No',
    details: `Details for box ${i + 1}`,
  }));

  // Generate kit configuration data
  const kitRowData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    kitType: `Kit Type ${i + 1}`,
    config: `Config ${String.fromCharCode(75 + i % 6)}`,
    version: `v${Math.floor(i/4) + 1}.${i % 4}`,
    active: i < 9 ? 'Yes' : 'No',
    details: `Details for kit ${i + 1}`,
  }));

  return (
    <CollapsibleSection title="Configuration">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Box Configuration</h3>
          <div className="overflow-x-auto">
            <DataTable
              columnDefs={boxColumnDefs}
              rowData={boxRowData}
              height="400px"
            />
          </div>
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
