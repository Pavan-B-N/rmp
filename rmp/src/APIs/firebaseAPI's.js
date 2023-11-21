import { getFirestore } from "firebase/firestore";
import { app } from "./app"
import { doc, getDoc } from "firebase/firestore";

function readDoc(collectionName, docId) {
  const promise = new Promise(async (resolve, reject) => {
    const db = getFirestore(app);
    console.log("reading data")
    // doc(db,collection,docid)
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      resolve(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      reject("No such document!")
    }
  })
  return promise;
}

export { readDoc }