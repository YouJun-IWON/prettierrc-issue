"use client";
import { File, ListFilter, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Header from "@/components/bar/onboarding/sandbox/datasets/header";
import { DataTable } from "@/components/table/sandbox/datasets/datatable";
import { test_dataset } from "@/components/table/sandbox/datasets/data/tasks";
import { columns } from "@/components/table/sandbox/datasets/components/columns";

const page = () => {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <div className="flex overflow-y-scroll h-full custom-scrollbar flex-col sm:gap-4 sm:py-4 sm:pl-14  bg-muted/40">
        <main className="grid mb-20 items-start gap-4 p-4 sm:px-6 sm:py-0 ">
          <div className="flex items-center">
            <p className="text-2xl font-bold">My Datasets</p>

            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>All</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Processed </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Waiting</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Dataset</span>
              </Button>
            </div>
          </div>

          <DataTable data={test_dataset} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
