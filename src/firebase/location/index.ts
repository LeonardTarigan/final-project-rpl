import { doc, getDoc } from "firebase/firestore";
import { db } from "..";

export async function getAllLocations(
  dispatch: (state: string[]) => void,
): Promise<void> {
  try {
    const docRef = doc(db, "locations", "ub");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(docSnap.data().locations);
    }
  } catch (err) {}
}
