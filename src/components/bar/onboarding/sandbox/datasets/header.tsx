"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import Breadcrumbset from "@/components/bar/components/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto  sm:bg-transparent sm:px-6 ml-14 border-gray-200 py-4",
        { hidden: pathName !== "/onboarding/sandbox/datasets" },
      )}
    >
      <Breadcrumbset />
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          value="datasets"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
    </header>
  );
};

export default Header;
