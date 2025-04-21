
import React from 'react';
import { getShiftColor } from '../utils/chartDataTransformers';

interface ShiftTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const ShiftTooltip: React.FC<ShiftTooltipProps> = ({ active, payload }) => {
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
};

export default ShiftTooltip;
