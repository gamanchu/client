import React, { useEffect, useState } from 'react';
import { Avatar, Card, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useGroups } from '../../hooks/useGroups';
import { getCurrentUser } from '../../services/auth';

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
  const { data, refetch } = useGroups();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!data) return;
    data.forEach((d) => {
      if (d.apply) {
        const uids = d.apply.map((d) => d.id);
        if (uids.includes(getCurrentUser().uid)) {
          setChats((prev) => [...prev, d]);
        }
      }
    });
  }, [data]);

  // apply: (2) [{…}, {…}]
  // category: "여행"
  // dueDate: "2022-07-26"
  // id: "1VYwHgielfmbyHLVvuv5"
  // imageURL: "https://firebasestorage.googleapis.com/v0/b/gamanchu-b3e34.appspot.com/o/group%2Fvora.jpeg?alt=media&token=16e0b20b-e320-42c6-8440-9dc3f0018e1c"
  // location: "서울"
  // max: 10
  // meetingGoal: "저는 친구가없어요 보라카이좀 같이가봐요 제발!!!!!"
  // meetingName: "보라카이 가실분 ㅠㅜ"
  // msg:[
  // {
  //displayname:??,
  //text:???,
  // photoURL: ???
  // createAt : 2222-22-22
  // ]

  const onRouteDetail = (id) => {
    router.push(`/message/${id}`);
  };

  return (
    <>
      <Card style={{ border: 'none' }}>
        <List
          itemLayout="horizontal"
          dataSource={chats}
          renderItem={(chat) => (
            <List.Item
              extra={<p>{chat.dueDate}</p>}
              onClick={() => onRouteDetail(chat.id)}
            >
              <List.Item.Meta
                avatar={
                  <Avatar>
                    <UserOutlined />
                  </Avatar>
                }
                title={chat.meetingName}
                description={chat?.msg?.at(-1)?.text || '메세지가 없습니다'}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}

export default GroupChatList;
