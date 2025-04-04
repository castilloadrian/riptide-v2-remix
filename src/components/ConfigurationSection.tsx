
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';

interface ConfigurationSectionProps {}

const generateTableData = (rows: number, cols: number) => {
  return Array.from({ length: rows }, (_, i) => ({
    id: i + 1,
    name: `Config ${i + 1}`,
    cells: Array(cols).fill('')
  }));
};

const ConfigurationSection: FC<ConfigurationSectionProps> = () => {
  const boxHeaders = ['ID', 'Box Type', 'Config', 'Version', 'Active', 'Details'];
  const kitHeaders = ['ID', 'Kit Type', 'Config', 'Version', 'Active', 'Details'];
  
  const boxRows = generateTableData(12, 5);
  const kitRows = generateTableData(12, 5);

  return (
    <CollapsibleSection title="Configuration">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Box Configuration</h3>
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
          <h3 className="font-medium mb-2">Kit Configuration</h3>
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

export default ConfigurationSection;
