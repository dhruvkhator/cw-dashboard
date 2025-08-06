"use client";

import { useRole } from "@/contexts/role-context";

export function RoleSwitcher() {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-dark-4 dark:text-dark-6">Role:</span>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as "client" | "admin")}
        className="rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="client">Client</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}