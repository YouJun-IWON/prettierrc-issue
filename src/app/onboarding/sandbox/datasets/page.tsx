"use client";

import Header from "@/components/bar/onboarding/sandbox/datasets/header";
import { DataTable } from "@/components/table/sandbox/datasets/datatable";
import { test_dataset } from "@/components/table/sandbox/datasets/data/tasks";
import { columns } from "@/components/table/sandbox/datasets/components/columns";

const page = () => {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <div className="flex overflow-y-scroll h-screen custom-scrollbar flex-col sm:gap-4 sm:py-4 sm:pl-14  bg-muted/40">
        <main className="grid mb-20 items-start gap-4 p-4 sm:px-6 sm:py-0 ">
          <DataTable data={test_dataset} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
