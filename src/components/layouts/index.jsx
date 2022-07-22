import React, { useEffect, useState } from 'react';
import { PageHeader } from 'antd';
import { useRouter } from 'next/router';
import {
  HomeOutlined,
  SearchOutlined,
  EllipsisOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const titleTable = {
  '/': '홈',
  '/group': '모임 검색',
  '/message': '메세지',
  '/myPage': '마이 페이지',
};

const Layout = ({ children }) => {
  const [title, setTitle] = useState('');
  const [showLayout, setShowLayout] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setShowLayout(true);
    setTitle(titleTable[router.pathname]);

    if (router.pathname === '/login' || router.pathname === '/signup') {
      setShowLayout(false);
    } else if (/\/group\/./.test(router.pathname)) {
      setShowLayout(true);
      setTitle('모집일정 상세');
    } else if (/\/message\/./.test(router.pathname)) {
      setShowLayout(true);
      setTitle('채팅방');
    }
  }, [router]);

  return (
    <div className="gamanchu-wrapper">
      {showLayout ? (
        <>
          <header className="gamanchu-header">
            <PageHeader className="site-page-header" title={title} />
          </header>
          <div className="gamanchu-content">{children}</div>
          <footer className="gamanchu-footer">
            <HomeOutlined
              style={{ color: title === '홈' ? '#3FA9FF' : null }}
              onClick={() => router.push('/')}
            />
            <SearchOutlined
              style={{ color: title === '모임 검색' ? '#3FA9FF' : null }}
              onClick={() => router.push('/group')}
            />
            <MessageOutlined
              style={{ color: title === '메세지' ? '#3FA9FF' : null }}
              onClick={() => router.push('/message')}
            />
            <EllipsisOutlined
              style={{ color: title === '마이 페이지' ? '#3FA9FF' : null }}
              onClick={() => router.push('/myPage')}
            />
          </footer>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Layout;
