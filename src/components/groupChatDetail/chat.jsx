import React, { useState, useEffect } from 'react';
import { Avatar, Col, Row, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { ChatBox } from './style';

function GroupChat({ avatar, content, date }) {
  const [isAvatar, setisAvatar] = useState(false);

  useEffect(() => {
    if (avatar == '0' || !avatar) {
      setisAvatar(false);
    } else {
      setisAvatar(true);
    }
  }, []);

  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        {isAvatar ? (
          <Typography style={{ display: 'block', marginBottom: '5px' }}>
            말하는 감자
          </Typography>
        ) : (
          ''
        )}
      </div>
      <Row style={{ flexWrap: 'nowrap' }}>
        <Col>
          {isAvatar ? (
            <Avatar>
              <UserOutlined />
            </Avatar>
          ) : (
            <Avatar style={{ visibility: 'hidden' }}>
              <UserOutlined />
            </Avatar>
          )}
        </Col>
        <Col>
          <Typography style={ChatBox}>{content}</Typography>
        </Col>
      </Row>
      <div>
        <Typography style={{ color: '#555', fontSize: '0.9em' }}>
          {date}
        </Typography>
      </div>
    </div>
  );
}
export default GroupChat;
