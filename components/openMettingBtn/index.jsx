import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';
const OpenMeetingBtn = () => {
  const router = useRouter();
    return (
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Button type="primary" onClick={() => router.push('/open')}>
          방 개설
        </Button>
      </div>
    );
};

export default OpenMeetingBtn;