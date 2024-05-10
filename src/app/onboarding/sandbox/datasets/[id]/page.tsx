"use client";
import Header from "@/components/bar/onboarding/sandbox/datasets/dataset/header";
import { DataTable } from "@/components/table/sandbox/datasets/dataset/datatable";
import { test_dataset_1 } from "@/test/dataset-1";
import { columns as originalColumns } from "@/components/table/sandbox/datasets/dataset/components/columns";
import { useEffect } from "react";
import { useDatasetTable } from "@/store/useDatasetTable";

const page = ({ params }: { params: { id: string } }) => {
  const { setColumns, columns } = useDatasetTable();

  useEffect(() => {
    setColumns(originalColumns);
  }, [originalColumns, setColumns]);

  return (
    <div className="h-screen flex flex-col">
      <Header id={params.id} dataset={test_dataset_1} />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 ">
          <DataTable data={test_dataset_1} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
