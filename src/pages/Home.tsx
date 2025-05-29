
import PageLayout from '@/components/PageLayout';

const Home = () => {
  return (
    <PageLayout activeTab="" showPlanHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-7xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Riptide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Production planning and operations management platform
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-lg border border-primary/20">
            <span className="text-sm font-medium text-primary">Planning & Optimization</span>
          </div>
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 px-6 py-3 rounded-lg border border-blue-500/20">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Real-time Operations</span>
          </div>
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 px-6 py-3 rounded-lg border border-purple-500/20">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Analytics & Insights</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
