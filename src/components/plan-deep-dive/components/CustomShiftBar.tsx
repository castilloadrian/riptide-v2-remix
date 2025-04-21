
import React from 'react';
import { getShiftColor } from '../utils/chartDataTransformers';

interface CustomShiftBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: any;
  index?: number;
  fill?: string;
}

const CustomShiftBar: React.FC<CustomShiftBarProps> = (props) => {
  const { x, y, width, height, payload } = props;
  
  if (!payload?.originalData || !x || !y) return null;
  
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

export default CustomShiftBar;
