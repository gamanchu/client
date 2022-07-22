import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
} from 'firebase/firestore';

export async function addDocInCollection(targetCollection, data) {
  const docRef = await addDoc(collection(db, targetCollection), data);
  return docRef;
}

export async function getOneDoc(collection, docId) {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export async function getAllDocs(targetCollection) {
  const result = [];
  const ref = collection(db, targetCollection);
  const querySnapshot = await getDocs(ref);
  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  return result;
}

export async function modifyDoc(collection, docId, data) {
  const ref = doc(db, collection, docId);
  try {
    await updateDoc(ref, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function removeDoc(collection, docId) {
  const ref = doc(db, collection, docId);
  try {
    await deleteDoc(ref);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
