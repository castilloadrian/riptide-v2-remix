
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
  ResponsiveContainer
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
    <ChartContainer 
      config={config}
      className="w-full bg-white dark:bg-gray-800 rounded-md p-2"
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
          
          <Tooltip content={ShiftTooltip} />
          
          <Bar 
            dataKey="value"
            shape={CustomShiftBar}
            isAnimationActive={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ShiftTimeSeriesChart;

