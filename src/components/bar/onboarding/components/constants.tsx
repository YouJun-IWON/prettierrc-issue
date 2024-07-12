import { Bot, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { BarItem } from "../../components/types";

export const NAVBAR_ITEMS: BarItem[] = [
  {
    title: "Getting Started",
    path: "/onboarding",
    icon: <LayoutGrid strokeWidth={1} width="20" height="20" />,
  },
  {
    title: "Manual Setting",
    path: "/onboarding/sandbox",
    icon: <SlidersHorizontal strokeWidth={1} width="20" height="20" />,
  },
  {
    title: "My Supervisor",
    path: "/onboarding/my-dashboard",
    icon: <Bot strokeWidth={1} width="20" height="20" />,
  },
];
