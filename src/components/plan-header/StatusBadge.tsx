
import { FC } from 'react';
import { CheckCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip, 
  TooltipProvider, 
  TooltipTrigger, 
  TooltipInfoContent 
} from "@/components/ui/tooltip";

const StatusBadge: FC = () => {
  return (
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
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Approved at 4/1/25 12:00 PM EST By Frodo Baggins
            </h4>
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
  );
};

export default StatusBadge;
