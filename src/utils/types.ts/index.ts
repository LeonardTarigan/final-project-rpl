import { Timestamp } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

export interface IPostCard {
  name: string;
  userName: string;
  timeStamp: Date;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface IProfilePostCard extends IPostCard {
  isResolved: boolean;
}

export interface IModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface UserPost {
  owner: User;
  title: string;
  description: string;
  location: string;
  imageURL?: string;
  timestamp: Timestamp;
  isResolved: boolean;
  id?: string;
}

export interface Chat {
  message: string;
  timestamp: Date;
}

export interface UserChat {
  target: User;
  sender: User;
  content: Chat[];
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  userName: string | null;
  photoURL: string | null;
  chats?: UserChat[];
}
