import { useEffect, memo } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { getCurrentUser } from '../../services/auth';

// user 파라미터는 사용자의 데이터를 가진 json
const ProfileBar = () => {
  console.log(getCurrentUser());
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <Row>
        <Col>
          <img
            src={getCurrentUser()?.photoURL}
            alt=""
            style={{
              width: '50px',
              height: '50px',
              marginRight: '5px',
              borderRadius: '5px',
            }}
          />
        </Col>
        <Col>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span
                style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                }}
              >
                {getCurrentUser()?.displayName || '이름을 업데이트해보세요!'}
              </span>
              <span
                style={{
                  fontSize: '0.8em',
                  opacity: '0.7',
                }}
              >
                {getCurrentUser()?.email}
              </span>
            </div>
          </Row>
          <Row
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <GrLocation />
            <span
              style={{
                marginLeft: '10px',
                fontSize: '0.9em',
              }}
            >
              대한민국
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default memo(ProfileBar);
