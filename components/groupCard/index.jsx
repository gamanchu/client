import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import {
  CalendarOutlined,
  UserOutlined,
  CompassOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
import {
  CardInfo,
  CardInfoText,
  CardImage,
  CardTitle,
  CardInfoSubTitle,
} from '../../src/components/style';

function GroupCard({ image, title, location, date, limit, current }) {
  return (
    <>
      <Card
        bordered={false}
        bodyStyle={{ padding: '0', maxHeight: '130px' }}
        style={{ marginBottom: '20px' }}
        onClick={() => (window.location.href = `/`)}
      >
        <Row>
          <Col span={14} style={{ padding: '10px 0 10px 10px' }}>
            <h3 style={CardTitle}>{title}</h3>
            <div style={CardInfoSubTitle}>
              <CompassOutlined />
              <p style={CardInfoText}>{location}</p>
            </div>
            <div style={{ padding: '5px 0 0 0' }}>
              <div style={CardInfo}>
                <CalendarOutlined />
                <p style={CardInfoText}>{date}</p>
              </div>
              <div style={CardInfo}>
                <UserOutlined />
                <p style={CardInfoText}>
                  모집인원 {current} / {limit}
                </p>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <img style={CardImage} src={image} />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default GroupCard;
