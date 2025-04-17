
import { FC } from 'react';
import DataTable from '../DataTable';

// Define types for props
interface PlanVisualizationTabProps {
  data: any[];
  columns: any[];
}

const PlanVisualizationTab: FC<PlanVisualizationTabProps> = ({ data, columns }) => {
  return (
    <div className="h-[400px] w-full">
      <DataTable
        columnDefs={columns}
        rowData={data}
        height="400px"
      />
    </div>
  );
};

export default PlanVisualizationTab;
