"use client";

import Link from "next/link";

// Mock data for client overview
const mockClientData = {
  stats: {
    activeBots: 3,
    totalChats: 1247,
    avgResponseTime: "1.2s",
    uptime: "99.9%"
  },
  bots: [
    {
      id: 1,
      name: "Customer Support Bot",
      status: "active",
      lastActive: "2 minutes ago",
      todayChats: 45,
      health: "excellent"
    },
    {
      id: 2,
      name: "Sales Assistant",
      status: "inactive",
      lastActive: "1 hour ago", 
      todayChats: 0,
      health: "warning"
    },
    {
      id: 3,
      name: "FAQ Helper",
      status: "active",
      lastActive: "5 minutes ago",
      todayChats: 23,
      health: "good"
    }
  ],
  recentActivity: [
    { time: "2 min ago", event: "Customer Support Bot answered a query", type: "success" },
    { time: "15 min ago", event: "FAQ Helper resolved a ticket", type: "success" },
    { time: "1 hour ago", event: "Sales Assistant went offline", type: "warning" },
    { time: "2 hours ago", event: "Customer Support Bot handled 10 chats", type: "info" },
  ]
};

export function ClientOverview() {
  const { stats, bots, recentActivity } = mockClientData;

  const getHealthColor = (health: string) => {
    switch (health) {
      case "excellent": return "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20";
      case "good": return "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20";
      case "warning": return "text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/20";
      default: return "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20"
      : "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20";
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dark dark:text-white mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-dark-4 dark:text-dark-6 text-lg">
              Your chatbots are running smoothly. Here&apos;s what&apos;s happening today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 bg-white/50 rounded-xl px-4 py-2 dark:bg-gray-800/50">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-dark dark:text-white">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-dark dark:text-white">{stats.activeBots}</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Active Bots</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center dark:bg-blue-900/20">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-dark dark:text-white">{stats.totalChats}</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Total Chats</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center dark:bg-green-900/20">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-dark dark:text-white">{stats.avgResponseTime}</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Avg Response</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center dark:bg-purple-900/20">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-dark dark:text-white">{stats.uptime}</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bot Health Status */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-dark dark:text-white">Bot Health Status</h2>
                <Link 
                  href="/agents"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View All →
                </Link>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {bots.map((bot) => (
                <div key={bot.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl dark:bg-gray-800/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${bot.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <h3 className="font-medium text-dark dark:text-white">{bot.name}</h3>
                      <p className="text-sm text-dark-4 dark:text-dark-6">Last active: {bot.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-dark dark:text-white">{bot.todayChats} chats today</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getHealthColor(bot.health)}`}>
                        {bot.health}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold text-dark dark:text-white">Recent Activity</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="text-sm text-dark dark:text-white">{activity.event}</p>
                    <p className="text-xs text-dark-4 dark:text-dark-6">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 dark:bg-gray-dark dark:border-gray-800">
        <h2 className="text-xl font-semibold text-dark dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/agents"
            className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-dark dark:text-white">Manage Agents</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Configure your bots</p>
            </div>
          </Link>

          <Link
            href="/analytics"
            className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group dark:bg-blue-900/10 dark:hover:bg-blue-900/20"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors dark:bg-blue-900/20">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-dark dark:text-white">View Analytics</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Performance insights</p>
            </div>
          </Link>

          <Link
            href="/usage"
            className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group dark:bg-green-900/10 dark:hover:bg-green-900/20"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors dark:bg-green-900/20">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-dark dark:text-white">Check Usage</p>
              <p className="text-sm text-dark-4 dark:text-dark-6">Monitor costs</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}