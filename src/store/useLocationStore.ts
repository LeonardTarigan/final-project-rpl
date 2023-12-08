import { create } from "zustand";

export interface LocationStore {
  locations: string[];
  setLocation: (locArray: string[]) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  locations: [],
  setLocation: (newLocations) => set({ locations: newLocations }),
}));
