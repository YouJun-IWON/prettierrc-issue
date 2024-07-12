import { create } from "zustand";

import { dummy_test_dataset_list } from "@/test/dummy-dataset";
import { Task } from "@/validation/test-folder-schema";

interface TestDatasetStore {
  datasetList: Task[];
  setDataset: (dataset: Task[]) => void;
  getDatasetById: (id: number) => Task | undefined;
  updateDatasetItem: (id: number, updatedItem: Partial<Task>) => void;
}

export const useTestDatasetListStore = create<TestDatasetStore>((set, get) => ({
  datasetList: dummy_test_dataset_list,
  setDataset: datasetList => set({ datasetList }),
  getDatasetById: id => get().datasetList.find(item => item.id === id),
  updateDatasetItem: (id, updatedItem) =>
    set(state => ({
      datasetList: state.datasetList.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    })),
}));
