import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  signOut,
  onAuthStateChanged,
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

export async function logOut() {
  return await signOut(auth);
}

export async function removeUser() {
  return await deleteUser(auth.currentUser);
}
