"use client";

type ChangeType = "positive" | "negative" | "neutral";

const stats: Array<{
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
}> = [
  {
    title: "Total Chats",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive",
  },
  {
    title: "Active Bots",
    value: "3",
    change: "0%",
    changeType: "neutral",
  },
  {
    title: "Avg Response Time",
    value: "1.2s",
    change: "-8.3%",
    changeType: "positive", // Lower response time is good
  },
  {
    title: "User Satisfaction",
    value: "94%",
    change: "+2.1%",
    changeType: "positive",
  },
];

export function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-dark-4 dark:text-dark-6">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-dark dark:text-white">
                {stat.value}
              </p>
            </div>
            <div
              className={`text-sm font-medium ${
                stat.changeType === "positive"
                  ? "text-green-600 dark:text-green-400"
                  : stat.changeType === "negative"
                  ? "text-red-600 dark:text-red-400"
                  : "text-dark-4 dark:text-dark-6"
              }`}
            >
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}