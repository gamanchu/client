import React, { useEffect, useState } from 'react';
import GroupCard from '../groupCard';
import { useGroups } from '../../hooks/useGroups';

const GroupCardList = ({ isEnter, word }) => {
  const { data, refetch, setData } = useGroups();

  useEffect(() => {
    if (word.length === 0) {
      refetch();
    }

    if (!isEnter) return;
    setData((prev) =>
      prev.filter((m) => {
        const reg = new RegExp(word, 'g');
        if (reg.test(m.meetingName)) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [isEnter, word]);

  return (
    <div style={{ margin: '15px 0' }}>
      {data.map((d) => (
        <GroupCard key={d.id} data={d} />
      ))}
    </div>
  );
};

export default React.memo(GroupCardList);
