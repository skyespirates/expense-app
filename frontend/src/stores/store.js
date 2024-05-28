import { create } from "zustand";

export const useListStore = create((set) => ({
  list: [],
  addItem: (item) => set((state) => ({ list: [item, ...state.list] })),
  removeItem: (itemId) =>
    set((state) => {
      const newList = state.list.filter((entry) => entry.id !== itemId);
      return {
        list: newList,
      };
    }),
}));
