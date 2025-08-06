import { AdminUsageTable } from "./_components/admin-usage-table";

export default function AdminUsagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          Platform Usage
        </h1>
        <p className="text-dark-4 dark:text-dark-6">
          Monitor token usage and costs across all clients
        </p>
      </div>
      
      <AdminUsageTable />
    </div>
  );
}