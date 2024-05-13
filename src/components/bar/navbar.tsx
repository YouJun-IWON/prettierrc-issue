import { ModeToggle } from "@/components/global/mode-toggle";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { NAV_ITEMS } from "./components/constants";

const Navigation = () => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src="/assets/plura-logo.svg" width={40} height={40} alt="plur logo" />
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
        <ModeToggle />
        <Button asChild>
          <Link href="/onboarding/sandbox/datasets">Show Demo</Link>
        </Button>
      </aside>
    </div>
  );
};

export default Navigation;
