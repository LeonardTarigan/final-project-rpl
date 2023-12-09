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
    (set, get) => {
      const localStorageData = JSON.parse(
        localStorage.getItem("user-data") || "{}",
      );

      const initialState: AuthStore = localStorageData;

      const unsubscribeAuthState = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userRef = doc(db, "users", user.uid);

          if (
            localStorageData?.state?.state?.user ||
            auth.currentUser?.uid === get().user?.uid
          ) {
            onSnapshot(userRef, (snapshot) => {
              const userData = snapshot.data() as User | undefined;

              if (userData !== get().user) {
                set({ user: userData });
              }
            });
          }
        } else {
          set({ user: undefined });
        }
      });

      return {
        ...initialState,
        setUser: (state: User) => set({ user: state }),
      };
    },
    {
      name: "user-data",
    },
  ),
);

export default useAuthStore;
