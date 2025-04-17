
import { FC } from 'react';
import DataTable from '../DataTable';

// Define types for props
interface TableData {
  columns: any[];
  data: any[];
  title: string;
}

interface PlanKPIsTabProps {
  p2pdlTable: TableData;
  rowVolumeTable: TableData;
  groceryTable: TableData;
  cptRangeTable: TableData;
  sameDayShipTable: TableData;
}

const PlanKPIsTab: FC<PlanKPIsTabProps> = ({
  p2pdlTable,
  rowVolumeTable,
  groceryTable,
  cptRangeTable,
  sameDayShipTable
}) => {
  return (
    <>
      {/* Top row with 3 tables side by side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Total P2PDL Table */}
        <div>
          <h3 className="font-medium text-sm mb-2">{p2pdlTable.title}</h3>
          <div className="h-[250px]">
            <DataTable
              columnDefs={p2pdlTable.columns}
              rowData={p2pdlTable.data}
              height="250px"
            />
          </div>
        </div>
        
        {/* RoW Volume Table */}
        <div>
          <h3 className="font-medium text-sm mb-2">{rowVolumeTable.title}</h3>
          <div className="h-[250px]">
            <DataTable
              columnDefs={rowVolumeTable.columns}
              rowData={rowVolumeTable.data}
              height="250px"
            />
          </div>
        </div>
        
        {/* Grocery Table */}
        <div>
          <h3 className="font-medium text-sm mb-2">{groceryTable.title}</h3>
          <div className="h-[250px]">
            <DataTable
              columnDefs={groceryTable.columns}
              rowData={groceryTable.data}
              height="250px"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom row with 2 tables stacked */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Time to CPT Range Table */}
        <div>
          <h3 className="font-medium text-sm mb-2">{cptRangeTable.title}</h3>
          <div className="h-[250px]">
            <DataTable
              columnDefs={cptRangeTable.columns}
              rowData={cptRangeTable.data}
              height="250px"
            />
          </div>
        </div>
        
        {/* Same Day Ship Table */}
        <div>
          <h3 className="font-medium text-sm mb-2">{sameDayShipTable.title}</h3>
          <div className="h-[250px]">
            <DataTable
              columnDefs={sameDayShipTable.columns}
              rowData={sameDayShipTable.data}
              height="250px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanKPIsTab;
