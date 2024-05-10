import { create } from "zustand";

export type SheetType = "showEvalTool";

interface SheetData {
  dataset?: any;
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