"use client";
import Header from "@/components/bar/onboarding/sandbox/header";

const page = () => {
  return (
    <div className="h-screen flex flex-col w-full ">
      <Header />
      <div className="flex overflow-y-scroll bg-muted/40 h-full custom-scrollbar flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid mb-20  flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"></main>
      </div>
    </div>
  );
};

export default page;
