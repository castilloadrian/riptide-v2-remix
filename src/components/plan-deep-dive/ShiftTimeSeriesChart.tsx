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
  // Create data with hours from 7AM to 7PM
  const hours = Array.from({ length: 13 }, (_, i) => i + 7);
  
  return data.map(item => {
    // Create a data point for each hour from 7AM to 7PM
    const hourData = hours.map(hour => {
      // Find any shifts that overlap with this hour
      const matchingShifts = item.shifts.filter(shift => 
        shift.start <= hour && shift.end >= hour
      );
      
      return {
        hour,
        // If there's a matching shift, return its status
        status: matchingShifts.length > 0 ? matchingShifts[0].status : null,
        // Display label for hour value
        label: `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'AM' : 'PM'}`
      };
    });
    
    return {
      type: item.type,
      hours: hourData
    };
  });
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
  const { x, y, width, height, data, type } = props;
  const hourWidth = width / data.length;
  
  return (
    <g>
      {data.map((hour: any, index: number) => (
        <rect
          key={`${hour.hour}-${index}`}
          x={x + (index * hourWidth)}
          y={y}
          width={hourWidth}
          height={height}
          fill={getShiftColor(hour.status, type)}
          stroke="#fff"
          strokeWidth={1}
          rx={2}
        />
      ))}
    </g>
  );
};

const ShiftTimeSeriesChart: FC<ShiftTimeSeriesChartProps> = ({ data }) => {
  const transformedData = transformDataForChart(data);
  
  // Create hour labels for the X-axis
  const hourLabels = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 7;
    return `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'AM' : 'PM'}`;
  });
  
  const config = {
    active: { label: 'Active', color: '#61B045' },
    break: { label: 'Break', color: '#FFC107' },
    complete: { label: 'Complete', color: '#8884d8' },
    planned: { label: 'Planned', color: '#82ca9d' },
  };
  
  return (
    <ChartContainer 
      config={config}
      className="w-full bg-white dark:bg-gray-800 rounded-md p-2"
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
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
            dataKey="type"
            width={60}
            tick={{ fill: '#666', fontSize: 12 }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <Tooltip
            content={<ChartTooltipContent />}
          />
          {transformedData.map((entry, index) => (
            <Bar 
              key={`bar-${index}`}
              dataKey="value"
              name={entry.type}
              shape={<CustomBar data={entry.hours} type={entry.type} />}
              isAnimationActive={false}
            >
              {/* Add a dummy cell to avoid Recharts errors */}
              <Cell />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ShiftTimeSeriesChart;
