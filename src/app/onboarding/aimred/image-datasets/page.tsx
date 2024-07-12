"use client";

import { useEffect } from "react";

import Header from "@/components/bar/onboarding/aimred/image-datasets/header";
import { columns } from "@/components/table/aimred/image-datasets/components/columns";
import { DataTable } from "@/components/table/aimred/image-datasets/datatable";
import { useTestDatasetListStore } from "@/store/useTestDatasetListStore";
import { image_test_dataset } from "@/test/image-tasks";

const page = () => {
  const { datasetList, setDataset } = useTestDatasetListStore();

  useEffect(() => {
    setDataset(image_test_dataset);
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
