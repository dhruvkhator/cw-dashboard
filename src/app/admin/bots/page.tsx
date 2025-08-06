import { AdminBotsTable } from "./_components/admin-bots-table";

export default function AdminBotsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          All Bots
        </h1>
        <p className="text-dark-4 dark:text-dark-6">
          Manage all client chatbot agents
        </p>
      </div>
      
      <AdminBotsTable />
    </div>
  );
}