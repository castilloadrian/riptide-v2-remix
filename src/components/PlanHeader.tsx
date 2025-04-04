
import { FC } from 'react';
import { ChevronDown, Edit } from 'lucide-react';

interface PlanHeaderProps {
  planName: string;
  setPlanName: (name: string) => void;
}

const PlanHeader: FC<PlanHeaderProps> = ({ planName, setPlanName }) => {
  return (
    <div className="bg-white p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary font-medium">🔍 Plan</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-medium text-gray-700">Plan Status</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="relative">
          <div className="border rounded flex items-center p-2 bg-white">
            <span className="text-sm">DC</span>
            <ChevronDown className="ml-auto w-4 h-4" />
          </div>
        </div>
        <div className="relative">
          <div className="border rounded flex items-center p-2 bg-white">
            <span className="text-sm">Week</span>
            <ChevronDown className="ml-auto w-4 h-4" />
          </div>
        </div>
        <div className="relative">
          <div className="border rounded flex items-center p-2 bg-white">
            <span className="text-sm">Version</span>
            <ChevronDown className="ml-auto w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <div className="relative w-1/2">
          <div className="flex items-center gap-2">
            <div className="p-1 border bg-blue-100 rounded">
              <Edit className="w-4 h-4 text-blue-600" />
            </div>
            <div className="w-full">
              <div className="text-sm font-medium mb-1">Plan Name</div>
              <input
                type="text"
                className="border-b w-full py-1 focus:outline-none focus:border-primary"
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
              />
            </div>
          </div>
          <button className="mt-2 px-4 py-1 border rounded bg-blue-50 text-blue-600 text-sm">
            Update
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex gap-2 justify-end">
            <div className="p-2 border rounded bg-gray-100">
              <div className="w-5 h-5 bg-primary/20 rounded" />
            </div>
            <div className="p-2 border rounded bg-gray-100">
              <div className="w-5 h-5 border-2 border-primary rounded" />
            </div>
            <div className="p-2 border rounded bg-gray-100">
              <div className="w-5 h-5 grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-primary/20 rounded-sm" />
                ))}
              </div>
            </div>
          </div>
          <div className="text-xs text-purple-600">
            <div>Drop Calculation</div>
            <div>10 Delivery</div>
            <div>Planned Boxes: 0</div>
          </div>
          <button className="px-4 py-1 rounded bg-primary text-white text-sm ml-auto block">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanHeader;
