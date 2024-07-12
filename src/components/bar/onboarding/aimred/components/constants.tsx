import { FileType, Home, Image } from "lucide-react";

import { BarItem } from "@/components/bar/components/types";

export const SIDEBAR_ITEMS: BarItem[] = [
  {
    title: "Dashboard",
    path: "/onboarding/aimred",
    icon: <Home className="h-5 w-5" strokeWidth={1} />,
  },
  {
    title: "Text Datasets",
    path: "/onboarding/aimred/text-datasets",
    icon: <FileType className="h-5 w-5" strokeWidth={1} />,
  },
  {
    title: "Image Datasets",
    path: "/onboarding/aimred/image-datasets",
    icon: <Image className="h-5 w-5" strokeWidth={1} />,
  },
];
