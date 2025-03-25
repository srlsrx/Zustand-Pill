import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => (state.count > 0 ? { count: state.count - 1 } : state)),
    reset: () => set({ count: 0 }),
}));
