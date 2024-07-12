"use client";

import { usePathname } from "next/navigation";

import { File, PlusCircle } from "lucide-react";

import Breadcrumbset from "@/components/bar/components/breadcrumb";
import { DataTableToolbar } from "@/components/table/aimred/text-datasets/components/data-table-toolbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { downloadCSV } from "@/utils/csv-download/downloadCSV";
import { TestDatasetListType } from "@/validation/test-folder-schema";

interface HeaderProps {
  datasetList?: TestDatasetListType;
}

const Header = ({ datasetList: dataset }: HeaderProps) => {
  const pathName = usePathname();

  const title = "";

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-16  sm:bg-transparent sm:px-6 ml-14 border-gray-200 py-4",
        { hidden: pathName !== "/onboarding/aimred/text-datasets" },
      )}
    >
      <Breadcrumbset />
      <div className="ml-8">
        <DataTableToolbar />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="h-8 gap-1"
          onClick={() => {
            downloadCSV({ dataset, title });
          }}
        >
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Export
          </span>
        </Button>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Dataset
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
