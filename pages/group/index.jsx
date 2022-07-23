import React, { useState } from 'react';
import GroupCardList from '../../src/components/groupCardList';
import { Input } from 'antd';
const { Search } = Input;

const Index = () => {
  const [word, setWord] = useState('');
  const [isEnter, setIsEnter] = useState(false);
  const onChange = (e) => {
    setWord(e.target.value);
  };

  const onClick = () => {
    setIsEnter(true);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onChange={onChange}
        onPressEnter={onClick}
      />
      <GroupCardList isEnter={isEnter} word={word} />
    </div>
  );
};

export default Index;
