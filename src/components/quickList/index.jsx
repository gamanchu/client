import React, { memo, useCallback } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { QuickBox } from './style';
import { logOut, removeUser } from '../../services/auth';
import { useRouter } from 'next/router';

const QuickList = () => {
  const router = useRouter();
  const onLogOut = () => {
    logOut();
  };

  const onRemoveUser = useCallback(() => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      removeUser();
    }
  }, []);

  return (
    <div>
      <QuickBox onClick={() => router.push('/profile')}>
        <h3>회원정보수정</h3>
        <AiOutlineRight />
      </QuickBox>
      <QuickBox onClick={onLogOut}>
        <h3>로그아웃</h3>
        <AiOutlineRight />
      </QuickBox>

      <QuickBox onClick={onRemoveUser}>
        <h3
          style={{
            color: 'red',
          }}
        >
          회원탈퇴
        </h3>
        <AiOutlineRight />
      </QuickBox>
    </div>
  );
};

export default memo(QuickList);
