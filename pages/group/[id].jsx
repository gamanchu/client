import React from 'react';
import { useRouter } from 'next/router';

const GroupDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>GroupDetail</div>;
};

export default GroupDetail;
