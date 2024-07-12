"use client";

import { useEffect } from "react";

import Header from "@/components/bar/onboarding/aimred/text-datasets/header";
import { columns } from "@/components/table/aimred/text-datasets/components/columns";
import { DataTable } from "@/components/table/aimred/text-datasets/datatable";
import { useTestDatasetListStore } from "@/store/useTestDatasetListStore";
import { text_test_dataset } from "@/test/text-tasks";

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
