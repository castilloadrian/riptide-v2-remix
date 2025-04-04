
import { FC, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface DataTableProps {
  columnDefs: any[];
  rowData: any[];
  className?: string;
  height?: string;
}

const DataTable: FC<DataTableProps> = ({ 
  columnDefs, 
  rowData, 
  className = '',
  height = '300px'
}) => {
  // Default grid options
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <div className={`ag-theme-alpine w-full ${className}`} style={{ height }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        animateRows={true}
        pagination={true}
        paginationAutoPageSize={true}
      />
    </div>
  );
};

export default DataTable;
