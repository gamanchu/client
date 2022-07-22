import React, { useState} from 'react';
import { Input,Select,Button,Form } from 'antd';

const { Option } = Select;
const { TextArea } = Input;


const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const categories = ['운동/스포츠', '외국/언어', '문화/공연','악기','봉사','댄스','사교','자동차','반려동물','여행','요리','독서','사진','게임'];
const location = ["서울","부산","대구","울산","대전","광주"]
const OpenMetting = () => {
  const [room,setRoom]=useState();
  
const onFinish = (values) => {
  console.log('Success:', values);
};
    return (
      <Form onFinish={onFinish}>
        <Form.Item
          name="meetingName"
          label="모임이름"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="모임이름" />
        </Form.Item>

        <Form.Item
          name="meetingGoal"
          label="모임목표"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="모임 목표를 설명해주세요"
            maxLength={200}
          />
        </Form.Item>

        <Form.Item
          name="location"
          label="지역선택"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="지역선택"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {location.map((location) => (
              <Option value={location} key={location}>
                {location}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="category"
          label="카테고리선택"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="카테고리선택"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <Option value={category} key={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="count"
          label="모집인원"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="모집인원"
            style={{
              width: 120,
            }}
          >
            <Option value="5">5</Option>
            <Option value="10">10</Option>
            <Option value="20">20</Option>
            <Option value="30">30</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 11,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            모임 만들기
          </Button>
        </Form.Item>
      </Form>
    );
};

export default OpenMetting;