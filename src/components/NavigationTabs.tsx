
import { FC, useState } from 'react';
import { Box, Package, Clock, Bug, Settings, History, Trash, Shield, Activity, Wave } from 'lucide-react';
import { Link } from 'react-router-dom';
import BugReportModal from './BugReportModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

interface NavigationTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationTabs: FC<NavigationTabProps> = ({ activeTab, setActiveTab }) => {
  const [bugModalOpen, setBugModalOpen] = useState(false);
  const [overrideMode, setOverrideMode] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  
  const tabs = [
    { id: 'planning', label: 'Planning', icon: <Box className="w-5 h-5" />, path: '/' },
    { id: 'live-plan', label: 'Live Plan', icon: <Activity className="w-5 h-5" />, path: '/live-plan' },
    { id: 'kitting', label: 'Kitting', icon: <Package className="w-5 h-5" />, path: '/kitting' },
    { id: 'simulation', label: 'Shift Simulation', icon: <Clock className="w-5 h-5" />, path: '/simulation' },
  ];

  const handlePlanHistory = () => {
    toast({
      title: "Plan History",
      description: "Viewing plan edit history",
    });
  };

  const handleClearSession = () => {
    toast({
      title: "Session Cleared",
      description: "Session state has been cleared",
    });
  };

  return (
    <>
      <div className="hellofresh-header flex justify-between py-1 px-4">
        <div className="flex items-center">
          <Link 
            to="/"
            className="flex items-center mr-6"
            onClick={() => setActiveTab('planning')}
          >
            <Wave className="w-5 h-5 text-white mr-2" />
            <span className="font-medium text-white">Riptide</span>
          </Link>
          {tabs.map((tab) => (
            <Link 
              to={tab.path}
              key={tab.id}
              className={`header-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className="ml-2 text-sm">{tab.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {/* Bug Report Button */}
          <button 
            className="header-tab-icon text-white hover:bg-white/10 p-2 rounded-full"
            onClick={() => setBugModalOpen(true)}
          >
            <Bug className="w-5 h-5" />
          </button>

          {/* Admin Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="header-tab-icon text-white hover:bg-white/10 p-2 rounded-full">
                <Settings className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Override Mode</span>
                  </div>
                  <Switch 
                    checked={overrideMode}
                    onCheckedChange={setOverrideMode}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bug className="w-4 h-4" />
                    <span>Debug Mode</span>
                  </div>
                  <Switch 
                    checked={debugMode}
                    onCheckedChange={setDebugMode}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handlePlanHistory}>
                  <History className="w-4 h-4 mr-2" />
                  <span>Plan Edit History</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleClearSession}>
                  <Trash className="w-4 h-4 mr-2" />
                  <span>Clear Session State</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <BugReportModal open={bugModalOpen} onOpenChange={setBugModalOpen} />
    </>
  );
};

export default NavigationTabs;
