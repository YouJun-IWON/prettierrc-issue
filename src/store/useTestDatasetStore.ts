import { create } from "zustand";

import { dummy_test_dataset } from "@/test/dummy-dataset";
import { TestDatasetItemType } from "@/validation/test-schema";

interface TestDatasetStore {
  dataset: TestDatasetItemType[];
  setDataset: (dataset: TestDatasetItemType[]) => void;
  getDatasetById: (id: number) => TestDatasetItemType | undefined;
  updateDatasetItem: (
    id: number,
    updatedItem: Partial<TestDatasetItemType>,
  ) => void;
}

export const useTestDatasetStore = create<TestDatasetStore>((set, get) => ({
  dataset: dummy_test_dataset,
  setDataset: dataset => set({ dataset }),
  getDatasetById: id => get().dataset.find(item => item.id === id),
  updateDatasetItem: (id, updatedItem) =>
    set(state => ({
      dataset: state.dataset.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    })),
}));
