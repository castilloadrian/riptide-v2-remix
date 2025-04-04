
import { FC } from 'react';
import { BarChart3, Box, FileText, Grid } from 'lucide-react';

interface NavigationTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationTabs: FC<NavigationTabProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'planning', label: 'Planning', icon: <Box className="w-5 h-5" /> },
    { id: 'graphical', label: 'Graphical', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'forms', label: 'Forms', icon: <FileText className="w-5 h-5" /> },
    { id: 'configurations', label: 'Configurations', icon: <Grid className="w-5 h-5" /> },
  ];

  return (
    <div className="hellofresh-header flex">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`header-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.icon}
          <span className="ml-1 text-xs">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavigationTabs;
