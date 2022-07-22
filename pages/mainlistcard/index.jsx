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

function MainListCard({ image, uid }) {
  const imgUrl =
    'https://www.gyeongju.go.kr/upload/content/thumb/20200625/D2B1B07FDDAE42639D179009999E5017.jpg';

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
            <h3 style={CardTitle}>경주월드... 좋아하시나요!!?</h3>
            <div style={CardInfoSubTitle}>
              <CompassOutlined />
              <p style={CardInfoText}>경상북도 경주시</p>
            </div>
            <div style={{ padding: '5px 0 0 0' }}>
              <div style={CardInfo}>
                <CalendarOutlined />
                <p style={CardInfoText}>2022.07.22</p>
              </div>
              <div style={CardInfo}>
                <UserOutlined />
                <p style={CardInfoText}>모집인원 2 / 8</p>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <img style={CardImage} src={imgUrl} />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default MainListCard;
