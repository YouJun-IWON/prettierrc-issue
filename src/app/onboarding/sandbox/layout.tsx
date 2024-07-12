import Sidebar from "@/components/bar/onboarding/sandbox/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIM Supervisor Onboarding Manual Setting",
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
