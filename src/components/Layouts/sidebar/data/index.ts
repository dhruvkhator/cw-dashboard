import * as Icons from "../icons";

type NavItem = {
  title: string;
  url?: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Array<{
    title: string;
    url: string;
  }>;
};

type NavSection = {
  label: string;
  items: NavItem[];
};

export const CLIENT_NAV_DATA: NavSection[] = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Agents",
        url: "/agents",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: Icons.PieChart,
        items: [],
      },
      {
        title: "Usage",
        url: "/usage",
        icon: Icons.Table,
        items: [],
      },
    ],
  },
];

export const ADMIN_NAV_DATA: NavSection[] = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "All Bots",
        url: "/admin/bots",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        icon: Icons.PieChart,
        items: [],
      },
      {
        title: "Usage",
        url: "/admin/usage",
        icon: Icons.Table,
        items: [],
      },
    ],
  },
];

// Legacy navigation data for backward compatibility
export const NAV_DATA = CLIENT_NAV_DATA;
