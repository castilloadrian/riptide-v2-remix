
import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeadcountSectionProps {}

const generateTableData = (rows: number, cols: number) => {
  return Array.from({ length: rows }, (_, i) => ({
    id: i + 1,
    name: `Position ${i + 1}`,
    cells: Array(cols).fill('')
  }));
};

const HeadcountSection: FC<HeadcountSectionProps> = () => {
  const headers = ['ID', 'Position', 'M', 'T', 'W', 'TH', 'F', 'SA', 'SU', 'Total'];
  
  const rows = generateTableData(12, 8);

  return (
    <div>
      <div className="section-header">
        <ChevronDown className="w-4 h-4" />
        <span>Headcount</span>
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="font-medium mb-2">Needed Headcount</h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
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
  );
};

export default HeadcountSection;
