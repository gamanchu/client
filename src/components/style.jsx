import styled from 'styled-components';

// export const CardBottom = styled.div`
//   padding: 5px 0;
//   display: flex;
//   align-items: center;
// `;

// export const DateText = styled.p`
//   margin-bottom: 0;
//   padding-left: 10px;
// `;

export const CardInfo = {
  display: 'flex',
  alignItems: 'center',
};

export const CardInfoSubTitle = {
  display: 'flex',
  alignItems: 'center',
  color: 'gray',
};

export const CardInfoText = {
  margin: '0',
  paddingLeft: '10px',
};

export const CardImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  maxHeight: '130px',
};

export const CardTitle = {
  padding: '0 5px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: 'bold',
};
