import React from 'react';
import { useRouter } from 'next/router';
import GroupDetail from '../../src/components/groupDetail';

const GroupDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <GroupDetail />
    </div>
  );
};

export default GroupDetailPage;
