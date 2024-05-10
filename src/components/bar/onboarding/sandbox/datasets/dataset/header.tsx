"use client";

import { File, PlusCircle, Zap } from "lucide-react";

import Breadcrumbset from "@/components/bar/components/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTableToolbar } from "@/components/table/sandbox/datasets/dataset/components/data-table-toolbar";
import { useSheet } from "@/store/useSheetStore";

interface HeaderProps {
  id: string;
  dataset: any;
}

const Header = ({ id, dataset }: HeaderProps) => {
  const pathName = usePathname();

  const { onOpen } = useSheet();

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

        <Button
          onClick={() => onOpen("showEvalTool", { dataset })}
          size="sm"
          variant="outline"
          className="h-8 gap-1 text-purple-600"
        >
          <Zap className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Evaluate</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
