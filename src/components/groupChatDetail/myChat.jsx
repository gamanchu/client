import { Col, Row, Typography } from 'antd';

import { MyChatBox } from './style';

function MyGroupChat({ content, date }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Row style={{ flexDirection: 'row-reverse' }}>
        <Col></Col>
        <Col>
          <Typography style={MyChatBox}>{content}</Typography>
        </Col>
      </Row>
      <Typography
        style={{ color: '#555', fontSize: '0.9em', textAlign: 'end' }}
      >
        {date}
      </Typography>
    </div>
  );
}
export default MyGroupChat;
