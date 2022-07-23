import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import GroupChat from './chat';
import MyGroupChat from './myChat';
import { useGroup } from '../../hooks/useGroup';
import { useRouter } from 'next/router';
import { useListen } from '../../hooks/useListen';
import { getCurrentUser } from '../../services/auth';
import { modifyDoc } from '../../services/db';
import { arrayUnion } from 'firebase/firestore';
import dayjs from 'dayjs';

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

// ]
function GroupChatDetail({}) {
  const onSearch = (value) => console.log(value);
  const router = useRouter();
  const { id } = router.query;
  const [data] = useListen('group', id);
  const [myChat, setMyChat] = useState('');
  console.log(data.msg);

  const onSubmitChat = () => {
    modifyDoc('group', id, {
      msg: arrayUnion({
        displayname: getCurrentUser().displayName,
        text: myChat,
        photoURL: getCurrentUser().photoURL,
        createAt: dayjs(new Date()).format('YYYY-MM-DD hh:mm'),
      }),
    });
    setMyChat('');
  };
  return (
    <>
      <div style={{ padding: '20px' }}>
        <div>
          {data?.msg?.map((d) => {
            if (d.displayname === getCurrentUser().displayName) {
              return (
                <MyGroupChat key={d.id} date={d.createAt} content={d.text} />
              );
            } else {
              return (
                <GroupChat
                  key={d.id}
                  avatar={d?.photoURL || ''}
                  date={d.createAt}
                  content={d.text}
                />
              );
            }
          })}
        </div>
      </div>
      <div
        style={{
          padding: '10px 5px',
          position: 'fixed',
          bottom: '68px',
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        <Row>
          <Col flex="auto">
            <Input
              placeholder="대화를 시작해 보세요"
              value={myChat}
              onChange={(e) => setMyChat(e.target.value)}
            />
          </Col>
          <Col>
            <Button
              type="primary"
              shape="round"
              icon={<ArrowUpOutlined />}
              style={{ marginLeft: '5px' }}
              onClick={onSubmitChat}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default GroupChatDetail;
