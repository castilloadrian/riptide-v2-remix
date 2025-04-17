
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
    // Enable horizontal scrolling for all tables
    suppressSizeToFit: true
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
        // Removed pagination properties
        // Using default scrolling behavior instead
      />
    </div>
  );
};

export default DataTable;
