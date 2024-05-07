// useTableStore.ts
import { create } from "zustand";
import { Table } from "@tanstack/react-table";

interface DatasetTableState {
  table: Table<any> | null;
  setTable: (table: Table<any>) => void;
}

export const useDatasetTable = create<DatasetTableState>(set => ({
  table: null,
  setTable: table => set({ table }),
}));
