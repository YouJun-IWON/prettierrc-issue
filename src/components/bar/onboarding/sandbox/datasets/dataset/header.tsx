"use client";

import { File, PlusCircle, Zap } from "lucide-react";

import Breadcrumbset from "@/components/bar/components/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTableToolbar } from "@/components/table/sandbox/datasets/dataset/components/data-table-toolbar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import EvaluateSheet from "@/components/sheets/datasets/dataset/evaluate-sheet";

interface HeaderProps {
  id: string;
}

const Header = ({ id }: HeaderProps) => {
  const pathName = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-16  sm:bg-transparent sm:px-6 ml-14 border-gray-200 py-4",
        { hidden: pathName !== `/onboarding/sandbox/datasets/${id}` },
      )}
    >
      <Breadcrumbset />
      <div className="ml-8">
        <DataTableToolbar />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
        </Button>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Dataset</span>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline" className="h-8 gap-1 text-purple-600">
              <Zap className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Evaluate</span>
            </Button>
          </SheetTrigger>
          <EvaluateSheet />
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
