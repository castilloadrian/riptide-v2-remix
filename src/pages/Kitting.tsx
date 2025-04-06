
import PageLayout from '@/components/PageLayout';

const Kitting = () => {
  return (
    <PageLayout activeTab="kitting" title="Kitting Dashboard">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        This page will contain kitting management functionality, including kit tracking, inventory management,
        and assembly instructions.
      </p>
      
      <div className="p-4 border rounded-md bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground">
        <p className="font-medium">Coming soon:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Kit inventory tracking</li>
          <li>Assembly instructions</li>
          <li>QA verification</li>
          <li>Performance analytics</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Kitting;
