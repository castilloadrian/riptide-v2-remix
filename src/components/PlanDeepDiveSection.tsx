
import { FC, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CollapsibleSection from './CollapsibleSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock data for the recipe production volume chart
const recipeData = [
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

// Mock data for CPT risk profile
const riskData = [
  { name: 'High Risk CPT', value: 85, fill: '#ef4444' },
  { name: 'Medium Risk CPT', value: 65, fill: '#f97316' },
  { name: 'Low Risk CPT', value: 45, fill: '#f59e0b' },
  { name: 'Minimal Risk CPT', value: 30, fill: '#84cc16' },
  { name: 'No Risk CPT', value: 15, fill: '#22c55e' },
];

// Mock data for plan details
const planDetailsData = [
  { name: 'Prep Time', value: 110, fill: '#3b82f6' },
  { name: 'Cook Time', value: 90, fill: '#3b82f6' },
  { name: 'Package Time', value: 70, fill: '#6366f1' },
  { name: 'Assembly Time', value: 60, fill: '#6366f1' },
  { name: 'QA Time', value: 40, fill: '#8b5cf6' },
  { name: 'Cleanup Time', value: 30, fill: '#8b5cf6' },
];

const PlanDeepDiveSection: FC = () => {
  const [activeTab, setActiveTab] = useState('shift');
  
  return (
    <CollapsibleSection title="Plan Deep Dive">
      <div className="p-2">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="shift">Shift Visualization</TabsTrigger>
            <TabsTrigger value="risk">CPT Risk Profile</TabsTrigger>
            <TabsTrigger value="details">Plan Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="shift" className="w-full">
            <h3 className="font-medium mb-4">Recipe Production Volume</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={recipeData}
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
          </TabsContent>
          
          <TabsContent value="risk" className="w-full">
            <h3 className="font-medium mb-4">CPT Risk Distribution</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={riskData}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 120, bottom: 10 }}
                  className="bg-white dark:bg-gray-800 rounded-md p-2"
                >
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={120}
                    tick={{ fill: '#666', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      color: '#333'
                    }}
                    formatter={(value) => [`${value}%`, 'Risk Level']}
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
          </TabsContent>
          
          <TabsContent value="details" className="w-full">
            <h3 className="font-medium mb-4">Production Time Breakdown</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={planDetailsData}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
                  className="bg-white dark:bg-gray-800 rounded-md p-2"
                >
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100}
                    tick={{ fill: '#666', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      color: '#333'
                    }}
                    formatter={(value) => [`${value} minutes`, 'Duration']}
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
          </TabsContent>
        </Tabs>
      </div>
    </CollapsibleSection>
  );
};

export default PlanDeepDiveSection;
