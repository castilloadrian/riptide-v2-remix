// Define column definitions for Plan Visualization table
export const getPlanVisualizationColumns = () => [
  { headerName: 'Shift', field: 'shift' },
  { headerName: 'Kits', field: 'kits' },
  { headerName: 'Core Boxes', field: 'coreBoxes' },
  { headerName: 'GL Boxes', field: 'glBoxes' },
  { headerName: 'Same Day', field: 'sameDay' },
  { headerName: 'First CPT', field: 'firstCpt' },
  { 
    headerName: 'Status', 
    field: 'progress',
    minWidth: 150,
  },
];

// Generate sample data for the risk assessment table with new fields
export const getPlanVisualizationData = () => Array.from({ length: 15 }, (_, i) => ({
  shift: i % 3 === 0 ? 'Morning' : i % 3 === 1 ? 'Evening' : 'Night',
  kits: Math.floor(Math.random() * 100) + 20,
  coreBoxes: Math.floor(Math.random() * 500) + 100,
  glBoxes: Math.floor(Math.random() * 300) + 50,
  sameDay: `${Math.floor(Math.random() * 40) + 60}%`,
  firstCpt: `${Math.floor(Math.random() * 20) + 80}%`,
  percent: Math.floor(Math.random() * 100),
  progress: '',
  risk: i % 3 === 0 ? 'low' : i % 3 === 1 ? 'medium' : 'high'
}));

// Updated column definitions for Total P2PDL table
export const getP2PDLColumns = () => [
  { headerName: 'Shift', field: 'shift' },
  { headerName: 'Volume', field: 'volume' },
];

// Generate sample data for the P2PDL table
export const getP2PDLData = () => Array.from({ length: 10 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  volume: Math.floor(Math.random() * 1000) + 100,
}));

// Updated column definitions for RoW Volume table
export const getRowVolumeColumns = () => [
  { headerName: 'Shift', field: 'shift' },
  { headerName: 'Volume', field: 'volume' },
];

// Generate sample data for the RoW Volume table
export const getRowVolumeData = () => Array.from({ length: 12 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  volume: Math.floor(Math.random() * 1000) + 200,
}));

// Grocery (Complexity) table columns definition
export const getGroceryColumns = () => [
  { headerName: 'Shift', field: 'shift' },
  { headerName: '% (Grocery / Total Volume)', field: 'groceryTotalPercent' },
  { headerName: '% (Grocery / Auto Volume)', field: 'groceryAutoPercent' },
];

// Generate sample data for the Grocery table
export const getGroceryData = () => Array.from({ length: 10 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  groceryTotalPercent: `${Math.floor(Math.random() * 40) + 10}%`,
  groceryAutoPercent: `${Math.floor(Math.random() * 60) + 20}%`,
}));

// Time to CPT Range table columns definition
export const getCptRangeColumns = () => [
  { headerName: 'Shift', field: 'shift' },
  { headerName: '3-6', field: 'range3to6' },
  { headerName: '6-12', field: 'range6to12' },
  { headerName: '12-24', field: 'range12to24' },
  { headerName: '24-30', field: 'range24to30' },
  { headerName: '>30', field: 'rangeOver30' },
];

// Generate sample data for the Time to CPT Range table
export const getCptRangeData = () => Array.from({ length: 8 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  range3to6: Math.floor(Math.random() * 20) + 5,
  range6to12: Math.floor(Math.random() * 30) + 10,
  range12to24: Math.floor(Math.random() * 40) + 15,
  range24to30: Math.floor(Math.random() * 15) + 5,
  rangeOver30: Math.floor(Math.random() * 10) + 2,
}));

// Same Day Ship table columns definition
export const getSameDayShipColumns = () => [
  { headerName: 'Shift', field: 'shift' },
  { headerName: 'Total', field: 'total' },
  { headerName: 'First CPT', field: 'firstCPT' },
  { headerName: 'Second CPT', field: 'secondCPT' },
  { headerName: 'Third CPT', field: 'thirdCPT' },
];

// Generate sample data for the Same Day Ship table
export const getSameDayShipData = () => Array.from({ length: 10 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  total: Math.floor(Math.random() * 100) + 20,
  firstCPT: `${Math.floor(Math.random() * 30) + 70}%`,
  secondCPT: `${Math.floor(Math.random() * 30) + 60}%`,
  thirdCPT: `${Math.floor(Math.random() * 30) + 50}%`,
}));
