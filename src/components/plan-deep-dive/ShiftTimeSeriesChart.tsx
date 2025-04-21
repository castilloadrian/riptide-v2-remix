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

export interface ShiftData {
  type: string;
  shifts: {
    start: number;
    end: number;
    status: 'active' | 'break' | 'complete' | 'planned';
  }[];
}

interface ShiftTimeSeriesChartProps {
  data: ShiftData[];
}

const transformDataForChart = (data: ShiftData[]) => {
  return data.map(item => ({
    name: item.type,
    value: 1,
    originalData: item
  }));
};

const getShiftColor = (status: string, type: string) => {
  if (status === 'break') return '#9E9E9E';
  
  const typeColors: { [key: string]: string } = {
    'EP': '#FFE082',
    'HF': '#A5D6A7',
    'GL': '#E1BEE7',
    'AUTO': '#81D4FA',
  };
  
  return Object.entries(typeColors).find(([prefix]) => 
    type.startsWith(prefix))?.[1] || '#f3f4f6';
};

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  
  if (!payload.originalData || !x || !y) return null;
  
  const { shifts, type } = payload.originalData;
  const hourRange = { min: 7, max: 19 };
  const totalHours = hourRange.max - hourRange.min;
  
  return (
    <g>
      {shifts.map((shift: any, index: number) => {
        const startPos = ((shift.start - hourRange.min) / totalHours) * width;
        const endPos = ((shift.end - hourRange.min) / totalHours) * width;
        const segmentWidth = endPos - startPos;
        
        return (
          <rect
            key={index}
            x={x + startPos}
            y={y}
            width={segmentWidth}
            height={height}
            fill={getShiftColor(shift.status, type)}
            stroke="#fff"
            strokeWidth={1}
            rx={2}
          />
        );
      })}
    </g>
  );
};

const ShiftTimeSeriesChart: FC<ShiftTimeSeriesChartProps> = ({ data }) => {
  const hourTicks = Array.from({ length: 13 }, (_, i) => i + 7);
  
  const hourLabels = hourTicks.map(hour => 
    `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'AM' : 'PM'}`
  );

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
          margin={{ top: 20, right: 30, left: 60, bottom: 50 }}
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
            axisLine={{ stroke: '#e5e7eb' }}
            tick={{ fill: '#666', fontSize: 12 }}
            interval={0}
            height={50}
            tickMargin={10}
            tickFormatter={(_, index) => hourLabels[index % hourLabels.length]}
            orientation="bottom"
          />
          
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload || !payload.length) return null;
              const data = payload[0].payload;
              if (!data || !data.originalData) return null;
              
              return (
                <div className="bg-white p-2 border border-gray-200 rounded shadow-md text-xs">
                  <p className="font-medium text-sm">{data.originalData.type}</p>
                  {data.originalData.shifts.map((shift: any, i: number) => (
                    <div key={i} className="flex items-center gap-2 mt-1">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: getShiftColor(shift.status, data.originalData.type) }}
                      />
                      <span>{shift.status === 'break' ? 'Break' : 'Active'}: </span>
                      <span className="font-medium">
                        {shift.start % 12 === 0 ? 12 : shift.start % 12}
                        {shift.start < 12 ? 'AM' : 'PM'} - 
                        {shift.end % 12 === 0 ? 12 : shift.end % 12}
                        {shift.end < 12 ? 'AM' : 'PM'}
                      </span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          
          <Bar 
            dataKey="value"
            shape={CustomBar}
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
