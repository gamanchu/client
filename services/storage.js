import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage';
import { storage } from './firebase';

export async function uploadFile(url, file) {
  const storageRef = ref(storage, url);
  const snapshot = await uploadBytes(storageRef, file);
  return snapshot;
}

export async function getURLFromFullPath(fileFullPath) {
  const storageRef = ref(storage, fileFullPath);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function getFilePathList(articleDocId) {
  let result = [];
  const storgeRef = ref(storage, `articles/${articleDocId}`);
  let res = await listAll(storgeRef);

  for (let ref of res.items) {
    console.log(ref.fullPath);
    const path = await getURLFromFullPath(ref.fullPath);
    result.push(path);
  }
  return result;
}

export function removeFileFromStorage(fullPath) {
  const desertRef = ref(storage, fullPath);
  deleteObject(desertRef).then(() => {
    console.log('파일이 삭제되었습니다');
  });
}
