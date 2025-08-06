"use client";

import { useRole } from "@/contexts/role-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ClientOverview } from "./client-overview";

export function RoleBasedOverview() {
  const { role } = useRole();
  const router = useRouter();

  useEffect(() => {
    // Redirect admin users to their main workflow
    if (role === "admin") {
      router.push("/admin/bots");
    }
  }, [role, router]);

  // Show client overview for client role
  if (role === "client") {
    return <ClientOverview />;
  }

  // Show loading state while redirecting admin
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-dark-4 dark:text-dark-6">Redirecting to admin dashboard...</p>
      </div>
    </div>
  );
}