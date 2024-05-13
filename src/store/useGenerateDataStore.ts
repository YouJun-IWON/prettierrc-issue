// useTableStore.ts
import { create } from "zustand";

interface GenerateDataState {
  type: string;
  setType: (type: string) => void;
  // result: ColumnDef<Task>[];
  // setResults: (columns: ColumnDef<Task>[]) => void;
  // addResults: (newResults: ColumnDef<Task>[]) => void;
}

export const useGenerateData = create<GenerateDataState>(set => ({
  type: "/generate-synthetic-dataset",
  setType: type => set({ type }),
  //result: [],
  // setResults: result => set({ result }),
  // addResults: newResults =>
  //   set(state => ({
  //     result: [...state.result, ...newResults],
  //   })),
}));
