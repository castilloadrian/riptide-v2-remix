
import { FC } from 'react';
import { Filter, Copy, FileText, Save } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipInfoContent
} from "@/components/ui/tooltip";

const ActionButtons: FC = () => {
  const handleButtonClick = (action: string) => {
    toast({
      title: `${action} action triggered`,
      description: `The ${action} action has been initiated.`,
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col items-end">
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
            <TooltipInfoContent>
              <p>Planning Levers</p>
            </TooltipInfoContent>
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
            <TooltipInfoContent>
              <p>Copy Plan</p>
            </TooltipInfoContent>
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
            <TooltipInfoContent>
              <p>Create New Plan</p>
            </TooltipInfoContent>
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
            <TooltipInfoContent>
              <p>Save Plan</p>
            </TooltipInfoContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <button className="px-4 py-1 rounded bg-primary text-white text-sm ml-auto block mt-4">
        Approve
      </button>
    </div>
  );
};

export default ActionButtons;
