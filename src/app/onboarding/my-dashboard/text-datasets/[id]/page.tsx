"use client";
import Header from "@/components/bar/onboarding/sandbox/text-datasets/dataset/header";
import { DataTable } from "@/components/table/sandbox/text-datasets/dataset/datatable";
import { text_test_dataset_1 } from "@/test/text-dataset-1";
import { columns as originalColumns } from "@/components/table/sandbox/text-datasets/dataset/components/columns";
import { useEffect } from "react";
import { useDatasetTable } from "@/store/useDatasetTableStore";
import { useTestDatasetStore } from "@/store/useTestDatasetStore";

const page = ({ params }: { params: { id: string } }) => {
  const { setColumns, columns } = useDatasetTable();
  const { dataset, setDataset } = useTestDatasetStore();

  useEffect(() => {
    setColumns(originalColumns);
  }, [setColumns]);

  useEffect(() => {
    setDataset(text_test_dataset_1);
  }, [setDataset]);

  return (
    <div className="h-screen flex flex-col">
      <Header id={params.id} dataset={dataset} />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 ">
          <DataTable data={dataset} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
