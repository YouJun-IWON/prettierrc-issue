// useTableStore.ts
import { Table } from "@tanstack/react-table";
import { create } from "zustand";

interface DatasetTableState {
  table: Table<any> | null;
  setTable: (table: Table<any>) => void;
}

export const useDatasetsTable = create<DatasetTableState>(set => ({
  table: null,
  setTable: table => set({ table }),
}));
