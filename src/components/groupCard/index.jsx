import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import {
  CalendarOutlined,
  UserOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import {
  CardInfo,
  CardInfoText,
  CardImage,
  CardTitle,
  CardInfoSubTitle,
} from './style';
const { Meta } = Card;
import { useRouter } from 'next/router';

function GroupCard({ data }) {
  const router = useRouter();
  return (
    <>
      <Card
        bordered={false}
        bodyStyle={{ padding: '0', maxHeight: '110px' }}
        style={{ marginBottom: '25px', maxWidth: '400px', margin: 'auto' }}
        onClick={() => router.push(`/group/${data.id}`)}
      >
        <Row>
          <Col span={14} style={{ padding: '10px 0 10px 10px' }}>
            <h3 style={CardTitle}>{data.title}</h3>
            <div style={CardInfoSubTitle}>
              <CompassOutlined />
              <p style={CardInfoText}>{data.location}</p>
            </div>
            <div style={{ padding: '5px 0 0 0' }}>
              <div style={CardInfo}>
                <CalendarOutlined />
                <p style={CardInfoText}>{data.date}</p>
              </div>
              <div style={CardInfo}>
                <UserOutlined />
                <p style={CardInfoText}>
                  모집인원 {data.current} / {data.limit}
                </p>
              </div>
            </div>
          </Col>
          <Col span={10} style={{ padding: '10px 0 10px 10px' }}>
            <img style={CardImage} src={data.image} />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default GroupCard;
