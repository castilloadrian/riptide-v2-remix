
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';

const HeadcountSection: FC = () => {
  // Define column definitions for AG Grid
  const columnDefs = [
    { headerName: 'ID', field: 'id', width: 70 },
    { headerName: 'Position', field: 'position', width: 150 },
    { headerName: 'M', field: 'monday', width: 80 },
    { headerName: 'T', field: 'tuesday', width: 80 },
    { headerName: 'W', field: 'wednesday', width: 80 },
    { headerName: 'TH', field: 'thursday', width: 80 },
    { headerName: 'F', field: 'friday', width: 80 },
    { headerName: 'SA', field: 'saturday', width: 80 },
    { headerName: 'SU', field: 'sunday', width: 80 },
    { headerName: 'Total', field: 'total', width: 100 },
  ];

  // Generate headcount data with realistic values
  const rowData = Array.from({ length: 12 }, (_, i) => {
    const dailyValues = {
      monday: Math.floor(Math.random() * 10) + 5,
      tuesday: Math.floor(Math.random() * 10) + 5,
      wednesday: Math.floor(Math.random() * 10) + 5,
      thursday: Math.floor(Math.random() * 10) + 5,
      friday: Math.floor(Math.random() * 10) + 5,
      saturday: Math.floor(Math.random() * 10) + 3,
      sunday: Math.floor(Math.random() * 8) + 2,
    };
    
    const total = Object.values(dailyValues).reduce((sum, val) => sum + val, 0);
    
    return {
      id: i + 1,
      position: `Position ${i + 1}`,
      ...dailyValues,
      total
    };
  });

  return (
    <CollapsibleSection title="Headcount">
      <div>
        <h3 className="font-medium mb-2">Needed Headcount</h3>
        <div className="overflow-x-auto">
          <DataTable
            columnDefs={columnDefs}
            rowData={rowData}
            height="400px"
          />
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default HeadcountSection;
