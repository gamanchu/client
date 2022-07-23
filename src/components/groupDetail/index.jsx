import React, { useCallback } from 'react';
import { Button, Card, Col, Row, Avatar, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useGroup } from '../../hooks/useGroup';
import { useRouter } from 'next/router';
import { modifyDoc } from '../../services/db';
import { arrayUnion } from 'firebase/firestore';
import { getCurrentUser } from '../../services/auth';
const { Meta } = Card;

function GroupDetail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  const { data, refetch } = useGroup(id);

  const onApply = useCallback(async () => {
    await modifyDoc('group', id, {
      apply: arrayUnion({
        id: getCurrentUser().uid,
        name: getCurrentUser().displayName,
        photoURL: getCurrentUser().photoURL || '',
      }),
    });

    await refetch();
  }, [id]);

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Card
        bordered={false}
        cover={
          <img
            style={{ maxHeight: '250px', objectFit: 'cover' }}
            alt="example"
            src={data.imageURL}
          />
        }
      >
        <h2>{data.meetingName}</h2>
        <p>{data.meetingGoal}</p>
        <div>
          <Row>
            <Col span={6}>
              <h4>현재 인원</h4>
              <p>
                {data.apply.length || 0} / {data.max}
              </p>
            </Col>
            <Col span={12}>
              <h4>모임 날짜</h4>
              <p>{data.dueDate}</p>
            </Col>
          </Row>
        </div>
        <Button block type="primary" onClick={onApply}>
          신청하기
        </Button>
      </Card>
      <Card title={`현재 인원 (${data.apply.length || 0}명)`} bordered={false}>
        <List
          itemLayout="horizontal"
          dataSource={data.apply || []}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.photoURL ? item.photoURL : null} />}
                title={item.name}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}

export default GroupDetail;
