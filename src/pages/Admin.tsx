
import PageLayout from '@/components/PageLayout';
import { Shield, UserCog, Users, Settings, FileText } from 'lucide-react';

const Admin = () => {
  return (
    <PageLayout activeTab="admin" title="Admin Dashboard" showPlanHeader={false}>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Welcome to the admin dashboard. Manage users, permissions, and system settings here.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-medium">User Management</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Add, edit, and delete user accounts
          </p>
        </div>
        
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="font-medium">Roles & Permissions</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage access control and user roles
          </p>
        </div>
        
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Settings className="h-5 w-5" />
            </div>
            <h3 className="font-medium">System Settings</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Configure global application settings
          </p>
        </div>
        
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="font-medium">Audit Logs</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Track system activity and changes
          </p>
        </div>
        
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <UserCog className="h-5 w-5" />
            </div>
            <h3 className="font-medium">Account Settings</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage your admin account details
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Admin;
