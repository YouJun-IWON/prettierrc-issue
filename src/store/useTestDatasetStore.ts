import { test_dataset } from "@/test/dummyDataset";
import { TestDatasetItemType } from "@/validation/testSchema";
import { create } from "zustand";

interface TestDatasetStore {
  dataset: TestDatasetItemType[];
  setDataset: (dataset: TestDatasetItemType[]) => void;
  getDatasetById: (id: number) => TestDatasetItemType | undefined;
  updateDatasetItem: (id: number, updatedItem: Partial<TestDatasetItemType>) => void;
}

export const useTestDatasetStore = create<TestDatasetStore>((set, get) => ({
  dataset: test_dataset,
  setDataset: dataset => set({ dataset }),
  getDatasetById: id => get().dataset.find(item => item.id === id),
  updateDatasetItem: (id, updatedItem) =>
    set(state => ({
      dataset: state.dataset.map(item => (item.id === id ? { ...item, ...updatedItem } : item)),
    })),
}));
