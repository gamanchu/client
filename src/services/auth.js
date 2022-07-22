import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase';

export function listenUserState(callback) {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe;
}

export async function signUpUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      result: true,
      message: '회원가입 성공',
      user: userCredential.user,
    };
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') {
      return {
        result: false,
        message: '이미 사용중인 아이디입니다',
        user: null,
      };
    } else {
      return { result: false, message: e.message, user: null };
    }
  }
}

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}

export function getCurrentUser() {
  return auth.currentUser;
}

export async function updateUserProfile(displayName, photoURL) {
  try {
    await updateProfile(getCurrentUser(), {
      displayName,
      photoURL,
    });
    return { res: true, msg: '수정되었습니다' };
  } catch (e) {
    console.log(e);
    return { res: false, msg: '수정중 에러가발생했습니다' };
  }
}

export async function logOut() {
  return await signOut(auth);
}

export async function removeUser() {
  return await deleteUser(auth.currentUser);
}
