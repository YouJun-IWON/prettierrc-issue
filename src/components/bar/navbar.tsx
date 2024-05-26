import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { NAV_ITEMS } from "./components/constants";

const Navigation = () => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src="/assets/aim-dashboard-logo.svg" width={40} height={40} alt="plur logo" />
        <span className="text-xl font-bold"> AIM Guard.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <Link href={item.path} key={idx}>
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {/* <ModeToggle /> */}
        <Button
          asChild
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-cyan-400 bg-[linear-gradient(110deg,#7dd3fc,45%,#a5f3fc,55%,#7dd3fc)] bg-[length:200%_100%] px-6 font-medium text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-cyan-50 "
        >
          <Link href="/onboarding">Get Started</Link>
        </Button>
      </aside>
    </div>
  );
};

export default Navigation;
