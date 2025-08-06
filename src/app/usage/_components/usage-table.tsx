"use client";

import { useState } from "react";

// Mock usage data
const mockUsageData = [
  {
    id: 1,
    botName: "Customer Support Bot",
    date: "2024-01-15",
    tokensUsed: 1250,
    cost: "$0.25",
  },
  {
    id: 2,
    botName: "Sales Assistant",
    date: "2024-01-15",
    tokensUsed: 890,
    cost: "$0.18",
  },
  {
    id: 3,
    botName: "FAQ Helper",
    date: "2024-01-14",
    tokensUsed: 2100,
    cost: "$0.42",
  },
  {
    id: 4,
    botName: "Customer Support Bot",
    date: "2024-01-14",
    tokensUsed: 1680,
    cost: "$0.34",
  },
  {
    id: 5,
    botName: "Sales Assistant",
    date: "2024-01-13",
    tokensUsed: 750,
    cost: "$0.15",
  },
];

export function UsageTable() {
  const [usageData] = useState(mockUsageData);
  const totalTokens = usageData.reduce((sum, item) => sum + item.tokensUsed, 0);
  const totalCost = usageData.reduce((sum, item) => sum + parseFloat(item.cost.replace('$', '')), 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <h3 className="text-sm font-medium text-dark-4 dark:text-dark-6">
            Total Tokens Used
          </h3>
          <p className="text-2xl font-bold text-dark dark:text-white">
            {totalTokens.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <h3 className="text-sm font-medium text-dark-4 dark:text-dark-6">
            Total Cost
          </h3>
          <p className="text-2xl font-bold text-dark dark:text-white">
            ${totalCost.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-dark">
          <h3 className="text-sm font-medium text-dark-4 dark:text-dark-6">
            Avg Cost per Token
          </h3>
          <p className="text-2xl font-bold text-dark dark:text-white">
            ${(totalCost / totalTokens * 1000).toFixed(4)}
          </p>
        </div>
      </div>

      {/* Usage Table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-dark">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-dark dark:text-white mb-6">
            Usage History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                    Bot Name
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                    Date
                  </th>
                  <th className="pb-3 text-right text-sm font-medium text-dark-4 dark:text-dark-6">
                    Tokens Used
                  </th>
                  <th className="pb-3 text-right text-sm font-medium text-dark-4 dark:text-dark-6">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {usageData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-4 text-sm font-medium text-dark dark:text-white">
                      {item.botName}
                    </td>
                    <td className="py-4 text-sm text-dark-4 dark:text-dark-6">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 text-right text-sm text-dark dark:text-white">
                      {item.tokensUsed.toLocaleString()}
                    </td>
                    <td className="py-4 text-right text-sm font-medium text-dark dark:text-white">
                      {item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}