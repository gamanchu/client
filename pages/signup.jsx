import React from 'react';
import { Button, Form, Input } from 'antd';
import { getCurrentUser, signUpUser } from '../src/services/auth';
import { addDocInCollection } from '../src/services/db';
import Link from 'next/link';
const SignUp = () => {
  const onFinish = async (values) => {
    const { email, password, passwordCheck, name } = values;
    if (password !== passwordCheck) {
      return alert('비밀번호가 일치하지 않습니다');
    }

    if (password.trim().length === 0) {
      return alert('공백 외 문자를 채워주세요');
    }

    const result = await signUpUser(email, password);
    if (result.result) {
      await addDocInCollection('users', {
        name,
        email,
        password,
        uid: result.user.uid,
        createAt: new Date(),
      });
      alert(result.message);
    } else {
      return alert(result.message);
    }
  };
  console.log(getCurrentUser());
  return (
    <div style={{ padding: '2em', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>회원가입</h1>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="이름"
          name="name"
          rules={[{ required: true, message: '이름을 입력해주세요' }]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item
          label="비밀번호 확인"
          name="passwordCheck"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{ justifyContent: 'center', marginBottom: '5px' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            회원가입
          </Button>
        </Form.Item>
        <Form.Item style={{ justifyContent: 'center' }}>
          <Link href={'/login'}>이미 회원이신가요?</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
