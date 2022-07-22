import React from 'react';
import { Button, Form, Input } from 'antd';
import { login } from '../src/services/auth';
import Link from 'next/link';

const LogIn = () => {
  const onFinish = (values) => {
    const { email, password } = values;
    login(email, password).catch((err) => {
      if (err.message === 'Firebase: Error (auth/wrong-password).') {
        return alert('비밀번호가 일치하지 않습니다');
      } else {
        return alert(err.message);
      }
    });
  };

  return (
    <div style={{ padding: '2em', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>로그인</h1>

      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="이메일"
          name="email"
          rules={[{ required: true, message: '이메일을 입력해주세요' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item style={{ justifyContent: 'center', marginBottom: '5px' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            로그인
          </Button>
        </Form.Item>
        <Form.Item style={{ justifyContent: 'center' }}>
          <Link href={'/signup'}>아직 회원이 아니신가요?</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LogIn;
