import { FileType, Home, Image } from "lucide-react";
import { BarItem } from "@/components/bar/components/types";
export const SIDEBAR_ITEMS: BarItem[] = [
  {
    title: "Supervisor",
    path: "/onboarding/sandbox",
    icon: <Home className="h-5 w-5" strokeWidth={1} />,
  },
  {
    title: "Text Datasets",
    path: "/onboarding/sandbox/text-datasets",
    icon: <FileType className="h-5 w-5" strokeWidth={1} />,
  },
  {
    title: "Image Datasets",
    path: "/onboarding/sandbox/image-datasets",
    icon: <Image className="h-5 w-5" strokeWidth={1} />,
  },
];
