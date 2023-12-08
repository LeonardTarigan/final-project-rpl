import { doc, updateDoc } from "firebase/firestore";
import { db } from "..";
import toast from "react-hot-toast";

interface ProfileEdit {
  displayName?: string;
  userName?: string;
  photoURL?: string;
}

export async function changeUserProfile(
  uid: string,
  { displayName, photoURL, userName }: ProfileEdit,
): Promise<void> {
  const userRef = doc(db, "users", uid);

  const dataToUpdate: Record<string, any> = {};

  if (displayName) {
    dataToUpdate.displayName = displayName;
  }

  if (userName) {
    dataToUpdate.userName = userName;
  }

  if (photoURL) {
    dataToUpdate.photoURL = photoURL;
  }

  try {
    await updateDoc(userRef, dataToUpdate);

    toast.success("Profile Updated!");
  } catch (error) {
    toast.error("Update Failed");
  }
}
