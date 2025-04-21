import { FC } from 'react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import CustomShiftBar from './components/CustomShiftBar';
import ShiftTooltip from './components/ShiftTooltip';
import { 
  ShiftData,
  transformDataForChart,
  generateHourTicks,
  formatHourLabels
} from './utils/chartDataTransformers';

interface ShiftTimeSeriesChartProps {
  data: ShiftData[];
}

const ShiftTimeSeriesChart: FC<ShiftTimeSeriesChartProps> = ({ data }) => {
  const hourTicks = generateHourTicks();
  const hourLabels = formatHourLabels(hourTicks);
  const chartData = transformDataForChart(data);
  
  const config = {
    active: { label: 'Active', color: '#61B045' },
    break: { label: 'Break', color: '#9E9E9E' },
    complete: { label: 'Complete', color: '#8884d8' },
    planned: { label: 'Planned', color: '#82ca9d' },
  };
  
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-md p-2">
        <p className="text-gray-500">No shift data available</p>
      </div>
    );
  }
  
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-md p-2">
      <div className="relative">
        <ChartContainer 
          config={config}
          className="w-full"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 20, right: 30, left: 60, bottom: 80 }}
            >
              <XAxis 
                type="number"
                domain={[0, 1]}
                hide={true}
              />
              
              <YAxis 
                type="category" 
                dataKey="name"
                width={60}
                tick={{ fill: '#666', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              
              <XAxis 
                xAxisId="time"
                type="category"
                dataKey="name"
                ticks={hourTicks}
                tickLine={true}
                axisLine={{ stroke: '#444', strokeWidth: 1 }}
                tick={{ fill: '#444', fontSize: 12 }}
                interval={0}
                height={60}
                tickMargin={15}
                tickFormatter={(_, index) => hourLabels[index % hourLabels.length]}
                orientation="bottom"
                label={{ 
                  value: 'Time of Day', 
                  position: 'insideBottom', 
                  offset: -15,
                  fill: '#333',
                  fontSize: 14
                }}
              />
              
              {/* Add grid lines for each hour */}
              {hourTicks.map((hour, index) => (
                <ReferenceLine
                  key={`grid-${hour}`}
                  x={index / (hourTicks.length - 1)}
                  stroke="#e5e7eb"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                />
              ))}
              
              <Tooltip content={<ShiftTooltip />} />
              
              <Bar 
                dataKey="value"
                shape={<CustomShiftBar />}
                isAnimationActive={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        {/* Add a separate time axis at the bottom that aligns with the chart */}
        <div className="absolute bottom-0 left-[60px] right-[30px] h-[60px] flex items-center">
          {hourLabels.map((label, index) => (
            <div 
              key={index} 
              className="text-xs text-gray-500"
              style={{ 
                position: 'absolute',
                left: `${(index / (hourLabels.length - 1)) * 100}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftTimeSeriesChart;
