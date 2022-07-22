import { onSnapshot } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { createFirebaseQuery } from '../services/db';

export function useListen(targetCollection) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const q = createFirebaseQuery(targetCollection);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => {
        result.push({ docId: doc.id, ...doc.data() });
      });
      setState(result);

      return () => unsubscribe();
    });
  }, [targetCollection]);

  return [state];
}
