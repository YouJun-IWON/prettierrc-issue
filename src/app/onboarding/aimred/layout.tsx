import { Metadata } from "next";

import Sidebar from "@/components/bar/onboarding/aimred/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "AIM Supervisor Onboarding AIM RED",
  description: "Show Your LLM safety and security status",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TooltipProvider>
        <Sidebar />
      </TooltipProvider>

      {children}
    </main>
  );
};

export default layout;
