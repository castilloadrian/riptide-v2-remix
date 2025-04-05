
import { FC, useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Paperclip } from 'lucide-react';

interface BugReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BugReportModal: FC<BugReportModalProps> = ({ open, onOpenChange }) => {
  const [title, setTitle] = useState('');
  const [expectedBehavior, setExpectedBehavior] = useState('');
  const [actualBehavior, setActualBehavior] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');

  const handleSubmit = () => {
    // In a real app, this would submit the bug report to a backend
    toast({
      title: "Bug report submitted",
      description: "Thank you for your feedback!",
    });
    onOpenChange(false);
    
    // Reset form
    setTitle('');
    setExpectedBehavior('');
    setActualBehavior('');
    setStepsToReproduce('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submit Bug Report</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="DC" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dc1">DC 1</SelectItem>
                <SelectItem value="dc2">DC 2</SelectItem>
                <SelectItem value="dc3">DC 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="w1">Week 1</SelectItem>
                <SelectItem value="w2">Week 2</SelectItem>
                <SelectItem value="w3">Week 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Version" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="v1">Version 1.0</SelectItem>
                <SelectItem value="v2">Version 2.0</SelectItem>
                <SelectItem value="v3">Version 3.0</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Input 
          placeholder="Title (255 char limit)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          maxLength={255}
          className="w-full my-4"
        />
        
        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ui">UI</SelectItem>
                <SelectItem value="functionality">Functionality</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Modules" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="kitting">Kitting</SelectItem>
                <SelectItem value="simulation">Simulation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="col-span-1">
            <Textarea 
              placeholder="Expected Behavior" 
              value={expectedBehavior} 
              onChange={(e) => setExpectedBehavior(e.target.value)} 
              className="w-full h-[150px]"
            />
          </div>
          <div className="col-span-1">
            <Textarea 
              placeholder="Actual Behavior" 
              value={actualBehavior} 
              onChange={(e) => setActualBehavior(e.target.value)} 
              className="w-full h-[150px]"
            />
          </div>
        </div>
        
        <Textarea 
          placeholder="Steps to Reproduce" 
          value={stepsToReproduce} 
          onChange={(e) => setStepsToReproduce(e.target.value)} 
          className="w-full h-[200px] my-4"
        />
        
        <DialogFooter className="flex justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <Paperclip className="h-4 w-4" />
            Attach Files
          </Button>
          <Button onClick={handleSubmit} className="px-8">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BugReportModal;
