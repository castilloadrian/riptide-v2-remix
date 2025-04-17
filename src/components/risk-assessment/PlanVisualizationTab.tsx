
import { FC } from 'react';
import DataTable from '../DataTable';
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

// Define types for props
interface PlanVisualizationTabProps {
  data: any[];
  columns: any[];
}

const PlanVisualizationTab: FC<PlanVisualizationTabProps> = ({ data, columns }) => {
  // Modify the columns to use a custom component for the progress bar
  const enhancedColumns = columns.map(col => {
    if (col.field === 'progress') {
      return {
        ...col,
        headerName: 'Status',
        cellRenderer: 'StatusBarRenderer'
      };
    }
    return col;
  });

  // Define the custom cell renderer component
  const progressBarRenderer = {
    StatusBarRenderer: (params: any) => {
      const percent = params.data.percent;
      const risk = params.data.risk;
      
      // Get the appropriate color based on risk level
      const getProgressColor = (risk: string) => {
        switch (risk) {
          case 'high': return 'bg-red-500';
          case 'medium': return 'bg-yellow-500';
          case 'low': return 'bg-green-500';
          default: return 'bg-blue-500';
        }
      };
      
      return (
        <div className="flex items-center w-full">
          <Progress 
            value={percent} 
            className={cn("h-2.5 bg-gray-200 dark:bg-gray-700", getProgressColor(risk))}
          />
        </div>
      );
    }
  };

  return (
    <div className="h-[400px] w-full">
      <DataTable
        columnDefs={enhancedColumns}
        rowData={data}
        height="400px"
        components={progressBarRenderer}
      />
    </div>
  );
};

export default PlanVisualizationTab;
