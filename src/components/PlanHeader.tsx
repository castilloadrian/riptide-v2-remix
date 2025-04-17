
import { FC, useState, useEffect } from 'react';
import { ChevronDown, Copy, FileText, Save, Filter, CheckCircle } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipInfoContent } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { sanitizeInput } from '@/lib/utils';

interface PlanHeaderProps {
  planName: string;
  setPlanName: (name: string) => void;
}

const PlanHeader: FC<PlanHeaderProps> = ({ planName, setPlanName }) => {
  const [selectedDC, setSelectedDC] = useState('NYC');
  const [selectedWeek, setSelectedWeek] = useState('Week 23');
  const [selectedVersion, setSelectedVersion] = useState('Version 1.0');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Define handleScroll function first before using it
    const handleScroll = () => {
      // Get position of the top section
      const topSection = document.getElementById('plan-header-top');
      if (topSection) {
        // Check if the bottom of the top section is above the viewport
        const topSectionRect = topSection.getBoundingClientRect();
        setIsSticky(topSectionRect.bottom <= 0);
      }
    };
    
    // Initial check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (action: string) => {
    toast({
      title: `${action} action triggered`,
      description: `The ${action} action has been initiated.`,
      duration: 2000,
    });
  };

  const handlePlanNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value, 100, true);
    setPlanName(sanitizedValue);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="p-4" id="plan-header-top">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-medium">🔍 Plan</span>
          </div>
          <div className="text-right">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="secondary" className="hover:bg-secondary/80 cursor-help px-3 py-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                      <span>Approved</span>
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipInfoContent side="bottom" align="end" className="bg-white dark:bg-gray-800 p-3 max-w-sm">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Approved at 4/1/25 12:00 PM EST By Frodo Baggins</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Updated at 4/1/25 1:00 EST</span> By Samwise Gamgee
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Scan Data</span> Last received 4/1/25 1:15 PM EST
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">ODL/PDL Data</span> Last received 4/1/25 1:30 PM EST
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">SHN Data</span> Last received 4/1/25 1:45 PM EST
                      </p>
                    </div>
                  </div>
                </TooltipInfoContent>
              </Tooltip>
            </TooltipProvider>
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
      </div>

      {/* Fixed bottom section */}
      <div 
        className={`fixed z-50 bg-white dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700 shadow-md ${isSticky ? 'top-0' : 'top-16'} left-0 right-0`}
      >
        <div className="mt-2 flex justify-between items-end container mx-auto max-w-7xl px-2 md:px-4">
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
          
          <div className="space-y-2">
            <div className="flex gap-2 justify-end items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="icon" className="h-10 w-10">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-3">
                        <div className="space-y-2">
                          <h4 className="font-medium mb-2">Planning Levers</h4>
                          <div className="space-y-1">
                            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm">
                              Enter Constraints
                            </button>
                            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm">
                              TI Autostore
                            </button>
                            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm">
                              Print to PDL
                            </button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Planning Levers</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10" 
                      onClick={() => handleButtonClick('Copy')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Plan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10"
                      onClick={() => handleButtonClick('File')}
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Create New Plan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10"
                      onClick={() => handleButtonClick('Save')}
                    >
                      <Save className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save Plan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <button className="px-4 py-1 rounded bg-primary text-white text-sm ml-auto block mt-4">
              Approve
            </button>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className={`h-32 ${isSticky ? 'block' : 'hidden'}`}></div>
    </div>
  );
};

export default PlanHeader;
