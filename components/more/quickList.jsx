import React,{memo} from 'react';
import {AiOutlineRight} from 'react-icons/ai';
import { MdBorderBottom } from 'react-icons/md';
import styled from 'styled-components';
import { QuickBox } from './style';

 

const QuickList = () => {
    return (
      <div>
        <QuickBox>
          <h3>회원정보수정</h3>
          <AiOutlineRight />
        </QuickBox>
        <QuickBox>
          <h3>내 모임</h3>
          <AiOutlineRight />
        </QuickBox>

        
        <QuickBox>
          <h3>로그아웃</h3>
          <AiOutlineRight />
        </QuickBox>

        <QuickBox>
          <h3 style={{
            color:'red'
          }}>회원탈퇴</h3>
          <AiOutlineRight />
        </QuickBox>
      </div>
    );
};


export default memo(QuickList);