"use client";
import Header from "@/components/bar/onboarding/sandbox/header";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 "></main>
      </div>
    </div>
  );
};

export default page;
