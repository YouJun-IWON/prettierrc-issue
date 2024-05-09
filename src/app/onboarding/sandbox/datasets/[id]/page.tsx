"use client";
import Header from "@/components/bar/onboarding/sandbox/datasets/dataset/header";
import { DataTable } from "@/components/table/sandbox/datasets/dataset/datatable";
import { test_dataset_1 } from "@/test/dataset-1";
import { columns } from "@/components/table/sandbox/datasets/dataset/components/columns";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header id={params.id} />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 ">
          <DataTable data={test_dataset_1} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
