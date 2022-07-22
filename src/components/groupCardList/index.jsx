import React, { useState } from 'react';
import GroupCard from '../groupCard';
import { useGroups } from '../../hooks/useGroups';

const GroupCardList = () => {
  const { data, refetch } = useGroups();
  console.log(data);
  return (
    <div style={{ marginTop: '10px' }}>
      {data.map((d) => (
        <GroupCard key={d.id} data={d} />
      ))}
    </div>
  );
};

export default GroupCardList;
