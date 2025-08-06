"use client";

import { useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { AdminCreateBotForm } from "./admin-create-bot-form";
import { AdminEditBotForm } from "./admin-edit-bot-modal-form";

// Mock data for all bots across clients
const mockBots = [
  {
    id: 1,
    clientName: "Acme Corp",
    botName: "Customer Support Bot",
    status: "Active",
    createdDate: "2024-01-15",
  },
  {
    id: 2,
    clientName: "Acme Corp",
    botName: "Sales Assistant",
    status: "Inactive",
    createdDate: "2024-01-10",
  },
  {
    id: 3,
    clientName: "TechStart Inc",
    botName: "FAQ Helper",
    status: "Active",
    createdDate: "2024-01-05",
  },
  {
    id: 4,
    clientName: "Global Solutions",
    botName: "Support Bot",
    status: "Active",
    createdDate: "2024-01-12",
  },
  {
    id: 5,
    clientName: "TechStart Inc",
    botName: "Lead Qualifier",
    status: "Active",
    createdDate: "2024-01-08",
  },
];

export function AdminBotsTable() {
  const [bots, setBots] = useState(mockBots);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingBot, setEditingBot] = useState<typeof mockBots[0] | null>(null);

  const uniqueClients = Array.from(new Set(mockBots.map(bot => bot.clientName)));

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.botName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bot.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClient = selectedClient === "" || bot.clientName === selectedClient;
    return matchesSearch && matchesClient;
  });

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-dark">
      <div className="p-6">
        {/* Filters */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bots or clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 text-sm text-dark placeholder-dark-5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-dark-6"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-dark-4 dark:text-dark-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <option value="">All Clients</option>
              {uniqueClients.map(client => (
                <option key={client} value={client}>{client}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-dark-4 dark:text-dark-6">
              {filteredBots.length} of {bots.length} bots
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Create New Bot
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                  Client Name
                </th>
                <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                  Bot Name
                </th>
                <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                  Status
                </th>
                <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                  Created Date
                </th>
                <th className="pb-3 text-left text-sm font-medium text-dark-4 dark:text-dark-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredBots.map((bot) => (
                <tr key={bot.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-4 text-sm font-medium text-dark dark:text-white">
                    {bot.clientName}
                  </td>
                  <td className="py-4 text-sm font-medium text-dark dark:text-white">
                    {bot.botName}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        bot.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {bot.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-dark-4 dark:text-dark-6">
                    {new Date(bot.createdDate).toLocaleDateString()}
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => setEditingBot(bot)}
                      className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Bot Modal */}
      {/* Create Bot Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Bot"
        size="xl"
      >
        <AdminCreateBotForm onClose={() => setIsCreateModalOpen(false)} />
      </Modal>

      {/* Edit Bot Modal */}
      {editingBot && (
        <Modal
          isOpen={true}
          onClose={() => setEditingBot(null)}
          title={`Edit ${editingBot.botName}`}
          size="xl"
        >
          <AdminEditBotForm 
            bot={editingBot}
            onClose={() => setEditingBot(null)} 
          />
        </Modal>
      )}
    </div>
  );
}