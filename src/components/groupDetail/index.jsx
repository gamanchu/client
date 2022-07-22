import React from 'react';
import { Button, Card, Col, Row, Avatar, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

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

function GroupDetail({}) {
  return (
    <>
      <Card
        bordered={false}
        cover={
          <img
            style={{ maxHeight: '250px', objectFit: 'cover' }}
            alt="example"
            src="https://img.samsungsemiconstory.com/kr/wp-content/uploads/2021/06/running_trend_20170524_02.jpg"
          />
        }
      >
        <h2>퇴근 후 러닝 함께 해요~~</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div>
          <Row>
            <Col span={6}>
              <h4>현재 인원</h4>
              <p>0 / 5</p>
            </Col>
            <Col span={12}>
              <h4>모임 날짜</h4>
              <p>2022-08-12</p>
            </Col>
          </Row>
        </div>
        <Button block type="primary">
          신청하기
        </Button>
      </Card>
      <Card title="현재 인원 (0명)" bordered={false}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar>
                    <UserOutlined />
                  </Avatar>
                }
                title={item.title}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}

export default GroupDetail;
