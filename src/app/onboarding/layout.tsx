import NavbarOnboarding from "@/components/bar/onboarding/navbar";
import { ModalProvider } from "@/providers/modal-provider";

import { SheetProvider } from "@/providers/sheet-provider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIM Dashboard Onboarding",
  description: "Show Your LLM safety and security status",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavbarOnboarding />

      {children}
      <SheetProvider />
      <ModalProvider />
    </main>
  );
};

export default layout;
