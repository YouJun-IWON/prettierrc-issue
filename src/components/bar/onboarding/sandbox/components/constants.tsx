import { Home, LineChart, Package } from "lucide-react";
import { BarItem } from "@/components/bar/components/types";
export const SIDEBAR_ITEMS: BarItem[] = [
  {
    title: "Dashboard",
    path: "/onboarding/sandbox",
    icon: <Home className="h-5 w-5" strokeWidth={1} />,
  },
  {
    title: "Datasets",
    path: "/onboarding/sandbox/datasets",
    icon: <Package className="h-5 w-5" strokeWidth={1} />,
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: <LineChart className="h-5 w-5" strokeWidth={1} />,
  },
];
