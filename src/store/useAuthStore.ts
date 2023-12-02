import { User } from "@/utils/types.ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStore {
  user?: User;
  setUser: (state: User) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (state: User) => set({ user: state }),
    }),
    {
      name: "user-data",
    },
  ),
);
