
import PageLayout from '@/components/PageLayout';

const Home = () => {
  return (
    <PageLayout activeTab="" showPlanHeader={false}>
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">
          Riptide
        </h1>
      </div>
    </PageLayout>
  );
};

export default Home;
