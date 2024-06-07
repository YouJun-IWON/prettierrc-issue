"use client";

import Header from "@/components/bar/onboarding/sandbox/image-datasets/header";
import { DataTable } from "@/components/table/sandbox/image-datasets/datatable";
import { image_test_dataset } from "@/test/image-tasks";
import { columns } from "@/components/table/sandbox/text-datasets/components/columns";

const page = () => {
  return (
    <div className="h-screen flex flex-col ">
      <Header datasetList={image_test_dataset} />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 ">
          <DataTable data={image_test_dataset} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
