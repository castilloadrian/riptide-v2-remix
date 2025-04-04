
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';

interface RiskItem {
  id: number;
  values: string[];
}

const RiskAssessment: FC = () => {
  // Generate sample data for the risk assessment table
  const headers = ['Date', 'Item', 'Category', 'Sub Cat', 'Volume', 'Status', 'Action', 'Percent', 'Value'];
  
  const riskItems: RiskItem[] = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    values: Array(8).fill(''),
  }));

  return (
    <CollapsibleSection title="Risk Assessment">
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
            {riskItems.map((item) => (
              <tr key={item.id}>
                {item.values.map((_, idx) => (
                  <td key={idx}></td>
                ))}
                <td>
                  {item.id % 3 === 0 ? (
                    <div className="risk-bar risk-green w-full"></div>
                  ) : item.id % 3 === 1 ? (
                    <div className="risk-bar risk-yellow w-3/4"></div>
                  ) : (
                    <div className="risk-bar risk-red w-1/2"></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CollapsibleSection>
  );
};

export default RiskAssessment;
