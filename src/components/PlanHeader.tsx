
import { FC, useState } from 'react';
import { ChevronDown, Edit } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface PlanHeaderProps {
  planName: string;
  setPlanName: (name: string) => void;
}

const PlanHeader: FC<PlanHeaderProps> = ({ planName, setPlanName }) => {
  const [selectedDC, setSelectedDC] = useState('NYC');
  const [selectedWeek, setSelectedWeek] = useState('Week 23');
  const [selectedVersion, setSelectedVersion] = useState('Version 1.0');

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
          <Select value={selectedDC} onValueChange={setSelectedDC}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select DC" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Distribution Centers</SelectLabel>
                <SelectItem value="NYC">NYC</SelectItem>
                <SelectItem value="LAX">LAX</SelectItem>
                <SelectItem value="CHI">CHI</SelectItem>
                <SelectItem value="DFW">DFW</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Week</SelectLabel>
                <SelectItem value="Week 23">Week 23</SelectItem>
                <SelectItem value="Week 24">Week 24</SelectItem>
                <SelectItem value="Week 25">Week 25</SelectItem>
                <SelectItem value="Week 26">Week 26</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Select value={selectedVersion} onValueChange={setSelectedVersion}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Version" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Version</SelectLabel>
                <SelectItem value="Version 1.0">Version 1.0</SelectItem>
                <SelectItem value="Version 1.1">Version 1.1</SelectItem>
                <SelectItem value="Version 2.0">Version 2.0</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <div className="relative w-1/2">
          <div className="flex items-center gap-4"> {/* Increased gap from 2 to 4 for more padding */}
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
          <button className="px-4 py-1 rounded bg-primary text-white text-sm ml-auto block mt-4">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanHeader;
