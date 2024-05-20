// useTableStore.ts
import { create } from "zustand";

interface CreateEvalState {
  type: string;
  setType: (type: string) => void;
  // result: ColumnDef<Task>[];
  // setResults: (columns: ColumnDef<Task>[]) => void;
  // addResults: (newResults: ColumnDef<Task>[]) => void;
}

export const useCreateEval = create<CreateEvalState>(set => ({
  type: "/create-classification-evaluation",
  setType: type => set({ type }),
  //result: [],
  // setResults: result => set({ result }),
  // addResults: newResults =>
  //   set(state => ({
  //     result: [...state.result, ...newResults],
  //   })),
}));
