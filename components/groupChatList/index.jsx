import React from 'react';
import { Avatar, Card, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function GroupChatList({}) {
  return (
    <>
      <Card style={{ border: 'none' }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item extra={<p>07/22</p>}>
              <List.Item.Meta
                avatar={
                  <Avatar>
                    <UserOutlined />
                  </Avatar>
                }
                title={<a href="https://ant.design">{item.title}</a>}
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
