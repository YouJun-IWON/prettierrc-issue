"use client";

import Header from "@/components/bar/onboarding/sandbox/text-datasets/header";
import { DataTable } from "@/components/table/sandbox/text-datasets/datatable";
import { text_test_dataset } from "@/test/text-tasks";
import { columns } from "@/components/table/sandbox/text-datasets/components/columns";
import { useEffect } from "react";
import { useTestDatasetListStore } from "@/store/useTestDatasetListStore";

const page = () => {
  const { datasetList, setDataset } = useTestDatasetListStore();

  useEffect(() => {
    setDataset(text_test_dataset);
  }, [setDataset]);

  return (
    <div className="h-screen flex flex-col ">
      <Header datasetList={datasetList} />
      <div className="flex-grow overflow-y-auto custom-scrollbar py-4 pl-14 bg-muted/40">
        <main className="mb-20 items-start p-4 ">
          <DataTable data={datasetList} columns={columns} />
        </main>
      </div>
    </div>
  );
};

export default page;
