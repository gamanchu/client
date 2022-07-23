import { onSnapshot } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { createFirebaseQuery, getDocRef } from '../services/db';

export function useListen(targetCollection, docId) {
  const [state, setState] = useState([]);

  useEffect(() => {
    // const q = createFirebaseQuery(targetCollection);
    const q = getDocRef(targetCollection, docId);
    const unsubscribe = onSnapshot(q, (doc) => {
      setState({ docId: doc.id, ...doc.data() });

      return () => unsubscribe();
    });
  }, [targetCollection, docId]);

  return [state];
}
