import { create } from "zustand";

import { TestAPIConfigsType } from "@/validation/test-schema";

interface TestAPIConfigsStore {
  configs: TestAPIConfigsType;
  setConfigs: (configs: TestAPIConfigsType) => void;
  updateConfig: (
    index: number,
    updatedConfig: Partial<TestAPIConfigsType[number]>,
  ) => void;
}

export const useTestAPIConfigsStore = create<TestAPIConfigsStore>(set => ({
  configs: [],
  setConfigs: configs => set({ configs }),
  updateConfig: (index, updatedConfig) =>
    set(state => ({
      configs: state.configs.map((config, i) =>
        i === index ? { ...config, ...updatedConfig } : config,
      ),
    })),
}));
