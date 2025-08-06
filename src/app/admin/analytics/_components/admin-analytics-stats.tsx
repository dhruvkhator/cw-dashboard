"use client";

import { useState } from "react";

type ChangeType = "positive" | "negative" | "neutral";

const stats: Array<{
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
}> = [
  {
    title: "Total Bots",
    value: "47",
    change: "+5.2%",
    changeType: "positive",
  },
  {
    title: "Total Chats",
    value: "12,847",
    change: "+18.7%",
    changeType: "positive",
  },
  {
    title: "Active Clients",
    value: "23",
    change: "-2.1%",
    changeType: "negative",
  },
  {
    title: "Platform Uptime",
    value: "99.9%",
    change: "0%",
    changeType: "neutral",
  },
];

export function AdminAnalyticsStats() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  return (
    <div className="space-y-6">
      {/* Period Filter */}
      <div className="flex justify-end">
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {/* Stats Grid */}
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
    </div>
  );
}