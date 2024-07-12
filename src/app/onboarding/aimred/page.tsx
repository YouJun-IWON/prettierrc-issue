"use client";

import Header from "@/components/bar/onboarding/aimred/header";
import NoMobile from "@/components/global/no-mobile";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 ">
          <div className="md:hidden">
            <NoMobile />
          </div>
          <div className="hidden flex-col md:flex">
            {/* <Mail
              accounts={accounts}
              mails={mails}
              defaultLayout={defaultLayout}
              defaultCollapsed={defaultCollapsed}
              navCollapsedSize={4}
            /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
