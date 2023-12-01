import { create } from "zustand";

export interface AddPostModalStore {
  isAddPostModalOpen: boolean;
  openAddPostModal: () => void;
  closeAddPostModal: () => void;
}

export const useAddPostModalStore = create<AddPostModalStore>((set) => ({
  isAddPostModalOpen: false,
  openAddPostModal: () => set({ isAddPostModalOpen: true }),
  closeAddPostModal: () => set({ isAddPostModalOpen: false }),
}));
