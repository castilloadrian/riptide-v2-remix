
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';

const RiskAssessment: FC = () => {
  // Define column definitions for AG Grid
  const columnDefs = [
    { headerName: 'Date', field: 'date', width: 120 },
    { headerName: 'Item', field: 'item', width: 120 },
    { headerName: 'Category', field: 'category', width: 120 },
    { headerName: 'Sub Cat', field: 'subCategory', width: 120 },
    { headerName: 'Volume', field: 'volume', width: 100 },
    { headerName: 'Status', field: 'status', width: 120 },
    { headerName: 'Action', field: 'action', width: 120 },
    { headerName: 'Percent', field: 'percent', width: 100 },
    { 
      headerName: 'Value', 
      field: 'value',
      width: 120,
      cellRenderer: (params: any) => {
        const risk = params.data.risk;
        return `<div class="risk-bar ${risk === 'high' ? 'risk-red' : risk === 'medium' ? 'risk-yellow' : 'risk-green'}" style="width: ${params.data.percent}%"></div>`;
      }
    },
  ];

  // Generate sample data for the risk assessment table
  const rowData = Array.from({ length: 15 }, (_, i) => ({
    date: `2023-04-${i + 10}`,
    item: `Item ${i + 1}`,
    category: `Category ${i % 4 + 1}`,
    subCategory: `Sub ${i % 3 + 1}`,
    volume: Math.floor(Math.random() * 1000),
    status: i % 3 === 0 ? 'Open' : 'Closed',
    action: i % 2 === 0 ? 'Review' : 'Monitor',
    percent: Math.floor(Math.random() * 100),
    value: '',
    risk: i % 3 === 0 ? 'low' : i % 3 === 1 ? 'medium' : 'high'
  }));

  return (
    <CollapsibleSection title="Risk Assessment">
      <div className="overflow-x-auto">
        <DataTable
          columnDefs={columnDefs}
          rowData={rowData}
          height="400px"
        />
      </div>
    </CollapsibleSection>
  );
};

export default RiskAssessment;
