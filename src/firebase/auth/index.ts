import { User } from "@/utils/types.ts";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, db, provider } from "..";

export const loginWithGoogle = async (dispatch: (state: User) => void) => {
  try {
    const userCollection = collection(db, "users");
    const res = await signInWithPopup(auth, provider);
    const { uid, displayName, email, photoURL } = res.user;

    const userRef = doc(userCollection, uid);
    const docSnapshot = await getDoc(userRef);

    const formattedString = displayName?.replace(/\s/g, "").toLowerCase();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    const userRecord = {
      displayName: displayName,
      email: email,
      photoURL: photoURL,
      uid: uid,
      userName: `${formattedString}${randomDigits}`,
    };

    if (!docSnapshot.exists()) {
      await setDoc(userRef, userRecord, { merge: true });

      dispatch(userRecord);
    } else {
      const data = docSnapshot.data();

      dispatch(data as User);
    }

    window.location.href = "/";
  } catch (error) {
    if (error instanceof FirebaseError) {
      toast.error(error.message);
    } else {
      console.error(error);
    }
  }
};
