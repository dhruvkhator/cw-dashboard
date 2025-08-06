"use client";

import { useEffect, useState } from "react";

// Mock chart data for admin
const mockAdminChartData = {
  chatsOverTime: [
    { date: "2024-01-01", chats: 245 },
    { date: "2024-01-02", chats: 312 },
    { date: "2024-01-03", chats: 198 },
    { date: "2024-01-04", chats: 467 },
    { date: "2024-01-05", chats: 523 },
    { date: "2024-01-06", chats: 689 },
    { date: "2024-01-07", chats: 795 },
  ],
  clientActivity: [
    { client: "Acme Corp", chats: 1250 },
    { client: "TechStart Inc", chats: 890 },
    { client: "Global Solutions", chats: 2100 },
    { client: "StartupXYZ", chats: 650 },
    { client: "Enterprise Co", chats: 1800 },
  ],
};

export function AdminAnalyticsCharts() {
  const [mounted, setMounted] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <div className="h-64 animate-pulse bg-gray-200 rounded dark:bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
            <div className="h-64 animate-pulse bg-gray-200 rounded dark:bg-gray-700" />
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
            <div className="h-64 animate-pulse bg-gray-200 rounded dark:bg-gray-700" />
          </div>
        </div>
      </div>
    );
  }

  const maxChats = Math.max(...mockAdminChartData.clientActivity.map(d => d.chats));

  return (
    <div className="space-y-6">
      {/* Platform Chats Over Time */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-dark dark:text-white">
            Platform Chats Over Time
          </h3>
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="">All Clients</option>
            {mockAdminChartData.clientActivity.map(client => (
              <option key={client.client} value={client.client}>{client.client}</option>
            ))}
          </select>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {mockAdminChartData.chatsOverTime.map((data, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div
                className="w-8 bg-primary rounded-t"
                style={{
                  height: `${(data.chats / 1000) * 200}px`,
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Client Activity */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">
            Client Activity
          </h3>
          <div className="space-y-4">
            {mockAdminChartData.clientActivity.map((client, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-dark dark:text-white">{client.client}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(client.chats / maxChats) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-dark dark:text-white w-12 text-right">
                    {client.chats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bot Status Distribution */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">
            Bot Status Distribution
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-dark dark:text-white">Active</span>
              </div>
              <span className="text-sm font-medium text-dark dark:text-white">42 (89%)</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm text-dark dark:text-white">Inactive</span>
              </div>
              <span className="text-sm font-medium text-dark dark:text-white">5 (11%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}