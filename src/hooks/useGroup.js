import { useCallback, useEffect, useState } from 'react';
import { getOneDoc } from '../services/db';

export function useGroup(docId) {
  const [data, setData] = useState(null);
  useEffect(() => {
    refetch();
  }, [refetch]);

  const refetch = useCallback(async () => {
    const doc = await getOneDoc('groups', docId);
    setData(doc);
  }, [docId]);

  return { data, refetch, setData };
}
