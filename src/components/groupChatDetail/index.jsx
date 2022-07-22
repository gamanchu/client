import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import GroupChat from './chat';
import MyGroupChat from './myChat';

function GroupChatDetail({}) {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div style={{ padding: '10px' }}>
        <div>
          <GroupChat avatar={'1'} date={'07.23 18:30'} content={'Hello'} />
          <MyGroupChat date={'07.23 18:30'} content={'Where R U?'} />
          <GroupChat
            avatar={'1'}
            date={'07.23 18:30'}
            content={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
          />
          <GroupChat avatar={'0'} date={'07.23 18:30'} content={'Hello'} />
          <MyGroupChat
            date={'07.23 18:30'}
            content={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, '
            }
          />
          <MyGroupChat date={'07.23 18:30'} content={'Where R U?'} />
          <GroupChat avatar={'1'} date={'07.23 18:30'} content={'Hello'} />
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
            <Input placeholder="대화를 시작해 보세요" />
          </Col>
          <Col>
            <Button
              type="primary"
              shape="round"
              icon={<ArrowUpOutlined />}
              style={{ marginLeft: '5px' }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default GroupChatDetail;
