
import { FC, useState, useEffect } from 'react';
import PlanSelectors from './plan-header/PlanSelectors';
import PlanNameInput from './plan-header/PlanNameInput';
import StatusBadge from './plan-header/StatusBadge';
import ActionButtons from './plan-header/ActionButtons';

interface PlanHeaderProps {
  planName: string;
  setPlanName: (name: string) => void;
}

const PlanHeader: FC<PlanHeaderProps> = ({ planName, setPlanName }) => {
  const [selectedDC, setSelectedDC] = useState('NYC');
  const [selectedWeek, setSelectedWeek] = useState('Week 23');
  const [selectedVersion, setSelectedVersion] = useState('Version 1.0');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-medium">🔍 Plan</span>
          </div>
        </div>

        <PlanSelectors
          selectedDC={selectedDC}
          setSelectedDC={setSelectedDC}
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
        />
      </div>

      <div className={`bg-white dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700 shadow-sm
        ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto">
          <div className="mt-2 flex justify-between items-end">
            <PlanNameInput planName={planName} setPlanName={setPlanName} />
            <div className="space-y-2 w-full flex flex-col items-end">
              <div className="flex items-center gap-4 mb-4 self-end">
                <StatusBadge />
              </div>
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
      
      {isScrolled && <div className="h-[116px]"></div>}
    </div>
  );
};

export default PlanHeader;
