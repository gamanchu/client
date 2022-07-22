import React from 'react';
import { Avatar, Card, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const data = [
  {
    id: 1,
    title: 'Ant Design Title 1',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
  },
];

function GroupChatList({}) {
  const router = useRouter();

  const onRouteDetail = (id) => {
    router.push(`/message/${id}`);
  };

  return (
    <>
      <Card style={{ border: 'none' }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              extra={<p>07/22</p>}
              onClick={() => onRouteDetail(item.id)}
            >
              <List.Item.Meta
                avatar={
                  <Avatar>
                    <UserOutlined />
                  </Avatar>
                }
                title={item.title}
                description="메세지 요약"
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}

export default GroupChatList;
