
import { FC, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface DataTableProps {
  columnDefs: any[];
  rowData: any[];
  className?: string;
  height?: string;
  components?: any;
}

const DataTable: FC<DataTableProps> = ({ 
  columnDefs, 
  rowData, 
  className = '',
  height = '300px',
  components = {}
}) => {
  // Default grid options
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1, // This makes all columns flex to take up available space
    minWidth: 100 // Ensure columns don't get too small
  };

  useEffect(() => {
    // This is just to debug and ensure rowData and columnDefs are populated
    console.log("DataTable rendering with:", { rowData, columnDefs });
  }, [rowData, columnDefs]);

  return (
    <div className={`ag-theme-alpine w-full ${className}`} style={{ height }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        animateRows={true}
        components={components}
      />
    </div>
  );
};

export default DataTable;
