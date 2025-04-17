
import { FC } from 'react';
import { sanitizeInput } from '@/lib/utils';

interface PlanNameInputProps {
  planName: string;
  setPlanName: (name: string) => void;
}

const PlanNameInput: FC<PlanNameInputProps> = ({ planName, setPlanName }) => {
  const handlePlanNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value, 100, true);
    setPlanName(sanitizedValue);
  };

  return (
    <div className="relative w-1/2">
      <div className="flex items-center">
        <div className="w-full">
          <div className="text-sm font-medium mb-1">Plan Name</div>
          <input
            type="text"
            className="border-b w-full py-1 focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            value={planName}
            onChange={handlePlanNameChange}
            maxLength={100}
          />
        </div>
      </div>
      <button className="mt-2 px-4 py-1 border rounded bg-blue-50 text-blue-600 text-sm dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800">
        Update
      </button>
    </div>
  );
};

export default PlanNameInput;
