import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIM Dashboard Onboarding Sandbox Image datasets",
  description: "Show Your LLM safety and security status",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default layout;
