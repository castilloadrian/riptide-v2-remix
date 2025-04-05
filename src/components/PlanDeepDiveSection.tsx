
import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CollapsibleSection from './CollapsibleSection';

// Mock data for the horizontal histogram
const data = [
  { name: 'Recipe A', value: 120, fill: '#61B045' },
  { name: 'Recipe B', value: 98, fill: '#61B045' },
  { name: 'Recipe C', value: 86, fill: '#61B045' },
  { name: 'Recipe D', value: 75, fill: '#82ca9d' },
  { name: 'Recipe E', value: 65, fill: '#82ca9d' },
  { name: 'Recipe F', value: 58, fill: '#82ca9d' },
  { name: 'Recipe G', value: 48, fill: '#8884d8' },
  { name: 'Recipe H', value: 38, fill: '#8884d8' },
  { name: 'Recipe I', value: 25, fill: '#8884d8' },
];

const PlanDeepDiveSection: FC = () => {
  return (
    <CollapsibleSection title="Plan Deep Dive">
      <div className="p-2">
        <h3 className="font-medium mb-4">Recipe Production Volume</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
              className="bg-white dark:bg-gray-800 rounded-md p-2"
            >
              <XAxis type="number" />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={80}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  color: '#333'
                }}
                formatter={(value) => [`${value} units`, 'Volume']}
              />
              <Bar 
                dataKey="value" 
                radius={[0, 4, 4, 0]}
                barSize={20}
                background={{ fill: '#eee' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default PlanDeepDiveSection;
