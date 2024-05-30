import { useTestDatasetListStore } from "@/store/useTestDatasetListStore";

export const getTitleById = (id: number): string | undefined => {
  const datasetStore = useTestDatasetListStore.getState();
  const task = datasetStore.getDatasetById(id);
  return task?.title;
};
