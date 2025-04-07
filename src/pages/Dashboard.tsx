
import PageLayout from '@/components/PageLayout';

const Graphical = () => {
  return (
    <PageLayout activeTab="dashboard" title="Dashboard">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Welcome to the dashboard view. This page displays key metrics and visualizations.
      </p>
      
      <div className="p-4 border rounded-md bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground">
        <p className="font-medium">Dashboard features:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Production Overview</li>
          <li>Resource Allocation</li>
          <li>Weekly Trends</li>
          <li>Performance Analytics</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Graphical;
