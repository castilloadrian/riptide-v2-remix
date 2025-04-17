
import { FC, useState } from 'react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface PlanSelectorsProps {
  selectedDC: string;
  setSelectedDC: (value: string) => void;
  selectedWeek: string;
  setSelectedWeek: (value: string) => void;
  selectedVersion: string;
  setSelectedVersion: (value: string) => void;
}

const PlanSelectors: FC<PlanSelectorsProps> = ({
  selectedDC,
  setSelectedDC,
  selectedWeek,
  setSelectedWeek,
  selectedVersion,
  setSelectedVersion
}) => {
  return (
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
  );
};

export default PlanSelectors;
