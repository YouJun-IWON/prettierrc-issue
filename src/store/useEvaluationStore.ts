import { create } from "zustand";

import { test_API_Data } from "@/test/api";

interface ApiState {
  default_API: typeof test_API_Data;
  active_API: typeof test_API_Data;
  setDefault_API: (default_API: typeof test_API_Data) => void;
  addToActive: (apis: typeof test_API_Data) => void;
  removeFromActive: (api: (typeof test_API_Data)[number]) => void;
}

const useApiStore = create<ApiState>((set, get) => ({
  default_API: test_API_Data,
  active_API: [],
  setDefault_API: default_API => set({ default_API }),
  addToActive: apis => {
    const activeAPI = get().active_API;
    const newActiveAPI = [...activeAPI, ...apis];
    set({ active_API: newActiveAPI.slice(0, 5) });
  },
  removeFromActive: api => {
    set(state => ({
      active_API: state.active_API.filter(item => item !== api),
    }));
  },
}));

export default useApiStore;
