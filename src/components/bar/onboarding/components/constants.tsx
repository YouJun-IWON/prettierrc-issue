import { Box, LayoutGrid, PackageOpen } from "lucide-react";
import { BarItem } from "../../components/types";

export const NAVBAR_ITEMS: BarItem[] = [
  {
    title: "Getting Started",
    path: "/onboarding",
    icon: <LayoutGrid strokeWidth={1} width="20" height="20" />,
  },
  {
    title: "Sandbox",
    path: "/onboarding/sandbox",
    icon: <PackageOpen strokeWidth={1} width="20" height="20" />,
  },
  {
    title: "My Dashboard",
    path: "/onboarding/my-dashboard",
    icon: <Box strokeWidth={1} width="20" height="20" />,
  },
];
