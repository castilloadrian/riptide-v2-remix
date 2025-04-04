
import { useState } from 'react';
import NavigationTabs from '@/components/NavigationTabs';
import PlanHeader from '@/components/PlanHeader';
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const planVsActualData = [
  { name: 'Week 1', plan: 4000, actual: 3800, amt: 2400 },
  { name: 'Week 2', plan: 3000, actual: 2900, amt: 2210 },
  { name: 'Week 3', plan: 2000, actual: 2300, amt: 2290 },
  { name: 'Week 4', plan: 2780, actual: 2500, amt: 2000 },
  { name: 'Week 5', plan: 1890, actual: 1800, amt: 2181 },
  { name: 'Week 6', plan: 2390, actual: 2200, amt: 2500 },
];

const headcountData = [
  { name: 'Monday', required: 34, actual: 30 },
  { name: 'Tuesday', required: 40, actual: 38 },
  { name: 'Wednesday', required: 42, actual: 40 },
  { name: 'Thursday', required: 38, actual: 37 },
  { name: 'Friday', required: 44, actual: 40 },
  { name: 'Saturday', required: 30, actual: 25 },
  { name: 'Sunday', required: 25, actual: 22 },
];

const efficiencyData = [
  { name: 'Week 1', efficiency: 85 },
  { name: 'Week 2', efficiency: 83 },
  { name: 'Week 3', efficiency: 89 },
  { name: 'Week 4', efficiency: 91 },
  { name: 'Week 5', efficiency: 87 },
  { name: 'Week 6', efficiency: 90 },
];

const issueTypesData = [
  { name: 'Inventory', value: 35 },
  { name: 'Staffing', value: 25 },
  { name: 'Equipment', value: 15 },
  { name: 'Quality', value: 10 },
  { name: 'Other', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Graphical = () => {
  const [activeTab, setActiveTab] = useState('graphical');
  const [planName, setPlanName] = useState('Weekly Production Plan');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Container */}
      <div className="container mx-auto py-4 px-2 md:px-4 max-w-7xl">
        {/* Plan Header Section */}
        <PlanHeader planName={planName} setPlanName={setPlanName} />
        
        <Tabs defaultValue="overview" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="staffing">Staffing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Plan vs Actual Production Overview */}
              <div className="dashboard-card">
                <h3 className="dashboard-card-header">Plan vs Actual Production</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={planVsActualData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="plan" fill="#8884d8" name="Plan" />
                      <Bar dataKey="actual" fill="#82ca9d" name="Actual" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Issues by Type */}
              <div className="dashboard-card">
                <h3 className="dashboard-card-header">Issues by Type</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={issueTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {issueTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Efficiency Trend */}
            <div className="dashboard-card mb-6">
              <h3 className="dashboard-card-header">Weekly Efficiency Trend</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={efficiencyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="efficiency" stroke="#82ca9d" fill="#82ca9d" name="Efficiency (%)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="production">
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Detailed Plan vs Actual Production */}
              <div className="dashboard-card">
                <h3 className="dashboard-card-header">Detailed Plan vs Actual Production</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={planVsActualData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="plan" stroke="#8884d8" name="Plan" />
                      <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Production KPIs */}
              <div className="dashboard-card">
                <h3 className="dashboard-card-header">Production KPIs</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">On-Time Delivery</p>
                    <p className="text-2xl font-bold text-primary">96%</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Quality Score</p>
                    <p className="text-2xl font-bold text-primary">93%</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Efficiency</p>
                    <p className="text-2xl font-bold text-primary">89%</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Waste</p>
                    <p className="text-2xl font-bold text-primary">4%</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="staffing">
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Headcount Overview */}
              <div className="dashboard-card">
                <h3 className="dashboard-card-header">Weekly Headcount - Required vs Actual</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={headcountData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="required" fill="#8884d8" name="Required" />
                      <Bar dataKey="actual" fill="#82ca9d" name="Actual" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Staffing KPIs */}
              <div className="dashboard-card">
                <h3 className="dashboard-card-header">Staffing KPIs</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Attendance Rate</p>
                    <p className="text-2xl font-bold text-primary">92%</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Overtime Hours</p>
                    <p className="text-2xl font-bold text-primary">15%</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Training Completion</p>
                    <p className="text-2xl font-bold text-primary">87%</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Turnover Rate</p>
                    <p className="text-2xl font-bold text-primary">8%</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Graphical;
