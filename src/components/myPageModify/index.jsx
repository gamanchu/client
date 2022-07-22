import React, { useState } from 'react';
import { Button, Card, Col, Input, Row, Typography, Upload } from 'antd';
import { CameraOutlined, UserOutlined } from '@ant-design/icons';

function MyPageModify({}) {
  const [file, setFile] = useState();

  function handleFileChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div style={{ paddingTop: '20px' }}>
        <div style={{ position: 'relative' }}>
          {file ? (
            <img
              id="profile"
              style={{
                width: '40vw',
                height: '40vw',
                maxWidth: '200px',
                maxHeight: '200px',
                margin: '0 auto',
                display: 'block',
                borderRadius: '50%',
                filter: 'brightness(0.7)',
                objectFit: 'cover',
              }}
              src={file}
            />
          ) : (
            <div
              style={{
                width: '40vw',
                height: '40vw',
                maxWidth: '200px',
                maxHeight: '200px',
                margin: '0 auto',
                display: 'block',
                backgroundColor: '#a7a7a7',
                borderRadius: '50%',
              }}
            ></div>
          )}
          <label
            style={{
              color: '#ffffffbf',
              width: '40vw',
              height: '40vw',
              maxWidth: '200px',
              maxHeight: '200px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
            }}
          >
            <CameraOutlined
              style={{
                fontSize: '4em',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <div style={{ marginTop: '30px' }}>
          <p>이름</p>
          <Input placeholder="홍길동" />
        </div>
        <div style={{ marginTop: '30px' }}>
          <p>이메일</p>
          <Row>
            <Col span="11">
              <Input placeholder="홍길동" />
            </Col>
            <Col span="2" style={{ textAlign: 'center' }}>
              <p>@</p>
            </Col>
            <Col span="11">
              <Input placeholder="홍길동" />
            </Col>
          </Row>

          <Row style={{ marginTop: '60px' }}>
            <Col span="17">
              <Button block type="primary">
                가입하기
              </Button>
            </Col>
            <Col span="1"></Col>
            <Col span="6">
              <Button block>취소</Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default MyPageModify;
