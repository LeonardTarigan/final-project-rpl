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

export interface ProfilePostStore {
  posts: UserPost[] | null;
  setPosts: (postArray: UserPost[]) => void;
  fetchProfilePost: (uid: string) => Promise<void>;
  addNewPost: (props: UserPost) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  resolvePost: (postId: string) => Promise<void>;
}

export const useProfilePostStore = create<ProfilePostStore>((set, get) => ({
  posts: [],
  setPosts: (newPosts) => set({ posts: newPosts }),
  fetchProfilePost: async (uid: string) => {
    try {
      const postsCollection = collection(db, "posts");

      const q = query(
        postsCollection,
        where("owner", "==", doc(db, "users", uid)),
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
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
            id: doc.id,
          };

          set((prev) => {
            const newPosts = [...(prev.posts as UserPost[]), newPost];

            newPosts.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);

            return { posts: newPosts };
          });
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
  addNewPost: async ({
    owner,
    title,
    description,
    location,
    timestamp,
    isResolved,
  }: UserPost) => {
    try {
      const postCollection = collection(db, "posts");

      await setDoc(
        doc(postCollection),
        {
          owner: doc(db, `/users/${owner.uid}`),
          title,
          description,
          location,
          timestamp,
          isResolved,
        },
        { merge: true },
      );

      toast.success("Post Added!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  },
  deletePost: async (postId: string) => {
    try {
      const postRef = doc(db, "posts", postId);

      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        await deleteDoc(postRef);

        set((prev) => ({
          posts: (prev.posts as UserPost[]).filter(
            (post) => post.id !== postId,
          ),
        }));

        toast.success("Post Deleted!");
      } else {
        toast.error("Post not found.");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  },
  resolvePost: async (postId: string) => {
    try {
      const postRef = doc(db, "posts", postId);

      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const currentIsResolved = postDoc.data()?.isResolved || false;

        await setDoc(
          postRef,
          { isResolved: !currentIsResolved },
          { merge: true },
        );

        set((prev) => ({
          posts: (prev.posts as UserPost[]).map((post) =>
            post.id === postId
              ? { ...post, isResolved: !currentIsResolved }
              : post,
          ),
        }));

        toast.success(`Post ${currentIsResolved ? "Unresolved" : "Resolved"}!`);
      } else {
        toast.error("Post not found.");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  },
}));
