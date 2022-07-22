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
  '/group': '소모임',
  '/message': '메세지',
  '/myPage': '마이페이지',
};

const Layout = ({ children }) => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    setTitle(titleTable[router.pathname]);
  }, [router]);

  return (
    <div className="gamanchu-wrapper">
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
          style={{ color: title === '소모임' ? '#3FA9FF' : null }}
          onClick={() => router.push('/group')}
        />
        <MessageOutlined
          style={{ color: title === '메세지' ? '#3FA9FF' : null }}
          onClick={() => router.push('/message')}
        />
        <EllipsisOutlined
          style={{ color: title === '마이페이지' ? '#3FA9FF' : null }}
          onClick={() => router.push('/myPage')}
        />
      </footer>
    </div>
  );
};

export default Layout;