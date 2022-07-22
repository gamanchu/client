import { useEffect, useState } from 'react';
import { getAllDocs } from '../services/db';

export function useGroups() {
  const [data, setData] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    getAllDocs('groups').then((groups) => {
      setData(groups);
    });
  };

  return { data, refetch, setData };
}
