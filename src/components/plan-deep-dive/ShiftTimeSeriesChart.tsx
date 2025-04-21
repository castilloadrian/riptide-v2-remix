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

// Helper function to transform shift data for rendering
const transformDataForChart = (data: ShiftData[]) => {
  return data.map(item => ({
    name: item.type,
    // We map directly to a numeric value for each entry to satisfy Recharts typing
    value: 1,
    // Keep the original data for our custom renderer
    originalData: item
  }));
};

// Helper to get color based on shift status and type
const getShiftColor = (status: string | null, type: string) => {
  if (!status) return '#f3f4f6'; // Light gray for empty slots
  
  // Color mapping based on the type
  const typeColors: { [key: string]: string } = {
    'EP': '#FFE082', // Yellow for EP
    'HF': '#A5D6A7', // Light green for HF
    'GL': '#E1BEE7', // Light purple for GL
    'AUTO': '#81D4FA', // Light blue for AUTO
  };
  
  // Get the base color by checking which type prefix matches
  const baseColor = Object.entries(typeColors).find(([prefix]) => 
    type.startsWith(prefix))?.[1] || '#f3f4f6';
    
  return status === 'break' ? '#9E9E9E' : baseColor; // Gray for breaks
};

// Custom bar shape to create segmented time series
const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  
  if (!payload || !payload.originalData || !x || !y) {
    return null;
  }
  
  const { shifts } = payload.originalData;
  const hourRange = { min: 7, max: 19 }; // 7am to 7pm
  const totalHours = hourRange.max - hourRange.min;
  
  // Create rectangles for each shift segment
  return (
    <g>
      {shifts.map((shift, index) => {
        // Calculate position and width based on start/end times
        const startPos = ((shift.start - hourRange.min) / totalHours) * width;
        const endPos = ((shift.end - hourRange.min) / totalHours) * width;
        const segmentWidth = endPos - startPos;
        
        return (
          <rect
            key={`${index}-${shift.status}`}
            x={x + startPos}
            y={y}
            width={segmentWidth}
            height={height}
            fill={getShiftColor(shift.status, payload.originalData.type)}
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
  // Create hour labels for the X-axis (7am to 7pm)
  const hourLabels = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 7;
    return `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'AM' : 'PM'}`;
  });
  
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
  
  // Custom tooltip formatter to show shift details
  const tooltipFormatter = (value: any, name: string, props: any) => {
    if (!props || !props.payload || !props.payload.originalData) {
      return ['No data', ''];
    }
    
    const shifts = props.payload.originalData.shifts;
    
    return (
      <div>
        <p className="font-medium">{props.payload.originalData.type}</p>
        {shifts.map((shift: any, index: number) => (
          <div key={index} className="flex justify-between gap-2">
            <span>{shift.status === 'break' ? 'Break' : 'Active'}: </span>
            <span>
              {shift.start % 12 === 0 ? 12 : shift.start % 12}
              {shift.start < 12 ? 'AM' : 'PM'} - 
              {shift.end % 12 === 0 ? 12 : shift.end % 12}
              {shift.end < 12 ? 'AM' : 'PM'}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <ChartContainer 
      config={config}
      className="w-full bg-white dark:bg-gray-800 rounded-md p-2"
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <XAxis 
            type="category" 
            dataKey="label"
            ticks={hourLabels}
            tickLine={false}
            axisLine={{ stroke: '#e5e7eb' }}
            tick={{ fill: '#666', fontSize: 12 }}
          />
          <YAxis 
            type="category" 
            dataKey="name"
            width={60}
            tick={{ fill: '#666', fontSize: 12 }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload || !payload.length) return null;
              
              // The first payload item contains our data
              const data = payload[0].payload;
              
              if (!data || !data.originalData) return null;
              
              const { originalData } = data;
              
              return (
                <div className="bg-white p-2 border border-gray-200 rounded shadow-md text-xs">
                  <p className="font-medium text-sm">{originalData.type}</p>
                  {originalData.shifts.map((shift: any, i: number) => (
                    <div key={i} className="flex items-center gap-2 mt-1">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: getShiftColor(shift.status, originalData.type) }}
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
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ShiftTimeSeriesChart;
