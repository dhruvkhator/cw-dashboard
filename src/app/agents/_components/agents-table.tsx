"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { AgentEditForm } from "./agent-edit-modal-form";

// Mock data for client's bots
const mockAgents = [
  {
    id: 1,
    name: "Customer Support Bot",
    status: "Active",
    createdDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sales Assistant",
    status: "Inactive",
    createdDate: "2024-01-10",
  },
  {
    id: 3,
    name: "FAQ Helper",
    status: "Active",
    createdDate: "2024-01-05",
  },
];

export function AgentsTable() {
  const [agents] = useState(mockAgents);
  const [editingAgent, setEditingAgent] = useState<typeof mockAgents[0] | null>(null);

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-dark">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-dark dark:text-white">
            Your Agents
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
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
              {agents.map((agent) => (
                <tr key={agent.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-4 text-sm font-medium text-dark dark:text-white">
                    {agent.name}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        agent.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {agent.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-dark-4 dark:text-dark-6">
                    {new Date(agent.createdDate).toLocaleDateString()}
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => setEditingAgent(agent)}
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

      {/* Edit Agent Modal */}
      {editingAgent && (
        <Modal
          isOpen={true}
          onClose={() => setEditingAgent(null)}
          title={`Edit ${editingAgent.name}`}
          size="xl"
        >
          <AgentEditForm 
            agent={editingAgent}
            onClose={() => setEditingAgent(null)} 
          />
        </Modal>
      )}
    </div>
  );
}