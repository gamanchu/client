import React from 'react';
import { Col, Row } from 'antd';
import { MdOutlineLocalAirport } from 'react-icons/md';
import Link from 'next/link';
import styled from 'styled-components';

const SelectedCategories = (data) => {

    return (
      <SelectedCategoriesBox
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding:'10px 0'
        }}
      >
        <Row
          justify="start"
          style={{

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Col
            style={{
              backgroundColor: 'purple',
              borderRadius: '25px',
              width: '48px',
              height: '48px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <MdOutlineLocalAirport size={20} />
          </Col>
        </Row>

        <Link href="/More/:id">
          <a
            style={{
              fontSize: '0.8em',
            }}
          >
            편집
          </a>
        </Link>
      </SelectedCategoriesBox>
    );
};

const SelectedCategoriesBox = styled.div`
  display:flex;
  justify-contents:space-between;
  align-items:center;
  padding:10px 0;
`;
export default SelectedCategories;