import { AdminAnalyticsStats } from "./_components/admin-analytics-stats";
import { AdminAnalyticsCharts } from "./_components/admin-analytics-charts";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          Platform Analytics
        </h1>
        <p className="text-dark-4 dark:text-dark-6">
          Monitor platform-wide performance and client activity
        </p>
      </div>
      
      <AdminAnalyticsStats />
      <AdminAnalyticsCharts />
    </div>
  );
}