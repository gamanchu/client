import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDJUzuuPe0xqw3MRm9ZL_syjKddIwEb25U',
  authDomain: 'gamanchu-b3e34.firebaseapp.com',
  projectId: 'gamanchu-b3e34',
  storageBucket: 'gamanchu-b3e34.appspot.com',
  messagingSenderId: '508336702833',
  appId: '1:508336702833:web:ff48cf0f5457dde07822d0',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
