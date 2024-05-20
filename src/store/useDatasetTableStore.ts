// useTableStore.ts
import { create } from "zustand";
import { Table, ColumnDef } from "@tanstack/react-table";
import { Task } from "@/validation/image-schema";

interface DatasetTableState {
  table: Table<any> | null;
  setTable: (table: Table<any>) => void;
  columns: ColumnDef<Task>[];
  setColumns: (columns: ColumnDef<Task>[]) => void;
  addColumns: (newColumns: ColumnDef<Task>[]) => void;
  address: string;
  setAddress: (address: string) => void;
  addressName: string;
  setAddressName: (address: string) => void;
}

export const useDatasetTable = create<DatasetTableState>(set => ({
  table: null,
  setTable: table => set({ table }),
  columns: [],
  setColumns: columns => set({ columns }),
  addColumns: newColumns =>
    set(state => ({
      columns: [...state.columns, ...newColumns],
    })),
  address: "",
  setAddress: address => set({ address }),
  addressName: "",
  setAddressName: addressName => set({ addressName }),
}));
