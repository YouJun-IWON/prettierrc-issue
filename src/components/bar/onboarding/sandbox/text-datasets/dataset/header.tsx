"use client";

import { Bot, File, PencilRuler, PlusCircle, Zap } from "lucide-react";

import Breadcrumbset from "@/components/bar/components/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTableToolbar } from "@/components/table/sandbox/text-datasets/dataset/components/data-table-toolbar";
import { useSheet } from "@/store/useSheetStore";
import { useModal } from "@/store/useModalStore";

interface HeaderProps {
  id: string;
}

const Header = ({ id }: HeaderProps) => {
  const pathName = usePathname();

  const { onOpen } = useSheet();
  const { onOpen: modalOpen } = useModal();

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-16  sm:bg-transparent sm:px-6 ml-14 border-gray-200 py-4",
        { hidden: pathName !== `/onboarding/sandbox/text-datasets/${id}` },
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
          onClick={() => modalOpen("generateData")}
          size="sm"
          variant="outline"
          className="h-8 gap-1 text-amber-700"
        >
          <Bot className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Generate Data</span>
        </Button>

        <Button
          onClick={() => modalOpen("customEvaluation")}
          size="sm"
          variant="outline"
          className="h-8 gap-1 text-cyan-700"
        >
          <PencilRuler className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Custom Evaluation</span>
        </Button>

        <Button
          onClick={() => onOpen("showEvalTool")}
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
