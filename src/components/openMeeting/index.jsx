import React, { useState } from 'react';
import { Input, Select, Button, Form, DatePicker } from 'antd';
import dayjs from 'dayjs';
import UploadImage from '../UploadImage';
import {
  getURLFromFullPath,
  removeFileFromStorage,
  uploadFile,
} from '../../services/storage';
import { addDocInCollection, modifyDoc } from '../../services/db';
import { useRouter } from 'next/router';

const { Option } = Select;
const { TextArea } = Input;

const categories = [
  '운동/스포츠',
  '외국/언어',
  '문화/공연',
  '악기',
  '봉사',
  '댄스',
  '사교',
  '자동차',
  '반려동물',
  '여행',
  '요리',
  '독서',
  '사진',
  '게임',
];
const location = ['서울', '부산', '대구', '울산', '대전', '광주'];
const OpenMetting = () => {
  const [room, setRoom] = useState();
  const [saveImage, setSaveImage] = useState('');
  const router = useRouter();

  const onFinish = async (values) => {
    const date = dayjs(values.dueDate._d).format('YYYY-MM-DD hh:mm');
    const { category, count, location, meetingGoal, meetingName } = values;

    const res = await addDocInCollection('group', {
      meetingName,
      meetingGoal,
      category,
      count,
      location,
      createAt: date,
      imageURL: saveImage,
    });
    alert('생성되었습니다!');
    router.back();
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onUpload = (file) => {
    uploadFile(`group/${file.name}`, file).then((snapshot) => {
      console.log(snapshot);
      getURLFromFullPath(snapshot.metadata.fullPath).then((path) => {
        console.log(path);
        setSaveImage(path);
      });
    });
  };

  const onRemove = (file) => {
    const { name } = file;
    removeFileFromStorage(`group/${file.name}`);
    console.log(file);
  };

  return (
    <>
      <UploadImage onUpload={onUpload} onRemove={onRemove} />
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
          name="dueDate"
          label="모집마감일자"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker onChange={onChange} />
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            모임 만들기
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default OpenMetting;
