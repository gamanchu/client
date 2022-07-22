import { useEffect, memo } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { getCurrentUser } from '../../services/auth';

// user 파라미터는 사용자의 데이터를 가진 json
const ProfileBar = () => {
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
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            borderRadius: '25px',
            marginRight: '10px',
            width: '48px',
            height: '48px',
          }}
        >
          <MdPersonOutline size={30} />
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
