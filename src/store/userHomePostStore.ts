import { db } from "@/firebase";
import { User, UserPost } from "@/utils/types.ts";
import { FirebaseError } from "firebase/app";
import {
  DocumentReference,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { create } from "zustand";
import useAuthStore from "./useAuthStore";

export interface HomePostStore {
  posts: UserPost[] | null;
  fetchPersonalizedPost: (uid: string) => Promise<void>;
  fetchAllPost: () => Promise<void>;
}

export const useHomePostStore = create<HomePostStore>((set, get) => ({
  posts: [],
  fetchPersonalizedPost: async (uid: string) => {
    try {
      const postsCollection = collection(db, "posts");

      const q = query(
        postsCollection,
        where("owner", "!=", doc(db, "users", uid)),
      );

      const querySnapshot = await getDocs(q);

      const uniquePostIds = new Set(get().posts?.map((post) => post.id));

      querySnapshot.forEach(async (doc) => {
        const postId = doc.id;

        if (!uniquePostIds.has(postId)) {
          const ownerDocRef = doc.data().owner as DocumentReference;
          const ownerDoc = await getDoc(ownerDocRef);

          const { description, isResolved, location, timestamp, title } =
            doc.data() as UserPost;

          if (ownerDoc.exists()) {
            const newPost: UserPost = {
              title: title,
              description: description,
              timestamp: timestamp,
              isResolved: isResolved,
              location: location,
              owner: ownerDoc.data() as User,
              id: postId,
            };

            set((prev) => {
              const newPosts = [...(prev.posts as UserPost[]), newPost];

              newPosts.sort(
                (a, b) => b.timestamp.seconds - a.timestamp.seconds,
              );

              uniquePostIds.add(postId);

              return { posts: newPosts };
            });
          }
        }
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  },
  fetchAllPost: async () => {
    try {
      const postsCollection = collection(db, "posts");

      const q = query(postsCollection);

      const querySnapshot = await getDocs(q);

      const uniquePostIds = new Set(get().posts?.map((post) => post.id));

      querySnapshot.forEach(async (doc) => {
        const postId = doc.id;

        if (!uniquePostIds.has(postId)) {
          const ownerDocRef = doc.data().owner as DocumentReference;
          const ownerDoc = await getDoc(ownerDocRef);

          const { description, isResolved, location, timestamp, title } =
            doc.data() as UserPost;

          if (ownerDoc.exists()) {
            const newPost: UserPost = {
              title: title,
              description: description,
              timestamp: timestamp,
              isResolved: isResolved,
              location: location,
              owner: ownerDoc.data() as User,
              id: postId,
            };

            set((prev) => {
              const newPosts = [...(prev.posts as UserPost[]), newPost];

              newPosts.sort(
                (a, b) => b.timestamp.seconds - a.timestamp.seconds,
              );

              uniquePostIds.add(postId);

              return { posts: newPosts };
            });
          }
        }
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  },
}));
