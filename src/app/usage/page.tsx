import { UsageTable } from "./_components/usage-table";

export default function UsagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          Usage
        </h1>
        <p className="text-dark-4 dark:text-dark-6">
          Monitor your token usage and costs
        </p>
      </div>
      
      <UsageTable />
    </div>
  );
}