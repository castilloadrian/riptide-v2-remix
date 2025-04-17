
import { FC, useState } from 'react';
import { Box, Package, Clock, Bug, Users, Waves, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import BugReportModal from './BugReportModal';

interface NavigationTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationTabs: FC<NavigationTabProps> = ({ activeTab, setActiveTab }) => {
  const [bugModalOpen, setBugModalOpen] = useState(false);
  
  const tabs = [
    { id: 'planning', label: 'Planning', icon: <Box className="w-5 h-5" />, path: '/' },
    { id: 'live-plan', label: 'Live Plan', icon: <Activity className="w-5 h-5" />, path: '/live-plan' },
    { id: 'kitting', label: 'Kitting', icon: <Package className="w-5 h-5" />, path: '/kitting' },
    { id: 'simulation', label: 'Shift Simulation', icon: <Clock className="w-5 h-5" />, path: '/simulation' },
  ];

  const rightTabs = [
    { 
      id: 'bug', 
      icon: <Bug className="w-5 h-5" />, 
      action: () => setBugModalOpen(true),
      path: null
    },
    { id: 'admin', icon: <Users className="w-5 h-5" />, path: '/admin' },
  ];

  return (
    <>
      <div className="hellofresh-header flex justify-between py-1 px-4">
        <div className="flex items-center">
          <Link 
            to="/"
            className="flex items-center mr-6"
            onClick={() => setActiveTab('planning')}
          >
            <Waves className="w-5 h-5 text-white mr-2" />
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
          {rightTabs.map((tab) => (
            tab.path ? (
              <Link 
                to={tab.path}
                key={tab.id}
                className="header-tab-icon text-white hover:bg-white/10 p-2 rounded-full"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
              </Link>
            ) : (
              <button 
                key={tab.id}
                className="header-tab-icon text-white hover:bg-white/10 p-2 rounded-full"
                onClick={tab.action}
              >
                {tab.icon}
              </button>
            )
          ))}
        </div>
      </div>
      
      <BugReportModal open={bugModalOpen} onOpenChange={setBugModalOpen} />
    </>
  );
};

export default NavigationTabs;
