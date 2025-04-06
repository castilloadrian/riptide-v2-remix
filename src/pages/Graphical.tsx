
import PageLayout from '@/components/PageLayout';

const Graphical = () => {
  return (
    <PageLayout activeTab="dashboard" title="Dashboard">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Welcome to the dashboard view. This page displays key metrics and visualizations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="dashboard-card">
          <h3 className="dashboard-card-header">Production Overview</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">View production metrics and KPIs</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-header">Resource Allocation</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Staff and equipment distribution</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-header">Weekly Trends</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Performance trends over time</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Graphical;
