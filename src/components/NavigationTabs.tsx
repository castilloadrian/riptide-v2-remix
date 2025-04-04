
import { FC } from 'react';
import { BarChart3, Box, Package, Clock, Bug, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationTabs: FC<NavigationTabProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'planning', label: 'Planning', icon: <Box className="w-5 h-5" />, path: '/' },
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-5 h-5" />, path: '/graphical' },
    { id: 'kitting', label: 'Kitting', icon: <Package className="w-5 h-5" />, path: '/' },
    { id: 'simulation', label: 'Shift Simulation', icon: <Clock className="w-5 h-5" />, path: '/' },
  ];

  const rightTabs = [
    { id: 'bug', icon: <Bug className="w-5 h-5" />, path: '/' },
    { id: 'admin', icon: <Users className="w-5 h-5" />, path: '/' },
  ];

  return (
    <div className="hellofresh-header flex justify-between py-1 px-4">
      <div className="flex">
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
      <div className="flex">
        {rightTabs.map((tab) => (
          <Link 
            to={tab.path}
            key={tab.id}
            className={`header-tab-icon ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
