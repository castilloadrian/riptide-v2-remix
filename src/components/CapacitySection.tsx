
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';

interface CapacitySectionProps {}

const generateTableData = (rows: number, cols: number) => {
  return Array.from({ length: rows }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    cells: Array(cols).fill('')
  }));
};

const CapacitySection: FC<CapacitySectionProps> = () => {
  const boxHeaders = ['ID', 'Box Type', 'Recipe Type', 'WK-1', 'WK', 'WK+1', 'WK+2', 'WK+3'];
  const kitHeaders = ['ID', 'Kit Type', 'Recipe Type', 'WK-1', 'WK', 'WK+1', 'WK+2', 'WK+3'];
  
  const boxRows = generateTableData(15, 7);
  const kitRows = generateTableData(15, 7);

  return (
    <CollapsibleSection title="Capacity">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Box Capacity</h3>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  {boxHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {boxRows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    {row.cells.map((_, idx) => (
                      <td key={idx}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Kit Capacity</h3>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  {kitHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kitRows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    {row.cells.map((_, idx) => (
                      <td key={idx}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default CapacitySection;
