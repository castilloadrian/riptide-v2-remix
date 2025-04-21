
export interface ShiftData {
  type: string;
  shifts: {
    start: number;
    end: number;
    status: 'active' | 'break' | 'complete' | 'planned';
  }[];
}

export const transformDataForChart = (data: ShiftData[]) => {
  return data.map(item => ({
    name: item.type,
    value: 1,
    originalData: item
  }));
};

export const getShiftColor = (status: string, type: string) => {
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

export const generateHourTicks = () => {
  return Array.from({ length: 13 }, (_, i) => i + 7);
};

export const formatHourLabels = (hourTicks: number[]) => {
  return hourTicks.map(hour => 
    `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'AM' : 'PM'}`
  );
};

