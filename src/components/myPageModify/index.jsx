import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Col, Input, Row, Typography, Upload } from 'antd';
import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import { getCurrentUser, updateUserProfile } from '../../services/auth';
import { useRouter } from 'next/router';
import { getURLFromFullPath, uploadFile } from '../../services/storage';

function MyPageModify() {
  const router = useRouter();
  const [file, setFile] = useState(getCurrentUser()?.photoURL);
  const [username, setUsername] = useState(getCurrentUser()?.displayName);
  const [email, setEmail] = useState('');

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));
    uploadFile(`user/${file.name}`, file).then((snapshot) => {
      getURLFromFullPath(snapshot.metadata.fullPath).then((path) => {
        updateUserProfile(username, path);
      });
    });
  }

  useEffect(() => {
    if (!getCurrentUser()?.displayName || !getCurrentUser()?.photoURL) {
      return;
    }
    setUsername(getCurrentUser().displayName);
    setEmail(getCurrentUser().email);
  }, []);

  const onSave = useCallback(() => {
    updateUserProfile(username).then((res) => {
      router.back();
    });
  }, [username, router]);

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
              src={file || getCurrentUser().photoURL}
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
          <Input
            placeholder="홍길동"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '30px' }}>
          <p>이메일</p>
          <Input placeholder="email" value={email} disabled />
        </div>
        <div style={{ marginTop: '30px' }}>
          <Row style={{ marginTop: '60px' }}>
            <Col span="17">
              <Button block type="primary" onClick={onSave}>
                저장하기
              </Button>
            </Col>
            <Col span="1"></Col>
            <Col span="6">
              <Button block onClick={() => router.back()}>
                취소
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default MyPageModify;
