import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';
const OpenMeetingBtn = () => {
  const router = useRouter();
  return (
    <div
      style={{
        textAlign: 'right',
        paddingTop: '5px',
      }}
    >
      <Button type="primary" onClick={() => router.push('/create')}>
        모임 만들기
      </Button>
    </div>
  );
};

export default OpenMeetingBtn;
