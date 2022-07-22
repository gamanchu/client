import React, { useState } from 'react';
import GroupCard from '../groupCard';

const GroupCardList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        'https://www.gyeongju.go.kr/upload/content/thumb/20200625/D2B1B07FDDAE42639D179009999E5017.jpg',
      title: '경주월드... 좋아하시나요!!?',
      location: '경상북도 경주시',
      date: '2022-07-22',
      limit: '10',
      current: '1',
    },
    {
      id: 2,
      image:
        'https://www.gyeongju.go.kr/upload/content/thumb/20200625/D2B1B07FDDAE42639D179009999E5017.jpg',
      title: '경주월드... 좋아하시나요!!?',
      location: '경상북도 경주시',
      date: '2022-07-22',
      limit: '10',
      current: '1',
    },
    {
      id: 3,
      image:
        'https://www.gyeongju.go.kr/upload/content/thumb/20200625/D2B1B07FDDAE42639D179009999E5017.jpg',
      title: '경주월드... 좋아하시나요!!?',
      location: '경상북도 경주시',
      date: '2022-07-22',
      limit: '10',
      current: '1',
    },
    {
      id: 4,
      image:
        'https://www.gyeongju.go.kr/upload/content/thumb/20200625/D2B1B07FDDAE42639D179009999E5017.jpg',
      title: '경주월드... 좋아하시나요!!?',
      location: '경상북도 경주시',
      date: '2022-07-22',
      limit: '10',
      current: '1',
    },
  ]);
  return (
    <div>
      {data.map((d) => (
        <GroupCard key={d.id} data={d} />
      ))}
    </div>
  );
};

export default GroupCardList;
