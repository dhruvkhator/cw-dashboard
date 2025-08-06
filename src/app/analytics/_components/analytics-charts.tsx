"use client";

import { useEffect, useState } from "react";

// Mock chart data
const mockChartData = {
  chatsPerDay: [
    { date: "2024-01-01", chats: 45 },
    { date: "2024-01-02", chats: 52 },
    { date: "2024-01-03", chats: 38 },
    { date: "2024-01-04", chats: 67 },
    { date: "2024-01-05", chats: 73 },
    { date: "2024-01-06", chats: 89 },
    { date: "2024-01-07", chats: 95 },
  ],
  activeHours: [
    { hour: "00:00", activity: 5 },
    { hour: "06:00", activity: 15 },
    { hour: "09:00", activity: 45 },
    { hour: "12:00", activity: 78 },
    { hour: "15:00", activity: 65 },
    { hour: "18:00", activity: 82 },
    { hour: "21:00", activity: 35 },
  ],
};

export function AnalyticsCharts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <div className="h-64 animate-pulse bg-gray-200 rounded dark:bg-gray-700" />
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <div className="h-64 animate-pulse bg-gray-200 rounded dark:bg-gray-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Chats Per Day Chart */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
        <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">
          Chats Per Day
        </h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {mockChartData.chatsPerDay.map((data, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div
                className="w-8 bg-primary rounded-t"
                style={{
                  height: `${(data.chats / 100) * 200}px`,
                  minHeight: "4px",
                }}
              />
              <span className="text-xs text-dark-4 dark:text-dark-6 transform -rotate-45">
                {new Date(data.date).toLocaleDateString("en-US", { 
                  month: "short", 
                  day: "numeric" 
                })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active Hours Chart */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
        <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">
          Activity by Hour
        </h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {mockChartData.activeHours.map((data, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div
                className="w-8 bg-green-500 rounded-t"
                style={{
                  height: `${(data.activity / 100) * 200}px`,
                  minHeight: "4px",
                }}
              />
              <span className="text-xs text-dark-4 dark:text-dark-6">
                {data.hour}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}