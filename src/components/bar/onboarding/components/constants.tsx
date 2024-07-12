import { BarItem } from "../../components/types";
import { Bot, LayoutGrid, SlidersHorizontal } from "lucide-react";

export const NAVBAR_ITEMS: BarItem[] = [
  {
    title: "Getting Started",
    path: "/onboarding",
    icon: <LayoutGrid strokeWidth={1} width="20" height="20" />,
  },
  {
    title: "AIM RED",
    path: "/onboarding/aimred",
    icon: <SlidersHorizontal strokeWidth={1} width="20" height="20" />,
  },
  {
    title: "My Supervisor",
    path: "/onboarding/my-dashboard",
    icon: <Bot strokeWidth={1} width="20" height="20" />,
  },
];
