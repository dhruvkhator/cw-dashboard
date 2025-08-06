"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type Role = "client" | "admin";

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  // Mock role - can be changed to "admin" for testing
  const [role, setRole] = useState<Role>("client");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect based on role change
    if (role === "admin") {
      if (pathname === "/agents" || pathname === "/analytics" || pathname === "/usage") {
        const adminPath = pathname === "/agents" ? "/admin/bots" : `/admin${pathname}`;
        router.push(adminPath);
      }
    } else {
      if (pathname.startsWith("/admin")) {
        const clientPath = pathname === "/admin/bots" ? "/agents" : pathname.replace("/admin", "");
        router.push(clientPath);
      }
    }
  }, [role, pathname, router]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}