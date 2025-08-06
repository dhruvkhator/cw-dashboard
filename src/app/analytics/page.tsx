import { AnalyticsCharts } from "./_components/analytics-charts";
import { AnalyticsStats } from "./_components/analytics-stats";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          Analytics
        </h1>
        <p className="text-dark-4 dark:text-dark-6">
          Track your chatbot performance and engagement
        </p>
      </div>
      
      <AnalyticsStats />
      <AnalyticsCharts />
    </div>
  );
}