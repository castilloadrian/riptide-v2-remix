
import { FC } from 'react';
import CollapsibleSection from './CollapsibleSection';
import DataTable from './DataTable';

const HeadcountSection: FC = () => {
  // Define column definitions for AG Grid
  const columnDefs = [
    { headerName: 'Shift', field: 'shift', width: 150 },
    { headerName: 'AB', field: 'ab', width: 80 },
    { headerName: 'AUTO', field: 'auto', width: 80 },
    { headerName: 'CORE', field: 'core', width: 80 },
    { headerName: 'CP', field: 'cp', width: 80 },
    { headerName: 'EP', field: 'ep', width: 80 },
    { headerName: 'EXTRA', field: 'extra', width: 80 },
    { headerName: 'GL', field: 'gl', width: 80 },
    { headerName: 'KT', field: 'kt', width: 80 },
    { headerName: 'TH', field: 'th', width: 80 },
    { headerName: 'Total', field: 'total', width: 100 },
  ];

  // Sample data based on the provided image
  const rowData = [
    { shift: 'Weds-1-Day', ab: 4, auto: 0, core: 0, cp: 0, ep: 0, extra: 0, gl: 0, kt: 51, th: 0, total: 55 },
    { shift: 'Weds-1-Night', ab: 0, auto: 0, core: 0, cp: 0, ep: 0, extra: 0, gl: 0, kt: 38, th: 0, total: 38 },
    { shift: 'Thurs-1-Day', ab: 4, auto: 44, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 32, th: 0, total: 97 },
    { shift: 'Thurs-1-Night', ab: 0, auto: 33, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 7, th: 0, total: 57 },
    { shift: 'Fri-Day', ab: 4, auto: 33, core: 0, cp: 0, ep: 0, extra: 0, gl: 0, kt: 38, th: 0, total: 75 },
    { shift: 'Fri-Night', ab: 0, auto: 33, core: 0, cp: 0, ep: 0, extra: 0, gl: 0, kt: 7, th: 0, total: 40 },
    { shift: 'Sat-Day', ab: 4, auto: 33, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 32, th: 0, total: 86 },
    { shift: 'Sat-Night', ab: 0, auto: 33, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 7, th: 0, total: 57 },
    { shift: 'Sun-Day', ab: 4, auto: 44, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 45, th: 0, total: 110 },
    { shift: 'Sun-Night', ab: 0, auto: 33, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 19, th: 0, total: 69 },
    { shift: 'Mon-Day', ab: 4, auto: 44, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 38, th: 0, total: 103 },
    { shift: 'Mon-Night', ab: 0, auto: 33, core: 0, cp: 0, ep: 0, extra: 0, gl: 0, kt: 13, th: 0, total: 46 },
    { shift: 'Tues-Day', ab: 8, auto: 44, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 32, th: 0, total: 101 },
    { shift: 'Tues-Night', ab: 0, auto: 33, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 7, th: 0, total: 57 },
    { shift: 'Weds-2-Day', ab: 0, auto: 0, core: 0, cp: 0, ep: 17, extra: 0, gl: 0, kt: 0, th: 0, total: 17 },
    { shift: 'Weds-2-Night', ab: 0, auto: 0, core: 0, cp: 0, ep: 0, extra: 0, gl: 0, kt: 0, th: 0, total: 0 }
  ];

  return (
    <CollapsibleSection title="Headcount">
      <div>
        <h3 className="font-medium mb-2">Needed Headcount</h3>
        <div className="overflow-x-auto">
          <DataTable
            columnDefs={columnDefs}
            rowData={rowData}
            height="600px"
          />
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default HeadcountSection;
