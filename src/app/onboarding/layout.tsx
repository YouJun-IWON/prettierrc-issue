import NavbarOnboarding from "@/components/bar/onboarding/navbar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIM Dashboard Onboarding",
  description: "Show Your LLM safety and security status",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen overflow-clip">
      <NavbarOnboarding />
      {children}
    </main>
  );
};

export default layout;
