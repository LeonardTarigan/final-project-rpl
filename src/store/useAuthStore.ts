import { User } from "@/utils/types.ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { onSnapshot, doc, getFirestore } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase";

export interface AuthStore {
  user?: User;
  setUser: (state: User) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => {
      const unsubscribeAuthState = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userRef = doc(db, "users", user.uid);

          onSnapshot(userRef, (snapshot) => {
            const userData = snapshot.data() as User | undefined;
            set({ user: userData });
          });
        } else {
          set({ user: undefined });
        }
      });

      return {
        user: undefined,
        setUser: (state: User) => set({ user: state }),
      };
    },
    {
      name: "user-data",
    },
  ),
);

export default useAuthStore;
