
// Define column definitions for Plan Visualization table
export const getPlanVisualizationColumns = () => [
  { headerName: 'Shift', field: 'shift', width: 120 },
  { headerName: 'Kits', field: 'kits', width: 100 },
  { headerName: 'Core Boxes', field: 'coreBoxes', width: 120 },
  { headerName: 'GL Boxes', field: 'glBoxes', width: 120 },
  { headerName: 'Same Day', field: 'sameDay', width: 120 },
  { headerName: 'First CPT', field: 'firstCpt', width: 120 },
  { 
    headerName: 'Progress', 
    field: 'progress',
    width: 150,
    cellRenderer: (params: any) => {
      const risk = params.data.risk;
      return `<div class="flex items-center gap-2">
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div class="risk-bar ${risk === 'high' ? 'risk-red' : risk === 'medium' ? 'risk-yellow' : 'risk-green'}" 
                       style="width: ${params.data.percent}%; height: 0.625rem; border-radius: 0.25rem;"></div>
                </div>
                <span>${params.data.percent}%</span>
              </div>`;
    }
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
  { headerName: 'Shift', field: 'shift', width: 120 },
  { headerName: 'Volume', field: 'volume', width: 120 },
];

// Generate sample data for the P2PDL table
export const getP2PDLData = () => Array.from({ length: 10 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  volume: Math.floor(Math.random() * 1000) + 100,
}));

// Updated column definitions for RoW Volume table
export const getRowVolumeColumns = () => [
  { headerName: 'Shift', field: 'shift', width: 140 },
  { headerName: 'Volume', field: 'volume', width: 160 },
];

// Generate sample data for the RoW Volume table
export const getRowVolumeData = () => Array.from({ length: 12 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  volume: Math.floor(Math.random() * 1000) + 200,
}));

// Grocery (Complexity) table columns definition
export const getGroceryColumns = () => [
  { headerName: 'Shift', field: 'shift', width: 120 },
  { headerName: '% (Grocery / Total Volume)', field: 'groceryTotalPercent', width: 200 },
  { headerName: '% (Grocery / Auto Volume)', field: 'groceryAutoPercent', width: 200 },
];

// Generate sample data for the Grocery table
export const getGroceryData = () => Array.from({ length: 10 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  groceryTotalPercent: `${Math.floor(Math.random() * 40) + 10}%`,
  groceryAutoPercent: `${Math.floor(Math.random() * 60) + 20}%`,
}));

// Time to CPT Range table columns definition
export const getCptRangeColumns = () => [
  { headerName: 'Shift', field: 'shift', width: 120 },
  { headerName: '3-6', field: 'range3to6', width: 100 },
  { headerName: '6-12', field: 'range6to12', width: 100 },
  { headerName: '12-24', field: 'range12to24', width: 100 },
  { headerName: '24-30', field: 'range24to30', width: 100 },
  { headerName: '>30', field: 'rangeOver30', width: 100 },
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
  { headerName: 'Shift', field: 'shift', width: 120 },
  { headerName: 'Total', field: 'total', width: 100 },
  { headerName: 'First CPT', field: 'firstCPT', width: 120 },
  { headerName: 'Second CPT', field: 'secondCPT', width: 120 },
  { headerName: 'Third CPT', field: 'thirdCPT', width: 120 },
];

// Generate sample data for the Same Day Ship table
export const getSameDayShipData = () => Array.from({ length: 10 }, (_, i) => ({
  shift: i % 2 === 0 ? 'Morning' : 'Evening',
  total: Math.floor(Math.random() * 100) + 20,
  firstCPT: `${Math.floor(Math.random() * 30) + 70}%`,
  secondCPT: `${Math.floor(Math.random() * 30) + 60}%`,
  thirdCPT: `${Math.floor(Math.random() * 30) + 50}%`,
}));
