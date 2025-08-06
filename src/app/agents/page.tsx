import { AgentsTable } from "./_components/agents-table";

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          My Agents
        </h1>
        <p className="text-dark-4 dark:text-dark-6">
          Manage your chatbot agents
        </p>
      </div>
      
      <AgentsTable />
    </div>
  );
}