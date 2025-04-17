
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

const Admin = () => {
  const [planName, setPlanName] = useState('Admin Dashboard');

  return (
    <PageLayout activeTab="admin" title="Admin Dashboard" showPlanHeader={false} planName={planName} setPlanName={setPlanName}>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        This page will contain admin functionality, including user management, permissions control,
        and system settings.
      </p>
      
      <div className="p-4 border rounded-md bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground">
        <p className="font-medium">Coming soon:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
          <li>User Management</li>
          <li>Roles & Permissions</li>
          <li>System Settings</li>
          <li>Audit Logs</li>
          <li>Account Settings</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Admin;
