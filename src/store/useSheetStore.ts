import { create } from "zustand";

import { TestAPIType, TestDatasetType } from "@/validation/test-schema";

export type SheetType =
  | "showEvalTool"
  | "showChooseEvalTool"
  | "showDetailEvalTool";

interface SheetData {
  dataset?: TestDatasetType;
  apiAddress?: string;
  items?: TestAPIType;
}

interface SheetStore {
  type: SheetType | null;
  data: SheetData;
  isOpen: boolean;
  onOpen: (type: SheetType, data?: SheetData) => void;
  onClose: () => void;
}

export const useSheet = create<SheetStore>(set => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
